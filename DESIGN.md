---
name: AgroWaste Admin Panel
description: Internal operations dashboard for governing the AgroWaste agricultural waste trading platform.
colors:
  primary: "#A855F7"
  primary-hover: "#9333EA"
  primary-light: "#F3E8FF"
  warm-bg: "#F6F3F0"
  surface: "#FFFFFF"
  ink: "#111111"
  muted: "#555555"
  hairline: "#E5E2DE"
  sem-green: "#10B981"
  sem-amber: "#F59E0B"
  sem-red: "#EF4444"
  sidebar-bg: "#EBE7E0"
typography:
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.05em"
  tabular:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  nav-item-active:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  nav-item-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "24px"
  filter-tab-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  status-badge-pending:
    backgroundColor: "#fffbeb"
    textColor: "#d97706"
    rounded: "{rounded.full}"
    padding: "4px 10px"
---

# Design System: AgroWaste Admin Panel

## 1. Overview

**Creative North Star: "The Field Dispatch"**

This system governs a physical supply chain: agricultural waste moving from farms through intermediaries, logistics partners, and buyers. The admin panel is the dispatch terminal where the ops team manages this flow under load. Every screen answers one question: what needs action? Structure, reliability, and a slight industrial quality are features, not compromises. The aesthetic earns nothing that doesn't reduce cognitive friction.

The palette is controlled and non-decorative. Administrative Amethyst (#A855F7) is the authority signal that marks admin mode — distinct from the green seller-facing brand. Warm Slate (#F6F3F0) is the ambient field: warmer than a cold white canvas, suggesting a paper-based record system digitized into a terminal. Surfaces are flat at rest. Depth appears only when an action carries real weight.

This system explicitly rejects the generic SaaS admin aesthetic (Vercel/Linear clone): no dark sidebars with gradient icon backgrounds, no glassmorphism panels, no purple-to-violet gradient text. It also rejects the agrarian-green default: green here belongs exclusively to the seller brand and to positive status indicators, never to admin chrome.

**Key Characteristics:**
- Single authority accent (Administrative Amethyst) on ≤15% of any screen
- Warm Slate ambient field — grounded and tactile, not stark
- Flat-by-default elevation — only primary CTAs lift
- Semaphore status system (green / amber / red) used as a language, never as decoration
- Tabular-nums on every data value: dates, prices, IDs, counters
- WCAG 2.1 AA minimum on all text, without exception

## 2. Colors: The Administrative Palette

A restrained authority palette: one accent that signals admin power, warm neutrals that ground the terminal, and three functional semaphore colors for status language.

### Primary
- **Administrative Amethyst** (#A855F7): The admin authority signal. Active nav items (solid fill), primary buttons, pagination active page, approve/reject hover states, and link text in data tables. Its rarity makes it meaningful.
- **Deep Amethyst** (#9333EA): Hover and pressed states for all primary surfaces. Never used as a default color.
- **Amethyst Tint** (#F3E8FF): Icon container backgrounds and chip/badge tints. The lightest administrative presence.

### Neutral
- **Warm Slate** (#F6F3F0): The ambient page background. Every content surface rests on this — not pure white, not cold gray. A field-notebook substrate digitized.
- **Surface White** (#FFFFFF): Cards, panels, table surfaces, topbar, and sidebar. Creates the primary surface/background contrast against Warm Slate.
- **Sidebar Sand** (#EBE7E0): The sidebar background. One step darker than Warm Slate — a clear navigation zone without using the admin primary.
- **Deep Ink** (#111111): All primary text, headings, and data values. Near-black for maximum legibility on both Surface White and Warm Slate.
- **Field Muted** (#555555): Secondary text, meta labels, placeholder text, table column headers. Passes 5.1:1 on Surface White and 5.4:1 on Warm Slate — WCAG AA compliant.
- **Hairline** (#E5E2DE): All dividers, card borders, table row separators, input field strokes. The thinnest visible separation without visual weight.

### Tertiary (Semaphore)
- **Semaphore Green** (#10B981): Active status, Approved state, healthy system indicators. Always paired with a `bg-green-50` badge tint.
- **Semaphore Amber** (#F59E0B): Pending state, warning indicators, the nav badge for unreviewed listings. Always paired with `bg-amber-50`.
- **Semaphore Red** (#EF4444): Rejected state, error indicators, alert status. Always paired with `bg-red-50`.

### Named Rules
**The Authority Rarity Rule.** Administrative Amethyst appears on ≤15% of any given screen. One active nav item. One primary button. One pagination indicator. The purple is a signal because it is rare — if it appears on five elements at once, it stops being a signal.

**The No-Green Chrome Rule.** Semaphore Green (#10B981) is reserved for status indicators (active / approved / healthy) and the seller-facing brand. It never appears in admin chrome: buttons, nav, headers, card accents. A green button in the admin UI is a brand identity failure.

**The Semaphore Trio Rule.** Green / amber / red are a system. They are status language, not aesthetic choices. Never use one semaphore color as decoration while ignoring the others.

## 3. Typography

**Body Font:** Inter (system-ui, sans-serif fallback)
**Data / Label Mono:** Inter with `font-variant-numeric: tabular-nums` (project utility: `font-tabular`)

**Character:** Single-family, weight-driven hierarchy. Inter at 700 is forceful without being aggressive; at 400 it recedes into ambient information density. The tabular-nums variant (`font-tabular`) gives data tables the column-locked rigidity of a ledger.

### Hierarchy
- **Headline** (700, 30px / 1.875rem, line-height 1.2, letter-spacing −0.01em): Page titles — one per page. "Platform Overview", "Listing Approval", "User Management".
- **Title** (700, 20–24px / 1.25–1.5rem, line-height 1.3): Section titles within a page. "Perkembangan Platform", "Aktivitas Terbaru". Max two per screen.
- **Body Semibold** (600, 14px / 0.875rem, line-height 1.5): Table cell primary values — seller names, product titles, card metric labels. The default "readable important thing" weight.
- **Body** (400, 14px / 0.875rem, line-height 1.5): Descriptive text, secondary cell content, activity feed entries, tooltip prose.
- **Label** (700, 10px / 0.625rem, line-height 1.4, letter-spacing 0.05em, ALL CAPS): Table column headers, KPI card labels, badge text. Maximum 4 words. Never on body copy.
- **Tabular Data** (500, 14px / 0.875rem, `font-variant-numeric: tabular-nums`): All IDs, dates, prices, percentages, counters. Monospaced digits prevent column-width drift as values change.

### Named Rules
**The Tabular Absolute.** Every numeric data value — prices, IDs, dates, percentages, counters — uses `font-tabular`. No exceptions. Proportional digits in a data table are a readability and alignment failure.

**The Label Cap.** Uppercase tracking is reserved for column headers, badge text, and the status footer. Section headings, page titles, and body copy are title-case. All-caps sentences are prohibited.

## 4. Elevation

Flat by default. This is a logistics terminal, not a layered editorial hierarchy. Surfaces are separated by hairline borders (#E5E2DE), not shadows. Depth appears only as interaction feedback on CTAs.

### Shadow Vocabulary
- **Primary CTA Glow** (`box-shadow: 0 4px 6px -1px rgba(168, 85, 247, 0.2)`): Applied exclusively to primary buttons. A muted amethyst bloom that confirms "this is the primary action." Transitions to `0 6px 12px -2px rgba(168, 85, 247, 0.3)` on hover — a confident lift without theatrics.
- **Surface Lift** (`box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05)`): `shadow-sm` on secondary buttons and the filter tab container. A near-invisible confirmation that the element is interactive.

### Named Rules
**The Flat-By-Default Rule.** Cards rest flat against Warm Slate. Shadow at rest means the surface hierarchy is broken. If a card needs to "stand out", the answer is tonal contrast (Surface White on Warm Slate), not a lifted shadow. Shadow is reserved for state change, not ambient styling.

## 5. Components

### Buttons
Rounded, unambiguous, labeled with verb+object. The primary button is the most visually dominant interactive element on any screen.
- **Shape:** Gently curved (12px, `rounded-xl`)
- **Primary:** Administrative Amethyst fill, white text, padding `8px 16px` (compact) or `10px 20px` (standard). Amethyst glow shadow. Hover: Deep Amethyst fill + stronger glow lift + `shadow-admin-primary/30`.
- **Secondary:** Surface White fill, Hairline border, Field Muted text, `shadow-sm`. Hover: Warm Slate background shift.
- **Label convention:** Verb + object. "Unduh Laporan", "Setujui Listing", "Tambah Pengguna Baru". Never "OK", "Submit", or "Confirm" without a noun.

### Cards / KPI Containers
The primary surface for metrics and data.
- **Corner Style:** Generously rounded (16px, `rounded-2xl`)
- **Background:** Surface White, resting on Warm Slate ambient
- **Border:** Hairline only (`border border-admin-hairline`). No shadow at rest.
- **Internal Padding:** 24px (`p-6`)
- **Status Arc:** Subtle quarter-circle in top-right corner (`absolute right-0 top-0 w-24 h-24 rounded-bl-full -mr-4 -mt-4`) using 5–10% opacity tint of the relevant semantic color. Provides visual identity without side-stripes.
- **Nested cards:** Prohibited.

### Data Table
The highest-density surface. Optimized for scan speed.
- **Header row:** `bg-[#F9F8F6]`, 10px bold uppercase label, hairline bottom border
- **Data rows:** Surface White, `hover:bg-admin-warmbg/40` transition
- **Row separators:** `divide-y divide-admin-hairline`
- **Status badges:** `rounded-full`, matching bg-tint + text, 1.5px semaphore dot. Pending badge adds `animate-pulse` to the dot only.
- **Action buttons:** Icon-only, `p-2 rounded-lg`, semantic tint bg at rest (green-50, red-50), solid semantic fill on hover with white icon.

### Filter Tabs
Pill-container with an "active chip" pattern.
- **Container:** `bg-admin-warmbg p-1.5 rounded-xl`
- **Active tab:** `bg-admin-surfacewhite text-admin-primary rounded-lg shadow-sm font-bold`
- **Inactive tab:** `text-admin-textsecondary font-semibold hover:text-admin-textprimary`, no background

### Navigation Sidebar
The fixed-left navigation column. On-screen at all times on desktop.
- **Container:** `bg-[#EBE7E0]` (Sidebar Sand), `w-64`, fixed left, full height, `border-r border-admin-hairline`
- **Active item:** Solid Administrative Amethyst fill, white text + icon, amethyst medium shadow
- **Inactive item:** Field Muted text, transparent bg, Warm Slate hover bg, Field Muted icon
- **Pending badge:** Semaphore Amber fill on inactive items; white-on-primary when the item is active
- **Mobile behavior:** Slides in from left on hamburger press (300ms ease-in-out transform). Dark overlay (`bg-black/40 z-[25]`) covers the content. Close on overlay tap or any nav link click.

### Toast Notifications
Fixed position, non-blocking, bottom-right. Auto-dismiss after 4 seconds.
- **Container:** `bg-[#111] rounded-xl shadow-2xl`, white text, `max-w-xs`
- **Indicator:** 8px dot in the matching semaphore color (green = success, red = error, blue = info)
- **Position:** `fixed bottom-14 right-6 z-[100]` — clears the 40px status footer

### Status Footer
Fixed bottom bar across the full admin shell (desktop only).
- **Style:** Surface White bg, Hairline top border, `h-10`
- **Content:** System Online (green dot), Server node ID, refresh timestamp
- **Typography:** 11px bold uppercase tracked (the `label` scale)
- **Layout:** Space-between with three items. `lg:left-64` clears the sidebar on desktop.

## 6. Do's and Don'ts

### Do:
- **Do** use Administrative Amethyst (#A855F7) exclusively as the admin authority signal. It is never used as decoration.
- **Do** apply `font-tabular` to every numeric value: prices, IDs, dates, percentages, and counters. This is non-negotiable.
- **Do** use the semaphore trio as a system: green = approved/healthy, amber = pending/warning, red = rejected/error. Status colors are language.
- **Do** maintain WCAG 2.1 AA minimum contrast on all text. Field Muted (#555555) on Surface White passes 5.1:1. Never use a lighter gray for body text.
- **Do** keep the sidebar's active state as a solid Amethyst fill. A tinted active state is too quiet for an ops user scanning at speed.
- **Do** write button labels as verb + object: "Setujui Listing", "Unduh Laporan", "Tambah Pengguna Baru".
- **Do** use `rounded-2xl` (16px) for cards and `rounded-xl` (12px) for interactive controls. The size distinction is structural, not arbitrary.

### Don't:
- **Don't** clone the generic SaaS admin aesthetic (Vercel, Linear). No gradient icon backgrounds, no glassmorphism cards, no dark sidebar with purple-to-violet gradient fills.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards, list items, callouts, or alerts. This is an absolute ban. Use background tints or corner-arc decoration instead.
- **Don't** use gradient text (`background-clip: text` combined with a gradient fill). All text uses one solid color.
- **Don't** use green (#10B981) in admin chrome: buttons, nav highlights, header accents. Green is seller-brand and status-only.
- **Don't** nest cards. A surface inside a surface breaks the tonal hierarchy. Rewrite with rows, tonal bands, or section spacing.
- **Don't** display all-uppercase sentences. Uppercase is for labels (≤4 words) only. "MODERASI LISTING AKTIF" as a section heading is a readability failure.
- **Don't** use arbitrary z-index values. The semantic scale: content (auto) → sticky/topbar (`z-20`) → overlay (`z-[25]`) → sidebar (`z-30`) → toast (`z-[100]`). Never 999 or 9999.
- **Don't** add shadow to resting cards. Elevation is earned by interaction, not applied to ambient surfaces. A shadowed card at rest means the visual hierarchy is broken.
- **Don't** produce a design so generic that a designer from another company could have made the same thing by default. The Field Dispatch is a specific point of view.
