import {
  renderTopHeader,
  renderMetricKpiGrid,
  renderTrafficChart,
  renderSystemHealthCard,
  renderRoutesTable,
  renderNodesGrid,
  renderHeroBar,
  renderActiveRouteCard,
  renderSections,
  renderWidget,
} from './partials';
import { tr } from '../../helpers/i18n';

export function render() {
  return E(
    'div',
    {
      id: 'dashboard-status',
      class: 'tachyon_dashboard-page tachyon_dashboard-v3',
    },
    [
      // Top Brand Header
      E('div', { id: 'dashboard-top-header' }, [
        renderTopHeader({
          isRunning: true,
        }),
      ]),

      // Main Outer Layout (Sidebar + Central Content Area)
      E('div', { class: 'tachyon_dashboard-v3__layout' }, [
        // Left Sidebar Navigation
        E('div', { id: 'dashboard-sidebar' }),

        // Central Content Area
        E('main', { class: 'tachyon_dashboard-v3__main' }, [
          // Title Banner
          E('div', { class: 'tachyon_dashboard-v3__title-block' }, [
            E(
              'h1',
              { class: 'tachyon_dashboard-v3__page-title' },
              tr('Обзор трафика', 'Traffic Overview'),
            ),
            E(
              'p',
              { class: 'tachyon_dashboard-v3__page-subtitle' },
              tr(
                'Состояние маршрутов и инфраструктуры в реальном времени',
                'Real-time status of routes and infrastructure',
              ),
            ),
          ]),

          // Tier 1: 4 Top KPI Cards
          E(
            'div',
            { id: 'dashboard-kpi-row', class: 'tachyon_dashboard-v3__kpi-wrap' },
            [
              renderMetricKpiGrid({
                activeClientsCount: 105,
                routesCount: 3,
                traffic24hBytes: 29205073920,
                avgLatencyMs: 48,
              }),
            ],
          ),

          // Tier 2: Mid 2-Column Split: Chart (65%) + System Health (35%)
          E('div', { class: 'tachyon_dashboard-v3__mid-split' }, [
            E(
              'div',
              {
                id: 'dashboard-traffic-chart-wrap',
                class: 'tachyon_dashboard-v3__mid-left',
              },
              [
                renderTrafficChart({
                  timeframe: '24 часа',
                }),
              ],
            ),
            E(
              'div',
              {
                id: 'dashboard-system-health-wrap',
                class: 'tachyon_dashboard-v3__mid-right',
              },
              [
                renderSystemHealthCard({
                  allServicesOk: true,
                }),
              ],
            ),
          ]),

          // Tier 3: Routes Table
          E('div', { id: 'dashboard-routes-table-wrap' }, [renderRoutesTable()]),

          // Tier 4: Nodes Grid (4 Cards)
          E('div', { id: 'dashboard-nodes-grid-wrap' }, [renderNodesGrid()]),

          // Hidden backward-compatibility anchors for background processes
          E(
            'div',
            { id: 'dashboard-hero-bar', style: 'display:none' },
            [renderHeroBar({ isRunning: true })],
          ),
          E(
            'div',
            { id: 'dashboard-active-route-card', style: 'display:none' },
            [renderActiveRouteCard({ isLoading: true })],
          ),
          E('div', { id: 'dashboard-widget-inbounds', style: 'display:none' }),
          E(
            'div',
            { id: 'dashboard-sections-hub', style: 'display:none' },
            [
              E(
                'div',
                { id: 'dashboard-sections-grid' },
                renderSections({
                  loading: true,
                  failed: false,
                  section: {
                    code: '',
                    sectionName: '',
                    displayName: '',
                    outbounds: [],
                    withTagSelect: false,
                  },
                  onTestLatency: () => {},
                  onChooseOutbound: () => {},
                  onCopyOutbound: () => {},
                  onShowUrlTestInfo: () => {},
                  onShowPriorityInfo: () => {},
                  onUpdateSubscription: () => {},
                  latencyFetching: false,
                  latencyProgress: undefined,
                  subscriptionUpdating: false,
                  selectorSwitchingTag: undefined,
                }),
              ),
            ],
          ),
          E(
            'div',
            { id: 'dashboard-widgets-sections-list', style: 'display:none' },
            [
              renderWidget({
                loading: true,
                failed: false,
                title: '',
                items: [],
              }),
            ],
          ),
          E(
            'div',
            { id: 'dashboard-widget-system-services', style: 'display:none' },
            [
              renderWidget({
                loading: true,
                failed: false,
                title: '',
                items: [],
              }),
            ],
          ),
          E(
            'div',
            { id: 'dashboard-connections-grid', style: 'display:none' },
            [],
          ),
          E(
            'div',
            { id: 'dashboard-widget-tailscale', style: 'display:none' },
            [],
          ),
        ]),
      ]),
    ],
  );
}
