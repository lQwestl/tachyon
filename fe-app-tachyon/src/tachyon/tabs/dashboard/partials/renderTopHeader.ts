/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderTachyonBrandLogo } from './dashboardIconsV3';
import { tr } from '../../../helpers/i18n';
import { svgEl } from '../../../../helpers';

export interface IRenderTopHeaderProps {
  isRunning?: boolean;
  systemStatusText?: string;
  lastUpdatedText?: string;
  currentLang?: string;
  onLanguageClick?: () => void;
  onProductionBadgeClick?: () => void;
}

export function renderTopHeader({
  isRunning = true,
  systemStatusText,
  lastUpdatedText,
  currentLang = 'RU',
  onLanguageClick,
  onProductionBadgeClick,
}: IRenderTopHeaderProps = {}): HTMLElement {
  const statusLabel =
    systemStatusText || (isRunning ? tr('Система работает', 'System active') : tr('Остановлено', 'Stopped'));

  const now = new Date();
  const formattedDate =
    lastUpdatedText ||
    `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  // Left Section: Logo + Title + Capsule Badge
  const brandLeft = E('div', { class: 'tachyon_top-header__brand' }, [
    renderTachyonBrandLogo(22) as unknown as HTMLElement,
    E('div', { class: 'tachyon_top-header__title-wrap' }, [
      E('span', { class: 'tachyon_top-header__title' }, 'Tachyon'),
      E('span', { class: 'tachyon_top-header__subtitle' }, ' / Traffic Control'),
    ]),
    E(
      'button',
      {
        type: 'button',
        class: 'tachyon_top-header__prod-badge',
        title: 'Environment: Production',
        click: (e: MouseEvent) => {
          e.preventDefault();
          onProductionBadgeClick?.();
        },
      },
      'PRODUCTION',
    ),
  ]);

  // Right Section: Status Indicator + Divider + Update Timestamp + Language
  const brandRight = E('div', { class: 'tachyon_top-header__meta' }, [
    // Status
    E(
      'div',
      {
        class: `tachyon_top-header__status-item ${
          isRunning
            ? 'tachyon_top-header__status-item--online'
            : 'tachyon_top-header__status-item--offline'
        }`,
      },
      [
        E('span', { class: 'tachyon_top-header__status-dot' }),
        E('span', { class: 'tachyon_top-header__status-text' }, statusLabel),
      ],
    ),
    // Divider
    E('span', { class: 'tachyon_top-header__divider' }, '|'),
    // Timestamp
    E('span', { class: 'tachyon_top-header__updated' }, [
      `${tr('Последнее обновление:', 'Last updated:')} `,
      E('span', { class: 'tachyon_top-header__updated-time' }, formattedDate),
    ]),
    // Language Dropdown
    E(
      'button',
      {
        type: 'button',
        class: 'tachyon_top-header__lang-btn',
        title: 'Switch language / Сменить язык',
        click: (e: MouseEvent) => {
          e.preventDefault();
          onLanguageClick?.();
        },
      },
      [
        E('span', { class: 'tachyon_top-header__lang-flag' }, currentLang.toUpperCase().includes('EN') ? '🇺🇸' : '🇷🇺'),
        E('span', { class: 'tachyon_top-header__lang-code' }, currentLang.toUpperCase().includes('EN') ? 'EN' : 'RU'),
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
        ) as unknown as HTMLElement,
      ],
    ),
  ]);

  return E(
    'header',
    { class: 'tachyon_top-header', 'data-header': 'top-brand' } as any,
    [brandLeft, brandRight],
  );
}
