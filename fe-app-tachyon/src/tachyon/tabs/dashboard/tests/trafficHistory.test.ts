/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import {
  pointsToSpline,
  recordTrafficSample,
  getTrafficSplinePoints,
  loadTrafficHistory,
  clearTrafficHistory,
} from '../trafficHistory';

let getNodeTrafficBytes: any;
let computeNodeQuotaText: any;

describe('trafficHistory & telemetry sync', () => {
  beforeAll(async () => {
    class MockMutationObserver {
      observe() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    }
    (globalThis as any).MutationObserver = MockMutationObserver;

    (globalThis as any).document = {
      body: {} as any,
      createElement: () => ({}) as any,
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
    };

    const mod = await import('../initController');
    getNodeTrafficBytes = mod.getNodeTrafficBytes;
    computeNodeQuotaText = mod.computeNodeQuotaText;
  });

  beforeEach(() => {
    clearTrafficHistory();
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
  });

  describe('pointsToSpline', () => {
    it('handles empty points array gracefully', () => {
      expect(pointsToSpline([])).toBe('');
    });

    it('handles single point array', () => {
      expect(pointsToSpline([[50, 100]])).toBe('M 50,100');
    });

    it('handles two points with a curve', () => {
      const spline = pointsToSpline([[0, 100], [100, 50]]);
      expect(spline.startsWith('M 0,100 C')).toBe(true);
    });

    it('generates cubic Bezier curves for three or more points', () => {
      const points: Array<[number, number]> = [
        [0, 120],
        [50, 80],
        [100, 40],
        [150, 90],
      ];
      const spline = pointsToSpline(points);
      expect(spline.startsWith('M 0,120 C')).toBe(true);
      expect(spline).toContain('C');
    });
  });

  describe('recordTrafficSample and getTrafficSplinePoints', () => {
    it('records samples and returns SVG spline points bounded to coordinates', () => {
      for (let i = 0; i < 10; i++) {
        recordTrafficSample(1024 * (i + 1), 512 * (i + 1));
      }

      const { inboundPoints, outboundPoints, maxScaleLabel } = getTrafficSplinePoints(
        10240,
        5120,
        29205073920,
      );

      expect(inboundPoints.length).toBe(10);
      expect(outboundPoints.length).toBe(10);
      expect(maxScaleLabel).toBeDefined();

      const inSpline = pointsToSpline(inboundPoints);
      const outSpline = pointsToSpline(outboundPoints);
      expect(inSpline.startsWith('M')).toBe(true);
      expect(inSpline).toContain('C');
      expect(outSpline.startsWith('M')).toBe(true);
      expect(outSpline).toContain('C');
    });
  });

  describe('loadTrafficHistory persistence', () => {
    it('loads previously stored history from localStorage', () => {
      const now = Date.now();
      const sample = [
        { timestamp: now - 10000, downBps: 5000, upBps: 2000 },
        { timestamp: now - 5000, downBps: 7000, upBps: 3000 },
      ];
      localStorage.setItem('tachyon_traffic_history_24h', JSON.stringify(sample));

      const loaded = loadTrafficHistory();
      expect(loaded.length).toBe(2);
      expect(loaded[0].downBps).toBe(5000);
      expect(loaded[1].upBps).toBe(3000);
    });

    it('handles corrupt localStorage safely without throwing', () => {
      localStorage.setItem('tachyon_traffic_history_24h', 'invalid json {{{');
      const loaded = loadTrafficHistory();
      expect(Array.isArray(loaded)).toBe(true);
    });
  });

  describe('getNodeTrafficBytes', () => {
    it('sums upload and download bytes for matching node code or name in connection chains', () => {
      const rawConns = [
        {
          chains: ['Proxy-Section', 'node-germany'],
          upload: 1000,
          download: 4000,
        },
        {
          chains: ['Proxy-Section', 'node-sweden'],
          upload: 2000,
          download: 3000,
        },
        {
          chains: ['Proxy-Section', 'Germany (MEGA)'],
          upload: 500,
          download: 1500,
        },
      ];

      const bytesGermany = getNodeTrafficBytes('node-germany', 'Germany (MEGA)', rawConns);
      expect(bytesGermany).toBe(7000);

      const bytesSweden = getNodeTrafficBytes('node-sweden', 'Sweden', rawConns);
      expect(bytesSweden).toBe(5000);

      const bytesEstonia = getNodeTrafficBytes('node-estonia', 'Estonia', rawConns);
      expect(bytesEstonia).toBe(0);
    });
  });

  describe('computeNodeQuotaText', () => {
    it('returns formatted X GB / Y GB when provider subscription quota is configured', () => {
      const sections = [
        {
          outbounds: [{ code: 'node-de', displayName: 'Германия (MEGA)' } as any],
          subscriptionMetadata: [
            {
              upload: 1073741824, // 1 GB
              download: 2147483648, // 2 GB
              total: 10737418240, // 10 GB
            },
          ],
        },
      ];

      const quota = computeNodeQuotaText('node-de', 'Германия (MEGA)', sections, []);
      expect(quota).toContain('/');
      expect(quota).toContain('GB');
    });

    it('returns real traffic прокачано / used when router connections passed through this node', () => {
      const sections = [
        {
          outbounds: [{ code: 'node-nl', displayName: 'Нидерланды' } as any],
        },
      ];
      const rawConns = [
        {
          chains: ['node-nl'],
          upload: 500000000,
          download: 500000000,
        },
      ];

      const quota = computeNodeQuotaText('node-nl', 'Нидерланды', sections, rawConns);
      expect(quota.includes('прокачано') || quota.includes('used')).toBe(true);
    });

    it('returns Безлимит / Unlimited when no subscription quota and zero connection traffic', () => {
      const sections = [
        {
          outbounds: [{ code: 'node-se', displayName: 'Швеция' } as any],
        },
      ];

      const quota = computeNodeQuotaText('node-se', 'Швеция', sections, []);
      expect(quota === 'Безлимит' || quota === 'Unlimited').toBe(true);
    });
  });
});
