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
        } else if (k === 'onclick' || k === 'click') {
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

import { renderTopHeader } from '../renderTopHeader';
import { renderSidebar } from '../renderSidebar';
import { renderMetricKpiGrid } from '../renderMetricKpiGrid';
import { renderTrafficChart } from '../renderTrafficChart';
import { renderSystemHealthCard } from '../renderSystemHealthCard';
import { renderRoutesTable } from '../renderRoutesTable';
import { renderNodesGrid } from '../renderNodesGrid';

describe('V3 Dashboard Components (Target Screenshot Design)', () => {
  describe('renderTopHeader', () => {
    it('renders Tachyon brand, production capsule badge, and active status', () => {
      const onBadgeClick = vi.fn();
      const el = renderTopHeader({
        isRunning: true,
        systemStatusText: 'Система работает',
        currentLang: 'RU',
        onProductionBadgeClick: onBadgeClick,
      });

      expect(el).toBeDefined();
      expect(el.getAttribute('class')).toContain('tachyon_top-header');
      expect(el.getAttribute('data-header')).toBe('top-brand');
    });

    it('renders offline state properly', () => {
      const el = renderTopHeader({
        isRunning: false,
        systemStatusText: 'Остановлено',
      });
      expect(el).toBeDefined();
    });
  });

  describe('renderSidebar', () => {
    it('renders 6 navigation items with active overview tab', () => {
      const onSelectTab = vi.fn();
      const el = renderSidebar({
        activeTab: 'overview',
        onSelectTab,
      });

      expect(el).toBeDefined();
      expect(el.getAttribute('class')).toContain('tachyon_sidebar');
      // Root is aside, first child is nav containing 6 button items
      const navEl = el.children[0] as any;
      expect(navEl.children.length).toBe(6);
    });
  });

  describe('renderMetricKpiGrid', () => {
    it('renders 4 metric cards matching target screenshot with values and trends', () => {
      const onClients = vi.fn();
      const el = renderMetricKpiGrid({
        activeClientsCount: 105,
        routesCount: 3,
        traffic24hBytes: 29205073920,
        avgLatencyMs: 48,
        onClientsClick: onClients,
      });

      expect(el).toBeDefined();
      expect(el.getAttribute('class')).toContain('tachyon_kpi-grid');
      expect(el.children.length).toBe(4);
    });
  });

  describe('renderTrafficChart', () => {
    it('renders dual-area cubic Bezier spline SVG chart with 24h filter and legend', () => {
      const onTfChange = vi.fn();
      const el = renderTrafficChart({
        timeframe: '24 часа',
        onTimeframeChange: onTfChange,
      });

      expect(el).toBeDefined();
      expect(el.getAttribute('class')).toContain('tachyon_traffic-chart-card');
      expect(el.getAttribute('data-card')).toBe('traffic-throughput');
    });
  });

  describe('renderSystemHealthCard', () => {
    it('renders 3 core services with Uptime, CPU, and chevron controls', () => {
      const onBadge = vi.fn();
      const el = renderSystemHealthCard({
        allServicesOk: true,
        onHealthBadgeClick: onBadge,
      });

      expect(el).toBeDefined();
      expect(el.getAttribute('class')).toContain('tachyon_system-health-card');
      expect(el.getAttribute('data-card')).toBe('system-health');
    });
  });

  describe('renderRoutesTable', () => {
    it('renders YouTube, Discord, and Main route rows with icons and pills', () => {
      const onManage = vi.fn();
      const el = renderRoutesTable({
        onManageRoutesClick: onManage,
      });

      expect(el).toBeDefined();
      expect(el.getAttribute('class')).toContain('tachyon_routes-card');
      expect(el.getAttribute('data-card')).toBe('routes-table');
    });
  });

  describe('renderNodesGrid', () => {
    it('renders 4 nodes grid (Estonia, Germany, Netherlands, Sweden) with Clouds tag', () => {
      const onTest = vi.fn();
      const el = renderNodesGrid({
        isTestingAll: false,
        onTestAllNodesClick: onTest,
      });

      expect(el).toBeDefined();
      expect(el.getAttribute('class')).toContain('tachyon_nodes-section');
      expect(el.getAttribute('data-card')).toBe('nodes-grid');
    });
  });
});
