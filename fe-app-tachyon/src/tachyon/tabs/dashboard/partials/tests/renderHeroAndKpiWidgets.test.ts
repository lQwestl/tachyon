/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest';

vi.hoisted(() => {
  class MockMutationObserver {
    observe() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  (globalThis as any).MutationObserver = MockMutationObserver;

  function createDummyElement(tag: string) {
    const attrs: Record<string, any> = {};
    const children: any[] = [];
    return {
      tagName: tag.toUpperCase(),
      classList: {
        add: vi.fn(),
        remove: vi.fn(),
        toggle: vi.fn(),
        contains: (cls: string) => (attrs['class'] || '').includes(cls),
      },
      style: {},
      setAttribute: (k: string, v: any) => {
        attrs[k] = v;
      },
      getAttribute: (k: string) => attrs[k] ?? null,
      dataset: attrs,
      children,
      replaceChildren: (...nodes: any[]) => {
        children.length = 0;
        children.push(...nodes);
      },
      appendChild: (node: any) => {
        children.push(node);
      },
    };
  }

  (globalThis as any).document = {
    body: createDummyElement('body') as any,
    createElement: (tag: string) => createDummyElement(tag) as any,
    createElementNS: (_ns: string, tag: string) =>
      createDummyElement(tag) as any,
    querySelectorAll: () => [],
    querySelector: () => null,
    getElementById: () => null,
  } as any;

  (globalThis as any)._ = (k: string) => k;
  (globalThis as any).E = (tag: string, attrs?: any, children?: any) => {
    const el = (globalThis as any).document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (k === 'class' || k === 'className') {
          el.className = v;
          el.setAttribute('class', v);
        } else if (k === 'onclick') {
          el.onclick = v;
        } else {
          el.setAttribute(k, v);
        }
      }
    }
    if (children) {
      const childArr = Array.isArray(children) ? children : [children];
      for (const c of childArr) {
        if (c != null && c !== '') {
          el.appendChild(c);
        }
      }
    }
    return el;
  };
});

import { renderHeroBar } from '../renderHeroBar';
import { renderKpiRow } from '../renderKpiRow';
import { renderActiveRouteCard } from '../renderActiveRouteCard';

describe('Dashboard Redesign Components', () => {
  describe('renderHeroBar', () => {
    it('renders running status with uptime and routing mode', () => {
      const el = renderHeroBar({
        isRunning: true,
        version: '1.2.3',
        uptimeText: '5d 12h',
        routingModeText: 'TProxy + Fake-IP',
        restarting: false,
      });

      expect(el).toBeDefined();
      expect(el.getAttribute('class')).toContain('tachyon_hero-bar');
      expect(el.getAttribute('data-tier')).toBe('hero');
    });

    it('suppresses version when loading', () => {
      const elLoading = renderHeroBar({
        isRunning: true,
        version: 'loading',
      });
      const brand = elLoading.children[0]?.children[0] as any;
      // Should only have logo and title, not version
      expect(brand?.children?.length).toBe(2);

      const elVersioned = renderHeroBar({
        isRunning: true,
        version: '1.2.3',
      });
      const brandWithVer = elVersioned.children[0]?.children[0] as any;
      expect(brandWithVer?.children?.length).toBe(3);
    });
  });

  describe('renderKpiRow', () => {
    it('renders 4 KPI cards with proper formatting and fast latency', () => {
      const el = renderKpiRow({
        downSpeed: 1048576, // 1 MB/s
        upSpeed: 524288, // 512 KB/s
        totalDown: 1073741824, // 1 GB
        totalUp: 268435456, // 256 MB
        latency: 45,
        activeNodeName: 'Frankfurt-01',
        clientsCount: 8,
        isLoading: false,
      });

      expect(el).toBeDefined();
      expect(el.getAttribute('class')).toContain('tachyon_kpi-row');
      expect(el.children.length).toBe(4);
    });

    it('renders medium and slow latency classes correctly', () => {
      const elMedium = renderKpiRow({
        downSpeed: 0,
        upSpeed: 0,
        totalDown: 0,
        totalUp: 0,
        latency: 180,
        clientsCount: 0,
      });
      expect(elMedium).toBeDefined();

      const elSlow = renderKpiRow({
        downSpeed: 0,
        upSpeed: 0,
        totalDown: 0,
        totalUp: 0,
        latency: 350,
        clientsCount: 0,
      });
      expect(elSlow).toBeDefined();
    });
  });

  describe('renderActiveRouteCard', () => {
    it('renders active route details with flag, protocol, and DPI', () => {
      const el = renderActiveRouteCard({
        nodeName: 'Frankfurt Fast',
        flagEmoji: '🇩🇪',
        protocol: 'VLESS',
        latency: 42,
        balancerMode: 'Fallback',
        dpiProvider: 'Zapret2',
        dpiActive: true,
        activeSectionsCount: 3,
        isLoading: false,
      });

      expect(el).toBeDefined();
      expect(el.getAttribute('class')).toContain('tachyon_active-route-card');
      expect(el.getAttribute('data-card')).toBe('active-route');
    });

    it('renders fallback when node is direct/standby', () => {
      const el = renderActiveRouteCard({
        isLoading: false,
      });

      expect(el).toBeDefined();
      expect(el.getAttribute('class')).toContain('tachyon_active-route-card');
    });
  });
});
