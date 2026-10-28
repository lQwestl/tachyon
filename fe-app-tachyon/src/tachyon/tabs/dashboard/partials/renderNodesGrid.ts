/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  renderSidebarNodesIcon,
  renderRefreshIcon,
} from './dashboardIconsV3';
import { tr } from '../../../helpers/i18n';
import { renderFlagEmojis } from './renderFlagEmojis';

export interface INodeGridCardItem {
  id: string;
  name: string;
  flag?: string;
  tagBadge?: string;
  protocol: string;
  latencyMs: number;
  statusText?: string;
  isOnline?: boolean;
  quotaUsedText?: string;
  onClick?: () => void;
}

export interface INodesGridProps {
  nodes?: INodeGridCardItem[];
  isTestingAll?: boolean;
  onTestAllNodesClick?: () => void;
  onTitleClick?: () => void;
}

export function renderNodesGrid({
  nodes,
  isTestingAll = false,
  onTestAllNodesClick,
  onTitleClick,
}: INodesGridProps = {}): HTMLElement {
  const defaultNodes: INodeGridCardItem[] = [
    {
      id: 'node-ee',
      name: 'Эстония (Без рекламы)',
      flag: '🇪🇪',
      tagBadge: 'Clouds',
      protocol: 'VLESS (TCP)',
      latencyMs: 49,
      statusText: tr('Работает', 'Active'),
      isOnline: true,
      quotaUsedText: '1.2 GB / 10 GB',
    },
    {
      id: 'node-de',
      name: 'Германия (MEGA)',
      flag: '🇩🇪',
      tagBadge: 'Clouds',
      protocol: 'VLESS (TCP)',
      latencyMs: 51,
      statusText: tr('Работает', 'Active'),
      isOnline: true,
      quotaUsedText: '2.8 GB / 10 GB',
    },
    {
      id: 'node-nl',
      name: 'Нидерланды',
      flag: '🇳🇱',
      tagBadge: 'Clouds',
      protocol: 'VLESS (TCP)',
      latencyMs: 57,
      statusText: tr('Работает', 'Active'),
      isOnline: true,
      quotaUsedText: '1.4 GB / 10 GB',
    },
    {
      id: 'node-se',
      name: 'Швеция (Игровая)',
      flag: '🇸🇪',
      tagBadge: 'Clouds',
      protocol: 'Hysteria2',
      latencyMs: 64,
      statusText: tr('Работает', 'Active'),
      isOnline: true,
      quotaUsedText: '0.8 GB / 10 GB',
    },
  ];

  const nodeList = nodes && nodes.length > 0 ? nodes : defaultNodes;

  // Header: Title + Button "🔄 Проверить все узлы"
  const headerEl = E('div', { class: 'tachyon_nodes-grid__header' }, [
    E(
      'div',
      {
        class: `tachyon_nodes-grid__title-wrap${onTitleClick ? ' tachyon_nodes-grid__title-wrap--clickable' : ''}`,
        style: onTitleClick ? 'cursor: pointer;' : undefined,
        click: onTitleClick
          ? (e: MouseEvent) => {
              e.preventDefault();
              onTitleClick();
            }
          : undefined,
      },
      [
        renderSidebarNodesIcon(18) as unknown as HTMLElement,
        E('span', { class: 'tachyon_nodes-grid__title' }, tr('Узлы', 'Nodes')),
      ],
    ),
    E(
      'button',
      {
        type: 'button',
        class: `tachyon_nodes-grid__action-btn${isTestingAll ? ' tachyon_nodes-grid__action-btn--loading' : ''}`,
        disabled: isTestingAll ? true : undefined,
        click: (e: MouseEvent) => {
          e.preventDefault();
          onTestAllNodesClick?.();
        },
      },
      [
        renderRefreshIcon(14) as unknown as HTMLElement,
        E(
          'span',
          {},
          isTestingAll
            ? tr('Проверка...', 'Testing...')
            : tr('Проверить все узлы', 'Test all nodes'),
        ),
      ],
    ),
  ]);

  // 4 Cards Grid
  const cardElements = nodeList.map((node) => {
    const flagNode = node.flag ? renderFlagEmojis(node.flag) : '';

    return E(
      'div',
      {
        class: 'tachyon_node-card',
        'data-node': node.id,
        click: (e: MouseEvent) => {
          if (node.onClick) {
            e.preventDefault();
            node.onClick();
          }
        },
      } as any,
      [
        // Top: Flag + Name + Tag Badge
        E('div', { class: 'tachyon_node-card__top' }, [
          E('div', { class: 'tachyon_node-card__name-group' }, [
            flagNode ? E('span', { class: 'tachyon_node-card__flag' }, flagNode) : '',
            E('span', { class: 'tachyon_node-card__name', title: node.name }, node.name),
          ]),
          node.tagBadge
            ? E('span', { class: 'tachyon_node-card__tag-badge' }, node.tagBadge)
            : '',
        ]),

        // Middle: Protocol + Latency
        E('div', { class: 'tachyon_node-card__middle' }, [
          E('span', { class: 'tachyon_node-card__protocol' }, node.protocol),
          E(
            'span',
            {
              class: `tachyon_node-card__latency ${
                node.latencyMs > 250
                  ? 'tachyon_node-card__latency--slow'
                  : node.latencyMs > 100
                  ? 'tachyon_node-card__latency--medium'
                  : 'tachyon_node-card__latency--fast'
              }`,
            },
            `${node.latencyMs > 0 ? node.latencyMs : '—'} ms`,
          ),
        ]),

        // Bottom: Status (● Работает) + Quota/Traffic
        E('div', { class: 'tachyon_node-card__bottom' }, [
          E(
            'div',
            {
              class: `tachyon_node-card__status ${
                node.isOnline !== false
                  ? 'tachyon_node-card__status--online'
                  : 'tachyon_node-card__status--offline'
              }`,
            },
            [
              E('span', { class: 'tachyon_node-card__status-dot' }),
              E('span', {}, node.statusText || tr('Работает', 'Active')),
            ],
          ),
          E(
            'span',
            { class: 'tachyon_node-card__quota' },
            node.quotaUsedText || '1.0 GB / 10 GB',
          ),
        ]),
      ],
    );
  });

  return E(
    'div',
    { class: 'tachyon_nodes-section', 'data-card': 'nodes-grid' } as any,
    [headerEl, E('div', { class: 'tachyon_nodes-grid__body' }, cardElements)],
  );
}
