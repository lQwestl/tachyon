/* eslint-disable @typescript-eslint/no-explicit-any */
import { prettyBytes } from '../../../../helpers/prettyBytes';
import { tr } from '../../../helpers/i18n';
import {
  renderKpiDownloadIcon,
  renderKpiUploadIcon,
  renderGatewayNetworkIcon,
  renderKpiClientsIcon,
} from './dashboardIcons';

export interface IRenderKpiRowProps {
  downSpeed: number;
  upSpeed: number;
  totalDown: number;
  totalUp: number;
  latency: number;
  activeNodeName?: string;
  clientsCount: number;
  activeRoutesCount?: number;
  gatewayLatency?: number;
  isLoading?: boolean;
  onOpenClientsModal?: () => void;
}

export function renderKpiRow({
  downSpeed,
  upSpeed,
  totalDown,
  totalUp,
  latency,
  activeNodeName = '',
  clientsCount,
  activeRoutesCount = 0,
  gatewayLatency = -1,
  isLoading = false,
  onOpenClientsModal,
}: IRenderKpiRowProps): HTMLElement {
  const effectiveLatency = gatewayLatency > 0 ? gatewayLatency : latency;
  // Format latency
  let latencyBadgeClass = 'tachyon_kpi-badge--unknown';
  let latencyText = '—';
  if (effectiveLatency > 0) {
    latencyText = `${effectiveLatency} ms`;
    if (effectiveLatency <= 100) {
      latencyBadgeClass = 'tachyon_kpi-badge--fast';
    } else if (effectiveLatency <= 250) {
      latencyBadgeClass = 'tachyon_kpi-badge--medium';
    } else {
      latencyBadgeClass = 'tachyon_kpi-badge--slow';
    }
  }

  // Card 1: Download
  const cardDownload = E(
    'div',
    { class: 'tachyon_kpi-card', 'data-kpi': 'down' } as any,
    [
      E('div', { class: 'tachyon_kpi-card__header' }, [
        renderKpiDownloadIcon(16) as unknown as HTMLElement,
        E(
          'span',
          { class: 'tachyon_kpi-card__label' },
          tr('Скорость загрузки', 'Download Speed'),
        ),
      ]),
      E(
        'div',
        {
          class: 'tachyon_kpi-card__value',
          'data-kpi-val': 'down-speed',
        } as any,
        [isLoading ? '...' : `${prettyBytes(downSpeed)}/s`],
      ),
      E(
        'div',
        { class: 'tachyon_kpi-card__sub', 'data-kpi-val': 'total-down' } as any,
        [`${tr('Всего:', 'Total:')} ${prettyBytes(totalDown)}`],
      ),
    ],
  );

  // Card 2: Upload
  const cardUpload = E(
    'div',
    { class: 'tachyon_kpi-card', 'data-kpi': 'up' } as any,
    [
      E('div', { class: 'tachyon_kpi-card__header' }, [
        renderKpiUploadIcon(16) as unknown as HTMLElement,
        E(
          'span',
          { class: 'tachyon_kpi-card__label' },
          tr('Скорость отдачи', 'Upload Speed'),
        ),
      ]),
      E(
        'div',
        { class: 'tachyon_kpi-card__value', 'data-kpi-val': 'up-speed' } as any,
        [isLoading ? '...' : `${prettyBytes(upSpeed)}/s`],
      ),
      E(
        'div',
        { class: 'tachyon_kpi-card__sub', 'data-kpi-val': 'total-up' } as any,
        [`${tr('Всего:', 'Total:')} ${prettyBytes(totalUp)}`],
      ),
    ],
  );

  // Card 3: Gateway & Routes (Latency & Rules)
  const cardLatency = E(
    'div',
    { class: 'tachyon_kpi-card', 'data-kpi': 'latency' } as any,
    [
      E('div', { class: 'tachyon_kpi-card__header' }, [
        renderGatewayNetworkIcon(16) as unknown as HTMLElement,
        E(
          'span',
          { class: 'tachyon_kpi-card__label' },
          tr('Шлюз и маршруты', 'Gateway & Routes'),
        ),
      ]),
      E('div', { class: 'tachyon_kpi-card__value' }, [
        E(
          'span',
          {
            class: `tachyon_kpi-badge ${latencyBadgeClass}`,
            'data-kpi-val': 'latency',
          } as any,
          latencyText,
        ),
      ]),
      E(
        'div',
        {
          class: 'tachyon_kpi-card__sub tachyon_kpi-card__sub--truncate',
          'data-kpi-val': 'node-name',
        } as any,
        [
          activeRoutesCount > 0
            ? `${tr('WAN latency, ', 'WAN latency, ')}${activeRoutesCount} ${tr('активных правил', 'active rules')}`
            : activeNodeName || tr('Активный шлюз', 'Active Gateway'),
        ],
      ),
    ],
  );

  // Card 4: Connected Clients
  const cardClients = E(
    'div',
    {
      class: 'tachyon_kpi-card tachyon_kpi-card--clickable',
      'data-kpi': 'clients',
      role: 'button',
      tabIndex: 0,
      title: tr(
        'Открыть список подключенных клиентов',
        'View connected clients list',
      ),
      click: (e: MouseEvent) => {
        e.preventDefault();
        onOpenClientsModal?.();
      },
    } as any,
    [
      E('div', { class: 'tachyon_kpi-card__header' }, [
        renderKpiClientsIcon(16) as unknown as HTMLElement,
        E(
          'span',
          { class: 'tachyon_kpi-card__label' },
          tr('Подключенные клиенты', 'Connected Clients'),
        ),
      ]),
      E(
        'div',
        {
          class: 'tachyon_kpi-card__value',
          'data-kpi-val': 'clients-count',
        } as any,
        [`${clientsCount} ${tr('устройств', 'devices')}`],
      ),
      E('div', { class: 'tachyon_kpi-card__sub' }, [
        tr('Входящие соединения', 'Inbound Connections'),
      ]),
    ],
  );

  return E('div', { class: 'tachyon_kpi-row', 'data-tier': 'kpi' } as any, [
    cardDownload,
    cardUpload,
    cardLatency,
    cardClients,
  ]);
}
