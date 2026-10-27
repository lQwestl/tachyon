import { svgEl } from '../../../../helpers';

function createSvg(
  size: number,
  children: (SVGElement | null | undefined)[],
  extraClass = '',
) {
  return svgEl(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: String(size),
      height: String(size),
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2.2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      class: `tachyon_icon ${extraClass}`.trim(),
    },
    children,
  );
}

/** Tachyon Stylized Futuristic Winged 'T' Logo Mark */
export function renderTachyonLogo(size = 28): SVGElement {
  return svgEl(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: String(size),
      height: String(size),
      viewBox: '0 0 32 32',
      fill: 'none',
      class: 'tachyon_hero-logo-svg',
    },
    [
      // Top aerodynamic wing/crossbar
      svgEl('path', {
        d: 'M4 8C8 7 14 6.5 16 6.5C18 6.5 24 7 28 8C27 10 24.5 11 16 11C7.5 11 5 10 4 8Z',
        fill: '#38bdf8',
      }),
      // Left swept wing
      svgEl('path', {
        d: 'M6 10.5C9 12 13 15 14.5 21L14.5 27C14.5 27 12 21 7.5 18C5 16 5 13 6 10.5Z',
        fill: '#22d3ee',
        opacity: '0.9',
      }),
      // Right swept wing
      svgEl('path', {
        d: 'M26 10.5C23 12 19 15 17.5 21L17.5 27C17.5 27 20 21 24.5 18C27 16 27 13 26 10.5Z',
        fill: '#60a5fa',
        opacity: '0.9',
      }),
      // Center dynamic diamond / core
      svgEl('path', {
        d: 'M16 9L18 13.5L16 17L14 13.5Z',
        fill: '#ffffff',
        opacity: '0.95',
      }),
    ],
  );
}

/** Dynamic moving sparkline wave graph for download speed KPI */
export function renderSparklineSvg(width = 84, height = 24): SVGElement {
  return svgEl(
    'svg',
    {
      width: String(width),
      height: String(height),
      viewBox: '0 0 84 24',
      fill: 'none',
      class: 'tachyon_kpi-sparkline',
    },
    [
      svgEl('defs', {}, [
        svgEl(
          'linearGradient',
          {
            id: 'tachyon-wave-grad',
            x1: '0',
            y1: '0',
            x2: '0',
            y2: '1',
          },
          [
            svgEl('stop', {
              offset: '0%',
              'stop-color': '#38bdf8',
              'stop-opacity': '0.35',
            }),
            svgEl('stop', {
              offset: '100%',
              'stop-color': '#38bdf8',
              'stop-opacity': '0',
            }),
          ],
        ),
      ]),
      svgEl('g', { class: 'tachyon_kpi-wave-track' }, [
        svgEl('path', {
          d: 'M 0 16 C 14 6, 28 22, 42 13 C 56 6, 70 20, 84 16 C 98 6, 112 22, 126 13 C 140 6, 154 20, 168 16 L 168 24 L 0 24 Z',
          fill: 'url(#tachyon-wave-grad)',
        }),
        svgEl('path', {
          d: 'M 0 16 C 14 6, 28 22, 42 13 C 56 6, 70 20, 84 16 C 98 6, 112 22, 126 13 C 140 6, 154 20, 168 16',
          stroke: '#38bdf8',
          'stroke-width': '2.2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        }),
      ]),
    ],
  );
}

/** Activity / Pulse wave for Latency */
export function renderKpiPulseIcon(size = 14): SVGElement {
  return createSvg(size, [
    svgEl('path', { d: 'M22 12h-4l-3 9L9 3l-3 9H2' }),
  ]);
}

/** Arrow Down with bar for Download */
export function renderKpiDownloadIcon(size = 18): SVGElement {
  return createSvg(size, [
    svgEl('path', { d: 'M12 3v13' }),
    svgEl('path', { d: 'm6 11 6 6 6-6' }),
    svgEl('path', { d: 'M4 21h16' }),
  ]);
}

/** Arrow Up with bar for Upload */
export function renderKpiUploadIcon(size = 18): SVGElement {
  return createSvg(size, [
    svgEl('path', { d: 'M12 21V8' }),
    svgEl('path', { d: 'm6 13 6-6 6 6' }),
    svgEl('path', { d: 'M4 3h16' }),
  ]);
}

/** Lightning Zap for Latency */
export function renderKpiLatencyIcon(size = 18): SVGElement {
  return createSvg(size, [
    svgEl('polygon', {
      points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2',
    }),
  ]);
}

/** Users Group for Connected Clients */
export function renderKpiClientsIcon(size = 18): SVGElement {
  return createSvg(size, [
    svgEl('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }),
    svgEl('circle', { cx: '9', cy: '7', r: '4' }),
    svgEl('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }),
    svgEl('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' }),
  ]);
}

/** Server Rack for Inbounds */
export function renderInboundsServerIcon(size = 18): SVGElement {
  return createSvg(size, [
    svgEl('rect', { width: '20', height: '8', x: '2', y: '2', rx: '2', ry: '2' }),
    svgEl('rect', { width: '20', height: '8', x: '2', y: '14', rx: '2', ry: '2' }),
    svgEl('line', { x1: '6', x2: '6.01', y1: '6', y2: '6' }),
    svgEl('line', { x1: '6', x2: '6.01', y1: '18', y2: '18' }),
  ]);
}

/** Compass / Navigation for Outbound Route */
export function renderOutboundRouteIcon(size = 18): SVGElement {
  return createSvg(size, [
    svgEl('polygon', { points: '3 11 22 2 13 21 11 13 3 11' }),
  ]);
}

/** User Profile outline icon */
export function renderUserProfileIcon(size = 14): SVGElement {
  return createSvg(size, [
    svgEl('path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' }),
    svgEl('circle', { cx: '12', cy: '7', r: '4' }),
  ]);
}

/** Support Chat bubble icon */
export function renderSupportChatIcon(size = 14): SVGElement {
  return createSvg(size, [
    svgEl('path', {
      d: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
    }),
  ]);
}

/** Info Details icon */
export function renderInfoDetailsIcon(size = 14): SVGElement {
  return createSvg(size, [
    svgEl('circle', { cx: '12', cy: '12', r: '10' }),
    svgEl('line', { x1: '12', y1: '16', x2: '12', y2: '12' }),
    svgEl('line', { x1: '12', y1: '8', x2: '12.01', y2: '8' }),
  ]);
}

/** Gateway / Network Routing icon for KPI */
export function renderGatewayNetworkIcon(size = 18): SVGElement {
  return createSvg(size, [
    svgEl('rect', { width: '18', height: '12', x: '3', y: '4', rx: '2' }),
    svgEl('line', { x1: '3', y1: '10', x2: '21', y2: '10' }),
    svgEl('line', { x1: '7', y1: '16', x2: '7', y2: '20' }),
    svgEl('line', { x1: '17', y1: '16', x2: '17', y2: '20' }),
  ]);
}

/** QR Code Mini icon */
export function renderQrCodeSvgIcon(size = 14): SVGElement {
  return createSvg(size, [
    svgEl('rect', { width: '5', height: '5', x: '3', y: '3', rx: '1' }),
    svgEl('rect', { width: '5', height: '5', x: '16', y: '3', rx: '1' }),
    svgEl('rect', { width: '5', height: '5', x: '3', y: '16', rx: '1' }),
    svgEl('path', { d: 'M21 16h-3a2 2 0 0 0-2 2v3' }),
    svgEl('path', { d: 'M21 21v.01' }),
    svgEl('path', { d: 'M12 7v3a2 2 0 0 1-2 2H7' }),
    svgEl('path', { d: 'M3 12h.01' }),
    svgEl('path', { d: 'M12 3h.01' }),
    svgEl('path', { d: 'M12 16v.01' }),
    svgEl('path', { d: 'M16 12h1' }),
    svgEl('path', { d: 'M21 12v.01' }),
    svgEl('path', { d: 'M12 21v-1' }),
  ]);
}

/** Copy link chain icon */
export function renderCopyLinkSvgIcon(size = 14): SVGElement {
  return createSvg(size, [
    svgEl('path', {
      d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71',
    }),
    svgEl('path', {
      d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
    }),
  ]);
}

/** Device: Laptop / Computer icon */
export function renderDeviceLaptopIcon(size = 16): SVGElement {
  return createSvg(size, [
    svgEl('rect', { width: '16', height: '10', x: '4', y: '4', rx: '1' }),
    svgEl('path', { d: 'M2 18h20' }),
  ]);
}

/** Device: Phone icon */
export function renderDevicePhoneIcon(size = 16): SVGElement {
  return createSvg(size, [
    svgEl('rect', { width: '12', height: '18', x: '6', y: '3', rx: '2' }),
    svgEl('line', { x1: '11', y1: '17', x2: '13', y2: '17' }),
  ]);
}

/** Radar Network SVG graphic for empty state */
export function renderRadarNetworkSvg(size = 72): SVGElement {
  return svgEl(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: String(size),
      height: String(size),
      viewBox: '0 0 80 80',
      fill: 'none',
      class: 'tachyon_radar-svg',
    },
    [
      svgEl('defs', {}, [
        svgEl(
          'radialGradient',
          {
            id: 'radar-glow',
            cx: '50%',
            cy: '50%',
            r: '50%',
          },
          [
            svgEl('stop', {
              offset: '0%',
              'stop-color': '#22d3ee',
              'stop-opacity': '0.3',
            }),
            svgEl('stop', {
              offset: '100%',
              'stop-color': '#22d3ee',
              'stop-opacity': '0',
            }),
          ],
        ),
      ]),
      // Background glow circle
      svgEl('circle', {
        cx: '40',
        cy: '40',
        r: '36',
        fill: 'url(#radar-glow)',
      }),
      // Outer radar ring
      svgEl('circle', {
        cx: '40',
        cy: '40',
        r: '34',
        stroke: '#38bdf8',
        'stroke-width': '1.5',
        'stroke-opacity': '0.4',
        'stroke-dasharray': '3 3',
      }),
      // Middle radar ring
      svgEl('circle', {
        cx: '40',
        cy: '40',
        r: '22',
        stroke: '#38bdf8',
        'stroke-width': '1.5',
        'stroke-opacity': '0.6',
      }),
      // Inner radar ring
      svgEl('circle', {
        cx: '40',
        cy: '40',
        r: '10',
        stroke: '#22d3ee',
        'stroke-width': '1.5',
        'stroke-opacity': '0.8',
      }),
      // Crosshairs
      svgEl('line', {
        x1: '40',
        y1: '6',
        x2: '40',
        y2: '74',
        stroke: '#38bdf8',
        'stroke-width': '1',
        'stroke-opacity': '0.3',
      }),
      svgEl('line', {
        x1: '6',
        y1: '40',
        x2: '74',
        y2: '40',
        stroke: '#38bdf8',
        'stroke-width': '1',
        'stroke-opacity': '0.3',
      }),
      // Radar blip (active target)
      svgEl('circle', {
        cx: '54',
        cy: '28',
        r: '3',
        fill: '#34d399',
        class: 'tachyon_radar-blip',
      }),
      // Center beacon
      svgEl('circle', {
        cx: '40',
        cy: '40',
        r: '2.5',
        fill: '#ffffff',
      }),
    ],
  );
}
