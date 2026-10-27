import { Tachyon } from '../../types';
import { tr } from '../../helpers/i18n';

export interface ActiveRouteInfo {
  sectionName?: string;
  sectionDisplayName?: string;
  name: string;
  selector: string;
  latency: number;
  type: string;
}

const SERVICE_ACTIONS = new Set([
  'zapret',
  'zapret2',
  'byedpi',
  'wdtt',
  'olcrtc',
]);
const SERVICE_OUTBOUND_TYPES = new Set([
  'SING_BOX',
  'ZAPRET',
  'ZAPRET2',
  'BYEDPI',
]);

export function isServiceGroup(group: Tachyon.OutboundGroup): boolean {
  if (group.serviceStatus) return true;
  if (group.action && SERVICE_ACTIONS.has(group.action.toLowerCase())) {
    return true;
  }
  if (
    group.outbounds?.length > 0 &&
    group.outbounds.every((o) => SERVICE_OUTBOUND_TYPES.has(o.type))
  ) {
    return true;
  }
  return false;
}

export function getGroupActiveRoute(
  group: Tachyon.OutboundGroup,
): ActiveRouteInfo | null {
  if (!group || !group.outbounds || group.outbounds.length === 0) return null;

  const sectionName = group.sectionName || '';
  const sectionDisplayName = group.displayName || group.sectionName || 'Main';

  const selected =
    group.outbounds.find((o) => o.selected) || group.outbounds[0];
  if (!selected) return null;

  if (selected.priorityInfo) {
    const selName = selected.priorityInfo.selectedName;
    const selCode = selected.priorityInfo.selectedCode;
    const member =
      selected.priorityInfo.outbounds?.find(
        (m) =>
          m.selected ||
          (selName && m.displayName === selName) ||
          (selCode && m.code === selCode) ||
          (selName && m.displayName && m.displayName.includes(selName)),
      ) || group.outbounds.find((o) => (selName && o.displayName === selName) || (selCode && o.code === selCode));

    const lat =
      member?.latency && member.latency > 0
        ? member.latency
        : selected.latency && selected.latency > 0
          ? selected.latency
          : (member?.latency ?? selected.latency ?? -1);

    return {
      sectionName,
      sectionDisplayName,
      name: selName || member?.displayName || selected.displayName,
      selector: `${selected.displayName} (Priority)`,
      latency: lat,
      type: member?.type || 'Priority',
    };
  }

  if (selected.urlTestInfo) {
    const selName = selected.urlTestInfo.selectedName;
    const selCode = selected.urlTestInfo.selectedCode;
    const member =
      selected.urlTestInfo.outbounds?.find(
        (m) =>
          m.selected ||
          (selName && m.displayName === selName) ||
          (selCode && m.code === selCode) ||
          (selName && m.displayName && m.displayName.includes(selName)),
      ) || group.outbounds.find((o) => (selName && o.displayName === selName) || (selCode && o.code === selCode));

    const lat =
      member?.latency && member.latency > 0
        ? member.latency
        : selected.latency && selected.latency > 0
          ? selected.latency
          : (member?.latency ?? selected.latency ?? -1);

    return {
      sectionName,
      sectionDisplayName,
      name: selName || member?.displayName || selected.displayName,
      selector: `${selected.displayName} (URLTest)`,
      latency: lat,
      type: member?.type || 'URLTest',
    };
  }

  return {
    sectionName,
    sectionDisplayName,
    name: selected.displayName,
    selector: tr('Ручной выбор', 'Manual selection'),
    latency: selected.latency ?? -1,
    type: selected.type || 'Proxy',
  };
}

export function getAllActiveRoutes(
  groups: Tachyon.OutboundGroup[],
): ActiveRouteInfo[] {
  if (!groups || groups.length === 0) return [];

  const proxyGroups = groups.filter(
    (g) => !isServiceGroup(g) && g.outbounds && g.outbounds.length > 0,
  );

  return proxyGroups
    .map((g) => getGroupActiveRoute(g))
    .filter((r): r is ActiveRouteInfo => r !== null);
}

export function getActiveRoute(
  groups: Tachyon.OutboundGroup[],
): ActiveRouteInfo | null {
  const routes = getAllActiveRoutes(groups);
  if (routes.length === 0) return null;

  const main = routes.find((r) => r.sectionName?.toLowerCase() === 'main');
  return main || routes[0];
}
