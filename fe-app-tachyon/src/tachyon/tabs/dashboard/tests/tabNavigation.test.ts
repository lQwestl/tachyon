/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LUCI_TAB_MAPPING, switchLuciTab } from '../tabNavigation';

describe('tabNavigation (Variant A Seamless Router)', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('defines correct mappings for all dashboard navigation sections', () => {
    expect(LUCI_TAB_MAPPING).toEqual({
      overview: 'dashboard',
      routes: 'section',
      nodes: 'outbounds',
      clients: 'local_devices',
      analytics: 'monitoring',
      settings: 'settings',
    });
  });

  it('scrolls to top when switching to overview tab', () => {
    const scrollToSpy = vi.fn();
    (globalThis as any).window = { scrollTo: scrollToSpy };

    const result = switchLuciTab('overview');
    expect(result).toBe(true);
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('finds and clicks native LuCI CBI tab link by data-tab attribute', () => {
    const clickSpy = vi.fn();
    const mockTabLink = { click: clickSpy };

    (globalThis as any).document = {
      querySelector: vi.fn((selector: string) => {
        if (selector.includes('cbi-tachyon-section')) {
          return mockTabLink;
        }
        return null;
      }),
    };

    const result = switchLuciTab('routes');
    expect(result).toBe(true);
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('supports short data-tab format fallback', () => {
    const clickSpy = vi.fn();
    const mockTabLink = { click: clickSpy };

    (globalThis as any).document = {
      querySelector: vi.fn((selector: string) => {
        if (selector.includes('[data-tab="outbounds"] a')) {
          return mockTabLink;
        }
        return null;
      }),
    };

    const result = switchLuciTab('nodes');
    expect(result).toBe(true);
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('returns false and does not throw when target tab element is not found', () => {
    (globalThis as any).document = {
      querySelector: vi.fn().mockReturnValue(null),
    };

    const result = switchLuciTab('analytics');
    expect(result).toBe(false);
  });
});
