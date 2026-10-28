import { svgEl } from '../../../../helpers';

export function renderTachyonBrandLogo(size = 22): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 24 24',
      fill: 'none',
    },
    [
      svgEl('path', {
        d: 'M3 5.5C3 4.67 3.67 4 4.5 4H19.5C20.33 4 21 4.67 21 5.5C21 6.33 20.33 7 19.5 7H13.5V19.5C13.5 20.33 12.83 21 12 21C11.17 21 10.5 20.33 10.5 19.5V7H4.5C3.67 7 3 6.33 3 5.5Z',
        fill: '#00d2ff',
      }),
      svgEl('circle', {
        cx: '12',
        cy: '5.5',
        r: '2',
        fill: '#ffffff',
      }),
    ],
  );
}

export function renderYouTubeBrandIcon(size = 28): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 28 28',
      fill: 'none',
      class: 'tachyon_brand-icon tachyon_brand-icon--youtube',
    },
    [
      svgEl('rect', {
        width: '28',
        height: '28',
        rx: '7',
        fill: '#ff0000',
      }),
      svgEl('path', {
        d: 'M19 14L11 9.5V18.5L19 14Z',
        fill: '#ffffff',
      }),
    ],
  );
}

export function renderDiscordBrandIcon(size = 28): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 28 28',
      fill: 'none',
      class: 'tachyon_brand-icon tachyon_brand-icon--discord',
    },
    [
      svgEl('rect', {
        width: '28',
        height: '28',
        rx: '7',
        fill: '#5865f2',
      }),
      svgEl('path', {
        d: 'M19.5 8.5C18.2 7.9 16.9 7.5 15.5 7.4C15.3 7.7 15.1 8.2 15 8.5C13.5 8.3 12 8.3 10.5 8.5C10.4 8.2 10.2 7.7 10 7.4C8.6 7.5 7.3 7.9 6 8.5C4 11.5 3.5 14.4 3.8 17.3C5.5 18.6 7.1 19.4 8.7 19.9C9.1 19.3 9.5 18.7 9.8 18C9.2 17.8 8.7 17.5 8.2 17.2C8.3 17.1 8.5 17 8.6 16.9C11.8 18.4 15.3 18.4 18.5 16.9C18.6 17 18.8 17.1 18.9 17.2C18.4 17.5 17.9 17.8 17.3 18C17.6 18.7 18 19.3 18.4 19.9C20 19.4 21.6 18.6 23.3 17.3C23.7 13.8 22.7 10.9 19.5 8.5ZM9.7 15.2C8.8 15.2 8 14.3 8 13.3C8 12.3 8.7 11.4 9.7 11.4C10.7 11.4 11.4 12.3 11.4 13.3C11.4 14.3 10.7 15.2 9.7 15.2ZM15.8 15.2C14.8 15.2 14.1 14.3 14.1 13.3C14.1 12.3 14.8 11.4 15.8 11.4C16.8 11.4 17.5 12.3 17.5 13.3C17.5 14.3 16.8 15.2 15.8 15.2Z',
        fill: '#ffffff',
      }),
    ],
  );
}

export function renderMainRouteBrandIcon(size = 28): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 28 28',
      fill: 'none',
      class: 'tachyon_brand-icon tachyon_brand-icon--main',
    },
    [
      svgEl('rect', {
        width: '28',
        height: '28',
        rx: '7',
        fill: '#0284c7',
      }),
      svgEl('circle', {
        cx: '14',
        cy: '14',
        r: '7',
        stroke: '#ffffff',
        'stroke-width': '1.5',
      }),
      svgEl('ellipse', {
        cx: '14',
        cy: '14',
        rx: '3.5',
        ry: '7',
        stroke: '#ffffff',
        'stroke-width': '1.5',
      }),
      svgEl('line', {
        x1: '7',
        y1: '14',
        x2: '21',
        y2: '14',
        stroke: '#ffffff',
        'stroke-width': '1.5',
      }),
    ],
  );
}

export function renderShieldRouteBrandIcon(size = 28): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 28 28',
      fill: 'none',
      class: 'tachyon_brand-icon tachyon_brand-icon--shield',
    },
    [
      svgEl('rect', {
        width: '28',
        height: '28',
        rx: '7',
        fill: '#1e3a8a',
      }),
      svgEl('path', {
        d: 'M14 6L7 9.5V14.5C7 18.5 10 21.5 14 22.5C18 21.5 21 18.5 21 14.5V9.5L14 6Z',
        stroke: '#38bdf8',
        'stroke-width': '1.8',
        fill: 'rgba(56, 189, 248, 0.25)',
      }),
    ],
  );
}

export function renderTestingRouteBrandIcon(size = 28): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 28 28',
      fill: 'none',
      class: 'tachyon_brand-icon tachyon_brand-icon--testing',
    },
    [
      svgEl('rect', {
        width: '28',
        height: '28',
        rx: '7',
        fill: '#0f766e',
      }),
      svgEl('path', {
        d: 'M11 6H17M13 6V11L8.5 19C7.8 20.2 8.7 22 10.1 22H17.9C19.3 22 20.2 20.2 19.5 19L15 11V6',
        stroke: '#2dd4bf',
        'stroke-width': '1.8',
        fill: 'rgba(45, 212, 191, 0.25)',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      }),
    ],
  );
}

export function renderKpiUsersIcon(size = 18): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    [
      svgEl('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }),
      svgEl('circle', { cx: '9', cy: '7', r: '4' }),
      svgEl('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }),
      svgEl('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' }),
    ],
  );
}

export function renderKpiRoutesIcon(size = 18): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    [
      svgEl('line', { x1: '6', y1: '3', x2: '6', y2: '15' }),
      svgEl('circle', { cx: '18', cy: '6', r: '3' }),
      svgEl('circle', { cx: '6', cy: '18', r: '3' }),
      svgEl('path', { d: 'M18 9a9 9 0 0 1-9 9' }),
    ],
  );
}

export function renderKpiTrafficDatabaseIcon(size = 18): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    [
      svgEl('ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }),
      svgEl('path', { d: 'M21 12c0 1.66-4 3-9 3s-9-1.34-9-3' }),
      svgEl('path', { d: 'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5' }),
    ],
  );
}

export function renderKpiLatencyClockIcon(size = 18): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    [
      svgEl('circle', { cx: '12', cy: '12', r: '10' }),
      svgEl('polyline', { points: '12 6 12 12 16 14' }),
    ],
  );
}

export function renderSidebarOverviewIcon(size = 16): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
    },
    [
      svgEl('rect', { x: '3', y: '3', width: '7', height: '7', rx: '1' }),
      svgEl('rect', { x: '14', y: '3', width: '7', height: '7', rx: '1' }),
      svgEl('rect', { x: '14', y: '14', width: '7', height: '7', rx: '1' }),
      svgEl('rect', { x: '3', y: '14', width: '7', height: '7', rx: '1' }),
    ],
  );
}

export function renderSidebarRoutesIcon(size = 16): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
    },
    [
      svgEl('circle', { cx: '6', cy: '6', r: '3' }),
      svgEl('circle', { cx: '6', cy: '18', r: '3' }),
      svgEl('circle', { cx: '18', cy: '12', r: '3' }),
      svgEl('path', { d: 'M8.5 7.5L15.5 10.5' }),
      svgEl('path', { d: 'M8.5 16.5L15.5 13.5' }),
    ],
  );
}

export function renderSidebarNodesIcon(size = 16): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
    },
    [
      svgEl('rect', { x: '2', y: '2', width: '20', height: '8', rx: '2' }),
      svgEl('rect', { x: '2', y: '14', width: '20', height: '8', rx: '2' }),
      svgEl('line', { x1: '6', y1: '6', x2: '6.01', y2: '6' }),
      svgEl('line', { x1: '6', y1: '18', x2: '6.01', y2: '18' }),
    ],
  );
}

export function renderSidebarClientsIcon(size = 16): SVGElement {
  return renderKpiUsersIcon(size);
}

export function renderSidebarAnalyticsIcon(size = 16): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    [
      svgEl('polyline', { points: '22 12 18 12 15 21 9 3 6 12 2 12' }),
    ],
  );
}

export function renderSidebarSettingsIcon(size = 16): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    [
      svgEl('circle', { cx: '12', cy: '12', r: '3' }),
      svgEl('path', {
        d: 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z',
      }),
    ],
  );
}

export function renderChevronRightIcon(size = 14): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    [svgEl('polyline', { points: '9 18 15 12 9 6' })],
  );
}

export function renderRefreshIcon(size = 14): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(size),
      height: String(size),
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    [
      svgEl('polyline', { points: '23 4 23 10 17 10' }),
      svgEl('path', { d: 'M20.49 15a9 9 0 1 1-2.12-9.36L23 10' }),
    ],
  );
}
