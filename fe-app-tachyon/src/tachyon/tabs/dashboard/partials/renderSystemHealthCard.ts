/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderChevronRightIcon } from './dashboardIconsV3';
import { tr } from '../../../helpers/i18n';

export interface ISystemServiceStatus {
  name: string;
  role: string;
  isOnline: boolean;
  uptimePct?: string;
  cpuPct?: string;
  onClick?: () => void;
}

export interface ISystemHealthCardProps {
  allServicesOk?: boolean;
  services?: ISystemServiceStatus[];
  onHealthBadgeClick?: () => void;
}

export function renderSystemHealthCard({
  allServicesOk = true,
  services,
  onHealthBadgeClick,
}: ISystemHealthCardProps = {}): HTMLElement {
  const defaultServices: ISystemServiceStatus[] = [
    {
      name: 'Tachyon',
      role: tr('Основной сервис', 'Main service'),
      isOnline: true,
      uptimePct: '99.99%',
      cpuPct: '12%',
    },
    {
      name: 'Tachyon Core',
      role: tr('Ядро маршрутизации', 'Routing core'),
      isOnline: true,
      uptimePct: '99.98%',
      cpuPct: '18%',
    },
    {
      name: 'DNSMasq',
      role: tr('DNS-сервис', 'DNS service'),
      isOnline: true,
      uptimePct: '99.97%',
      cpuPct: '6%',
    },
  ];

  const serviceList = services && services.length > 0 ? services : defaultServices;

  // Header: Title + All Services Normal Badge
  const headerEl = E('div', { class: 'tachyon_system-health__header' }, [
    E(
      'span',
      { class: 'tachyon_system-health__title' },
      tr('Здоровье системы', 'System Health'),
    ),
    E(
      'span',
      {
        class: `tachyon_system-health__status-badge ${
          allServicesOk
            ? 'tachyon_system-health__status-badge--ok'
            : 'tachyon_system-health__status-badge--warn'
        }`,
        click: (e: MouseEvent) => {
          e.preventDefault();
          onHealthBadgeClick?.();
        },
      },
      allServicesOk
        ? tr('Все сервисы в норме', 'All services normal')
        : tr('Внимание', 'Attention'),
    ),
  ]);

  // Service rows
  const serviceRows = serviceList.map((svc) =>
    E(
      'div',
      {
        class: `tachyon_system-health__item${svc.onClick ? ' tachyon_system-health__item--clickable' : ''}`,
        click: (e: MouseEvent) => {
          if (svc.onClick) {
            e.preventDefault();
            svc.onClick();
          }
        },
      },
      [
        // Left: Status Dot + Name + Role
        E('div', { class: 'tachyon_system-health__item-left' }, [
          E('span', {
            class: `tachyon_system-health__item-dot ${
              svc.isOnline
                ? 'tachyon_system-health__item-dot--online'
                : 'tachyon_system-health__item-dot--offline'
            }`,
          }),
          E('div', { class: 'tachyon_system-health__item-info' }, [
            E('span', { class: 'tachyon_system-health__item-name' }, svc.name),
            E('span', { class: 'tachyon_system-health__item-role' }, svc.role),
          ]),
        ]),
        // Right: Uptime + CPU + Chevron
        E('div', { class: 'tachyon_system-health__item-right' }, [
          E('div', { class: 'tachyon_system-health__metric-col' }, [
            E('span', { class: 'tachyon_system-health__metric-label' }, 'Uptime'),
            E('span', { class: 'tachyon_system-health__metric-val' }, svc.uptimePct || '99.99%'),
          ]),
          E('div', { class: 'tachyon_system-health__metric-col' }, [
            E('span', { class: 'tachyon_system-health__metric-label' }, 'CPU'),
            E('span', { class: 'tachyon_system-health__metric-val' }, svc.cpuPct || '12%'),
          ]),
          E('span', { class: 'tachyon_system-health__chevron' }, [
            renderChevronRightIcon(14) as unknown as HTMLElement,
          ]),
        ]),
      ],
    ),
  );

  return E(
    'div',
    { class: 'tachyon_system-health-card', 'data-card': 'system-health' } as any,
    [headerEl, E('div', { class: 'tachyon_system-health__body' }, serviceRows)],
  );
}
