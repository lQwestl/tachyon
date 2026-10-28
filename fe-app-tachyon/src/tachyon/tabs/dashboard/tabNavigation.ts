export const LUCI_TAB_MAPPING: Record<string, string> = {
  overview: 'dashboard',
  routes: 'section',
  nodes: 'outbounds',
  clients: 'local_devices',
  analytics: 'monitoring',
  settings: 'settings',
};

export interface ISwitchTabOptions {
  onOpenClientsModal?: () => void;
}

function findTabLink(tabName: string): HTMLElement | null {
  if (typeof document === 'undefined' || !document.querySelector) return null;
  const selectors = [
    `.cbi-tab[data-tab="cbi-tachyon-${tabName}"] a`,
    `.cbi-tab-disabled[data-tab="cbi-tachyon-${tabName}"] a`,
    `.cbi-tab[data-tab="${tabName}"] a`,
    `.cbi-tab-disabled[data-tab="${tabName}"] a`,
    `[data-tab="cbi-tachyon-${tabName}"] > a`,
    `[data-tab="${tabName}"] > a`,
    `li[data-tab="cbi-tachyon-${tabName}"] a`,
    `li[data-tab="${tabName}"] a`,
    `a[data-tab="cbi-tachyon-${tabName}"]`,
    `a[data-tab="${tabName}"]`,
  ];
  return document.querySelector<HTMLElement>(selectors.join(', '));
}

function selectSectionSubTab(subtabKey: string): boolean {
  if (typeof document === 'undefined' || !document.querySelector) return false;
  const subLink = document.querySelector<HTMLElement>(
    `.tachyon-section-subtabs li[data-subtab="${subtabKey}"] a, [data-subtab="${subtabKey}"] a`,
  );
  if (subLink && typeof subLink.click === 'function') {
    subLink.click();
    return true;
  }
  return false;
}

/**
 * Seamlessly switches active LuCI CBI tab without a full page reload (Variant A).
 * Supports both top-level CBI tabs, subtabs (routes -> sections, nodes -> outbounds),
 * and client modal handler.
 */
export function switchLuciTab(
  tabKey: string,
  options?: ISwitchTabOptions,
): boolean {
  if (tabKey === 'overview') {
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const dashLink = findTabLink('dashboard');
    if (dashLink && typeof dashLink.click === 'function') {
      dashLink.click();
    }
    return true;
  }

  if (tabKey === 'clients') {
    if (options?.onOpenClientsModal) {
      options.onOpenClientsModal();
      return true;
    }
    const clientsLink = findTabLink('local_devices');
    if (clientsLink && typeof clientsLink.click === 'function') {
      clientsLink.click();
      return true;
    }
    return false;
  }

  if (tabKey === 'routes') {
    const secLink = findTabLink('section');
    if (secLink && typeof secLink.click === 'function') {
      secLink.click();
    }
    selectSectionSubTab('sections');
    if (typeof window !== 'undefined' && typeof window.setTimeout === 'function') {
      window.setTimeout(() => selectSectionSubTab('sections'), 50);
    }
    return Boolean(secLink);
  }

  if (tabKey === 'nodes') {
    const directNodesLink = findTabLink('outbounds');
    if (directNodesLink && typeof directNodesLink.click === 'function') {
      directNodesLink.click();
      return true;
    }
    const secLink = findTabLink('section');
    if (secLink && typeof secLink.click === 'function') {
      secLink.click();
    }
    selectSectionSubTab('outbounds');
    if (typeof window !== 'undefined' && typeof window.setTimeout === 'function') {
      window.setTimeout(() => selectSectionSubTab('outbounds'), 50);
    }
    return Boolean(secLink);
  }

  const targetTab = LUCI_TAB_MAPPING[tabKey] || tabKey;
  const tabLink = findTabLink(targetTab);

  if (tabLink && typeof tabLink.click === 'function') {
    tabLink.click();
    return true;
  }

  // Fallback: update window location hash if DOM click target not found
  try {
    if (typeof window !== 'undefined' && window.location) {
      window.location.hash = `#${targetTab}`;
      return true;
    }
  } catch {
    // Ignore
  }

  return false;
}
