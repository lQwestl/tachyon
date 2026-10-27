/* eslint-disable @typescript-eslint/no-explicit-any */
import { tr } from '../../../helpers/i18n';
import { renderFlagEmojis } from './renderFlagEmojis';
import { renderOutboundRouteIcon } from './dashboardIcons';

export interface IActiveRouteStreamItem {
  sectionName?: string;
  sectionDisplayName?: string;
  nodeName: string;
  flagEmoji?: string | HTMLElement | (string | HTMLElement)[];
  protocol?: string;
  latency?: number;
  selector?: string;
}

export interface IRenderActiveRouteCardProps {
  nodeName?: string;
  flagEmoji?: string | HTMLElement | (string | HTMLElement)[];
  protocol?: string;
  latency?: number;
  balancerMode?: string;
  dpiProvider?: string;
  dpiActive?: boolean;
  activeSectionsCount?: number;
  isLoading?: boolean;
  routes?: IActiveRouteStreamItem[];
}

function getSectionIcon(sectionKey: string): string {
  const s = sectionKey.toLowerCase();
  if (s.includes('youtube') || s.includes('discord') || s.includes('video')) return '🎬';
  if (s.includes('stream') || s.includes('media') || s.includes('netflix')) return '📺';
  if (s.includes('torrent') || s.includes('p2p')) return '⚡';
  if (s.includes('social') || s.includes('telegram') || s.includes('chat')) return '💬';
  return '🌐';
}

export function renderActiveRouteCard({
  nodeName = '',
  flagEmoji = '🌐',
  protocol = '',
  latency = -1,
  balancerMode = '',
  dpiProvider = '',
  dpiActive = false,
  activeSectionsCount = 0,
  isLoading = false,
  routes = [],
}: IRenderActiveRouteCardProps): HTMLElement {
  const headerChildren: HTMLElement[] = [
    E('div', { class: 'tachyon_active-route-card__title-wrap' }, [
      renderOutboundRouteIcon(16) as unknown as HTMLElement,
      E(
        'b',
        { class: 'tachyon_active-route-card__title' },
        tr('Исходящие маршруты', 'Active Routes'),
      ),
    ]),
  ];
  const count = routes.length > 0 ? routes.length : activeSectionsCount;
  if (count > 0) {
    headerChildren.push(
      E(
        'span',
        { class: 'tachyon_active-route-card__sections-count' },
        `${count} ${tr('правил', 'rules')}`,
      ),
    );
  }

  let bodyContent: HTMLElement[];

  if (routes.length > 1) {
    // Multi-route streams view matching mockup
    bodyContent = routes.map((r, idx) => {
      const secName = r.sectionDisplayName || r.sectionName || tr('Маршрут', 'Route');
      const secIcon = getSectionIcon(secName);
      const flag = typeof r.flagEmoji === 'string' ? renderFlagEmojis(r.flagEmoji) : (r.flagEmoji || '🌐');
      const lat = r.latency ?? -1;
      let latencyBadgeClass = 'tachyon_active-route__latency--unknown';
      let latencyText = '—';
      const isDirect =
        r.protocol?.toLowerCase() === 'direct' ||
        r.nodeName?.toLowerCase().includes('direct') ||
        Boolean(r.sectionName?.toLowerCase().includes('desync'));

      if (lat > 0) {
        latencyText = `${lat} ms`;
        if (lat <= 100) latencyBadgeClass = 'tachyon_active-route__latency--fast';
        else if (lat <= 250) latencyBadgeClass = 'tachyon_active-route__latency--medium';
        else latencyBadgeClass = 'tachyon_active-route__latency--slow';
      } else if (isDirect) {
        latencyText = 'Direct';
        latencyBadgeClass = 'tachyon_active-route__latency--fast';
      }

      return E(
        'div',
        {
          class: 'tachyon_active-route-card__stream-row',
          ...(idx === 0 ? { 'data-route-val': 'stream-primary' } : {}),
        } as any,
        [
          E('div', { class: 'tachyon_active-route-card__stream-left' }, [
            E('span', { class: 'tachyon_active-route-card__stream-sec-icon' }, secIcon),
            E('span', { class: 'tachyon_active-route-card__stream-sec-name' }, secName),
            E('span', { class: 'tachyon_active-route-card__stream-arrow' }, '→'),
            E('span', { class: 'tachyon_active-route-card__flag' }, flag),
            E(
              'span',
              {
                class: 'tachyon_active-route-card__node-name',
                title: r.nodeName,
                ...(idx === 0 ? { 'data-route-val': 'node-name' } : {}),
              } as any,
              r.nodeName,
            ),
            ...(r.protocol
              ? [
                  E(
                    'span',
                    {
                      class: 'tachyon_active-route-card__protocol',
                      ...(idx === 0 ? { 'data-route-val': 'protocol' } : {}),
                    } as any,
                    `[${r.protocol}]`,
                  ),
                ]
              : []),
          ]),
          E(
            'span',
            {
              class: `tachyon_active-route-card__latency ${latencyBadgeClass}`,
              ...(idx === 0 ? { 'data-route-val': 'latency' } : {}),
            } as any,
            `⚡ ${latencyText}`,
          ),
        ],
      );
    });
  } else {
    // Single node or fallback view
    let latencyBadgeClass = 'tachyon_active-route__latency--unknown';
    let latencyText = '—';
    const isSingleDirect =
      protocol?.toLowerCase() === 'direct' ||
      nodeName?.toLowerCase().includes('direct');

    if (latency > 0) {
      latencyText = `${latency} ms`;
      if (latency <= 100)
        latencyBadgeClass = 'tachyon_active-route__latency--fast';
      else if (latency <= 250)
        latencyBadgeClass = 'tachyon_active-route__latency--medium';
      else latencyBadgeClass = 'tachyon_active-route__latency--slow';
    } else if (isSingleDirect) {
      latencyText = 'Direct';
      latencyBadgeClass = 'tachyon_active-route__latency--fast';
    }

    const nodeDetailsChildren: HTMLElement[] = [
      E(
        'div',
        {
          class: 'tachyon_active-route-card__node-name',
          title: nodeName,
          'data-route-val': 'node-name',
        } as any,
        isLoading
          ? '...'
          : nodeName || tr('Ожидание / Напрямую', 'Direct / Standby'),
      ),
    ];
    if (protocol) {
      nodeDetailsChildren.push(
        E(
          'span',
          {
            class: 'tachyon_active-route-card__protocol',
            'data-route-val': 'protocol',
          } as any,
          protocol,
        ),
      );
    }

    const nodeRowChildren: HTMLElement[] = [
      E('div', { class: 'tachyon_active-route-card__node-info' }, [
        E(
          'span',
          { class: 'tachyon_active-route-card__flag' },
          typeof flagEmoji === 'string' ? renderFlagEmojis(flagEmoji) : flagEmoji,
        ),
        E(
          'div',
          { class: 'tachyon_active-route-card__node-details' },
          nodeDetailsChildren,
        ),
      ]),
      E(
        'span',
        {
          class: `tachyon_active-route-card__latency ${latencyBadgeClass}`,
          'data-route-val': 'latency',
        } as any,
        `⚡ ${latencyText}`,
      ),
    ];

    bodyContent = [
      E('div', { class: 'tachyon_active-route-card__node-row' }, nodeRowChildren),
    ];
  }

  return E(
    'div',
    { class: 'tachyon_active-route-card', 'data-card': 'active-route' } as any,
    [
      // Card Header
      E('div', { class: 'tachyon_active-route-card__header' }, headerChildren),

      // Main Node / Streams Display
      E('div', { class: 'tachyon_active-route-card__body' }, [
        ...bodyContent,

        // Meta row: Balancer & DPI
        E('div', { class: 'tachyon_active-route-card__meta-grid' }, [
          // Balancer Mode
          E('div', { class: 'tachyon_active-route-card__meta-item' }, [
            E(
              'span',
              { class: 'tachyon_active-route-card__meta-label' },
              tr('Режим выбора:', 'Balancer:'),
            ),
            E(
              'span',
              {
                class: 'tachyon_active-route-card__meta-value',
                'data-route-val': 'balancer',
              } as any,
              balancerMode || tr('Авто / URLTest', 'Auto / URLTest'),
            ),
          ]),

          // DPI Status
          E('div', { class: 'tachyon_active-route-card__meta-item' }, [
            E(
              'span',
              { class: 'tachyon_active-route-card__meta-label' },
              tr('Обход DPI:', 'DPI Bypass:'),
            ),
            E(
              'div',
              {
                class: `tachyon_active-route-card__dpi-badge ${
                  dpiActive
                    ? 'tachyon_active-route-card__dpi-badge--active'
                    : ''
                }`,
                'data-route-val': 'dpi',
              } as any,
              [
                E('span', { class: 'tachyon_active-route-card__dpi-dot' }),
                E(
                  'span',
                  {},
                  dpiProvider
                    ? `${dpiProvider} ${dpiActive ? tr('активен', 'active') : tr('выкл', 'off')}`
                    : tr('Не настроен', 'None'),
                ),
              ],
            ),
          ]),
        ]),
      ]),
    ],
  );
}
