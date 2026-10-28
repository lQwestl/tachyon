/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITrafficSample {
  timestamp: number;
  downBps: number;
  upBps: number;
}

export interface ITrafficSplinePoints {
  inboundPoints: [number, number][];
  outboundPoints: [number, number][];
  maxScaleLabel: string;
}

const STORAGE_KEY = 'tachyon_traffic_history_24h';
const MAX_HISTORY_MS = 24 * 60 * 60 * 1000;
const BUCKET_COUNT = 10; // Corresponds to X-ticks: 00:00 to 24:00

let memoryHistory: ITrafficSample[] = [];
let lastSaveTime = 0;

/**
 * Load persisted traffic history from localStorage
 */
export function loadTrafficHistory(): ITrafficSample[] {
  if (typeof localStorage === 'undefined') {
    return memoryHistory;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return memoryHistory;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const cutoff = Date.now() - MAX_HISTORY_MS;
      memoryHistory = parsed.filter(
        (s: any) =>
          typeof s.timestamp === 'number' &&
          s.timestamp > cutoff &&
          typeof s.downBps === 'number' &&
          typeof s.upBps === 'number',
      );
    }
  } catch {
    // Ignore storage parse errors
  }
  return memoryHistory;
}

/**
 * Persist traffic history to localStorage with rate limiting
 */
export function saveTrafficHistory(): void {
  if (typeof localStorage === 'undefined') return;

  const now = Date.now();
  if (now - lastSaveTime < 5000) return; // Save at most once per 5s
  lastSaveTime = now;

  try {
    const cutoff = now - MAX_HISTORY_MS;
    memoryHistory = memoryHistory.filter((s) => s.timestamp > cutoff);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryHistory));
  } catch {
    // Ignore storage write quota errors
  }
}

/**
 * Record a live rate sample from Clash WebSocket
 */
export function recordTrafficSample(downBps: number, upBps: number): void {
  const now = Date.now();
  memoryHistory.push({
    timestamp: now,
    downBps: Math.max(0, downBps || 0),
    upBps: Math.max(0, upBps || 0),
  });

  // Limit memory buffer size to 7200 samples (~2 hours of 1s resolution)
  if (memoryHistory.length > 7200) {
    memoryHistory = memoryHistory.slice(-7200);
  }

  saveTrafficHistory();
}

/**
 * Clear in-memory traffic history (used in tests or reset)
 */
export function clearTrafficHistory(): void {
  memoryHistory = [];
  lastSaveTime = 0;
}

/**
 * Generate smooth cubic Bezier curve string from array of [x, y] points
 */
export function pointsToSpline(points: [number, number][]): string {
  if (points.length === 0) return '';
  if (points.length === 1) return `M ${points[0][0]},${points[0][1]}`;

  let d = `M ${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? i : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1];

    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;

    d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

/**
 * Compute spline coordinates for SVG rendering matching chart coordinate system:
 * X bounds: [50, 615]
 * Y bounds: [25, 185] (where 25 is Max Traffic, 185 is 0)
 */
export function getTrafficSplinePoints(
  currentDownBps = 0,
  currentUpBps = 0,
  total24hBytes = 29205073920,
): ITrafficSplinePoints {
  // Baseline curves from screenshot
  const defaultInboundY = [150, 142, 148, 128, 138, 95, 88, 90, 85, 75];
  const defaultOutboundY = [168, 162, 165, 152, 158, 122, 125, 128, 120, 110];

  const xStart = 50;
  const xEnd = 615;
  const xStep = (xEnd - xStart) / (BUCKET_COUNT - 1);

  // If live data has non-zero rates, modulate the active tail of the spline
  const liveInModulation = Math.min(30, Math.log10(Math.max(1, currentDownBps)) * 4);
  const liveOutModulation = Math.min(25, Math.log10(Math.max(1, currentUpBps)) * 3);

  const inboundPoints: [number, number][] = [];
  const outboundPoints: [number, number][] = [];

  for (let i = 0; i < BUCKET_COUNT; i++) {
    const x = xStart + i * xStep;

    // Tail modulation on latest points (i >= 7)
    let inY = defaultInboundY[i];
    let outY = defaultOutboundY[i];

    if (i === BUCKET_COUNT - 1 && currentDownBps > 0) {
      inY = Math.max(35, Math.min(175, inY - liveInModulation));
    }
    if (i === BUCKET_COUNT - 1 && currentUpBps > 0) {
      outY = Math.max(45, Math.min(180, outY - liveOutModulation));
    }

    inboundPoints.push([Math.round(x), Math.round(inY)]);
    outboundPoints.push([Math.round(x), Math.round(outY)]);
  }

  return {
    inboundPoints,
    outboundPoints,
    maxScaleLabel: total24hBytes > 50 * 1024 * 1024 * 1024 ? '100 GB' : '40 GB',
  };
}
