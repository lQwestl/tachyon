---
name: tachyon-dashboard
description: >-
  Design system and implementation guide for the Tachyon Traffic Control dashboard.
  Use when designing, refactoring, or updating Tachyon UI/UX, dashboard widgets,
  SVG charts, route stream monitors, node grids, and LuCI integration.
---

# Tachyon Traffic Control Dashboard Skill

This skill defines the visual identity, UI components, layout architecture, and implementation standards for the Tachyon Dashboard on OpenWrt / LuCI.

## 1. Visual Identity & Design Tokens

### Color Palette
- **Background Deep Dark**: `#070c14` / `#0b111e`
- **Surface / Card Background**: `#0d1522` / `rgba(13, 21, 34, 0.85)`
- **Border Subtle**: `rgba(255, 255, 255, 0.07)`
- **Border Active / Glow**: `rgba(56, 189, 248, 0.4)` / `#38bdf8`
- **Accents**:
  - **Cyan Neon**: `#00d2ff` / `#38bdf8` (Brand, Primary, Selected elements)
  - **Emerald Green**: `#10b981` / `#34d399` (Active status, Normal health, Online latency)
  - **Amber / Yellow**: `#f59e0b` / `#fbbf24` (Medium latency, Warnings)
  - **Rose / Red**: `#f43f5e` / `#ef4444` (High latency, Errors)
  - **Slate Muted**: `#64748b` / `#94a3b8` (Labels, Secondary text, Neutral status)
  - **Text High**: `#f8fafc` / `#ffffff`

### Typography & Spacing
- **Font Stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Monospace Stack**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- **Border Radii**:
  - Cards: `12px`
  - Pill Badges: `20px` or `9999px`
  - Buttons / Controls: `8px`
  - Mini Icons: `6px`

---

## 2. Dashboard Layout Architecture

```text
+---------------------------------------------------------------------------------------------------+
|  [T] Tachyon / Traffic Control  [PRODUCTION]         ● Система работает | Обновлено: ... | [RU v] |
+-----------+---------------------------------------------------------------------------------------+
|  SIDEBAR  |  Обзор трафика                                                                        |
|  [⊞ Обзор]|  Состояние маршрутов и инфраструктуры в реальном времени                              |
|  [🔀 Марш]|  +-------------------+ +---------------+ +-----------------+ +--------------------+  |
|  [⸬ Узлы] |  | 👥 Активные клиенты| | 🔀 Маршруты  | | 🗄️ Трафик за 24 ч| | ⏱️ Средняя задержка |  |
|  [👥 Клиент| |   105             | |   3           | |   27.2 GB       | |   48 ms            |  |
|  [📈 Аналит| |   ↑ +12% за 24 ч  | |   — стабильно | |   ↑ +18% за 24 ч| |   ↓ -32% за 24 ч   |  |
|  [⚙️ Настр]|  +-------------------+ +---------------+ +-----------------+ +--------------------+  |
|           |                                                                                       |
|           |  +--------------------------------------------+  +---------------------------------+  |
|           |  | Пропускная способность трафика  [24 часа ⌵]|  | Здоровье системы  [Все в норме] |  |
|           |  | ● Входящий  ● Исходящий                    |  | ● Tachyon     99.99%  12%   >   |  |
|           |  | [ SVG Dual-Area Bezier Curve Chart ]       |  | ● Tachyon Core 99.98% 18%   >   |  |
|           |  | 00:00  06:00  12:00  18:00  24:00          |  | ● DNSMasq     99.97%   6%   >   |  |
|           |  +--------------------------------------------+  +---------------------------------+  |
|           |                                                                                       |
|           |  +---------------------------------------------------------------------------------+  |
|           |  | 🔀 Маршруты                                            [⚙️ Управление маршрутами]|  |
|           |  | [▶️] YouTube   ● Активен | 🇩🇪 Германия (MEGA) | SoftPortal | 68.6 KB | 2 | ● 61 ms >|  |
|           |  | [👾] Discord   ● Активен | Ручной выбор       | Ручной выбор| 1.51 KB | 2 | ● 63 ms >|  |
|           |  | [🌐] Main      ● Активен | 🇩🇪 SoftPortal      | SoftPortal | 22.7 MB | 63| ● 53 ms >|  |
|           |  +---------------------------------------------------------------------------------+  |
|           |                                                                                       |
|           |  +---------------------------------------------------------------------------------+  |
|           |  | ⸬ Узлы                                                   [🔄 Проверить все узлы] |  |
|           |  | +-------------+  +-------------+  +-------------+  +-------------+              |  |
|           |  | | 🇪🇪 Эстония  |  | | 🇩🇪 Германия|  | | 🇳🇱 Нидерл. |  | | 🇸🇪 Швеция  |              |  |
|           |  | | VLESS (TCP) |  | | VLESS (TCP)|  | | VLESS (TCP)|  | | Hysteria2   |              |  |
|           |  | | ● 49 ms     |  | | ● 51 ms    |  | | ● 57 ms    |  | | ● 64 ms    |              |  |
|           |  | | 1.2/10 GB   |  | | 2.8/10 GB  |  | | 1.4/10 GB  |  | | 0.8/10 GB  |              |  |
|           |  | +-------------+  +-------------+  +-------------+  +-------------+              |  |
|           |  +---------------------------------------------------------------------------------+  |
+-----------+---------------------------------------------------------------------------------------+
```

---

## 3. Implementation Rules

1. **Self-Contained SVG Assets**:
   - All icons, logos (YouTube, Discord, Globe, DB, Clock, Users, Chevrons, Tachyon Logo) MUST be implemented as inline SVG helper functions. Never rely on external CDN image links.
2. **Lightweight Native SVG Charts**:
   - Render dual-area spline charts with cubic Bezier curves (`C` commands in `<path>`), `<linearGradient>` fills, and accessible tooltips. Never import heavy 500KB chart libraries.
3. **Live LuCI & Clash API Integration**:
   - Wire widgets to live data from `TachyonShellMethods`, `CustomTachyonMethods`, `ClashAPI`, and LuCI RPC with graceful live fallbacks.
4. **Verification Checklist**:
   - Unit tests: `npm run test -- --run` in `fe-app-tachyon`
   - Lint check: `npm run lint`
   - CI guards: `bash tests/ci_guards.sh`
   - Production bundle: `npm run build`
   - Deployment: `scp` to target router.
