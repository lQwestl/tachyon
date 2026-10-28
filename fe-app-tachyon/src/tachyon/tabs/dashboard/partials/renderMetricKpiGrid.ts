/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  renderKpiUsersIcon,
  renderKpiRoutesIcon,
  renderKpiTrafficDatabaseIcon,
  renderKpiLatencyClockIcon,
} from './dashboardIconsV3';
import { tr } from '../../../helpers/i18n';
import { prettyBytes } from '../../../../helpers/prettyBytes';

export interface IMetricKpiGridProps {
  activeClientsCount?: number;
  routesCount?: number;
  traffic24hBytes?: number;
  avgLatencyMs?: number;
  clientsTrendText?: string;
  routesTrendText?: string;
  trafficTrendText?: string;
  latencyTrendText?: string;
  onClientsClick?: () => void;
  onRoutesClick?: () => void;
  onTrafficClick?: () => void;
  onLatencyClick?: () => void;
}

export function renderMetricKpiGrid({
  activeClientsCount = 105,
  routesCount = 3,
  traffic24hBytes,
  avgLatencyMs = 48,
  clientsTrendText,
  routesTrendText,
  trafficTrendText,
  latencyTrendText,
  onClientsClick,
  onRoutesClick,
  onTrafficClick,
  onLatencyClick,
}: IMetricKpiGridProps = {}): HTMLElement {
  const formattedTraffic =
    typeof traffic24hBytes === 'number' && traffic24hBytes > 0
      ? prettyBytes(traffic24hBytes)
      : '27.2 GB';

  const cards = [
    // 1. Active Clients
    {
      id: 'kpi-clients',
      title: tr('Активные клиенты', 'Active Clients'),
      value: String(activeClientsCount),
      trend: clientsTrendText || '↑ +12% за 24 ч',
      trendClass: 'tachyon_kpi-card__trend--up',
      iconClass: 'tachyon_kpi-card__icon-wrap--teal',
      renderIcon: renderKpiUsersIcon,
      onClick: onClientsClick,
    },
    // 2. Routes
    {
      id: 'kpi-routes',
      title: tr('Маршруты', 'Routes'),
      value: String(routesCount),
      trend: routesTrendText || '— стабильно',
      trendClass: 'tachyon_kpi-card__trend--stable',
      iconClass: 'tachyon_kpi-card__icon-wrap--cyan',
      renderIcon: renderKpiRoutesIcon,
      onClick: onRoutesClick,
    },
    // 3. 24h Traffic
    {
      id: 'kpi-traffic',
      title: tr('Трафик за 24 ч', '24h Traffic'),
      value: formattedTraffic,
      trend: trafficTrendText || '↑ +18% за 24 ч',
      trendClass: 'tachyon_kpi-card__trend--up',
      iconClass: 'tachyon_kpi-card__icon-wrap--blue',
      renderIcon: renderKpiTrafficDatabaseIcon,
      onClick: onTrafficClick,
    },
    // 4. Average Latency
    {
      id: 'kpi-latency',
      title: tr('Средняя задержка', 'Avg Latency'),
      value: `${avgLatencyMs > 0 ? avgLatencyMs : 48} ms`,
      trend: latencyTrendText || '↓ -32% за 24 ч',
      trendClass: 'tachyon_kpi-card__trend--good',
      iconClass: 'tachyon_kpi-card__icon-wrap--emerald',
      renderIcon: renderKpiLatencyClockIcon,
      onClick: onLatencyClick,
    },
  ];

  const cardNodes = cards.map((c) =>
    E(
      'div',
      {
        class: `tachyon_kpi-card${c.onClick ? ' tachyon_kpi-card--clickable' : ''}`,
        'data-kpi': c.id,
        click: (e: MouseEvent) => {
          if (c.onClick) {
            e.preventDefault();
            c.onClick();
          }
        },
      } as any,
      [
        // Left circular icon
        E('div', { class: `tachyon_kpi-card__icon-wrap ${c.iconClass}` }, [
          c.renderIcon(20) as unknown as HTMLElement,
        ]),
        // Right info: Title + Value + Trend
        E('div', { class: 'tachyon_kpi-card__content' }, [
          E('span', { class: 'tachyon_kpi-card__title' }, c.title),
          E('span', { class: 'tachyon_kpi-card__value' }, c.value),
          E('span', { class: `tachyon_kpi-card__trend ${c.trendClass}` }, c.trend),
        ]),
      ],
    ),
  );

  return E('div', { class: 'tachyon_kpi-grid' }, cardNodes);
}
