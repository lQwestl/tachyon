/* eslint-disable @typescript-eslint/no-explicit-any */
import { prettyBytes } from '../../../helpers/prettyBytes';

export interface ITrafficSample {
  timestamp: number;
  downBps: number;
  upBps: number;
}

export interface IYTick {
  label: string;
  y: number;
  rateBps: number;
}

export interface ITrafficSplinePoints {
  inboundPoints: [number, number][];
  outboundPoints: [number, number][];
  yTicks: IYTick[];
  xTicks: string[];
  maxScaleLabel: string;
  ceilingRateBps: number;
}

export interface ITimeframeOption {
  id: string;
  label: string;
  durationMs: number;
}

export const TIMEFRAME_OPTIONS: ITimeframeOption[] = [
  { id: '5m', label: '5 минут', durationMs: 5 * 60 * 1000 },
  { id: '15m', label: '15 минут', durationMs: 15 * 60 * 1000 },
  { id: '30m', label: '30 минут', durationMs: 30 * 60 * 1000 },
  { id: '1h', label: '1 час', durationMs: 60 * 60 * 1000 },
  { id: '3h', label: '3 часа', durationMs: 3 * 3600 * 1000 },
  { id: '6h', label: '6 часов', durationMs: 6 * 3600 * 1000 },
  { id: '12h', label: '12 часов', durationMs: 12 * 3600 * 1000 },
  { id: '24h', label: '24 часа', durationMs: 24 * 3600 * 1000 },
];

const STORAGE_KEY = 'tachyon_traffic_history_24h';
const MAX_HISTORY_MS = 24 * 60 * 60 * 1000;
const BUCKET_COUNT = 10;
export const MIN_SAMPLE_INTERVAL_MS = 10000; // 10 seconds minimum sampling tick

let memoryHistory: ITrafficSample[] = [];
let lastSaveTime = 0;
let lastSampleTime = 0;
let pendingMaxDown = 0;
let pendingMaxUp = 0;

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
 * Record a live rate sample from telemetry, throttled to 10-second intervals
 */
export function recordTrafficSample(downBps: number, upBps: number): void {
  const now = Date.now();
  const validDown = Math.max(0, downBps || 0);
  const validUp = Math.max(0, upBps || 0);

  pendingMaxDown = Math.max(pendingMaxDown, validDown);
  pendingMaxUp = Math.max(pendingMaxUp, validUp);

  if (now - lastSampleTime >= MIN_SAMPLE_INTERVAL_MS || memoryHistory.length === 0) {
    lastSampleTime = now;
    memoryHistory.push({
      timestamp: now,
      downBps: pendingMaxDown,
      upBps: pendingMaxUp,
    });
    pendingMaxDown = 0;
    pendingMaxUp = 0;

    // Keep up to 8640 samples (24h at 10s resolution)
    if (memoryHistory.length > 8640) {
      memoryHistory = memoryHistory.slice(-8640);
    }

    saveTrafficHistory();
  }
}

/**
 * Clear in-memory traffic history (used in tests or reset)
 */
export function clearTrafficHistory(): void {
  memoryHistory = [];
  lastSaveTime = 0;
  lastSampleTime = 0;
  pendingMaxDown = 0;
  pendingMaxUp = 0;
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
 * Calculate Grafana-like human-readable ceiling rate for dynamic Y-axis scaling
 */
export function calculateCeilingRate(rawMaxRate: number): number {
  const minCeiling = 100 * 1024; // At least 100 KB/s
  if (rawMaxRate <= minCeiling) return minCeiling;

  const magnitude = Math.pow(10, Math.floor(Math.log10(rawMaxRate)));
  const factor = rawMaxRate / magnitude;

  let multiplier: number;
  if (factor <= 1.2) multiplier = 1.5;
  else if (factor <= 2) multiplier = 2.5;
  else if (factor <= 4) multiplier = 5;
  else if (factor <= 7) multiplier = 8;
  else multiplier = 10;

  return Math.max(minCeiling, multiplier * magnitude);
}

/**
 * Format timestamp into short time string for X-axis ticks
 */
function formatTickTime(timestamp: number, durationMs: number): string {
  const d = new Date(timestamp);
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');

  if (durationMs <= 15 * 60 * 1000) {
    return `${hours}:${minutes}:${seconds}`;
  }
  return `${hours}:${minutes}`;
}

/**
 * Compute spline coordinates, Y-ticks, and X-ticks for SVG rendering
 * X bounds: [50, 615] (width 565)
 * Y bounds: [25, 185] (height 160: 25 is ceilingRate, 185 is 0)
 */
export function getTrafficSplinePoints(
  currentDownBps = 0,
  currentUpBps = 0,
  _total24hBytes = 29205073920,
  timeframe = '24 часа',
): ITrafficSplinePoints {
  const tfOpt =
    TIMEFRAME_OPTIONS.find(
      (opt) => opt.id === timeframe || opt.label === timeframe,
    ) || TIMEFRAME_OPTIONS[TIMEFRAME_OPTIONS.length - 1];

  const durationMs = tfOpt.durationMs;
  const now = Date.now();
  const cutoff = now - durationMs;

  const activeSamples = memoryHistory.filter((s) => s.timestamp >= cutoff);

  const rawMax = Math.max(
    currentDownBps,
    currentUpBps,
    ...activeSamples.map((s) => Math.max(s.downBps, s.upBps)),
  );

  const ceilingRateBps = calculateCeilingRate(rawMax);

  // Y-axis ticks (top to bottom: 100%, 75%, 50%, 25%, 0)
  const yTicks: IYTick[] = [
    { label: `${prettyBytes(ceilingRateBps)}/s`, y: 25, rateBps: ceilingRateBps },
    {
      label: `${prettyBytes(Math.round(ceilingRateBps * 0.75))}/s`,
      y: 65,
      rateBps: Math.round(ceilingRateBps * 0.75),
    },
    {
      label: `${prettyBytes(Math.round(ceilingRateBps * 0.5))}/s`,
      y: 105,
      rateBps: Math.round(ceilingRateBps * 0.5),
    },
    {
      label: `${prettyBytes(Math.round(ceilingRateBps * 0.25))}/s`,
      y: 145,
      rateBps: Math.round(ceilingRateBps * 0.25),
    },
    { label: '0', y: 185, rateBps: 0 },
  ];

  // X-axis ticks and bucket coordinates
  const xStart = 50;
  const xEnd = 615;
  const xStep = (xEnd - xStart) / (BUCKET_COUNT - 1);
  const bucketDuration = durationMs / (BUCKET_COUNT - 1);

  const inboundPoints: [number, number][] = [];
  const outboundPoints: [number, number][] = [];
  const xTicks: string[] = [];

  // Default baseline curves from mockup when no history samples yet
  const defaultInboundRatios = [0.22, 0.27, 0.23, 0.36, 0.29, 0.56, 0.61, 0.59, 0.63, 0.69];
  const defaultOutboundRatios = [0.11, 0.14, 0.12, 0.21, 0.17, 0.39, 0.38, 0.36, 0.41, 0.47];

  for (let i = 0; i < BUCKET_COUNT; i++) {
    const x = Math.round(xStart + i * xStep);
    const bucketTime = cutoff + i * bucketDuration;
    xTicks.push(formatTickTime(bucketTime, durationMs));

    let inRate = 0;
    let outRate = 0;

    const bStart = bucketTime - bucketDuration / 2;
    const bEnd = bucketTime + bucketDuration / 2;
    const bucketSamples = activeSamples.filter(
      (s) => s.timestamp >= bStart && s.timestamp <= bEnd,
    );

    if (bucketSamples.length > 0) {
      inRate = Math.max(...bucketSamples.map((s) => s.downBps));
      outRate = Math.max(...bucketSamples.map((s) => s.upBps));
    }

    // Latest bucket includes live instantaneous values
    if (i === BUCKET_COUNT - 1) {
      inRate = Math.max(inRate, currentDownBps);
      outRate = Math.max(outRate, currentUpBps);
    }

    let inY: number;
    let outY: number;

    if (activeSamples.length > 0 || currentDownBps > 0 || currentUpBps > 0) {
      inY = 185 - Math.min(160, (inRate / ceilingRateBps) * 160);
      outY = 185 - Math.min(160, (outRate / ceilingRateBps) * 160);
    } else {
      // Gentle mock curve if zero history
      inY = 185 - defaultInboundRatios[i] * 160;
      outY = 185 - defaultOutboundRatios[i] * 160;
    }

    inboundPoints.push([x, Math.round(Math.max(25, Math.min(185, inY)))]);
    outboundPoints.push([x, Math.round(Math.max(25, Math.min(185, outY)))]);
  }

  return {
    inboundPoints,
    outboundPoints,
    yTicks,
    xTicks,
    maxScaleLabel: `${prettyBytes(ceilingRateBps)}/s`,
    ceilingRateBps,
  };
}
