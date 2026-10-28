/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  renderYouTubeBrandIcon,
  renderDiscordBrandIcon,
  renderShieldRouteBrandIcon,
  renderTestingRouteBrandIcon,
  renderMainRouteBrandIcon,
  renderChevronRightIcon,
  renderSidebarRoutesIcon,
  renderSidebarSettingsIcon,
} from './dashboardIconsV3';
import { tr } from '../../../helpers/i18n';
import { renderFlagEmojis } from './renderFlagEmojis';

export interface IRouteTableRowItem {
  id: string;
  name: string;
  subtitle: string;
  iconType: 'youtube' | 'discord' | 'shield' | 'testing' | 'main' | 'custom';
  customIcon?: HTMLElement | SVGElement;
  isActive: boolean;
  serverName: string;
  serverFlag?: string;
  selectorName: string;
  traffic24h: string;
  connectionsCount: number;
  latencyMs: number;
  onClick?: () => void;
}

export interface IRoutesTableProps {
  routes?: IRouteTableRowItem[];
  onManageRoutesClick?: () => void;
}

export function renderRoutesTable({
  routes,
  onManageRoutesClick,
}: IRoutesTableProps = {}): HTMLElement {
  const defaultRoutes: IRouteTableRowItem[] = [
    {
      id: 'main',
      name: 'Main',
      subtitle: tr('Основной маршрут', 'Primary outbound route'),
      iconType: 'main',
      isActive: true,
      serverName: tr('Автовыбор', 'Auto'),
      serverFlag: '🌐',
      selectorName: 'Auto',
      traffic24h: '0 B',
      connectionsCount: 0,
      latencyMs: 45,
    },
  ];

  const routeItems = routes && routes.length > 0 ? routes : defaultRoutes;

  // Header: Title + Button "⚙️ Управление маршрутами"
  const headerEl = E('div', { class: 'tachyon_routes-table__header' }, [
    E('div', { class: 'tachyon_routes-table__title-wrap' }, [
      renderSidebarRoutesIcon(18) as unknown as HTMLElement,
      E('span', { class: 'tachyon_routes-table__title' }, tr('Маршруты', 'Routes')),
    ]),
    E(
      'button',
      {
        type: 'button',
        class: 'tachyon_routes-table__action-btn',
        click: (e: MouseEvent) => {
          e.preventDefault();
          onManageRoutesClick?.();
        },
      },
      [
        renderSidebarSettingsIcon(14) as unknown as HTMLElement,
        E('span', {}, tr('Управление маршрутами', 'Manage routes')),
      ],
    ),
  ]);

  // Rows
  const rowElements = routeItems.map((r) => {
    // Brand icon
    let iconEl: HTMLElement | SVGElement;
    if (r.customIcon) {
      iconEl = r.customIcon;
    } else if (r.iconType === 'youtube' || r.name.toLowerCase().includes('youtube')) {
      iconEl = renderYouTubeBrandIcon(28);
    } else if (r.iconType === 'discord' || r.name.toLowerCase().includes('discord')) {
      iconEl = renderDiscordBrandIcon(28);
    } else if (r.iconType === 'shield' || r.name.toLowerCase().includes('gosuslugi') || r.name.toLowerCase().includes('госуслуг')) {
      iconEl = renderShieldRouteBrandIcon(28);
    } else if (r.iconType === 'testing' || r.name.toLowerCase().includes('test')) {
      iconEl = renderTestingRouteBrandIcon(28);
    } else {
      iconEl = renderMainRouteBrandIcon(28);
    }

    // Flag + Server
    const flagNode = r.serverFlag ? renderFlagEmojis(r.serverFlag) : '';

    // Latency badge class
    let latClass = 'tachyon_route-row__latency--green';
    if (r.latencyMs > 250) latClass = 'tachyon_route-row__latency--red';
    else if (r.latencyMs > 100) latClass = 'tachyon_route-row__latency--yellow';

    return E(
      'div',
      {
        class: 'tachyon_route-row',
        'data-route': r.id,
        click: (e: MouseEvent) => {
          if (r.onClick) {
            e.preventDefault();
            r.onClick();
          }
        },
      } as any,
      [
        // Col 1: Icon + Name + Subtitle
        E('div', { class: 'tachyon_route-row__col-primary' }, [
          iconEl as unknown as HTMLElement,
          E('div', { class: 'tachyon_route-row__name-wrap' }, [
            E('span', { class: 'tachyon_route-row__name' }, r.name),
            E('span', { class: 'tachyon_route-row__subtitle' }, r.subtitle),
          ]),
        ]),

        // Col 2: Status Badge (● Активен)
        E('div', { class: 'tachyon_route-row__col-status' }, [
          E(
            'span',
            {
              class: `tachyon_route-row__status-badge ${
                r.isActive
                  ? 'tachyon_route-row__status-badge--active'
                  : 'tachyon_route-row__status-badge--inactive'
              }`,
            },
            [
              E('span', { class: 'tachyon_route-row__status-dot' }),
              r.isActive ? tr('Активен', 'Active') : tr('Выключен', 'Inactive'),
            ],
          ),
        ]),

        // Col 3: Server
        E('div', { class: 'tachyon_route-row__col-info' }, [
          E('span', { class: 'tachyon_route-row__label' }, tr('Сервер', 'Server')),
          E('div', { class: 'tachyon_route-row__val tachyon_route-row__val--server' }, [
            flagNode ? E('span', { class: 'tachyon_route-row__flag' }, flagNode) : '',
            E('span', {}, r.serverName),
          ]),
        ]),

        // Col 4: Selector
        E('div', { class: 'tachyon_route-row__col-info' }, [
          E('span', { class: 'tachyon_route-row__label' }, tr('Селектор', 'Selector')),
          E(
            'span',
            { class: 'tachyon_route-row__val tachyon_route-row__val--selector' },
            r.selectorName,
          ),
        ]),

        // Col 5: 24h Traffic
        E('div', { class: 'tachyon_route-row__col-info' }, [
          E('span', { class: 'tachyon_route-row__label' }, tr('Трафик за 24 ч', '24h Traffic')),
          E('span', { class: 'tachyon_route-row__val tachyon_route-row__val--number' }, r.traffic24h),
        ]),

        // Col 6: Connections
        E('div', { class: 'tachyon_route-row__col-info' }, [
          E('span', { class: 'tachyon_route-row__label' }, tr('Соединения', 'Connections')),
          E(
            'span',
            { class: 'tachyon_route-row__val tachyon_route-row__val--number' },
            String(r.connectionsCount),
          ),
        ]),

        // Col 7: Latency Pill + Chevron
        E('div', { class: 'tachyon_route-row__col-actions' }, [
          E(
            'span',
            { class: `tachyon_route-row__latency-pill ${latClass}` },
            [
              E('span', { class: 'tachyon_route-row__latency-dot' }),
              `${r.latencyMs > 0 ? r.latencyMs : '—'} ms`,
            ],
          ),
          E('span', { class: 'tachyon_route-row__chevron' }, [
            renderChevronRightIcon(14) as unknown as HTMLElement,
          ]),
        ]),
      ],
    );
  });

  return E(
    'div',
    { class: 'tachyon_routes-card', 'data-card': 'routes-table' } as any,
    [headerEl, E('div', { class: 'tachyon_routes-table__list' }, rowElements)],
  );
}
