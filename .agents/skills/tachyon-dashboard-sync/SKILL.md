---
name: tachyon-dashboard-sync
description: >-
  Live telemetry synchronization and real-time data integration system for Tachyon Traffic Control.
  Use when connecting Tachyon UI widgets, SVG spline charts, KPI counters, service health monitors,
  route stream monitors, node quotas, and sidebar LuCI tab routing to live Clash API WebSockets,
  LuCI RPC, ubus, and system telemetry.
---

# Tachyon Dashboard Sync & Live Telemetry Skill

This skill defines the technical standards, data pipelines, event loops, and LuCI integration patterns for synchronizing the Tachyon Dashboard in real-time with router system metrics, Clash API WebSockets, and Sing-Box/Tachyon Core routing state.

---

## 1. Architecture Overview

```text
+---------------------------------------------------------------------------------------------------------+
|                                    LIVE TELEMETRY PIPELINE                                              |
+---------------------------------------------------------------------------------------------------------+
|                                                                                                         |
|  [Clash API WebSockets]                                                                                 |
|    - ws://<ip>:9090/traffic      --->  Inbound & Outbound Rates (Bps)  ---> [Live Spline Chart Buffer]  |
|    - ws://<ip>:9090/connections  --->  Active Sockets & Per-Client IPs ---> [Active Clients KPI]       |
|                                  --->  Total Up/Down Bytes             ---> [24h Traffic KPI]           |
|                                  --->  Per-Route Stream Connections    ---> [Routes Table Rows]         |
|                                                                                                         |
|  [Tachyon Shell RPC & ubus]                                                                             |
|    - tachyon get_ui_state        --->  Process Status, PID, RAM, Uptime---> [System Health Card]        |
|    - tachyon stability_status    --->  System Score, Avg Latency (ms)  ---> [Avg Latency KPI]           |
|    - tachyon latency_test_async  --->  Outbound & Group Delay Probes   ---> [Node Latency & Status]     |
|                                                                                                         |
|  [Traffic History Store]                                                                                |
|    - /tmp/tachyon_traffic_24h.json + localStorage ring buffer         ---> [24h Dual-Area Spline SVG] |
|                                                                                                         |
|  [LuCI Tab Navigator (Variant A)]                                                                       |
|    - Sidebar clicks              --->  Seamless .cbi-tab switching     ---> [Section, Outbounds, etc.]  |
+---------------------------------------------------------------------------------------------------------+
```

---

## 2. Telemetry Data Pipelines

### 2.1. Traffic Rates & 24-Hour Spline Chart Buffer
- **Source**: `ws://<router-ip>:9090/traffic?token=<clashApiSecret>`.
- **Sample Rate**: 1 second intervals via WebSocket stream with graceful polling fallback.
- **Ring Buffer Specification**:
  - Buffer length: 86,400 samples aggregated into 24–60 smooth timeline points for SVG rendering.
  - Aggregation: 15-minute or 1-hour buckets containing `{ timestamp, inboundBytes, outboundBytes }`.
  - Storage: Synced between `localStorage` (`tachyon_traffic_history_24h`) and router cache (`/tmp/tachyon_traffic_24h.json`).
- **Dynamic Bezier Path Update**:
  - SVG `<path>` elements (`d` attribute) updated in-place via DOM without re-creating nodes.
  - Linear gradients (`#00d2ff` for inbound, `#10b981` for outbound) with cubic Bezier interpolation (`pointsToSpline`).

### 2.2. KPI Metric Cards
1. **Active Clients**:
   - Extracted from `/connections` active socket list (`metadata.sourceIP`).
   - Mapped to hostnames from DHCP leases (`/tmp/dhcp.leases` / `luci.ip.neighbors`).
2. **Routes Count**:
   - Number of active proxy sections configured in UCI (`sectionsState.data.length`).
3. **24h Traffic**:
   - Cumulative download + upload volume from Clash API and network interfaces (`downloadTotal + uploadTotal`).
   - Pretty-printed using dynamic units (`B`, `KB`, `MB`, `GB`, `TB`).
4. **Average Latency**:
   - Real-time average of active proxy delay probes (`avg_latency_ms` from `stability_status` or mean latency of selected outbounds).

### 2.3. System Health Telemetry
- **Source**: `TachyonShellMethods.getUiState()`, `fetchServicesInfo()`, and `/proc/stat`.
- **Target Daemons**:
  - `Tachyon`: PID, Uptime, Memory RSS, status (running & enabled).
  - `Tachyon Core`: `sing-box` engine variant, version (0.1.7+), PID, Uptime, Memory RSS.
  - `DNSMasq`: PID, local cache status, Uptime, Memory RSS.
- **Health Badge**:
  - `Все сервисы в норме` (`#10b981`) when all 3 services report `running === 1`.
  - `Внимание` (`#f59e0b` / `#ef4444`) when any critical routing daemon is stopped.

### 2.4. Routes Stream Monitor
- Dynamic matching of configured UCI sections to visual stream rows:
  - `YouTube`: checks section name/rules for `youtube` or Google media domains, shows active proxy, server flag, 24h consumed traffic, active sockets, and ping.
  - `Discord`: voice & chat routing stream.
  - `Main`: default primary egress route.
  - Additional user sections (e.g., `Gosuslugi`, `Media`, `Gaming`) dynamically rendered with matching brand/emoji icons.
- Interactive click triggers outbounds selector or latency check.

### 2.5. Nodes Grid & Quota Tracking
- Real proxy list from active subscriptions and manual nodes.
- Quota display rule:
  - If provider supplies `Subscription-Userinfo` total: display `X GB / Y GB`.
  - If provider provides unlimited quota or no header: display `X GB прокачано` or `Безлимит`.
- Protocol detection: `VLESS (TCP)`, `Hysteria2`, `VMess`, `Trojan`, `Shadowsocks`, `TUIC`.

---

## 3. Sidebar Navigation: Variant A (Seamless LuCI Tab Router)

- Clicks on sidebar navigation elements trigger native LuCI CBI tab switching without full page reload:
  - `Обзор`: stays on Dashboard (`cbi-tachyon-dashboard`), scrolls to top.
  - `Маршруты`: switches to `.cbi-tab[data-tab="cbi-tachyon-section"] a` or `[data-tab="section"] a`.
  - `Узлы`: switches to `.cbi-tab[data-tab="cbi-tachyon-outbounds"] a` or `[data-tab="outbounds"] a`.
  - `Клиенты`: switches to `.cbi-tab[data-tab="cbi-tachyon-local_devices"] a` or `[data-tab="local_devices"] a`.
  - `Аналитика`: switches to `.cbi-tab[data-tab="cbi-tachyon-monitoring"] a` or `[data-tab="monitoring"] a`.
  - `Настройки`: switches to `.cbi-tab[data-tab="cbi-tachyon-settings"] a` or `[data-tab="settings"] a`.

---

## 4. Verification Checklist

1. **Live Data Flow**:
   - `ws://.../traffic` updates the spline chart every second.
   - `ws://.../connections` accurately updates client counts and stream socket numbers.
   - `getUiState()` accurately reflects live uptime and daemon status.
2. **Tab Switching**:
   - Clicking each sidebar item cleanly navigates to the respective LuCI section.
3. **Tests & Guards**:
   - Unit tests: `npm run test -- --run` in `fe-app-tachyon`.
   - Lint check: `npm run lint`.
   - CI guards: `bash tests/ci_guards.sh`.
   - Production bundle: `npm run build`.
   - Deployment to router via `scp`.
