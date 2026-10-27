/* eslint-disable @typescript-eslint/no-explicit-any */
import { tr } from '../../../helpers/i18n';
import { renderTachyonLogo } from './dashboardIcons';

export interface IRenderHeroBarProps {
  isRunning: boolean;
  version?: string;
  uptimeText?: string;
  routingModeText?: string;
  restarting?: boolean;
  onRestart?: () => void;
}

export function renderHeroBar({
  isRunning,
  version = '',
  uptimeText = '',
  routingModeText = '',
  restarting: _restarting = false,
  onRestart: _onRestart,
}: IRenderHeroBarProps): HTMLElement {
  const statusClass = isRunning
    ? 'tachyon_hero-status--running'
    : 'tachyon_hero-status--stopped';
  const statusLabel = isRunning
    ? tr('Работает', 'Active')
    : tr('Остановлен', 'Stopped');

  const brandChildren: HTMLElement[] = [
    renderTachyonLogo(30) as unknown as HTMLElement,
    E('span', { class: 'tachyon_hero-title' }, 'Tachyon'),
  ];
  if (version && version !== 'loading' && !version.includes('loading')) {
    brandChildren.push(
      E(
        'span',
        { class: 'tachyon_hero-version' },
        version.startsWith('v') ? version : `v${version}`,
      ),
    );
  }

  const centerChildren: HTMLElement[] = [];
  if (uptimeText) {
    centerChildren.push(
      E('div', { class: 'tachyon_hero-meta-item' }, [
        E(
          'span',
          { class: 'tachyon_hero-meta-label' },
          tr('Аптайм:', 'Uptime:'),
        ),
        E('span', { class: 'tachyon_hero-meta-value' }, uptimeText),
      ]),
    );
  }
  if (routingModeText) {
    centerChildren.push(
      E('div', { class: 'tachyon_hero-mode-badge' }, [
        E('span', { class: 'tachyon_hero-mode-badge__icon' }, '🔀'),
        E('span', { class: 'tachyon_hero-mode-badge__text' }, routingModeText),
      ]),
    );
  }

  return E('div', { class: 'tachyon_hero-bar', 'data-tier': 'hero' } as any, [
    // Left: Logo + Status Dot
    E('div', { class: 'tachyon_hero-bar__left' }, [
      E('div', { class: 'tachyon_hero-brand' }, brandChildren),
      E('div', { class: `tachyon_hero-status ${statusClass}` }, [
        E('span', { class: 'tachyon_hero-status__dot' }),
        E('span', { class: 'tachyon_hero-status__text' }, statusLabel),
      ]),
    ]),

    // Center: Uptime & Mode Badge
    E('div', { class: 'tachyon_hero-bar__center' }, centerChildren),
  ]);
}
