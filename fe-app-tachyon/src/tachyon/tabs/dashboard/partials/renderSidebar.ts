/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  renderSidebarOverviewIcon,
  renderSidebarRoutesIcon,
  renderSidebarNodesIcon,
  renderSidebarClientsIcon,
  renderSidebarAnalyticsIcon,
  renderSidebarSettingsIcon,
} from './dashboardIconsV3';
import { tr } from '../../../helpers/i18n';

export interface ISidebarProps {
  activeTab?: string;
  onSelectTab?: (tabKey: string) => void;
}

export interface ISidebarItem {
  id: string;
  label: string;
  renderIcon: (size?: number) => SVGElement;
}

export function renderSidebar({
  activeTab = 'overview',
  onSelectTab,
}: ISidebarProps = {}): HTMLElement {
  const items: ISidebarItem[] = [
    {
      id: 'overview',
      label: tr('Обзор', 'Overview'),
      renderIcon: renderSidebarOverviewIcon,
    },
    {
      id: 'routes',
      label: tr('Маршруты', 'Routes'),
      renderIcon: renderSidebarRoutesIcon,
    },
    {
      id: 'nodes',
      label: tr('Узлы', 'Nodes'),
      renderIcon: renderSidebarNodesIcon,
    },
    {
      id: 'clients',
      label: tr('Клиенты', 'Clients'),
      renderIcon: renderSidebarClientsIcon,
    },
    {
      id: 'analytics',
      label: tr('Аналитика', 'Analytics'),
      renderIcon: renderSidebarAnalyticsIcon,
    },
    {
      id: 'settings',
      label: tr('Настройки', 'Settings'),
      renderIcon: renderSidebarSettingsIcon,
    },
  ];

  const navElements = items.map((item) => {
    const isActive = activeTab === item.id;
    return E(
      'button',
      {
        type: 'button',
        class: `tachyon_sidebar__item${isActive ? ' tachyon_sidebar__item--active' : ''}`,
        'data-nav': item.id,
        click: (e: MouseEvent) => {
          e.preventDefault();
          const target = e.currentTarget as HTMLElement | null;
          const parentNav = target?.closest('.tachyon_sidebar__nav');
          if (parentNav && target) {
            parentNav.querySelectorAll('.tachyon_sidebar__item').forEach((el) => {
              el.classList.remove('tachyon_sidebar__item--active');
            });
            target.classList.add('tachyon_sidebar__item--active');
          }
          onSelectTab?.(item.id);
        },
      } as any,
      [
        E('span', { class: 'tachyon_sidebar__item-icon' }, [
          item.renderIcon(18) as unknown as HTMLElement,
        ]),
        E('span', { class: 'tachyon_sidebar__item-label' }, item.label),
      ],
    );
  });

  return E('aside', { class: 'tachyon_sidebar' }, [
    E('nav', { class: 'tachyon_sidebar__nav' }, navElements),
  ]);
}
