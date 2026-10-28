/* eslint-disable @typescript-eslint/no-explicit-any */
import { svgEl } from '../../../../helpers';
import { prettyBytes } from '../../../../helpers/prettyBytes';
import { tr } from '../../../helpers/i18n';
import { getTrafficSplinePoints, TIMEFRAME_OPTIONS } from '../trafficHistory';

export interface ITrafficChartProps {
  inboundRateBps?: number;
  outboundRateBps?: number;
  totalInboundBytes?: number;
  totalOutboundBytes?: number;
  inboundPoints?: [number, number][];
  outboundPoints?: [number, number][];
  timeframe?: string;
  onTimeframeChange?: (tf: string) => void;
}

// Generate smooth cubic Bezier curve string from array of [x, y] points
function pointsToSpline(points: [number, number][]): string {
  if (points.length === 0) return '';
  if (points.length === 1) return `M ${points[0][0]},${points[0][1]}`;

  let d = `M ${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? i : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1];

    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;

    d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

export function renderTrafficChart(props: ITrafficChartProps = {}): HTMLElement {
  const timeframe = props.timeframe || '24 часа';
  const inRate = props.inboundRateBps || 0;
  const outRate = props.outboundRateBps || 0;
  const totalTraffic =
    (props.totalInboundBytes || 0) + (props.totalOutboundBytes || 0);

  const calculatedSpline = getTrafficSplinePoints(
    inRate,
    outRate,
    totalTraffic,
    timeframe,
  );
  const yTicks = calculatedSpline.yTicks;
  const xTicks = calculatedSpline.xTicks;

  const inboundPoints = props.inboundPoints || calculatedSpline.inboundPoints;
  const outboundPoints = props.outboundPoints || calculatedSpline.outboundPoints;

  const inLinePath = pointsToSpline(inboundPoints);
  const outLinePath = pointsToSpline(outboundPoints);

  const inAreaPath = `${inLinePath} L 615,185 L 50,185 Z`;
  const outAreaPath = `${outLinePath} L 615,185 L 50,185 Z`;

  // SVG Elements
  const defs = svgEl('defs', {}, [
    svgEl(
      'linearGradient',
      {
        id: 'tachyon_inbound_gradient',
        x1: '0',
        y1: '0',
        x2: '0',
        y2: '1',
      },
      [
        svgEl('stop', { offset: '0%', 'stop-color': '#00d2ff', 'stop-opacity': '0.35' }),
        svgEl('stop', { offset: '100%', 'stop-color': '#00d2ff', 'stop-opacity': '0.0' }),
      ],
    ),
    svgEl(
      'linearGradient',
      {
        id: 'tachyon_outbound_gradient',
        x1: '0',
        y1: '0',
        x2: '0',
        y2: '1',
      },
      [
        svgEl('stop', { offset: '0%', 'stop-color': '#10b981', 'stop-opacity': '0.28' }),
        svgEl('stop', { offset: '100%', 'stop-color': '#10b981', 'stop-opacity': '0.0' }),
      ],
    ),
  ]);

  // Grid lines and Y labels
  const gridElements: SVGElement[] = [];
  yTicks.forEach((t) => {
    gridElements.push(
      svgEl('line', {
        x1: '48',
        y1: String(t.y),
        x2: '615',
        y2: String(t.y),
        stroke: 'rgba(255, 255, 255, 0.05)',
        'stroke-width': '1',
      }),
    );
    const yText = svgEl('text', {
      x: '42',
      y: String(t.y + 4),
      'text-anchor': 'end',
      fill: '#64748b',
      'font-size': '10',
      'font-family': 'ui-monospace, monospace',
    });
    yText.textContent = t.label;
    gridElements.push(yText);
  });
  const yAxisGroup = svgEl('g', { id: 'tachyon-chart-y-axis' }, gridElements);

  // X labels
  const xLabelElements: SVGElement[] = [];
  const xStep = (615 - 50) / (xTicks.length - 1);
  xTicks.forEach((lbl, idx) => {
    const xPos = 50 + idx * xStep;
    const xText = svgEl('text', {
      x: String(xPos),
      y: '202',
      'text-anchor': 'middle',
      fill: '#64748b',
      'font-size': '10',
      'font-family': 'ui-monospace, monospace',
    });
    xText.textContent = lbl;
    xLabelElements.push(xText);
  });
  const xAxisGroup = svgEl('g', { id: 'tachyon-chart-x-axis' }, xLabelElements);

  // Construct chart SVG
  const chartSvg = svgEl(
    'svg',
    {
      viewBox: '0 0 635 215',
      class: 'tachyon_traffic-chart__svg',
      preserveAspectRatio: 'xMidYMid meet',
    },
    [
      defs,
      yAxisGroup,
      xAxisGroup,
      // Filled Areas
      svgEl('path', {
        id: 'tachyon-chart-in-area',
        d: inAreaPath,
        fill: 'url(#tachyon_inbound_gradient)',
      }),
      svgEl('path', {
        id: 'tachyon-chart-out-area',
        d: outAreaPath,
        fill: 'url(#tachyon_outbound_gradient)',
      }),
      // Spline Stroke Lines
      svgEl('path', {
        id: 'tachyon-chart-in-stroke',
        d: inLinePath,
        fill: 'none',
        stroke: '#00d2ff',
        'stroke-width': '2.2',
        'stroke-linecap': 'round',
      }),
      svgEl('path', {
        id: 'tachyon-chart-out-stroke',
        d: outLinePath,
        fill: 'none',
        stroke: '#10b981',
        'stroke-width': '2',
        'stroke-linecap': 'round',
      }),
    ],
  );

  // Timeframe Dropdown
  let activeTimeframe = timeframe;
  const tfLabelEl = E(
    'span',
    { id: 'tachyon-chart-timeframe-label' },
    activeTimeframe,
  );

  const dropdownMenuEl = E(
    'div',
    {
      class: 'tachyon_traffic-chart__dropdown-menu',
      id: 'tachyon-chart-timeframe-menu',
    },
    TIMEFRAME_OPTIONS.map((opt) => {
      const isActive =
        opt.label === activeTimeframe || opt.id === activeTimeframe;
      return E(
        'button',
        {
          type: 'button',
          class: `tachyon_traffic-chart__dropdown-item${
            isActive ? ' tachyon_traffic-chart__dropdown-item--active' : ''
          }`,
          click: (e: MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            activeTimeframe = opt.label;
            tfLabelEl.textContent = opt.label;
            dropdownMenuEl.classList.remove(
              'tachyon_traffic-chart__dropdown-menu--open',
            );
            const allItems = dropdownMenuEl.querySelectorAll(
              '.tachyon_traffic-chart__dropdown-item',
            );
            allItems.forEach((btn) =>
              btn.classList.remove(
                'tachyon_traffic-chart__dropdown-item--active',
              ),
            );
            (e.currentTarget as HTMLElement).classList.add(
              'tachyon_traffic-chart__dropdown-item--active',
            );
            props.onTimeframeChange?.(opt.id || opt.label);
          },
        },
        [E('span', {}, opt.label)],
      );
    }),
  );

  const dropdownBtnEl = E(
    'button',
    {
      type: 'button',
      class: 'tachyon_traffic-chart__filter-btn',
      id: 'tachyon-chart-timeframe-btn',
      click: (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dropdownMenuEl.classList.toggle(
          'tachyon_traffic-chart__dropdown-menu--open',
        );
      },
    },
    [
      tfLabelEl,
      svgEl(
        'svg',
        {
          width: '12',
          height: '12',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2',
        },
        [svgEl('polyline', { points: '6 9 12 15 18 9' })],
      ),
    ],
  );

  const dropdownWrapEl = E(
    'div',
    { class: 'tachyon_traffic-chart__dropdown-wrap' },
    [dropdownBtnEl, dropdownMenuEl],
  );

  if (
    typeof document !== 'undefined' &&
    typeof document.addEventListener === 'function'
  ) {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        dropdownWrapEl &&
        typeof dropdownWrapEl.contains === 'function' &&
        !dropdownWrapEl.contains(e.target as Node)
      ) {
        dropdownMenuEl.classList.remove(
          'tachyon_traffic-chart__dropdown-menu--open',
        );
      }
    };
    document.addEventListener('click', handleDocumentClick);
  }

  // Card Header: Title + Controls
  const headerEl = E('div', { class: 'tachyon_traffic-chart__header' }, [
    E(
      'span',
      { class: 'tachyon_traffic-chart__title' },
      tr('Пропускная способность трафика', 'Traffic Throughput'),
    ),
    E('div', { class: 'tachyon_traffic-chart__controls' }, [
      // Live Speed Badge
      E(
        'div',
        {
          class: 'tachyon_traffic-chart__live-badge',
          id: 'tachyon-chart-live-speed',
        },
        [
          E(
            'span',
            { class: 'tachyon_traffic-chart__live-in' },
            `↓ ${prettyBytes(inRate)}/s`,
          ),
          E('span', { class: 'tachyon_traffic-chart__live-sep' }, ' • '),
          E(
            'span',
            { class: 'tachyon_traffic-chart__live-out' },
            `↑ ${prettyBytes(outRate)}/s`,
          ),
        ],
      ),
      // Legend Inbound
      E('div', { class: 'tachyon_traffic-chart__legend-item' }, [
        E('span', { class: 'tachyon_traffic-chart__dot tachyon_traffic-chart__dot--in' }),
        E('span', { class: 'tachyon_traffic-chart__legend-text' }, tr('Входящий', 'Inbound')),
      ]),
      // Legend Outbound
      E('div', { class: 'tachyon_traffic-chart__legend-item' }, [
        E('span', { class: 'tachyon_traffic-chart__dot tachyon_traffic-chart__dot--out' }),
        E('span', { class: 'tachyon_traffic-chart__legend-text' }, tr('Исходящий', 'Outbound')),
      ]),
      // Timeframe Dropdown Wrap
      dropdownWrapEl,
    ]),
  ]);

  return E(
    'div',
    { class: 'tachyon_traffic-chart-card', 'data-card': 'traffic-throughput' } as any,
    [headerEl, E('div', { class: 'tachyon_traffic-chart__canvas-wrap' }, [chartSvg])],
  );
}

export function updateChartSplinePaths(
  inboundPoints: [number, number][],
  outboundPoints: [number, number][],
  inboundRateBps?: number,
  outboundRateBps?: number,
  yTicks?: { label: string; y: number }[],
  xTicks?: string[],
): void {
  if (typeof document === 'undefined') return;

  const inLinePath = pointsToSpline(inboundPoints);
  const outLinePath = pointsToSpline(outboundPoints);
  const inAreaPath = `${inLinePath} L 615,185 L 50,185 Z`;
  const outAreaPath = `${outLinePath} L 615,185 L 50,185 Z`;

  const inAreaEl = document.getElementById('tachyon-chart-in-area');
  const outAreaEl = document.getElementById('tachyon-chart-out-area');
  const inStrokeEl = document.getElementById('tachyon-chart-in-stroke');
  const outStrokeEl = document.getElementById('tachyon-chart-out-stroke');

  if (inAreaEl) inAreaEl.setAttribute('d', inAreaPath);
  if (outAreaEl) outAreaEl.setAttribute('d', outAreaPath);
  if (inStrokeEl) inStrokeEl.setAttribute('d', inLinePath);
  if (outStrokeEl) outStrokeEl.setAttribute('d', outLinePath);

  if (yTicks && yTicks.length > 0) {
    const yGroup = document.getElementById('tachyon-chart-y-axis');
    if (yGroup) {
      const textNodes = yGroup.querySelectorAll('text');
      yTicks.forEach((t, i) => {
        if (textNodes[i]) {
          textNodes[i].textContent = t.label;
        }
      });
    }
  }

  if (xTicks && xTicks.length > 0) {
    const xGroup = document.getElementById('tachyon-chart-x-axis');
    if (xGroup) {
      const textNodes = xGroup.querySelectorAll('text');
      xTicks.forEach((lbl, i) => {
        if (textNodes[i]) {
          textNodes[i].textContent = lbl;
        }
      });
    }
  }

  if (
    typeof inboundRateBps === 'number' ||
    typeof outboundRateBps === 'number'
  ) {
    const liveSpeedEl = document.getElementById('tachyon-chart-live-speed');
    if (liveSpeedEl) {
      const inText = `↓ ${prettyBytes(inboundRateBps || 0)}/s`;
      const outText = `↑ ${prettyBytes(outboundRateBps || 0)}/s`;
      liveSpeedEl.replaceChildren(
        E('span', { class: 'tachyon_traffic-chart__live-in' }, inText),
        E('span', { class: 'tachyon_traffic-chart__live-sep' }, ' • '),
        E('span', { class: 'tachyon_traffic-chart__live-out' }, outText),
      );
    }
  }
}

export { pointsToSpline };
