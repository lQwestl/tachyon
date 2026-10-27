import {
  renderHeroBar,
  renderKpiRow,
  renderActiveRouteCard,
  renderSections,
  renderWidget,
} from './partials';

export function render() {
  return E(
    'div',
    {
      id: 'dashboard-status',
      class: 'tachyon_dashboard-page',
    },
    [
      E('div', { class: 'tachyon_dashboard-page__content' }, [
        // Tier 1: Hero Status Bar
        E('div', { id: 'dashboard-hero-bar' }, [
          renderHeroBar({
            isRunning: true,
            version: '',
            uptimeText: '',
            routingModeText: '',
            restarting: false,
          }),
        ]),

        // Tier 2: 4-Card KPI Row
        E('div', { id: 'dashboard-kpi-row' }, [
          renderKpiRow({
            downSpeed: 0,
            upSpeed: 0,
            totalDown: 0,
            totalUp: 0,
            latency: -1,
            clientsCount: 0,
            isLoading: true,
          }),
        ]),

        // Tier 3: 2-Column Mid Grid (Inbounds list + Active route card)
        E('div', { id: 'dashboard-mid-grid', class: 'tachyon_mid-grid' }, [
          E('div', {
            id: 'dashboard-widget-inbounds',
            class: 'tachyon_mid-grid__col',
          }),
          E(
            'div',
            {
              id: 'dashboard-active-route-card',
              class: 'tachyon_mid-grid__col',
            },
            [
              renderActiveRouteCard({
                isLoading: true,
              }),
            ],
          ),
        ]),

        // Service stopped notice (hidden while running)
        E(
          'div',
          {
            class: 'tachyon_dashboard-page__service-stopped',
            role: 'status',
          },
          _(
            'Tachyon service is stopped. Start the service to display the dashboard.',
          ),
        ),

        // Tier 4: Section Hub & Country Filter & Node Cards
        E(
          'div',
          { id: 'dashboard-sections-hub', class: 'tachyon_sections-hub' },
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

        // Hidden backward-compatibility anchors
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
    ],
  );
}
