// language=CSS
import { TACHYON_UCI_PACKAGE as TACHYON_CBI_PREFIX } from '../../../constants';

export const styles = `
@font-face {
    font-family: "Twemoji Country Flags";
    src: url("/luci-static/resources/view/tachyon/fonts/TwemojiCountryFlags.woff2") format("woff2");
    font-display: swap;
    font-style: normal;
    font-weight: normal;
    unicode-range: U+1F1E6-1F1FF, U+1F3F4, U+E0062-E0063, U+E0065, U+E0067, U+E006C, U+E006E, U+E0073-E0074, U+E0077, U+E007F;
}

#cbi-${TACHYON_CBI_PREFIX}-dashboard-_mount_node {
    display: block;
    width: 100%;
    max-width: none;
}

#cbi-${TACHYON_CBI_PREFIX}-dashboard-_mount_node > .cbi-value-title {
    display: none;
}

#cbi-${TACHYON_CBI_PREFIX}-dashboard-_mount_node > .cbi-value-field,
#cbi-${TACHYON_CBI_PREFIX}-dashboard-_mount_node > .cbi-value-field > output,
#cbi-${TACHYON_CBI_PREFIX}-dashboard-_mount_node > .cbi-value-field > div,
#cbi-${TACHYON_CBI_PREFIX}-dashboard-_mount_node > div,
#cbi-${TACHYON_CBI_PREFIX}-dashboard-_mount_node > output {
    display: block;
    margin-left: 0;
    width: 100%;
    max-width: none;
    flex: 1 1 100%;
    box-sizing: border-box;
}

#cbi-${TACHYON_CBI_PREFIX}-dashboard > h3 {
    display: none;
}

.tachyon_dashboard-page {
    display: block;
    width: 100%;
    box-sizing: border-box;
    --dashboard-grid-columns: 4;
    --dashboard-grid-min-width: 180px;
    --tachyon-card-bg: var(--background-color-medium, #202024);
    --tachyon-card-border: var(--border-color-low, rgba(255, 255, 255, 0.08));
}

.tachyon_dashboard-page__service-stopped {
    display: none;
    width: 100%;
    min-height: 140px;
    margin-top: 12px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    border: 1px dashed var(--border-color-high, #555);
    border-radius: 6px;
    color: var(--text-color-medium, #888);
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-style: italic;
    text-align: center;
}

.tachyon_dashboard-page--service-stopped .tachyon_dashboard-page__service-stopped {
    display: flex;
}

.tachyon_dashboard-page--service-stopped #dashboard-widgets-sections-list,
.tachyon_dashboard-page--service-stopped #dashboard-connections-grid,
.tachyon_dashboard-page--service-stopped #dashboard-sections-grid,
.tachyon_dashboard-page--service-stopped #dashboard-kpi-row,
.tachyon_dashboard-page--service-stopped #dashboard-mid-grid,
.tachyon_dashboard-page--service-stopped #dashboard-sections-hub {
    display: none !important;
}

@media (max-width: 900px) {
    .tachyon_dashboard-page {
        --dashboard-grid-columns: 2;
    }
}

@media (max-width: 560px) {
    .tachyon_dashboard-page {
        --dashboard-grid-columns: 1;
        --dashboard-grid-min-width: 0;
    }
}

.tachyon_dashboard-page__widgets-section {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
    grid-gap: 12px;
}

#dashboard-widget-system-services {
    display: contents;
}

.tachyon-dual-card {
    min-height: 140px;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}

.tachyon-dual-card--system-pinned {
    border: 1.5px solid rgba(59, 130, 246, 0.35) !important;
    box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.12), 0 4px 12px rgba(59, 130, 246, 0.08);
    background: linear-gradient(180deg, rgba(59, 130, 246, 0.04) 0%, rgba(128, 128, 128, 0.03) 100%);
}

.tachyon-dual-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.15);
}

.tachyon-dual-card__title-text {
    font-size: 13px;
    font-weight: 700;
    color: var(--text-color-high, inherit);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tachyon-dual-card__badge {
    display: inline-flex;
    align-items: center;
    padding: 1px 7px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    background: rgba(16, 185, 129, 0.12);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.28);
    flex-shrink: 0;
}

.tachyon-dual-card__badge--neutral {
    background: rgba(120, 120, 120, 0.12);
    color: var(--text-color-medium, #94a3b8);
    border: 1px solid rgba(120, 120, 120, 0.25);
}

.tachyon-dual-card__body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    align-items: stretch;
    flex: 1 1 auto;
    min-width: 0;
}

.tachyon-dual-card__col {
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.tachyon-dual-card__col:first-child {
    padding-right: 12px;
    border-right: 1px solid rgba(128, 128, 128, 0.12);
}

.tachyon-dual-card__column-title {
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: var(--text-color-medium, #94a3b8);
    margin-bottom: 5px;
    padding-bottom: 3px;
    border-bottom: 1px dashed rgba(128, 128, 128, 0.2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

@media (max-width: 768px) {
    .tachyon-dual-card__body {
        grid-template-columns: 1fr;
        gap: 12px;
    }
    .tachyon-dual-card__col:first-child {
        padding-right: 0;
        border-right: none;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(128, 128, 128, 0.12);
    }
}

.tachyon_dashboard-page__widgets-section__item {
    border: 2px var(--background-color-low, lightgray) solid;
    border-radius: 6px;
    padding: 12px;
    min-width: 0;
    background: rgba(128, 128, 128, 0.03);
    display: flex;
    flex-direction: column;
}

.tachyon_dashboard-page__widgets-section__item__title {
    font-size: 13px;
    font-weight: 700;
    color: var(--text-color-high, inherit);
    margin-bottom: 6px;
    display: block;
    border-bottom: 1px solid rgba(128, 128, 128, 0.15);
    padding-bottom: 4px;
}

.tachyon_dashboard-page__widgets-section__item__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    line-height: 1.5;
    min-height: 24px;
    margin-top: 3px;
    min-width: 0;
}

.tachyon_dashboard-page__widgets-section__item__row--success .tachyon_dashboard-page__widgets-section__item__row__value {
    color: var(--success-color-medium, green);
}

.tachyon_dashboard-page__widgets-section__item__row--error .tachyon_dashboard-page__widgets-section__item__row__value {
    color: var(--error-color-medium, red);
}

.tachyon_dashboard-page__widgets-section__item__row__key {
    white-space: nowrap;
    flex-shrink: 0;
    font-weight: 500;
    opacity: 0.85;
}

.tachyon_dashboard-page__widgets-section__item__row__value {
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-variant-numeric: tabular-nums;
    font-weight: 600;
}

.tachyon-stat--down {
    color: #10b981 !important;
    font-weight: 600;
}

.tachyon-stat--up {
    color: #3b82f6 !important;
    font-weight: 600;
}

.tachyon-stat--session {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12.5px;
}

.tachyon-stat--separator {
    opacity: 0.45;
    font-size: 10px;
    padding: 0 1px;
}

.tachyon-stat--bold {
    font-weight: 700;
    color: var(--text-color-high, inherit);
}

.tachyon_dashboard-page__top-domains-container {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(128, 128, 128, 0.15);
}

.tachyon_dashboard-page__top-domains-header {
    font-size: 12px;
    font-weight: 600;
    opacity: 0.75;
    margin-bottom: 6px;
}

.tachyon_dashboard-page__top-domains-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 8px;
}

.tachyon_dashboard-page__top-domain-chip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    background: rgba(6, 182, 212, 0.08);
    border: 1px solid rgba(6, 182, 212, 0.2);
    border-radius: 6px;
    padding: 4px 10px;
    font-size: 12px;
    color: var(--text-color-high);
    box-sizing: border-box;
    min-width: 0;
}

.tachyon_dashboard-page__top-domain-chip__icon {
    font-size: 11px;
    opacity: 0.85;
    flex-shrink: 0;
}

.tachyon_dashboard-page__top-domain-chip b {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.tachyon_dashboard-page__top-domain-chip__badge {
    font-size: 11px;
    font-weight: 600;
    color: #818cf8;
    background: rgba(99, 102, 241, 0.15);
    padding: 1px 6px;
    border-radius: 4px;
    flex-shrink: 0;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
}

.tachyon_dashboard-page__outbound-section {
    margin-top: 14px;
    background: var(--tachyon-card-bg, #202024);
    border: 1px solid var(--tachyon-card-border, rgba(255, 255, 255, 0.08));
    border-radius: 14px;
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.tachyon_dashboard-page__service-sections-row {
    margin-top: 14px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
    gap: 12px;
    width: 100%;
    box-sizing: border-box;
}

.tachyon_dashboard-page__service-sections-row > .tachyon_dashboard-page__outbound-section {
    margin-top: 0;
}

/* The runtime quarantined this section: sing-box refused the config it
   produced, so the section is not loaded while everything else runs. */
.tachyon_dashboard-page__outbound-section--error {
    border-color: var(--error-color-medium, red);
}

.tachyon_dashboard-page__outbound-section__config-error-badge {
    flex-shrink: 0;
    padding: 1px 6px;
    border-radius: 4px;
    background: var(--error-color-medium, red);
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    cursor: help;
}

.tachyon_dashboard-page__outbound-section__title-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px 10px;
    min-width: 0;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    margin-bottom: 14px;
}

.tachyon_dashboard-page__outbound-section__title-section__title {
    color: var(--text-color-high, #f8fafc);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.02em;
    min-width: 0;
    overflow-wrap: anywhere;
}

.tachyon_dashboard-page__outbound-section__title-section__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
    flex: 0 1 auto;
    flex-wrap: wrap;
}

.tachyon_dashboard-page .btn.tachyon_dashboard-page__outbound-section__subscription-update {
    min-width: 0;
    width: auto;
    height: 30px;
    min-height: 28px;
    padding: 4px 12px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: var(--text-color-high, #e2e8f0);
    cursor: pointer;
    transition: all 0.18s ease;
}

.tachyon_dashboard-page .btn.tachyon_dashboard-page__outbound-section__subscription-update:hover:not([disabled]) {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    color: #ffffff;
    transform: translateY(-1px);
}

.tachyon_dashboard-page__outbound-section__subscription-update svg {
    width: 15px;
    height: 15px;
    display: block;
    flex: 0 0 auto;
}

.tachyon_dashboard-page__outbound-section__subscription-update[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
}

.tachyon_dashboard-page .btn.dashboard-sections-grid-item-test-latency {
    min-width: 0;
    width: auto;
    height: 30px;
    min-height: 28px;
    padding: 4px 12px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: var(--text-color-high, #e2e8f0);
    cursor: pointer;
    transition: all 0.18s ease;
}

.tachyon_dashboard-page .btn.dashboard-sections-grid-item-test-latency:hover:not([disabled]) {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    color: #ffffff;
    transform: translateY(-1px);
}

.tachyon_dashboard-page .btn.dashboard-sections-grid-item-test-latency svg {
    width: 15px;
    height: 15px;
    display: block;
    flex: 0 0 auto;
}

.tachyon_dashboard-page .btn.dashboard-sections-grid-item-test-latency[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
}

.tachyon_dashboard-page__sections-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: 4px;
    padding: 0 2px;
    gap: 12px;
    min-width: 0;
}

.tachyon_dashboard-page__sections-header__title {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-color-high);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.2px;
    min-width: 0;
    overflow-wrap: anywhere;
}

.tachyon_dashboard-page__sections-header__title svg {
    flex-shrink: 0;
    opacity: 0.85;
}

.tachyon_dashboard-page__sections-header__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
    flex-shrink: 0;
}

.tachyon_dashboard-page .btn#dashboard-test-all-sections-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    white-space: nowrap;
    vertical-align: middle;
    padding: 4px 14px;
    height: 32px;
    min-height: 28px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: var(--text-color-high, #e2e8f0);
    transition: all 0.18s ease;
}

.tachyon_dashboard-page .btn#dashboard-test-all-sections-button:hover:not([disabled]) {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    color: #ffffff;
    transform: translateY(-1px);
}

#dashboard-test-all-sections-button svg {
    width: 15px;
    height: 15px;
    display: block;
    flex: 0 0 15px;
}

#dashboard-test-all-sections-button[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
}

@media (max-width: 480px) {
    .tachyon_dashboard-page__sections-header {
        flex-wrap: wrap;
        gap: 8px;
    }
}

.tachyon_dashboard-page__outbound-grid {
    margin-top: 8px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 8px;
}

.tachyon_dashboard-page__subscription-meta {
    --subscription-meta-action-size: 28px;
    --subscription-meta-action-gap: 6px;
    grid-column: 1 / -1;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 10px 14px;
    background: rgba(255, 255, 255, 0.03);
    margin-bottom: 8px;
    transition: all 0.18s ease;
}

.tachyon_dashboard-page__subscription-meta--collapsible {
    cursor: pointer;
    user-select: none;
    transition: border-color 0.2s ease, background-color 0.2s ease;
}

.tachyon_dashboard-page__subscription-meta--collapsible:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.045);
}

.tachyon_dashboard-page__source-group--manual {
    border-style: dashed;
}

.tachyon_dashboard-page__source-group__count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px 6px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.08);
    color: var(--text-color-medium, #cbd5e1);
    flex-shrink: 0;
}

.tachyon_dashboard-page__source-group__active-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 11.5px;
    font-weight: 600;
    color: #34d399;
    background: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.3);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: min(380px, 50vw);
}

.tachyon_dashboard-page__subscription-meta__main {
    display: flex;
    align-items: center;
    gap: 6px 10px;
    min-width: 0;
}

.tachyon_dashboard-page__subscription-meta__heading {
    flex: 0 0 auto;
    color: var(--text-color-low, #94a3b8);
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    line-height: 1.25;
    white-space: nowrap;
}

.tachyon_dashboard-page__subscription-meta__title {
    flex: 0 1 auto;
    color: var(--text-color-high, #f8fafc);
    font-weight: 600;
    font-size: 13px;
    line-height: 1.25;
    word-break: break-word;
}

.tachyon_dashboard-page__subscription-meta__facts {
    flex: 1 1 auto;
    min-width: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px 12px;
}

.tachyon_dashboard-page__subscription-meta__fact {
    display: flex;
    align-items: baseline;
    gap: 4px;
    min-width: 0;
    line-height: 1.25;
}

.tachyon_dashboard-page__subscription-meta__fact-key {
    color: var(--text-color-low, #64748b);
    font-size: 11.5px;
    white-space: nowrap;
}

.tachyon_dashboard-page__subscription-meta__fact-value {
    color: var(--text-color-high, #e2e8f0);
    font-size: 12px;
    font-weight: 600;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    overflow-wrap: anywhere;
}

.tachyon_dashboard-page__subscription-meta__actions {
    flex: 0 0 auto;
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    gap: var(--subscription-meta-action-gap);
}

.tachyon_dashboard-page .btn.tachyon_dashboard-page__subscription-meta__action {
    width: var(--subscription-meta-action-size);
    height: var(--subscription-meta-action-size);
    min-width: var(--subscription-meta-action-size);
    min-height: var(--subscription-meta-action-size);
    padding: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-color-high, #cbd5e1);
    transition: all 0.15s ease;
    margin: 0;
}

.tachyon_dashboard-page .btn.tachyon_dashboard-page__subscription-meta__action:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.22);
    color: #ffffff;
}

.tachyon_dashboard-page__subscription-meta__action svg {
    width: 14px;
    height: 14px;
    display: block;
    flex: 0 0 auto;
}

.tachyon_dashboard-page__subscription-meta__announce {
    margin: 6px 0 0;
    border-left: 3px solid var(--primary-color-medium, #38bdf8);
    padding: 4px 8px;
    background: rgba(56, 189, 248, 0.05);
    color: var(--text-color-medium, #94a3b8);
    font-style: italic;
    line-height: 1.25;
    overflow-wrap: anywhere;
}

@media (max-width: 700px) {
    .tachyon_dashboard-page__subscription-meta__main {
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .tachyon_dashboard-page__subscription-meta__heading,
    .tachyon_dashboard-page__subscription-meta__title {
        order: 1;
    }

    .tachyon_dashboard-page__subscription-meta__actions {
        order: 2;
    }

    .tachyon_dashboard-page__subscription-meta__facts {
        order: 3;
        flex-basis: 100%;
    }

    .tachyon_dashboard-page__subscription-meta__title {
        max-width: calc(100% - 42px);
    }
}

.tachyon_dashboard-page__outbound-grid__item {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 8px 12px;
    min-height: 48px;
    background: rgba(255, 255, 255, 0.035);
    transition: all 0.18s ease;
    min-width: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
}

.tachyon_dashboard-page__outbound-grid__item--selectable {
    cursor: pointer;
}

.tachyon_dashboard-page__outbound-grid__item--selectable:hover {
    border-color: rgba(255, 255, 255, 0.22);
    background: rgba(255, 255, 255, 0.065);
    transform: translateY(-1px);
}

.tachyon_dashboard-page__outbound-grid__item--active {
    border: 1.5px solid rgba(255, 255, 255, 0.5) !important;
    background: rgba(255, 255, 255, 0.06) !important;
    box-shadow: 0 0 16px rgba(56, 189, 248, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
}

.tachyon_dashboard-page__outbound-grid__item--active:hover {
    border-color: rgba(255, 255, 255, 0.7) !important;
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.18), inset 0 0 0 1px rgba(255, 255, 255, 0.15) !important;
}

.tachyon_dashboard-page__outbound-grid__item--disabled {
    cursor: default;
}

.tachyon_dashboard-page__outbound-grid__item--switching {
    border-color: transparent !important;
    overflow: hidden;
    cursor: wait;
}

.tachyon_dashboard-page__outbound-grid__item__snake {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    box-sizing: border-box;
}

.tachyon_dashboard-page__outbound-grid__item__snake rect {
    stroke: var(--primary-color-high, dodgerblue);
    stroke-width: 4;
    animation: tachyon-dashboard-selector-snake-svg 1.2s linear infinite;
}

@keyframes tachyon-dashboard-selector-snake-svg {
    0% {
        stroke-dasharray: 30 70;
        stroke-dashoffset: 100;
    }
    100% {
        stroke-dasharray: 30 70;
        stroke-dashoffset: 0;
    }
}

.tachyon_dashboard-page__outbound-grid__item__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    min-width: 0;
    margin-bottom: 4px;
}

.tachyon_dashboard-page__outbound-grid__item__title-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    min-width: 0;
    flex: 1 1 auto;
}

.tachyon_dashboard-page__outbound-grid__item__header b {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-color-high, #f8fafc);
    min-width: 0;
    line-height: 1.25;
    overflow-wrap: anywhere;
}

.tachyon_dashboard-page__outbound-grid__item__prefix-badge {
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.3;
    padding: 1px 6px;
    border-radius: 4px;
    background: rgba(128, 128, 128, 0.2);
    color: var(--text-color-medium, #999);
    max-width: 100%;
    overflow-wrap: anywhere;
    word-break: break-word;
}

.tachyon_dashboard-page__outbound-grid__item__selected-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    padding: 2px 8px;
    border-radius: 6px;
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.35);
    box-shadow: 0 1px 4px rgba(16, 185, 129, 0.15);
    white-space: nowrap;
}

.tachyon_proto-popover-trigger {
    position: relative;
    cursor: help;
}

.tachyon_proto-popover {
    display: none;
    position: absolute;
    left: 0;
    bottom: calc(100% + 6px);
    z-index: 10050;
    min-width: 220px;
    max-width: 320px;
    padding: 9px 12px;
    border-radius: 8px;
    background: #18181b;
    color: #f1f5f9;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
    font-size: 11.5px;
    line-height: 1.45;
    text-align: left;
    pointer-events: none;
    white-space: normal;
}

.tachyon_proto-popover-trigger:hover .tachyon_proto-popover {
    display: block;
}

.tachyon_proto-popover--mac {
    min-width: 340px;
    max-width: min(440px, 90vw);
    width: max-content;
}

.tachyon_proto-popover--mac .tachyon_proto-popover__header {
    font-family: monospace;
    font-size: 12.5px;
    letter-spacing: 0.3px;
}

.tachyon_proto-popover--mac .tachyon_proto-popover__val {
    word-break: normal;
    white-space: nowrap;
    font-family: inherit;
    font-size: 11.5px;
}

.tachyon_proto-popover__header {
    font-weight: 700;
    font-size: 12px;
    color: var(--primary-color, #2563eb);
    border-bottom: 1px solid var(--border-color-low, rgba(128, 128, 128, 0.18));
    padding-bottom: 4px;
    margin-bottom: 5px;
    word-break: break-word;
}

.tachyon_proto-popover__row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 10px;
    padding: 1.5px 0;
}

.tachyon_proto-popover__label {
    color: var(--text-color-medium, #64748b);
    font-weight: 500;
    flex: 0 0 auto;
}

.tachyon_proto-popover__val {
    color: var(--text-color-high, #0f172a);
    font-family: monospace;
    font-weight: 600;
    text-align: right;
    word-break: break-all;
}

.tachyon_proto-popover__desc {
    margin-top: 6px;
    padding-top: 5px;
    border-top: 1px solid var(--border-color-low, rgba(128, 128, 128, 0.18));
    font-size: 11px;
    line-height: 1.35;
    color: var(--text-color-medium, #64748b);
}

[data-darkmode="true"] .tachyon_proto-popover,
[data-theme="dark"] .tachyon_proto-popover,
.dark .tachyon_proto-popover,
body.dark-theme .tachyon_proto-popover {
    background: var(--background-color-high, rgba(20, 24, 33, 0.97));
    color: var(--text-color-high, #f1f5f9);
    border-color: var(--border-color-medium, rgba(255, 255, 255, 0.16));
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
}

[data-darkmode="true"] .tachyon_proto-popover__header,
[data-theme="dark"] .tachyon_proto-popover__header,
.dark .tachyon_proto-popover__header,
body.dark-theme .tachyon_proto-popover__header {
    color: var(--primary-color-high, #60a5fa);
    border-bottom-color: var(--border-color-low, rgba(255, 255, 255, 0.12));
}

[data-darkmode="true"] .tachyon_proto-popover__label,
[data-theme="dark"] .tachyon_proto-popover__label,
.dark .tachyon_proto-popover__label,
body.dark-theme .tachyon_proto-popover__label {
    color: var(--text-color-medium, #94a3b8);
}

[data-darkmode="true"] .tachyon_proto-popover__val,
[data-theme="dark"] .tachyon_proto-popover__val,
.dark .tachyon_proto-popover__val,
body.dark-theme .tachyon_proto-popover__val {
    color: var(--text-color-high, #f8fafc);
}

[data-darkmode="true"] .tachyon_proto-popover__desc,
[data-theme="dark"] .tachyon_proto-popover__desc,
.dark .tachyon_proto-popover__desc,
body.dark-theme .tachyon_proto-popover__desc {
    color: var(--text-color-medium, #94a3b8);
    border-top-color: var(--border-color-low, rgba(255, 255, 255, 0.12));
}

@media (prefers-color-scheme: dark) {
    :root:not([data-darkmode="false"]):not([data-theme="light"]) .tachyon_proto-popover {
        background: var(--background-color-high, rgba(20, 24, 33, 0.97));
        color: var(--text-color-high, #f1f5f9);
        border-color: var(--border-color-medium, rgba(255, 255, 255, 0.16));
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
    }
    :root:not([data-darkmode="false"]):not([data-theme="light"]) .tachyon_proto-popover__header {
        color: var(--primary-color-high, #60a5fa);
        border-bottom-color: var(--border-color-low, rgba(255, 255, 255, 0.12));
    }
    :root:not([data-darkmode="false"]):not([data-theme="light"]) .tachyon_proto-popover__label {
        color: var(--text-color-medium, #94a3b8);
    }
    :root:not([data-darkmode="false"]):not([data-theme="light"]) .tachyon_proto-popover__val {
        color: var(--text-color-high, #f8fafc);
    }
    :root:not([data-darkmode="false"]):not([data-theme="light"]) .tachyon_proto-popover__desc {
        color: var(--text-color-medium, #94a3b8);
        border-top-color: var(--border-color-low, rgba(255, 255, 255, 0.12));
    }
}

.tachyon_dashboard-page .btn.tachyon_dashboard-page__outbound-grid__item__copy-button {
    width: 22px;
    height: 22px;
    min-width: 22px;
    min-height: 22px;
    padding: 1px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    line-height: 1;
}

.tachyon_dashboard-page__outbound-grid__item__copy-button svg {
    width: 13px;
    height: 13px;
    display: block;
    flex: 0 0 auto;
}

.tachyon_dashboard-page__outbound-grid__item__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 6px;
    min-width: 0;
}

.tachyon_dashboard-page__outbound-grid__item__type {
    min-width: 0;
    overflow-wrap: anywhere;
    font-size: 11px;
    font-weight: 500;
    color: var(--text-color-medium, #94a3b8);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 4px;
    padding: 1px 6px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}

.tachyon_dashboard-page__outbound-grid__item__latency--empty {
    color: var(--text-color-low, #64748b);
    font-size: 11px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.tachyon_dashboard-page__outbound-grid__item__latency--green,
.tachyon_dashboard-page__outbound-grid__item__latency--yellow,
.tachyon_dashboard-page__outbound-grid__item__latency--red {
    display: inline-flex;
    align-items: center;
    padding: 2px 7px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    white-space: nowrap;
    line-height: 1.2;
}

.tachyon_dashboard-page__outbound-grid__item__latency--green {
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.tachyon_dashboard-page__outbound-grid__item__latency--yellow {
    background: rgba(245, 158, 11, 0.15);
    color: #fbbf24;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.tachyon_dashboard-page__outbound-grid__item__latency--red {
    background: rgba(239, 68, 68, 0.15);
    color: #f87171;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.tachyon_dashboard-page__outbound-grid__item__latency--green::before,
.tachyon_dashboard-page__outbound-grid__item__latency--yellow::before,
.tachyon_dashboard-page__outbound-grid__item__latency--red::before {
    content: '⚡ ';
    font-size: 10px;
    opacity: 0.95;
}

.tachyon_dashboard-page__outbound-grid__item__latency--clickable {
    cursor: pointer;
    user-select: none;
    transition: opacity 0.15s ease, transform 0.15s ease, background-color 0.15s ease;
}

.tachyon_dashboard-page__outbound-grid__item__latency--clickable:hover {
    opacity: 0.95;
    filter: brightness(1.15);
    transform: scale(1.03);
}

.tachyon_dashboard-page__outbound-grid__item__latency--testing {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    opacity: 0.8;
}

.tachyon_dashboard-page__outbound-grid__item__latency--testing svg {
    width: 12px;
    height: 12px;
    display: block;
    flex: 0 0 auto;
}

.tachyon_dashboard-page__urltest-details {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    padding-top: 10px;
}

.tachyon_dashboard-page__urltest-details__params {
    display: grid;
    grid-template-columns: minmax(120px, max-content) minmax(0, 1fr);
    gap: 8px 16px;
    margin: 0 0 18px;
}

.tachyon_dashboard-page__urltest-details__param {
    display: contents;
}

.tachyon_dashboard-page__urltest-details__param dt {
    color: var(--text-color-medium, #666);
    line-height: 1.35;
}

.tachyon_dashboard-page__urltest-details__param dd {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    margin: 0;
}

.tachyon_dashboard-page__urltest-details__param dd span {
    min-width: 0;
    overflow-wrap: anywhere;
}

.tachyon_dashboard-page__urltest-details__url {
    min-width: 0;
    color: var(--primary-color-high, #337ab7);
    text-decoration: none;
    overflow-wrap: anywhere;
}

.tachyon_dashboard-page__urltest-details__url:hover {
    text-decoration: underline;
}

.tachyon_dashboard-page__urltest-details__selected-value {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    max-width: 100%;
    padding: 0;
    border: 0;
    color: inherit;
    background: transparent;
    box-sizing: border-box;
    line-height: 1.3;
}

.tachyon_dashboard-page__urltest-details__selected-name {
    min-width: 0;
    font-weight: 600;
    overflow-wrap: anywhere;
}

.tachyon_dashboard-page__urltest-details__selected-type {
    color: var(--text-color-medium, #666);
}

.tachyon_dashboard-page__urltest-details__outbounds-title {
    margin-bottom: 8px;
    font-weight: 600;
}

.tachyon_dashboard-page__urltest-details__table {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    box-sizing: border-box;
    max-height: min(48vh, 480px);
    overflow-x: hidden;
    overflow-y: auto;
    padding-right: 4px;
}

.tachyon_dashboard-page__urltest-details__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    min-width: 0;
    padding: 8px 10px;
    box-sizing: border-box;
    border: 1px solid var(--border-color-low, rgba(128, 128, 128, 0.15));
    border-radius: 6px;
    background: var(--background-color-card, rgba(128, 128, 128, 0.04));
    transition: background 0.15s ease, border-color 0.15s ease;
}

.tachyon_dashboard-page__urltest-details__row:hover {
    background: rgba(128, 128, 128, 0.08);
}

.tachyon_dashboard-page__urltest-details__row--active {
    border-color: #4caf50;
    background: rgba(76, 175, 80, 0.08);
}

.tachyon_dashboard-page__urltest-details__row-name {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    flex: 1 1 auto;
    overflow: hidden;
}

.tachyon_dashboard-page__urltest-details__row-name b {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    line-height: 1.3;
}

.tachyon_dashboard-page__urltest-details__priority-name {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.tachyon_dashboard-page__urltest-details__priority-number {
    margin-right: 4px;
    color: var(--text-color-medium, #aaa);
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
}

.tachyon_dashboard-page__urltest-details__priority-level {
    padding: 1px 6px;
    border-radius: 4px;
    color: var(--text-color-medium, #aaa);
    background: rgba(128, 128, 128, 0.15);
    font-size: 11px;
    font-weight: 400;
    white-space: nowrap;
}

.tachyon_dashboard-page__urltest-details__country-badge {
    display: inline-flex;
    align-items: center;
    user-select: none;
    padding: 2px 4px;
    border: 1px solid rgba(128, 128, 128, 0.25);
    border-radius: 4px;
    background: rgba(128, 128, 128, 0.15);
    line-height: 1;
    flex-shrink: 0;
}

.tachyon_dashboard-page__flag-emoji,
.tachyon_dashboard-page__country-chip__flag,
.tachyon_dashboard-page__urltest-details__country-badge {
    font-family: "Twemoji Country Flags", "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif;
    font-style: normal;
    font-weight: normal;
}

.tachyon_dashboard-page__urltest-details__priority-node {
    color: var(--text-color-high, #fff);
    font-weight: 600;
}

.tachyon_dashboard-page__urltest-details__row-type {
    font-size: 11px;
    color: var(--text-color-medium, #888);
    background: rgba(128, 128, 128, 0.12);
    padding: 1px 6px;
    border-radius: 4px;
    white-space: nowrap;
    flex-shrink: 0;
}

.tachyon_dashboard-page__urltest-details__row-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
}

.tachyon_dashboard-page__urltest-details__row-meta {
    display: flex;
    align-items: center;
    white-space: nowrap;
    min-width: 48px;
    justify-content: flex-end;
    font-weight: 500;
    font-size: 12px;
}

.tachyon_dashboard-page__urltest-details__select-btn {
    padding: 2px 10px !important;
    font-size: 12px !important;
    height: 26px !important;
    line-height: 20px !important;
    white-space: nowrap !important;
    border-radius: 4px !important;
    cursor: pointer;
}

.tachyon_dashboard-page__urltest-details__active-badge {
    display: inline-flex !important;
    align-items: center !important;
    gap: 4px !important;
    padding: 3px 8px !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    color: #4caf50 !important;
    background: rgba(76, 175, 80, 0.15) !important;
    border: 1px solid rgba(76, 175, 80, 0.3) !important;
    border-radius: 4px !important;
    white-space: nowrap !important;
}

.tachyon_dashboard-page__urltest-details__copy-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 24px;
    width: 24px;
    min-width: 24px;
    height: 24px;
    padding: 0;
    box-sizing: border-box;
    border-radius: 4px;
    opacity: 0.7;
    transition: opacity 0.15s ease;
}

.tachyon_dashboard-page__urltest-details__copy-button:hover {
    opacity: 1;
}

.tachyon_dashboard-page__urltest-details__copy-button svg {
    width: 14px;
    height: 14px;
}

.tachyon_dashboard-page__urltest-details__copy-placeholder {
    display: block;
    width: 24px;
    min-width: 24px;
    height: 1px;
}

.tachyon_dashboard-page__urltest-details__empty {
    margin-top: 4px;
    padding: 24px 0;
    border: 1px dashed var(--border-color-high, #555);
    border-radius: 4px;
    color: var(--text-color-medium, #888);
    background: rgba(128, 128, 128, 0.02);
    font-style: italic;
    text-align: center;
}

.tachyon_dashboard-page__urltest-details__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid var(--border-color-low, rgba(128, 128, 128, 0.2));
}

@media (max-width: 560px) {
    .tachyon_dashboard-page__urltest-details__params {
        grid-template-columns: 1fr;
    }

    .tachyon_dashboard-page__urltest-details__row {
        flex-wrap: wrap;
        gap: 6px;
    }

    .tachyon_dashboard-page__urltest-details__row-actions {
        width: 100%;
        justify-content: flex-end;
    }
}

.tachyon_dashboard-page__country-chips-container {
    grid-column: 1 / -1;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px 14px;
    border-radius: 12px;
    background: var(--tachyon-card-bg, #202024);
    border: 1px solid var(--tachyon-card-border, rgba(255, 255, 255, 0.08));
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.tachyon_dashboard-page__country-chips-container--collapsed {
    padding: 8px 14px;
}

.tachyon_dashboard-page__country-chips-container--collapsed .tachyon_dashboard-page__country-chips-body {
    display: none;
}

.tachyon_dashboard-page__country-chips__header {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: var(--text-color-medium, rgba(160, 160, 160, 0.9));
    padding-left: 2px;
    cursor: pointer;
    user-select: none;
}

.tachyon_dashboard-page__country-chips__header:hover {
    color: var(--text-color-high, inherit);
}

.tachyon_dashboard-page__country-chips-body {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.tachyon_dashboard-page__region-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
}

.tachyon_dashboard-page__region-tab {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text-color-medium, #94a3b8);
    cursor: pointer;
    transition: all 0.15s ease;
    user-select: none;
    box-sizing: border-box;
}

.tachyon_dashboard-page__region-tab:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.18);
    color: #ffffff;
}

.tachyon_dashboard-page__region-tab--active {
    background: rgba(255, 255, 255, 0.12) !important;
    border-color: rgba(255, 255, 255, 0.25) !important;
    color: #ffffff !important;
    font-weight: 700;
}

.tachyon_dashboard-page__region-tab--active:hover {
    background: rgba(255, 255, 255, 0.16) !important;
    border-color: rgba(255, 255, 255, 0.3) !important;
}

.tachyon_dashboard-page__region-tab--active .tachyon_dashboard-page__region-tab__name {
    color: #ffffff !important;
}

.tachyon_dashboard-page__region-tab--active .tachyon_dashboard-page__country-chip__count {
    background: rgba(255, 255, 255, 0.22) !important;
    color: #ffffff !important;
}

.tachyon_dashboard-page__region-tab__name {
    font-weight: 600;
    font-size: 11px;
}

.tachyon_dashboard-page__country-chip-divider {
    width: 2px;
    height: 18px;
    background: rgba(255, 255, 255, 0.1);
    margin: 0 3px;
    border-radius: 1px;
    flex-shrink: 0;
}

.tachyon_dashboard-page__country-chips {
    grid-column: 1 / -1;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
    padding: 2px 0 2px 0;
}

.tachyon_dashboard-page__country-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    border-radius: 9999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text-color-medium, #cbd5e1);
    cursor: pointer;
    transition: all 0.15s ease;
    user-select: none;
    box-sizing: border-box;
}

.tachyon_dashboard-page__country-chip:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.18);
    color: #ffffff;
}

.tachyon_dashboard-page__country-chip--active {
    background: rgba(16, 185, 129, 0.18) !important;
    color: #34d399 !important;
    border-color: rgba(16, 185, 129, 0.4) !important;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.15);
}

.tachyon_dashboard-page__country-chip--active:hover {
    background: rgba(16, 185, 129, 0.25) !important;
    border-color: rgba(16, 185, 129, 0.5) !important;
}

.tachyon_dashboard-page__country-chip__flag {
    font-size: 16px;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.tachyon_dashboard-page__country-chip__name {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.2;
}

.tachyon_dashboard-page__country-chip__count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
    padding: 2px 6px;
    border-radius: 10px;
    background: rgba(128, 128, 128, 0.22);
    color: var(--text-color-high, currentColor);
    min-width: 16px;
    text-align: center;
}

.tachyon_dashboard-page__country-chip--active .tachyon_dashboard-page__country-chip__count {
    background: rgba(255, 255, 255, 0.28);
    color: #ffffff;
}

.tachyon_dashboard-page__country-chip__latency {
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
    padding: 2px 6px;
    border-radius: 10px;
}

.tachyon_dashboard-page__country-chip__latency--fast {
    background: rgba(16, 185, 129, 0.18);
    color: #10b981;
}

.tachyon_dashboard-page__country-chip__latency--medium {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
}

.tachyon_dashboard-page__country-chip__latency--slow {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
}

.tachyon_dashboard-page__country-chip--active .tachyon_dashboard-page__country-chip__latency {
    background: rgba(255, 255, 255, 0.28) !important;
    color: #ffffff !important;
}

.tachyon_dashboard-page__country-meta {
    margin-top: 6px;
    margin-bottom: 2px;
}

.tachyon_dashboard-page__auto-groups {
    grid-column: 1 / -1;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px 14px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.025);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-sizing: border-box;
}

.tachyon_dashboard-page__auto-groups--collapsed {
    padding: 8px 12px;
}

.tachyon_dashboard-page__auto-groups--collapsed .tachyon_dashboard-page__auto-groups__header {
    margin-bottom: 0;
}

.tachyon_dashboard-page__auto-groups--collapsed .tachyon_dashboard-page__auto-groups-grid {
    display: none;
}

.tachyon_dashboard-page__auto-groups__header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--text-color-low, #94a3b8);
    margin-bottom: 10px;
    cursor: pointer;
    user-select: none;
}

.tachyon_dashboard-page__auto-groups__header:hover {
    color: var(--text-color-high, #f8fafc);
}

.tachyon_dashboard-page__auto-groups__icon {
    display: inline-flex;
    align-items: center;
    font-size: 13px;
    color: #f59e0b;
}

.tachyon_dashboard-page__auto-groups__count {
    font-size: 11px;
    padding: 1px 6px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.08);
    color: var(--text-color-medium, #cbd5e1);
    font-weight: 600;
}

.tachyon_dashboard-page__auto-groups-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 8px;
}

.tachyon_dashboard-page__outbound-grid__item--auto-group {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.1);
}

.tachyon_dashboard-page__outbound-grid__item--auto-group.tachyon_dashboard-page__outbound-grid__item--active {
    border: 1.5px solid rgba(255, 255, 255, 0.5) !important;
    background: rgba(255, 255, 255, 0.06) !important;
    box-shadow: 0 0 16px rgba(56, 189, 248, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
}

.tachyon-service-key {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-weight: 600;
    font-size: 12px;
    min-width: 0;
}

.tachyon-service-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
    display: inline-block;
}

.tachyon-service-dot--online {
    background: #10b981;
    box-shadow: 0 0 6px rgba(16, 185, 129, 0.7);
}

.tachyon-service-dot--offline {
    background: #ef4444;
    box-shadow: 0 0 5px rgba(239, 68, 68, 0.5);
}

.tachyon-service-name {
    color: var(--text-color-high, inherit);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tachyon-service-value {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    justify-content: flex-end;
}

.tachyon-service-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px 6px;
    height: 20px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    font-variant-numeric: tabular-nums;
    box-sizing: border-box;
    white-space: nowrap;
    text-align: center;
}

.tachyon-service-pill--ram {
    background: rgba(16, 185, 129, 0.12);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.28);
    width: 58px;
    min-width: 58px;
}

.tachyon-service-pill--uptime {
    background: rgba(59, 130, 246, 0.12);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.28);
    font-weight: 500;
    width: 68px;
    min-width: 68px;
}

.tachyon-route-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 1px 7px;
    height: 20px;
    border-radius: 6px;
    font-size: 11.5px;
    font-weight: 600;
    line-height: 1.2;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 175px;
}

.tachyon-route-pill--server {
    color: #10b981;
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.28);
}

.tachyon-route-pill--selector {
    color: #06b6d4;
    background: rgba(6, 182, 212, 0.12);
    border: 1px solid rgba(6, 182, 212, 0.28);
}

.tachyon-protocol-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px 7px;
    height: 20px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    background: rgba(59, 130, 246, 0.12);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.28);
    box-sizing: border-box;
    white-space: nowrap;
    text-align: center;
}

.tachyon-mode-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px 7px;
    height: 20px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    background: rgba(120, 120, 120, 0.12);
    color: var(--text-color-medium, #94a3b8);
    border: 1px solid rgba(120, 120, 120, 0.25);
    box-sizing: border-box;
    white-space: nowrap;
    text-align: center;
}

.tachyon-mode-pill--active {
    background: rgba(16, 185, 129, 0.12);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.28);
}

.tachyon-stat-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px 7px;
    height: 20px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    box-sizing: border-box;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
}

.tachyon-stat-pill--down {
    background: rgba(16, 185, 129, 0.12);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.28);
}

.tachyon-stat-pill--up {
    background: rgba(59, 130, 246, 0.12);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.28);
}

.tachyon-stat-pill--conns {
    background: rgba(99, 102, 241, 0.12);
    color: #818cf8;
    border: 1px solid rgba(99, 102, 241, 0.28);
}

.tachyon-latency-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px 7px;
    height: 20px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    box-sizing: border-box;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
}

.tachyon-latency-pill--fast {
    background: rgba(16, 185, 129, 0.12);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.28);
}

.tachyon-latency-pill--medium {
    background: rgba(245, 158, 11, 0.12);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.28);
}

.tachyon-latency-pill--slow {
    background: rgba(239, 68, 68, 0.12);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.28);
}

.tachyon-latency-pill--neutral {
    background: rgba(120, 120, 120, 0.12);
    color: var(--text-color-medium, #94a3b8);
    border: 1px solid rgba(120, 120, 120, 0.25);
}

.tachyon-service-pill--version {
    background: rgba(120, 120, 120, 0.12);
    color: var(--text-color-medium, #94a3b8);
    font-weight: 500;
    padding: 1px 7px;
}

.tachyon-service-pill--active {
    background: rgba(16, 185, 129, 0.12);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.28);
    padding: 1px 8px;
}

.tachyon-service-pill--stopped {
    background: rgba(239, 68, 68, 0.12);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.28);
    padding: 1px 9px;
    width: auto;
}

.tachyon-service-pill--empty {
    opacity: 0.35;
    background: transparent !important;
    border-color: transparent !important;
}

.tachyon-collapsible-title {
    cursor: pointer;
    user-select: none;
}

.tachyon-clients-container {
    padding: 8px 4px 4px;
    display: block !important;
}

.tachyon-clients-empty {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: var(--text-color-medium, #94a3b8);
}

.tachyon-client-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 10px;
    border-radius: 6px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.1);
    transition: background-color 0.15s ease;
    gap: 12px;
}

.tachyon-client-row:last-child {
    border-bottom: none;
}

.tachyon-client-row:hover {
    background: rgba(128, 128, 128, 0.05);
}

.tachyon-client-row__info {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: nowrap;
    min-width: 0;
    flex: 1 1 auto;
}

.tachyon-client-row__name {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-color-high, inherit);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tachyon-client-row__name-badge {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1px 8px;
    height: 20px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.2;
    width: 175px;
    min-width: 175px;
    max-width: 175px;
    flex: 0 0 175px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.tachyon-client-row__name-badge--host {
    color: #c084fc;
    background: rgba(192, 132, 252, 0.12);
    border: 1px solid rgba(192, 132, 252, 0.28);
}

.tachyon-client-row__name-badge--mac {
    font-family: monospace;
    font-size: 11.5px;
    font-weight: 500;
    color: #cbd5e1;
    background: rgba(148, 163, 184, 0.12);
    border: 1px solid rgba(148, 163, 184, 0.28);
    letter-spacing: 0.2px;
    position: relative;
    cursor: help;
    overflow: visible;
    text-overflow: clip;
}

.tachyon-client-row__name-badge--router {
    color: #34d399;
    background: rgba(52, 211, 153, 0.12);
    border: 1px solid rgba(52, 211, 153, 0.28);
}

.tachyon-client-row__name--mono {
    font-family: monospace;
    font-size: 12.5px;
}

.tachyon-client-row__ip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1px 7px;
    height: 20px;
    border-radius: 6px;
    font-size: 11.5px;
    font-family: monospace;
    font-weight: 500;
    line-height: 1.2;
    color: #06b6d4;
    background: rgba(6, 182, 212, 0.12);
    border: 1px solid rgba(6, 182, 212, 0.28);
    width: 120px;
    min-width: 120px;
    max-width: 120px;
    flex: 0 0 120px;
    box-sizing: border-box;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
}

.tachyon-client-row__ip--standalone {
    font-size: 12.5px;
    font-weight: 600;
    margin-left: 183px;
}

.tachyon-client-row__conns {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1px 7px;
    height: 20px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    color: #818cf8;
    background: rgba(99, 102, 241, 0.12);
    border: 1px solid rgba(99, 102, 241, 0.28);
    width: 68px;
    min-width: 68px;
    max-width: 68px;
    flex: 0 0 68px;
    box-sizing: border-box;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
}

.tachyon-client-row__traffic {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    flex: 0 0 170px;
    justify-content: flex-end;
}

.tachyon-traffic-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1px 7px;
    height: 20px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    width: 82px;
    min-width: 82px;
    max-width: 82px;
    flex: 0 0 82px;
    box-sizing: border-box;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
}

.tachyon-traffic-pill--down {
    background: rgba(16, 185, 129, 0.12);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.28);
}

.tachyon-traffic-pill--up {
    background: rgba(59, 130, 246, 0.12);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.28);
}

@media (max-width: 680px) {
    .tachyon-client-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
    }
    .tachyon-client-row__info {
        flex-wrap: wrap;
        width: 100%;
    }
    .tachyon-client-row__name-badge {
        width: auto;
        min-width: 0;
        max-width: 100%;
        flex: 0 1 auto;
    }
    .tachyon-client-row__ip {
        width: auto;
        min-width: 0;
        max-width: 100%;
        flex: 0 1 auto;
    }
    .tachyon-client-row__ip--standalone {
        margin-left: 0;
    }
    .tachyon-client-row__conns {
        width: auto;
        min-width: 0;
        flex: 0 1 auto;
    }
    .tachyon-client-row__traffic {
        align-self: flex-end;
        flex: 0 0 auto;
    }
    .tachyon-traffic-pill {
        width: auto;
        min-width: 65px;
        flex: 0 0 auto;
    }
    .tachyon_dashboard-page__top-domains-list {
        grid-template-columns: 1fr;
    }
}

/* ── Inbound Servers Widget (Dashboard) & Servers Tab Overview ─────────── */

.tachyon-inbounds-fullwidth-slot {
    grid-column: 1 / -1;
    min-width: 0;
}

.tachyon-inbounds-fullwidth-slot:empty {
    display: none;
}

.tachyon-inbounds-collapsible-card {
    min-height: 0 !important;
    padding: 9px 12px;
}

.tachyon-inbounds-collapsible-card--collapsed {
    padding: 7px 12px;
}

.tachyon-inbounds-collapsible__header {
    cursor: pointer;
    user-select: none;
    flex-wrap: wrap;
    row-gap: 6px;
}

.tachyon-inbounds-collapsible__header--collapsed {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
}

.tachyon-inbounds-collapsible__title-group {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
}

.tachyon-inbounds-chevron {
    color: var(--text-color-medium, #94a3b8);
    flex-shrink: 0;
}

.tachyon-dual-card__badge--clickable {
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    line-height: 1.35;
    transition: background-color 0.15s ease, border-color 0.15s ease;
}

.tachyon-dual-card__badge--clickable:hover {
    background: rgba(16, 185, 129, 0.22);
    border-color: rgba(16, 185, 129, 0.45);
}

.tachyon-inbound-collapse-btn {
    appearance: none;
    -webkit-appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px 8px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.35;
    color: var(--text-color-medium, #94a3b8);
    background: rgba(148, 163, 184, 0.1);
    border: 1px solid rgba(148, 163, 184, 0.24);
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.tachyon-inbound-collapse-btn:hover {
    color: var(--text-color-high, #f8fafc);
    background: rgba(59, 130, 246, 0.16);
    border-color: rgba(59, 130, 246, 0.4);
}

.tachyon-inbounds-active-clients-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px;
    padding-bottom: 7px;
    border-bottom: 1px dashed rgba(128, 128, 128, 0.16);
}

.tachyon-inbounds-client-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 8px;
    border-radius: 7px;
    font-size: 11.5px;
    background: rgba(99, 102, 241, 0.08);
    border: 1px solid rgba(99, 102, 241, 0.22);
}

.tachyon-inbounds-client-chip__name {
    font-weight: 600;
    color: var(--text-color-high, inherit);
}

.tachyon-inbounds-chip-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
    gap: 8px;
    min-width: 0;
}

.tachyon-inbound-card,
.tachyon-inbound-chip {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 7px;
    padding: 7px 9px;
    border-radius: 8px;
    background: rgba(128, 128, 128, 0.045);
    border: 1px solid rgba(128, 128, 128, 0.14);
    cursor: pointer;
    min-width: 0;
    box-sizing: border-box;
    transition: background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}

.tachyon-inbound-card:hover,
.tachyon-inbound-chip:hover {
    background: rgba(99, 102, 241, 0.08);
    border-color: rgba(99, 102, 241, 0.35);
}

.tachyon-inbound-card--selected,
.tachyon-inbound-chip--selected {
    background: rgba(59, 130, 246, 0.14);
    border-color: rgba(59, 130, 246, 0.45);
}

.tachyon-inbound-card__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    min-width: 0;
    width: 100%;
}

.tachyon-inbound-card__title-group,
.tachyon-inbound-chip__left {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    flex: 1 1 auto;
    overflow: hidden;
}

.tachyon-inbound-card__name,
.tachyon-inbound-chip__name {
    font-size: 12.5px;
    font-weight: 600;
    color: var(--text-color-high, inherit);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tachyon-inbound-card__badges {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    flex-shrink: 0;
}

.tachyon-inbound-card__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    min-width: 0;
    width: 100%;
}

.tachyon-inbound-card__metrics {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    flex: 1 1 auto;
    overflow: hidden;
    flex-wrap: wrap;
}

.tachyon-inbound-card__actions,
.tachyon-inbound-chip__right {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    margin-left: auto;
}

.tachyon-stat-pill--idle {
    background: rgba(245, 158, 11, 0.12);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.28);
}

.tachyon-port-pill--online {
    background: rgba(16, 185, 129, 0.12) !important;
    color: #10b981 !important;
    border: 1px solid rgba(16, 185, 129, 0.3) !important;
    font-weight: 600;
}

.tachyon-port-pill--offline {
    background: rgba(239, 68, 68, 0.12) !important;
    color: #ef4444 !important;
    border: 1px solid rgba(239, 68, 68, 0.3) !important;
    font-weight: 600;
}

.tachyon-inbound-clients-modal {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    min-width: 0;
    max-width: 760px;
}

.tachyon-inbound-clients-modal__summary {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 8px;
    background: rgba(128, 128, 128, 0.06);
    border: 1px solid rgba(128, 128, 128, 0.14);
}

.tachyon-inbound-clients-modal__table-wrap {
    max-height: 420px;
    overflow-y: auto;
    border-radius: 8px;
    border: 1px solid rgba(128, 128, 128, 0.14);
}

.tachyon-inbound-clients-modal__table {
    width: 100%;
    margin: 0 !important;
    border-collapse: collapse;
}

.tachyon-inbound-clients-modal__table th {
    position: sticky;
    top: 0;
    background: var(--background-color, #1e293b);
    z-index: 1;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    padding: 8px 10px;
}

.tachyon-inbound-clients-modal__table td {
    padding: 7px 10px;
    font-size: 12px;
    vertical-align: middle;
    border-top: 1px solid rgba(128, 128, 128, 0.08);
}

.tachyon-inbound-clients-modal__table tr:last-child td {
    border-bottom: none;
}

.tachyon-inbound-clients-modal__empty {
    text-align: center;
    padding: 32px 16px;
    color: var(--text-color-medium, #94a3b8);
}

.tachyon-inbound-clients-modal__client-cell {
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

.tachyon-traffic-pill--compact {
    width: auto;
    min-width: 0;
    max-width: none;
    flex: 0 0 auto;
    padding: 1px 6px;
    font-size: 10.5px;
    line-height: 1.3;
}

.tachyon-dual-card__items--scrollable,
.tachyon-inbounds-scroll-list {
    max-height: 108px;
    overflow-y: auto;
    padding-right: 4px;
    scrollbar-width: thin;
}

.tachyon-dual-card__row--clickable,
.tachyon-inbound-row {
    cursor: pointer;
    border-radius: 6px;
    padding: 2px 6px;
    margin: 0 -6px;
    transition: background-color 0.15s ease;
}

.tachyon-dual-card__row--clickable:hover,
.tachyon-inbound-row:hover {
    background: var(--primary-color-low, rgba(99, 102, 241, 0.1));
}

.tachyon-inbound-row--selected {
    background: rgba(59, 130, 246, 0.14);
}

.tachyon-inbound-row__key {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
    max-width: 100%;
}

.tachyon-inbound-row__gear {
    opacity: 0.55;
    flex-shrink: 0;
    transition: opacity 0.15s ease;
}

.tachyon-inbound-row:hover .tachyon-inbound-row__gear {
    opacity: 0.95;
}

.tachyon-inbound-mini-btn {
    appearance: none;
    -webkit-appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 20px;
    padding: 0;
    margin: 0;
    border-radius: 5px;
    border: 1px solid rgba(148, 163, 184, 0.22);
    background: rgba(148, 163, 184, 0.08);
    color: var(--text-color-medium, #94a3b8);
    font-size: 11px;
    line-height: 1;
    cursor: pointer;
    flex-shrink: 0;
    transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.tachyon-inbound-mini-btn:hover {
    background: rgba(59, 130, 246, 0.18);
    border-color: rgba(59, 130, 246, 0.45);
    color: var(--text-color-high, #f8fafc);
}

.tachyon-inbound-card__header-actions {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
}

.tachyon-inbound-filter-pill {
    appearance: none;
    -webkit-appearance: none;
    display: inline-flex;
    align-items: center;
    padding: 1px 8px;
    height: 20px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
    color: #60a5fa;
    background: rgba(59, 130, 246, 0.14);
    border: 1px solid rgba(59, 130, 246, 0.35);
    cursor: pointer;
}

.tachyon-inbound-filter-pill:hover {
    background: rgba(59, 130, 246, 0.24);
}

.tachyon-servers-overview-card {
    margin: 6px 0 12px;
}

.tachyon-inbound-card--disabled {
    opacity: 0.6;
}

.tachyon-inbound-card--highlight {
    outline: 2px solid #6366f1;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.22);
    transition: outline 0.25s ease, box-shadow 0.25s ease;
}

.tachyon-inbound-chip--error {
    border-color: rgba(239, 68, 68, 0.55) !important;
    background: rgba(239, 68, 68, 0.08) !important;
}

.tachyon-inbound-chip__error-pill {
    display: inline-flex;
    align-items: center;
    padding: 1px 5px;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 600;
    color: #fca5a5;
    background: rgba(239, 68, 68, 0.22);
    border: 1px solid rgba(239, 68, 68, 0.45);
}

.tachyon-inbound-error-banner,
.tachyon_dashboard-page__outbound-section__error-banner {
    margin: 6px 12px 8px;
    padding: 8px 11px;
    border-radius: 8px;
    background: rgba(239, 68, 68, 0.11);
    border: 1px solid rgba(239, 68, 68, 0.42);
    color: var(--text-color-high, #fecaca);
    font-size: 12px;
    line-height: 1.45;
}

.tachyon_dashboard-page__outbound-section__error-banner__title {
    font-weight: 600;
    color: #fca5a5;
    margin-bottom: 3px;
}

.tachyon_dashboard-page__outbound-section__error-banner__text,
.tachyon-inbound-error-banner__item {
    word-break: break-word;
    opacity: 0.95;
}

.tachyon-inbound-error-banner__item + .tachyon-inbound-error-banner__item {
    margin-top: 4px;
    padding-top: 4px;
    border-top: 1px dashed rgba(239, 68, 68, 0.3);
}

/* -------------------------------------------------------------
 * Modern Dashboard Redesign (Tiers 1 - 4)
 * ------------------------------------------------------------- */

/* Tier 1: Hero Status Bar */
.tachyon_hero-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    padding: 12px 18px;
    margin-bottom: 16px;
    background: var(--tachyon-card-bg, #202024);
    border: 1px solid var(--tachyon-card-border, rgba(255, 255, 255, 0.08));
    border-radius: 14px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
}

.tachyon_hero-bar__left,
.tachyon_hero-bar__center,
.tachyon_hero-bar__right {
    display: flex;
    align-items: center;
    gap: 12px;
}

.tachyon_hero-brand {
    display: flex;
    align-items: center;
    gap: 8px;
}

.tachyon_hero-logo-icon-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: rgba(16, 185, 129, 0.15);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.tachyon_hero-logo-icon {
    font-size: 18px;
    display: flex;
    align-items: center;
}

.tachyon_hero-title {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text-color-high, #f8fafc);
}

.tachyon_hero-version {
    font-size: 11px;
    font-weight: 500;
    color: var(--text-color-low, #94a3b8);
    background: rgba(148, 163, 184, 0.12);
    padding: 2px 6px;
    border-radius: 6px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.tachyon_hero-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 10px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 600;
}

.tachyon_hero-status--running {
    background: rgba(16, 185, 129, 0.14);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.35);
}

.tachyon_hero-status--stopped {
    background: rgba(239, 68, 68, 0.14);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.35);
}

.tachyon_hero-status__dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 8px currentColor;
}

.tachyon_hero-meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
}

.tachyon_hero-meta-label {
    color: var(--text-color-low, #94a3b8);
}

.tachyon_hero-meta-value {
    color: var(--text-color-high, #f1f5f9);
    font-weight: 500;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.tachyon_hero-mode-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #cbd5e1;
}

.tachyon_hero-action-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    padding: 0;
    border-radius: 9px;
    background: rgba(148, 163, 184, 0.1);
    border: 1px solid var(--tachyon-border-subtle, rgba(255, 255, 255, 0.1));
    color: var(--text-color-high, #e2e8f0);
    cursor: pointer;
    transition: all 0.2s ease;
}

.tachyon_hero-action-btn:hover:not(:disabled) {
    background: rgba(148, 163, 184, 0.2);
    color: #fff;
    transform: translateY(-1px);
}

.tachyon_hero-action-btn--loading svg {
    animation: tachyon-spin 1s linear infinite;
}

@keyframes tachyon-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Tier 2: 4-Card KPI Row */
.tachyon_kpi-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    margin-bottom: 16px;
    width: 100%;
    box-sizing: border-box;
}

@media (max-width: 992px) {
    .tachyon_kpi-row {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 540px) {
    .tachyon_kpi-row {
        grid-template-columns: 1fr;
    }
}

.tachyon_kpi-card {
    background: var(--tachyon-card-bg, #202024);
    border: 1px solid var(--tachyon-card-border, rgba(255, 255, 255, 0.08));
    border-radius: 14px;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 98px;
    box-sizing: border-box;
    transition: border-color 0.2s ease, transform 0.2s ease;
}

.tachyon_kpi-card:hover {
    border-color: rgba(255, 255, 255, 0.18);
    transform: translateY(-1px);
}

.tachyon_kpi-card__header {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 8px;
    color: var(--text-color-low, #94a3b8);
}

.tachyon_kpi-card__header svg {
    display: block;
    opacity: 0.85;
    flex-shrink: 0;
}

.tachyon_kpi-card__val-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
}

.tachyon_kpi-sparkline {
    flex-shrink: 0;
    margin-bottom: 2px;
}

.tachyon_kpi-card__icon {
    font-size: 13px;
    color: #94a3b8;
}

.tachyon_kpi-card__label {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-color-medium, #cbd5e1);
    text-transform: uppercase;
    letter-spacing: 0.03em;
}

.tachyon_kpi-card__value {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-color-high, #f8fafc);
    letter-spacing: -0.02em;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    display: flex;
    align-items: center;
}

.tachyon_kpi-card__sub {
    font-size: 11px;
    color: var(--text-color-low, #94a3b8);
    margin-top: 4px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.tachyon_kpi-card__sub--truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}

.tachyon_kpi-badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.tachyon_kpi-badge--fast {
    background: rgba(16, 185, 129, 0.15);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.tachyon_kpi-badge--medium {
    background: rgba(245, 158, 11, 0.15);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.tachyon_kpi-badge--slow {
    background: rgba(239, 68, 68, 0.15);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.tachyon_kpi-badge--unknown {
    background: rgba(148, 163, 184, 0.12);
    color: #94a3b8;
    border: 1px solid rgba(148, 163, 184, 0.25);
}

/* Tier 3: 2-Column Mid Grid */
.tachyon_mid-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
    width: 100%;
    box-sizing: border-box;
}

@media (max-width: 860px) {
    .tachyon_mid-grid {
        grid-template-columns: 1fr;
    }
}

.tachyon_mid-grid__col {
    min-width: 0;
    box-sizing: border-box;
}

/* Active Route Card */
.tachyon_active-route-card {
    background: var(--tachyon-card-bg, #202024);
    border: 1px solid var(--tachyon-card-border, rgba(255, 255, 255, 0.08));
    border-radius: 14px;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.tachyon_active-route-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
}

.tachyon_active-route-card__title-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
}

.tachyon_active-route-card__title-wrap svg {
    display: block;
    opacity: 0.85;
    flex-shrink: 0;
}

.tachyon_card-icon-box {
    display: none;
}

.tachyon_active-route-card__title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-color-high, #f1f5f9);
    text-transform: uppercase;
    letter-spacing: 0.03em;
}

.tachyon_active-route-card__actions {
    display: flex;
    align-items: center;
    gap: 8px;
}

.tachyon_active-route-card__sections-count {
    font-size: 11px;
    font-weight: 500;
    color: var(--text-color-medium, #cbd5e1);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.09);
    padding: 2px 7px;
    border-radius: 6px;
}

.tachyon_card-action-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 500;
    color: var(--text-color-high, #cbd5e1);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: all 0.15s ease;
}

.tachyon_card-action-btn:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.22);
}

.tachyon_active-route-card__body {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.tachyon_active-route-card__node-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 12px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 10px;
}

.tachyon_active-route-card__node-info {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
}

.tachyon_active-route-card__flag {
    font-size: 20px;
    line-height: 1;
}

.tachyon_active-route-card__node-details {
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.tachyon_active-route-card__node-name {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-color-high, #f8fafc);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tachyon_active-route-card__protocol {
    font-size: 11px;
    color: var(--text-color-medium, #cbd5e1);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 1px 6px;
    border-radius: 5px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    display: inline-block;
    width: fit-content;
    margin-top: 2px;
}

.tachyon_active-route-card__latency {
    font-size: 12px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 6px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    white-space: nowrap;
}

.tachyon_active-route__latency--fast {
    background: rgba(16, 185, 129, 0.16);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.tachyon_active-route__latency--medium {
    background: rgba(245, 158, 11, 0.16);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.tachyon_active-route__latency--slow {
    background: rgba(239, 68, 68, 0.16);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.tachyon_active-route__latency--unknown {
    background: rgba(148, 163, 184, 0.1);
    color: #94a3b8;
}

.tachyon_active-route-card__meta-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.tachyon_active-route-card__meta-item {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.tachyon_active-route-card__meta-label {
    font-size: 11px;
    color: var(--text-color-low, #64748b);
    text-transform: uppercase;
}

.tachyon_active-route-card__meta-value {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-color-high, #cbd5e1);
}

.tachyon_active-route-card__dpi-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    font-weight: 500;
    color: var(--text-color-low, #94a3b8);
}

.tachyon_active-route-card__dpi-badge--active {
    color: #10b981;
}

.tachyon_active-route-card__dpi-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
}

/* Inbounds Twin Card */
.tachyon_inbounds-card {
    background: var(--tachyon-card-bg, #202024);
    border: 1px solid var(--tachyon-card-border, rgba(255, 255, 255, 0.08));
    border-radius: 14px;
    padding: 16px !important;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.tachyon_inbounds-card .tachyon_active-route-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    padding-bottom: 0;
    border-bottom: none;
}

.tachyon_inbounds-card .tachyon-inbounds-chip-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 0;
}

.tachyon_inbounds-card .tachyon-inbound-chip {
    padding: 10px 12px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: none;
}

.tachyon_inbounds-card .tachyon-inbound-chip:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.14);
}

.tachyon_inbounds-card .tachyon-inbound-chip--selected {
    background: rgba(16, 185, 129, 0.12);
    border-color: rgba(16, 185, 129, 0.35);
}

/* Tier 4: Sections Hub */
.tachyon_sections-hub {
    margin-top: 8px;
    width: 100%;
    box-sizing: border-box;
}

/* Continuous Speed Wave Animation */
.tachyon_kpi-wave-track {
    animation: tachyon-wave-flow 2.8s linear infinite;
    will-change: transform;
}

@keyframes tachyon-wave-flow {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-84px);
    }
}

/* Clickable KPI Card */
.tachyon_kpi-card--clickable {
    cursor: pointer;
    user-select: none;
}

.tachyon_kpi-card--clickable:hover {
    border-color: rgba(16, 185, 129, 0.4);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.08);
}

/* KPI Icons Vibrant Contrast */
.tachyon_kpi-card__header svg {
    display: block;
    opacity: 1 !important;
    flex-shrink: 0;
    stroke-width: 2.2;
}

.tachyon_kpi-card[data-kpi="down"] .tachyon_kpi-card__header svg {
    color: #38bdf8 !important;
}

.tachyon_kpi-card[data-kpi="up"] .tachyon_kpi-card__header svg {
    color: #818cf8 !important;
}

.tachyon_kpi-card[data-kpi="latency"] .tachyon_kpi-card__header svg {
    color: #34d399 !important;
}

.tachyon_kpi-card[data-kpi="clients"] .tachyon_kpi-card__header svg {
    color: #a78bfa !important;
}

/* Horizontal Sections Tabs Bar (Matching Mockup) */
.tachyon_sections-tabs-bar {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    padding: 2px 0 14px 0 !important;
    margin-bottom: 14px !important;
    background: transparent !important;
    border: none !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
    overflow-x: auto !important;
    scrollbar-width: thin !important;
    box-sizing: border-box !important;
}

.tachyon_sections-tab {
    position: relative !important;
    appearance: none !important;
    -webkit-appearance: none !important;
    background: rgba(255, 255, 255, 0.04) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    outline: none !important;
    padding: 7px 16px !important;
    border-radius: 9px !important;
    font-size: 13.5px !important;
    font-weight: 600 !important;
    color: var(--text-color-medium, #94a3b8) !important;
    cursor: pointer !important;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
    white-space: nowrap !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px !important;
}

.tachyon_sections-tab:hover {
    background: rgba(255, 255, 255, 0.08) !important;
    border-color: rgba(255, 255, 255, 0.18) !important;
    color: #f8fafc !important;
}

.tachyon_sections-tab--active {
    background: rgba(56, 189, 248, 0.14) !important;
    border-color: rgba(56, 189, 248, 0.45) !important;
    color: #38bdf8 !important;
    box-shadow: 0 0 14px rgba(56, 189, 248, 0.22) !important;
}

.tachyon_sections-tab__indicator {
    display: none !important;
}

/* Country Chips Direct Bar & Rounded Rectangle (Matching Mockup) */
.tachyon_dashboard-page__country-chips-container {
    grid-column: 1 / -1;
    width: 100%;
    margin-bottom: 12px;
    padding: 0 !important;
    background: transparent !important;
    border: none !important;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.tachyon_dashboard-page__country-chips__header {
    display: none !important;
}

.tachyon_dashboard-page__country-chips-body {
    display: flex !important;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.tachyon_dashboard-page__region-bar {
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    gap: 6px !important;
    align-items: center !important;
    padding-bottom: 4px !important;
    scrollbar-width: thin !important;
}

.tachyon_dashboard-page__region-tab {
    flex-shrink: 0 !important;
    white-space: nowrap !important;
    border-radius: 20px !important;
    padding: 5px 12px !important;
}

.tachyon_dashboard-page__country-chips {
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    gap: 8px !important;
    align-items: center !important;
    padding: 2px 2px 8px 2px !important;
    scrollbar-width: thin !important;
    -webkit-overflow-scrolling: touch !important;
}

.tachyon_dashboard-page__country-chips::-webkit-scrollbar {
    height: 4px !important;
}

.tachyon_dashboard-page__country-chips::-webkit-scrollbar-track {
    background: transparent !important;
}

.tachyon_dashboard-page__country-chips::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15) !important;
    border-radius: 4px !important;
}

.tachyon_dashboard-page__country-chip {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px !important;
    padding: 6px 13px !important;
    border-radius: 20px !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    background: rgba(255, 255, 255, 0.04) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    color: var(--text-color-medium, #cbd5e1) !important;
    cursor: pointer !important;
    transition: all 0.15s ease !important;
    user-select: none !important;
    box-sizing: border-box !important;
    flex-shrink: 0 !important;
    white-space: nowrap !important;
}

.tachyon_dashboard-page__country-chip:hover {
    background: rgba(255, 255, 255, 0.08) !important;
    border-color: rgba(255, 255, 255, 0.22) !important;
    color: #ffffff !important;
}

.tachyon_dashboard-page__country-chip--active {
    background: rgba(56, 189, 248, 0.15) !important;
    border: 1px solid #38bdf8 !important;
    color: #38bdf8 !important;
    box-shadow: 0 0 12px rgba(56, 189, 248, 0.25) !important;
}

.tachyon_dashboard-page__country-chip__count {
    background: rgba(255, 255, 255, 0.12) !important;
    color: #ffffff !important;
    padding: 1px 6px !important;
    border-radius: 6px !important;
    font-size: 11px !important;
    font-weight: 600 !important;
}

/* Subscription Info High Contrast on Dark Theme */
.tachyon_dashboard-page__subscription-meta {
    background: rgba(255, 255, 255, 0.03) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    padding: 10px 14px !important;
}

.tachyon_dashboard-page__subscription-meta__heading {
    color: #cbd5e1 !important;
    font-size: 11px !important;
    font-weight: 600 !important;
}

.tachyon_dashboard-page__subscription-meta__title {
    color: #ffffff !important;
    font-weight: 700 !important;
    font-size: 13.5px !important;
}

.tachyon_dashboard-page__subscription-meta__fact-key {
    color: #94a3b8 !important;
    font-size: 11.5px !important;
}

.tachyon_dashboard-page__subscription-meta__fact-value {
    color: #f8fafc !important;
    font-weight: 600 !important;
    font-size: 12px !important;
}

.tachyon_dashboard-page__subscription-meta__announce {
    color: #e2e8f0 !important;
    font-size: 12px !important;
    border-left: 3px solid #38bdf8 !important;
    padding: 4px 10px !important;
    margin-top: 8px !important;
}

/* Subscription Action Buttons */
.tachyon_dashboard-page .btn.tachyon_subscription-action-btn {
    width: auto !important;
    min-width: 0 !important;
    height: 30px !important;
    min-height: 30px !important;
    padding: 4px 12px !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 7px !important;
    border-radius: 8px !important;
    background: rgba(255, 255, 255, 0.06) !important;
    border: 1px solid rgba(255, 255, 255, 0.14) !important;
    color: var(--text-color-high, #f8fafc) !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    white-space: nowrap !important;
    text-decoration: none !important;
    box-shadow: none !important;
    cursor: pointer;
    transition: all 0.15s ease;
}

.tachyon_dashboard-page .btn.tachyon_subscription-action-btn:hover {
    background: rgba(255, 255, 255, 0.14) !important;
    border-color: rgba(255, 255, 255, 0.28) !important;
    color: #ffffff !important;
    transform: translateY(-1px);
}

.tachyon_subscription-action-btn__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.tachyon_subscription-action-btn__icon svg {
    width: 14px;
    height: 14px;
    display: block;
}

.tachyon_subscription-action-btn__text {
    line-height: 1.2;
}

/* Outbound Grid Desktop 3-Columns & Selected Border */
@media (min-width: 900px) {
    .tachyon_dashboard-page__outbound-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    }
}

.tachyon_dashboard-page__outbound-grid__item--selected {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1.5px solid rgba(255, 255, 255, 0.45) !important;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.08) !important;
}

/* Inbound Servers Clean List Layout (Matching Mockup) */
.tachyon-inbounds-table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 8px 8px 8px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-color-low, #94a3b8);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    margin-bottom: 8px;
}

.tachyon_inbounds-card .tachyon-inbound-chip {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding: 8px 12px !important;
    border-radius: 10px !important;
    background: rgba(255, 255, 255, 0.025) !important;
    border: 1px solid rgba(255, 255, 255, 0.06) !important;
    gap: 10px;
    cursor: pointer;
    transition: all 0.15s ease;
}

.tachyon_inbounds-card .tachyon-inbound-chip:hover {
    background: rgba(255, 255, 255, 0.06) !important;
    border-color: rgba(255, 255, 255, 0.16) !important;
    transform: translateY(-1px);
}

.tachyon_inbounds-card .tachyon-inbound-card__top {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
}

.tachyon_inbounds-card .tachyon-inbound-card__bottom {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 0 !important;
    flex-shrink: 0;
}

.tachyon_inbounds-card .tachyon-port-pill--online {
    background: rgba(16, 185, 129, 0.14) !important;
    color: #10b981 !important;
    border: 1px solid rgba(16, 185, 129, 0.3) !important;
    padding: 1px 6px !important;
    border-radius: 6px !important;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
    font-size: 11px !important;
    font-weight: 600 !important;
}

.tachyon_inbounds-card .tachyon-stat-pill {
    background: rgba(255, 255, 255, 0.06) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    color: #cbd5e1 !important;
    padding: 2px 8px !important;
    border-radius: 6px !important;
    font-size: 11px !important;
    font-weight: 600 !important;
}

.tachyon_inbounds-card .tachyon-stat-pill--conns {
    background: rgba(99, 102, 241, 0.15) !important;
    color: #a5b4fc !important;
    border-color: rgba(99, 102, 241, 0.35) !important;
}

/* Connected Clients Modal Table */
.tachyon-inbound-clients-modal {
    padding: 4px;
    min-width: min(100%, 540px);
    box-sizing: border-box;
}

.tachyon-inbound-clients-modal__empty {
    padding: 32px 16px;
    text-align: center;
    color: var(--text-color-medium, #94a3b8);
    font-size: 14px;
}

.tachyon-inbound-clients-modal__table-wrap {
    overflow-x: auto;
    margin-bottom: 16px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.tachyon-inbound-clients-modal__table {
    width: 100%;
    margin-bottom: 0;
    border-collapse: collapse;
}

.tachyon-inbound-clients-modal__table th {
    padding: 10px 14px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--text-color-medium, #94a3b8);
    background: rgba(255, 255, 255, 0.03);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tachyon-inbound-clients-modal__table td {
    padding: 10px 14px;
    font-size: 13px;
    color: var(--text-color-high, #f8fafc);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    vertical-align: middle;
}

.tachyon-inbound-clients-modal__client-cell {
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

/* Inbound Server Mini Buttons */
.tachyon_inbounds-card .tachyon-inbound-mini-btn {
    width: 24px;
    height: 24px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text-color-medium, #cbd5e1);
}

.tachyon_inbounds-card .tachyon-inbound-mini-btn:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    color: #ffffff;
}

/* Dark Theme Contrast Enhancements */
.tachyon_dashboard-page--dark .tachyon_kpi-card__label,
:root:not([data-darkmode="false"]):not([data-theme="light"]) .tachyon_kpi-card__label {
    color: #e2e8f0 !important;
}

.tachyon_dashboard-page--dark .tachyon_kpi-card__sub,
:root:not([data-darkmode="false"]):not([data-theme="light"]) .tachyon_kpi-card__sub {
    color: #94a3b8 !important;
}

.tachyon_dashboard-page--dark .tachyon_active-route-card__meta-label,
:root:not([data-darkmode="false"]):not([data-theme="light"]) .tachyon_active-route-card__meta-label {
    color: #94a3b8 !important;
}

.tachyon_dashboard-page--dark .tachyon_hero-meta-label,
:root:not([data-darkmode="false"]):not([data-theme="light"]) .tachyon_hero-meta-label {
    color: #94a3b8 !important;
}

.tachyon_dashboard-page--dark .tachyon_dashboard-page__urltest-details__param dt,
:root:not([data-darkmode="false"]):not([data-theme="light"]) .tachyon_dashboard-page__urltest-details__param dt {
    color: #94a3b8 !important;
}

/* Popover Light Theme Overrides */
.tachyon_dashboard-page--light .tachyon_proto-popover,
[data-darkmode="false"] .tachyon_proto-popover,
[data-theme="light"] .tachyon_proto-popover {
    background: #ffffff !important;
    color: #0f172a !important;
    border: 1px solid #cbd5e1 !important;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12) !important;
}

.tachyon_dashboard-page--light .tachyon_proto-popover__header,
[data-darkmode="false"] .tachyon_proto-popover__header,
[data-theme="light"] .tachyon_proto-popover__header {
    border-bottom: 1px solid #e2e8f0 !important;
}

.tachyon_dashboard-page--light .tachyon_proto-popover__label,
[data-darkmode="false"] .tachyon_proto-popover__label,
[data-theme="light"] .tachyon_proto-popover__label {
    color: #64748b !important;
}

.tachyon_dashboard-page--light .tachyon_proto-popover__val,
[data-darkmode="false"] .tachyon_proto-popover__val,
[data-theme="light"] .tachyon_proto-popover__val {
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon_proto-popover__desc,
[data-darkmode="false"] .tachyon_proto-popover__desc,
[data-theme="light"] .tachyon_proto-popover__desc {
    color: #475569 !important;
    border-top: 1px solid #e2e8f0 !important;
}

/* LuCI Light / Bootstrap Theme Adaptations */
.tachyon_dashboard-page--light {
    --tachyon-card-bg: #ffffff;
    --tachyon-card-border: #e2e8f0;
    --tachyon-border-subtle: #e2e8f0;
    --text-color-high: #0f172a;
    --text-color-medium: #334155;
    --text-color-low: #64748b;
    color: #0f172a;
}

.tachyon_dashboard-page--light .tachyon_hero-bar,
.tachyon_dashboard-page--light .tachyon_kpi-card,
.tachyon_dashboard-page--light .tachyon_active-route-card,
.tachyon_dashboard-page--light .tachyon_inbounds-card,
.tachyon_dashboard-page--light .tachyon_dashboard-page__section-card,
.tachyon_dashboard-page--light .tachyon_dashboard-page__country-chips-container {
    background: #ffffff !important;
    border-color: #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.tachyon_dashboard-page--light .tachyon_hero-title {
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon_hero-meta-label,
.tachyon_dashboard-page--light .tachyon_kpi-card__label,
.tachyon_dashboard-page--light .tachyon_active-route-card__meta-label {
    color: #475569 !important;
}

.tachyon_dashboard-page--light .tachyon_hero-meta-value,
.tachyon_dashboard-page--light .tachyon_kpi-card__value,
.tachyon_dashboard-page--light .tachyon_active-route-card__node-name,
.tachyon_dashboard-page--light .tachyon_active-route-card__meta-value {
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon_kpi-card__sub {
    color: #64748b !important;
}

.tachyon_dashboard-page--light .tachyon_hero-action-btn {
    background: #f1f5f9;
    border-color: #cbd5e1;
    color: #334155;
}

.tachyon_dashboard-page--light .tachyon_hero-action-btn:hover:not(:disabled) {
    background: #e2e8f0;
    color: #0f172a;
}

.tachyon_dashboard-page--light .tachyon_sections-tabs-bar {
    background: transparent !important;
    border-bottom: 1px solid #e2e8f0 !important;
}

.tachyon_dashboard-page--light .tachyon_sections-tab {
    color: #64748b !important;
}

.tachyon_dashboard-page--light .tachyon_sections-tab:hover {
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon_sections-tab--active {
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon_sections-tab__indicator {
    background: #0f172a !important;
    box-shadow: 0 0 6px rgba(15, 23, 42, 0.4) !important;
}

.tachyon_dashboard-page--light .tachyon_subscription-action-btn {
    background: #f1f5f9 !important;
    border-color: #cbd5e1 !important;
    color: #1e293b !important;
}

.tachyon_dashboard-page--light .tachyon_subscription-action-btn:hover {
    background: #e2e8f0 !important;
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon_dashboard-page__country-chip {
    background: #f1f5f9 !important;
    border-color: #cbd5e1 !important;
    color: #334155 !important;
}

.tachyon_dashboard-page--light .tachyon_dashboard-page__country-chip:hover {
    background: #e2e8f0 !important;
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon_dashboard-page__country-chip--active {
    background: #e2e8f0 !important;
    border-color: #0f172a !important;
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon_dashboard-page__country-chip__count {
    background: #cbd5e1 !important;
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon_dashboard-page__outbound-grid__item {
    background: #ffffff !important;
    border-color: #e2e8f0 !important;
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon_dashboard-page__outbound-grid__item:hover {
    background: #f8fafc !important;
    border-color: #94a3b8 !important;
}

.tachyon_dashboard-page--light .tachyon_dashboard-page__outbound-grid__item--selected {
    background: #f8fafc !important;
    border: 1.5px solid #0f172a !important;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.08) !important;
}

.tachyon_dashboard-page--light .tachyon_inbounds-card .tachyon-inbound-chip {
    background: #f8fafc !important;
    border-color: #e2e8f0 !important;
}

.tachyon_dashboard-page--light .tachyon_inbounds-card .tachyon-inbound-chip:hover {
    background: #f1f5f9 !important;
    border-color: #cbd5e1 !important;
}

.tachyon_dashboard-page--light .tachyon-inbound-mini-btn {
    background: #f1f5f9 !important;
    border-color: #cbd5e1 !important;
    color: #475569 !important;
}

.tachyon_dashboard-page--light .tachyon-inbound-mini-btn:hover {
    background: #e2e8f0 !important;
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon-inbound-clients-modal__table-wrap {
    border-color: #e2e8f0 !important;
}

.tachyon_dashboard-page--light .tachyon-inbound-clients-modal__table th {
    background: #f8fafc !important;
    color: #475569 !important;
    border-bottom-color: #e2e8f0 !important;
}

.tachyon_dashboard-page--light .tachyon-inbound-clients-modal__table td {
    color: #0f172a !important;
    border-bottom-color: #f1f5f9 !important;
}

/* Inbound Servers Modern Single-Row Items */
.tachyon_inbounds-card .tachyon-inbounds-chip-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 8px !important;
}

.tachyon-inbound-row-item,
.tachyon-inbound-card.tachyon-inbound-row-item,
.tachyon_inbounds-card .tachyon-inbound-row-item {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding: 8px 14px !important;
    border-radius: 12px !important;
    background: rgba(255, 255, 255, 0.03) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    cursor: pointer !important;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
    gap: 12px !important;
    box-sizing: border-box !important;
    width: 100% !important;
    min-height: 48px !important;
    white-space: nowrap !important;
}

.tachyon-inbound-row-item:hover {
    background: rgba(255, 255, 255, 0.06) !important;
    border-color: rgba(56, 189, 248, 0.35) !important;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

.tachyon-inbound-row-item .tachyon-inbound-card__top,
.tachyon-inbound-row-item__left {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: flex-start !important;
    gap: 8px !important;
    flex: 1 1 auto !important;
    width: auto !important;
    min-width: 0 !important;
}

.tachyon-inbound-row-item__name {
    font-size: 13px !important;
    font-weight: 600 !important;
    color: #f1f5f9 !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    max-width: 140px !important;
}

.tachyon-inbound-row-item .tachyon-protocol-pill {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.14) !important;
    color: #e2e8f0 !important;
    padding: 2px 7px !important;
    border-radius: 6px !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    flex-shrink: 0 !important;
}

.tachyon-inbound-row-item .tachyon-port-pill--online,
.tachyon-inbound-row-item .tachyon-port-pill {
    background: rgba(6, 182, 212, 0.15) !important;
    color: #06b6d4 !important;
    border: 1px solid rgba(6, 182, 212, 0.4) !important;
    padding: 2px 8px !important;
    border-radius: 6px !important;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
    font-size: 11.5px !important;
    font-weight: 700 !important;
    letter-spacing: 0.5px !important;
    flex-shrink: 0 !important;
}

.tachyon-inbound-row-item .tachyon-port-pill--offline {
    background: rgba(239, 68, 68, 0.15) !important;
    color: #f87171 !important;
    border: 1px solid rgba(239, 68, 68, 0.4) !important;
    padding: 2px 8px !important;
    border-radius: 6px !important;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
    font-size: 11.5px !important;
    font-weight: 700 !important;
    letter-spacing: 0.5px !important;
    flex-shrink: 0 !important;
}

.tachyon-inbound-row-item__center {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-shrink: 0 !important;
    width: auto !important;
    margin: 0 8px !important;
}

.tachyon-inbound-client-badge-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
}

.tachyon-inbound-client-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 9px;
    border-radius: 7px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
}

.tachyon-inbound-client-badge--zero {
    background: rgba(255, 255, 255, 0.05);
    color: #94a3b8;
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.tachyon-inbound-idle-tag {
    display: none !important;
}

.tachyon-inbound-client-badge--active {
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.35);
}

.tachyon-inbound-client-traffic {
    font-size: 10px;
    color: #94a3b8;
    white-space: nowrap;
}

.tachyon-inbound-row-item .tachyon-inbound-card__bottom,
.tachyon-inbound-row-item__right {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: flex-end !important;
    gap: 6px !important;
    flex-shrink: 0 !important;
    width: auto !important;
    margin-top: 0 !important;
}

.tachyon-inbound-row-item .tachyon-inbound-mini-btn,
.tachyon-inbound-mini-btn--qr,
.tachyon-inbound-mini-btn--gear {
    width: 28px !important;
    height: 28px !important;
    min-width: 28px !important;
    min-height: 28px !important;
    border-radius: 7px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: rgba(255, 255, 255, 0.04) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    color: #94a3b8 !important;
    cursor: pointer !important;
    padding: 0 !important;
    transition: all 0.15s ease !important;
    box-sizing: border-box !important;
    flex-shrink: 0 !important;
}

.tachyon-inbound-mini-btn--qr:hover,
.tachyon-inbound-mini-btn--gear:hover {
    background: rgba(56, 189, 248, 0.15) !important;
    border-color: rgba(56, 189, 248, 0.4) !important;
    color: #38bdf8 !important;
    transform: translateY(-1px);
}

/* Multi-Route Streams in Active Route Card */
.tachyon_active-route-card__stream-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    margin-bottom: 8px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 10px;
    gap: 10px;
    transition: all 0.2s ease;
}

.tachyon_active-route-card__stream-row:last-child {
    margin-bottom: 12px;
}

.tachyon_active-route-card__stream-row:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.15);
}

.tachyon_active-route-card__stream-left {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    flex: 1;
}

.tachyon_active-route-card__stream-sec-icon {
    font-size: 14px;
    flex-shrink: 0;
}

.tachyon_active-route-card__stream-sec-name {
    font-size: 13px;
    font-weight: 600;
    color: #f1f5f9;
    white-space: nowrap;
}

.tachyon_active-route-card__stream-arrow {
    color: #64748b;
    font-size: 12px;
    flex-shrink: 0;
}

/* Redesigned Inbound Clients Modal */
.tachyon-inbound-modal__kpi-bar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 16px;
}

.tachyon-inbound-modal__kpi-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 10px 12px;
}

.tachyon-inbound-modal__kpi-card-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #94a3b8;
    margin-bottom: 4px;
    text-transform: uppercase;
}

.tachyon-inbound-modal__kpi-card-value {
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.2px;
}

.tachyon-inbound-modal__empty-radar-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 28px 16px;
    background: rgba(15, 23, 42, 0.4);
    border: 1px solid rgba(56, 189, 248, 0.15);
    border-radius: 12px;
    text-align: center;
    margin-bottom: 8px;
}

.tachyon_radar-svg {
    margin-bottom: 14px;
    filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.3));
}

.tachyon_radar-blip {
    animation: tachyon-blip-pulse 2s infinite ease-in-out;
}

@keyframes tachyon-blip-pulse {
    0%, 100% { opacity: 0.35; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1.15); }
}

.tachyon-inbound-modal__empty-title {
    font-size: 14.5px;
    font-weight: 700;
    color: #f8fafc;
    margin-bottom: 4px;
}

.tachyon-inbound-modal__empty-desc {
    font-size: 12px;
    color: #94a3b8;
    max-width: 380px;
    margin-bottom: 16px;
    line-height: 1.4;
}

.tachyon-inbound-modal__empty-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.tachyon-inbound-modal__action-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.3);
    color: #38bdf8;
    cursor: pointer;
    transition: all 0.2s ease;
}

.tachyon-inbound-modal__action-btn:hover {
    background: rgba(56, 189, 248, 0.2);
    border-color: #38bdf8;
    color: #ffffff;
}

/* Light Theme Overrides for New Elements */
.tachyon_dashboard-page--light .tachyon-inbound-row-item {
    background: #f8fafc !important;
    border-color: #e2e8f0 !important;
}

.tachyon_dashboard-page--light .tachyon-inbound-row-item:hover {
    background: #f1f5f9 !important;
    border-color: #cbd5e1 !important;
}

.tachyon_dashboard-page--light .tachyon-inbound-row-item__name {
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon-inbound-client-badge--zero {
    background: #f1f5f9 !important;
    color: #64748b !important;
    border-color: #e2e8f0 !important;
}

.tachyon_dashboard-page--light .tachyon-inbound-mini-btn--qr,
.tachyon_dashboard-page--light .tachyon-inbound-mini-btn--gear {
    background: #f1f5f9 !important;
    border-color: #cbd5e1 !important;
    color: #475569 !important;
}

.tachyon_dashboard-page--light .tachyon_active-route-card__stream-row {
    background: #f8fafc !important;
    border-color: #e2e8f0 !important;
}

.tachyon_dashboard-page--light .tachyon_active-route-card__stream-row:hover {
    background: #f1f5f9 !important;
}

.tachyon_dashboard-page--light .tachyon_active-route-card__stream-sec-name {
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon-inbound-modal__kpi-card {
    background: #f8fafc !important;
    border-color: #e2e8f0 !important;
}

.tachyon_dashboard-page--light .tachyon-inbound-modal__kpi-card-value {
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon-inbound-modal__empty-radar-card {
    background: #f8fafc !important;
    border-color: #e2e8f0 !important;
}

.tachyon_dashboard-page--light .tachyon-inbound-modal__empty-title {
    color: #0f172a !important;
}

/* ==========================================================================
   TACHYON DASHBOARD V3: EXACT SCREENSHOT DESIGN & ARCHITECTURE
   ========================================================================== */

.tachyon_dashboard-v3 {
    display: flex !important;
    flex-direction: column !important;
    gap: 16px !important;
    width: 100% !important;
    min-height: 100% !important;
    box-sizing: border-box !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
    color: #f8fafc !important;
}

/* --- Top Brand Header --- */
.tachyon_top-header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding: 12px 20px !important;
    background: rgba(13, 21, 34, 0.9) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    backdrop-filter: blur(12px) !important;
    box-sizing: border-box !important;
    width: 100% !important;
}

.tachyon_top-header__brand {
    display: flex !important;
    align-items: center !important;
    gap: 12px !important;
}

.tachyon_top-header__title-wrap {
    display: flex !important;
    align-items: baseline !important;
    gap: 2px !important;
}

.tachyon_top-header__title {
    font-size: 16px !important;
    font-weight: 700 !important;
    color: #ffffff !important;
    letter-spacing: -0.01em !important;
}

.tachyon_top-header__subtitle {
    font-size: 13px !important;
    font-weight: 500 !important;
    color: #94a3b8 !important;
}

.tachyon_top-header__prod-badge {
    background: rgba(56, 189, 248, 0.12) !important;
    border: 1px solid rgba(56, 189, 248, 0.35) !important;
    color: #38bdf8 !important;
    font-size: 10px !important;
    font-weight: 700 !important;
    letter-spacing: 0.08em !important;
    padding: 2px 8px !important;
    border-radius: 9999px !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
    line-height: 1.4 !important;
}

.tachyon_top-header__prod-badge:hover {
    background: rgba(56, 189, 248, 0.22) !important;
    border-color: #38bdf8 !important;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.3) !important;
}

.tachyon_top-header__meta {
    display: flex !important;
    align-items: center !important;
    gap: 14px !important;
    font-size: 12px !important;
    color: #94a3b8 !important;
}

.tachyon_top-header__status-item {
    display: flex !important;
    align-items: center !important;
    gap: 6px !important;
}

.tachyon_top-header__status-dot {
    width: 7px !important;
    height: 7px !important;
    border-radius: 50% !important;
    background: #10b981 !important;
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.8) !important;
    display: inline-block !important;
}

.tachyon_top-header__status-item--offline .tachyon_top-header__status-dot {
    background: #ef4444 !important;
    box-shadow: 0 0 8px rgba(239, 68, 68, 0.8) !important;
}

.tachyon_top-header__status-text {
    font-weight: 500 !important;
    color: #f8fafc !important;
}

.tachyon_top-header__divider {
    color: rgba(255, 255, 255, 0.15) !important;
}

.tachyon_top-header__updated {
    font-size: 12px !important;
    color: #64748b !important;
}

.tachyon_top-header__updated-time {
    color: #cbd5e1 !important;
    font-family: ui-monospace, monospace !important;
}

.tachyon_top-header__lang-btn {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px !important;
    padding: 4px 10px !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    border-radius: 6px !important;
    color: #f8fafc !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
}

.tachyon_top-header__lang-btn:hover {
    background: rgba(255, 255, 255, 0.1) !important;
    border-color: rgba(255, 255, 255, 0.25) !important;
}

/* --- Layout Outer (Sidebar + Main Content) --- */
.tachyon_dashboard-v3__layout {
    display: flex !important;
    gap: 20px !important;
    align-items: flex-start !important;
    width: 100% !important;
    box-sizing: border-box !important;
}

#dashboard-sidebar {
    width: 200px !important;
    flex-shrink: 0 !important;
    position: sticky !important;
    top: 16px !important;
}

.tachyon_sidebar {
    display: flex !important;
    flex-direction: column !important;
    gap: 4px !important;
    background: rgba(13, 21, 34, 0.85) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    padding: 8px !important;
    backdrop-filter: blur(12px) !important;
    box-sizing: border-box !important;
}

.tachyon_sidebar__item {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    width: 100% !important;
    padding: 10px 14px !important;
    background: transparent !important;
    border: none !important;
    border-radius: 8px !important;
    color: #94a3b8 !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    cursor: pointer !important;
    transition: all 0.18s ease !important;
    text-align: left !important;
    box-sizing: border-box !important;
}

.tachyon_sidebar__item:hover {
    background: rgba(255, 255, 255, 0.05) !important;
    color: #f8fafc !important;
}

.tachyon_sidebar__item--active {
    background: rgba(56, 189, 248, 0.12) !important;
    color: #38bdf8 !important;
    font-weight: 600 !important;
    box-shadow: inset 3px 0 0 #38bdf8 !important;
}

.tachyon_sidebar__item-icon {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-shrink: 0 !important;
    color: inherit !important;
}

.tachyon_sidebar__item-label {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
}

/* --- Main Content Area --- */
.tachyon_dashboard-v3__main {
    flex: 1 !important;
    min-width: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 18px !important;
    box-sizing: border-box !important;
}

.tachyon_dashboard-v3__title-block {
    display: flex !important;
    flex-direction: column !important;
    gap: 4px !important;
    margin-bottom: 2px !important;
}

.tachyon_dashboard-v3__page-title {
    font-size: 22px !important;
    font-weight: 700 !important;
    color: #ffffff !important;
    margin: 0 !important;
    letter-spacing: -0.01em !important;
}

.tachyon_dashboard-v3__page-subtitle {
    font-size: 13px !important;
    color: #64748b !important;
    margin: 0 !important;
    font-weight: 400 !important;
}

/* --- Tier 1: 4 Top KPI Cards --- */
.tachyon_dashboard-v3__kpi-wrap {
    width: 100% !important;
}

.tachyon_kpi-grid {
    display: grid !important;
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 14px !important;
    width: 100% !important;
    box-sizing: border-box !important;
}

@media (max-width: 1200px) {
    .tachyon_kpi-grid {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

@media (max-width: 640px) {
    .tachyon_kpi-grid {
        grid-template-columns: 1fr !important;
    }
}

.tachyon_kpi-card {
    display: flex !important;
    align-items: center !important;
    gap: 14px !important;
    background: rgba(13, 21, 34, 0.85) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    padding: 16px !important;
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease !important;
    box-sizing: border-box !important;
}

.tachyon_kpi-card--clickable {
    cursor: pointer !important;
}

.tachyon_kpi-card:hover {
    border-color: rgba(56, 189, 248, 0.35) !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25) !important;
}

.tachyon_kpi-card__icon-wrap {
    width: 44px !important;
    height: 44px !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-shrink: 0 !important;
}

.tachyon_kpi-card__icon-wrap--teal {
    background: rgba(20, 184, 166, 0.15) !important;
    color: #14b8a6 !important;
}

.tachyon_kpi-card__icon-wrap--cyan {
    background: rgba(6, 182, 212, 0.15) !important;
    color: #06b6d4 !important;
}

.tachyon_kpi-card__icon-wrap--blue {
    background: rgba(59, 130, 246, 0.15) !important;
    color: #3b82f6 !important;
}

.tachyon_kpi-card__icon-wrap--emerald {
    background: rgba(16, 185, 129, 0.15) !important;
    color: #10b981 !important;
}

.tachyon_kpi-card__info {
    display: flex !important;
    flex-direction: column !important;
    gap: 2px !important;
    min-width: 0 !important;
    flex: 1 !important;
}

.tachyon_kpi-card__label {
    font-size: 12px !important;
    font-weight: 500 !important;
    color: #94a3b8 !important;
}

.tachyon_kpi-card__value {
    font-size: 22px !important;
    font-weight: 700 !important;
    color: #ffffff !important;
    letter-spacing: -0.02em !important;
    line-height: 1.2 !important;
}

.tachyon_kpi-card__trend {
    font-size: 11px !important;
    font-weight: 500 !important;
    margin-top: 2px !important;
}

.tachyon_kpi-card__trend--up,
.tachyon_kpi-card__trend--good {
    color: #10b981 !important;
}

.tachyon_kpi-card__trend--stable {
    color: #94a3b8 !important;
}

.tachyon_kpi-card__trend--warn {
    color: #f59e0b !important;
}

/* --- Tier 2: Mid Split (Spline Traffic Chart + System Health) --- */
.tachyon_dashboard-v3__mid-split {
    display: grid !important;
    grid-template-columns: 2fr 1fr !important;
    gap: 16px !important;
    align-items: stretch !important;
    width: 100% !important;
    box-sizing: border-box !important;
}

@media (max-width: 1080px) {
    .tachyon_dashboard-v3__mid-split {
        grid-template-columns: 1fr !important;
    }
}

.tachyon_dashboard-v3__mid-left,
.tachyon_dashboard-v3__mid-right {
    min-width: 0 !important;
    display: flex !important;
    flex-direction: column !important;
}

/* Traffic Spline Chart Card */
.tachyon_traffic-chart-card {
    background: rgba(13, 21, 34, 0.85) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    padding: 18px !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 14px !important;
    box-sizing: border-box !important;
    height: 100% !important;
}

.tachyon_traffic-chart__header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    flex-wrap: wrap !important;
    gap: 10px !important;
}

.tachyon_traffic-chart__title {
    font-size: 15px !important;
    font-weight: 600 !important;
    color: #ffffff !important;
}

.tachyon_traffic-chart__controls {
    display: flex !important;
    align-items: center !important;
    gap: 14px !important;
    font-size: 12px !important;
}

.tachyon_traffic-chart__legend-item {
    display: flex !important;
    align-items: center !important;
    gap: 6px !important;
    color: #94a3b8 !important;
    font-size: 12px !important;
}

.tachyon_traffic-chart__dot {
    width: 8px !important;
    height: 8px !important;
    border-radius: 50% !important;
    display: inline-block !important;
}

.tachyon_traffic-chart__dot--in {
    background: #00d2ff !important;
    box-shadow: 0 0 6px #00d2ff !important;
}

.tachyon_traffic-chart__dot--out {
    background: #10b981 !important;
    box-shadow: 0 0 6px #10b981 !important;
}

.tachyon_traffic-chart__live-badge {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px !important;
    padding: 3px 9px !important;
    background: rgba(15, 23, 42, 0.7) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 6px !important;
    font-family: ui-monospace, monospace !important;
    font-size: 11px !important;
    font-weight: 500 !important;
    line-height: 1.2 !important;
}

.tachyon_traffic-chart__live-in {
    color: #00d2ff !important;
}

.tachyon_traffic-chart__live-sep {
    color: rgba(255, 255, 255, 0.25) !important;
}

.tachyon_traffic-chart__live-out {
    color: #10b981 !important;
}

.tachyon_traffic-chart__filter-btn {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px !important;
    padding: 4px 10px !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    border-radius: 6px !important;
    color: #f8fafc !important;
    font-size: 12px !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
}

.tachyon_traffic-chart__filter-btn:hover {
    background: rgba(255, 255, 255, 0.1) !important;
    border-color: rgba(255, 255, 255, 0.25) !important;
}

.tachyon_traffic-chart__canvas-wrap {
    width: 100% !important;
    height: 215px !important;
    position: relative !important;
}

.tachyon_traffic-chart__svg {
    width: 100% !important;
    height: 100% !important;
    overflow: visible !important;
    display: block !important;
}

/* System Health Card */
.tachyon_system-health-card {
    background: rgba(13, 21, 34, 0.85) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    padding: 18px !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 14px !important;
    box-sizing: border-box !important;
    height: 100% !important;
}

.tachyon_system-health__header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
}

.tachyon_system-health__title {
    font-size: 15px !important;
    font-weight: 600 !important;
    color: #ffffff !important;
}

.tachyon_system-health__status-badge {
    font-size: 11px !important;
    font-weight: 600 !important;
    padding: 3px 9px !important;
    border-radius: 9999px !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
}

.tachyon_system-health__status-badge--ok {
    background: rgba(16, 185, 129, 0.15) !important;
    color: #10b981 !important;
    border: 1px solid rgba(16, 185, 129, 0.3) !important;
}

.tachyon_system-health__status-badge--ok:hover {
    background: rgba(16, 185, 129, 0.25) !important;
    border-color: #10b981 !important;
}

.tachyon_system-health__status-badge--warn {
    background: rgba(245, 158, 11, 0.15) !important;
    color: #f59e0b !important;
    border: 1px solid rgba(245, 158, 11, 0.3) !important;
}

.tachyon_system-health__body {
    display: flex !important;
    flex-direction: column !important;
    gap: 8px !important;
    justify-content: space-between !important;
    flex: 1 !important;
}

.tachyon_system-health__item {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding: 10px 12px !important;
    background: rgba(255, 255, 255, 0.03) !important;
    border: 1px solid rgba(255, 255, 255, 0.05) !important;
    border-radius: 8px !important;
    transition: all 0.15s ease !important;
}

.tachyon_system-health__item--clickable {
    cursor: pointer !important;
}

.tachyon_system-health__item:hover {
    background: rgba(255, 255, 255, 0.06) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
}

.tachyon_system-health__item-left {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
}

.tachyon_system-health__item-dot {
    width: 7px !important;
    height: 7px !important;
    border-radius: 50% !important;
    flex-shrink: 0 !important;
}

.tachyon_system-health__item-dot--online {
    background: #10b981 !important;
    box-shadow: 0 0 6px rgba(16, 185, 129, 0.8) !important;
}

.tachyon_system-health__item-dot--offline {
    background: #ef4444 !important;
    box-shadow: 0 0 6px rgba(239, 68, 68, 0.8) !important;
}

.tachyon_system-health__item-info {
    display: flex !important;
    flex-direction: column !important;
    gap: 2px !important;
}

.tachyon_system-health__item-name {
    font-size: 13px !important;
    font-weight: 600 !important;
    color: #f8fafc !important;
}

.tachyon_system-health__item-role {
    font-size: 11px !important;
    color: #64748b !important;
}

.tachyon_system-health__item-right {
    display: flex !important;
    align-items: center !important;
    gap: 14px !important;
}

.tachyon_system-health__metric-col {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-end !important;
    gap: 2px !important;
}

.tachyon_system-health__metric-label {
    font-size: 10px !important;
    color: #64748b !important;
    text-transform: uppercase !important;
    font-weight: 500 !important;
}

.tachyon_system-health__metric-val {
    font-size: 12px !important;
    font-weight: 600 !important;
    color: #cbd5e1 !important;
    font-family: ui-monospace, monospace !important;
}

.tachyon_system-health__chevron {
    color: #64748b !important;
    display: flex !important;
    align-items: center !important;
}

/* --- Tier 3: Routes Table Card --- */
.tachyon_routes-card {
    background: rgba(13, 21, 34, 0.85) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    padding: 18px !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 14px !important;
    box-sizing: border-box !important;
    width: 100% !important;
}

.tachyon_routes-table__header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
}

.tachyon_routes-table__title-wrap {
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
    color: #ffffff !important;
}

.tachyon_routes-table__title {
    font-size: 15px !important;
    font-weight: 600 !important;
}

.tachyon_routes-table__action-btn {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px !important;
    padding: 6px 12px !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    border-radius: 6px !important;
    color: #94a3b8 !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
}

.tachyon_routes-table__action-btn:hover {
    background: rgba(255, 255, 255, 0.1) !important;
    color: #f8fafc !important;
    border-color: rgba(255, 255, 255, 0.25) !important;
}

.tachyon_routes-table__list {
    display: flex !important;
    flex-direction: column !important;
    gap: 8px !important;
}

.tachyon_route-row {
    display: grid !important;
    grid-template-columns: 2.2fr 1fr 1.8fr 1.6fr 1.2fr 1fr 1.2fr !important;
    align-items: center !important;
    gap: 12px !important;
    padding: 12px 14px !important;
    background: rgba(255, 255, 255, 0.03) !important;
    border: 1px solid rgba(255, 255, 255, 0.05) !important;
    border-radius: 10px !important;
    transition: all 0.15s ease !important;
    cursor: pointer !important;
    box-sizing: border-box !important;
}

@media (max-width: 1080px) {
    .tachyon_route-row {
        grid-template-columns: 2fr 1fr 1.5fr 1fr !important;
    }
    .tachyon_route-row__col-info:nth-child(4),
    .tachyon_route-row__col-info:nth-child(5),
    .tachyon_route-row__col-info:nth-child(6) {
        display: none !important;
    }
}

.tachyon_route-row:hover {
    background: rgba(255, 255, 255, 0.06) !important;
    border-color: rgba(56, 189, 248, 0.3) !important;
}

.tachyon_route-row__col-primary {
    display: flex !important;
    align-items: center !important;
    gap: 12px !important;
    min-width: 0 !important;
}

.tachyon_route-row__name-wrap {
    display: flex !important;
    flex-direction: column !important;
    gap: 2px !important;
    min-width: 0 !important;
}

.tachyon_route-row__name {
    font-size: 14px !important;
    font-weight: 600 !important;
    color: #ffffff !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
}

.tachyon_route-row__subtitle {
    font-size: 11px !important;
    color: #64748b !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
}

.tachyon_route-row__col-status {
    display: flex !important;
    align-items: center !important;
}

.tachyon_route-row__status-badge {
    display: inline-flex !important;
    align-items: center !important;
    gap: 5px !important;
    font-size: 11px !important;
    font-weight: 500 !important;
    padding: 3px 8px !important;
    border-radius: 9999px !important;
}

.tachyon_route-row__status-badge--active {
    background: rgba(16, 185, 129, 0.15) !important;
    color: #10b981 !important;
    border: 1px solid rgba(16, 185, 129, 0.3) !important;
}

.tachyon_route-row__status-badge--inactive {
    background: rgba(100, 116, 139, 0.15) !important;
    color: #94a3b8 !important;
    border: 1px solid rgba(100, 116, 139, 0.3) !important;
}

.tachyon_route-row__status-dot {
    width: 6px !important;
    height: 6px !important;
    border-radius: 50% !important;
    background: currentColor !important;
    display: inline-block !important;
}

.tachyon_route-row__col-info {
    display: flex !important;
    flex-direction: column !important;
    gap: 2px !important;
    min-width: 0 !important;
}

.tachyon_route-row__label {
    font-size: 10px !important;
    color: #64748b !important;
    font-weight: 500 !important;
}

.tachyon_route-row__val {
    font-size: 12px !important;
    color: #cbd5e1 !important;
    font-weight: 500 !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
}

.tachyon_route-row__val--server {
    display: flex !important;
    align-items: center !important;
    gap: 6px !important;
}

.tachyon_route-row__flag {
    display: inline-flex !important;
    align-items: center !important;
    flex-shrink: 0 !important;
}

.tachyon_route-row__val--number {
    font-family: ui-monospace, monospace !important;
}

.tachyon_route-row__col-actions {
    display: flex !important;
    align-items: center !important;
    justify-content: flex-end !important;
    gap: 10px !important;
}

.tachyon_route-row__latency-pill {
    display: inline-flex !important;
    align-items: center !important;
    gap: 5px !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    padding: 3px 8px !important;
    border-radius: 9999px !important;
    font-family: ui-monospace, monospace !important;
}

.tachyon_route-row__latency--green {
    background: rgba(16, 185, 129, 0.15) !important;
    color: #10b981 !important;
    border: 1px solid rgba(16, 185, 129, 0.3) !important;
}

.tachyon_route-row__latency--yellow {
    background: rgba(245, 158, 11, 0.15) !important;
    color: #f59e0b !important;
    border: 1px solid rgba(245, 158, 11, 0.3) !important;
}

.tachyon_route-row__latency--red {
    background: rgba(239, 68, 68, 0.15) !important;
    color: #ef4444 !important;
    border: 1px solid rgba(239, 68, 68, 0.3) !important;
}

.tachyon_route-row__latency-dot {
    width: 5px !important;
    height: 5px !important;
    border-radius: 50% !important;
    background: currentColor !important;
    display: inline-block !important;
}

.tachyon_route-row__chevron {
    color: #64748b !important;
    display: flex !important;
    align-items: center !important;
}

/* --- Tier 4: Nodes Section --- */
.tachyon_nodes-section {
    background: rgba(13, 21, 34, 0.85) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    padding: 18px !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 14px !important;
    box-sizing: border-box !important;
    width: 100% !important;
}

.tachyon_nodes-grid__header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
}

.tachyon_nodes-grid__title-wrap {
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
    color: #ffffff !important;
}

.tachyon_nodes-grid__title {
    font-size: 15px !important;
    font-weight: 600 !important;
}

.tachyon_nodes-grid__action-btn {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px !important;
    padding: 6px 12px !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    border-radius: 6px !important;
    color: #94a3b8 !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
}

.tachyon_nodes-grid__action-btn:hover {
    background: rgba(255, 255, 255, 0.1) !important;
    color: #f8fafc !important;
    border-color: rgba(255, 255, 255, 0.25) !important;
}

.tachyon_nodes-grid__action-btn--loading svg {
    animation: tachyon_spin 1s linear infinite !important;
}

.tachyon_nodes-grid__body {
    display: grid !important;
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 14px !important;
    width: 100% !important;
    box-sizing: border-box !important;
}

@media (max-width: 1200px) {
    .tachyon_nodes-grid__body {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

@media (max-width: 640px) {
    .tachyon_nodes-grid__body {
        grid-template-columns: 1fr !important;
    }
}

.tachyon_node-card {
    background: rgba(255, 255, 255, 0.03) !important;
    border: 1px solid rgba(255, 255, 255, 0.06) !important;
    border-radius: 10px !important;
    padding: 14px !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 10px !important;
    transition: all 0.2s ease !important;
    box-sizing: border-box !important;
    cursor: pointer !important;
}

.tachyon_node-card:hover {
    background: rgba(255, 255, 255, 0.06) !important;
    border-color: rgba(56, 189, 248, 0.3) !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2) !important;
}

.tachyon_node-card__top {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    gap: 8px !important;
}

.tachyon_node-card__name-group {
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
    min-width: 0 !important;
    overflow: hidden !important;
}

.tachyon_node-card__flag {
    display: inline-flex !important;
    align-items: center !important;
    flex-shrink: 0 !important;
}

.tachyon_node-card__name {
    font-size: 13px !important;
    font-weight: 600 !important;
    color: #ffffff !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
}

.tachyon_node-card__tag-badge {
    font-size: 10px !important;
    font-weight: 600 !important;
    padding: 2px 6px !important;
    border-radius: 4px !important;
    background: rgba(56, 189, 248, 0.12) !important;
    color: #38bdf8 !important;
    border: 1px solid rgba(56, 189, 248, 0.25) !important;
    flex-shrink: 0 !important;
}

.tachyon_node-card__middle {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    font-size: 11px !important;
}

.tachyon_node-card__protocol {
    color: #64748b !important;
    font-family: ui-monospace, monospace !important;
}

.tachyon_node-card__latency {
    font-weight: 600 !important;
    font-family: ui-monospace, monospace !important;
}

.tachyon_node-card__latency--fast {
    color: #10b981 !important;
}

.tachyon_node-card__latency--medium {
    color: #f59e0b !important;
}

.tachyon_node-card__latency--slow {
    color: #ef4444 !important;
}

.tachyon_node-card__bottom {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    font-size: 11px !important;
    padding-top: 8px !important;
    border-top: 1px solid rgba(255, 255, 255, 0.04) !important;
}

.tachyon_node-card__status {
    display: inline-flex !important;
    align-items: center !important;
    gap: 5px !important;
    font-weight: 500 !important;
}

.tachyon_node-card__status--online {
    color: #10b981 !important;
}

.tachyon_node-card__status--offline {
    color: #ef4444 !important;
}

.tachyon_node-card__status-dot {
    width: 5px !important;
    height: 5px !important;
    border-radius: 50% !important;
    background: currentColor !important;
    display: inline-block !important;
}

.tachyon_node-card__quota {
    color: #64748b !important;
    font-family: ui-monospace, monospace !important;
}

/* Light Theme overrides for V3 */
.tachyon_dashboard-page--light .tachyon_top-header,
.tachyon_dashboard-page--light .tachyon_sidebar,
.tachyon_dashboard-page--light .tachyon_kpi-card,
.tachyon_dashboard-page--light .tachyon_traffic-chart-card,
.tachyon_dashboard-page--light .tachyon_system-health-card,
.tachyon_dashboard-page--light .tachyon_routes-card,
.tachyon_dashboard-page--light .tachyon_nodes-section {
    background: #ffffff !important;
    border-color: #e2e8f0 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
}

.tachyon_dashboard-page--light .tachyon_top-header__title,
.tachyon_dashboard-page--light .tachyon_top-header__status-text,
.tachyon_dashboard-page--light .tachyon_dashboard-v3__page-title,
.tachyon_dashboard-page--light .tachyon_kpi-card__value,
.tachyon_dashboard-page--light .tachyon_traffic-chart__title,
.tachyon_dashboard-page--light .tachyon_system-health__title,
.tachyon_dashboard-page--light .tachyon_system-health__item-name,
.tachyon_dashboard-page--light .tachyon_routes-table__title,
.tachyon_dashboard-page--light .tachyon_route-row__name,
.tachyon_dashboard-page--light .tachyon_nodes-grid__title,
.tachyon_dashboard-page--light .tachyon_node-card__name {
    color: #0f172a !important;
}

.tachyon_dashboard-page--light .tachyon_system-health__item,
.tachyon_dashboard-page--light .tachyon_route-row,
.tachyon_dashboard-page--light .tachyon_node-card {
    background: #f8fafc !important;
    border-color: #e2e8f0 !important;
}

.tachyon_dashboard-page--light .tachyon_system-health__item:hover,
.tachyon_dashboard-page--light .tachyon_route-row:hover,
.tachyon_dashboard-page--light .tachyon_node-card:hover {
    background: #f1f5f9 !important;
}
`;


