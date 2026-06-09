---
name: AgroWaste Platform
description: Earthy e-commerce marketplace for agricultural waste. Four surfaces (Public, Seller, Admin, Courier) share a warm neutral token foundation; each carries one differentiated primary from the brand palette.
colors:
  bg: "#FBFAF7"
  surface: "#FFFFFF"
  surface-warm: "#F0EDE6"
  ink: "#2C3930"
  muted: "#5C6D65"
  hairline: "#DCD7C9"
  clay: "#A27B5C"
  clay-hover: "#8E6A4E"
  sem-green: "#10B981"
  sem-amber: "#F59E0B"
  sem-red: "#EF4444"
  public-primary: "#3F4F44"
  seller-primary: "#3F4F44"
  admin-primary: "#2C3930"
  courier-primary: "#A27B5C"
typography:
  display:
    fontFamily: "Baloo 2, system-ui, sans-serif"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Nunito Sans, system-ui, sans-serif"
    fontWeight: 500
    fontSize: "1rem"
    lineHeight: 1.6
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
---

# Design System: AgroWaste

## 1. Overview

**Creative North Star: "Tanah Digital"**

AgroWaste turns agricultural waste into a tradeable commodity. The design system honors that physical reality: materials are earthy, surfaces feel like paper and clay, type is friendly but authoritative. Each interface surface answers one question: can a farmer on a cheap Android phone, in bright sunlight, complete this task without frustration?

The palette descends from two forest greens and one warm copper, all resting on off-white parchment. Four surfaces share this foundation; each carries one differentiated primary. Clay accent (#A27B5C) is the platform's universal CTA color — shared across all surfaces so the "action" signal is consistent regardless of which role is logged in.

The typography pairing — Baloo 2 display, Nunito Sans body — is rounded and accessible without being juvenile. Both fonts support Latin-Extended for proper Indonesian diacritics.

**Key characteristics:**
- Off-white parchment body bg (#FBFAF7) — warm, never cold white, never cream-by-default
- Clay (#A27B5C) as the universal CTA signal across all four surfaces
- Per-surface primary from the same earthy family (not arbitrary role-colors)
- Flat-by-default surfaces; clay micro-shadow only on interactive elements
- Semaphore trio (green/amber/red) as status language, never decoration
- WCAG AA minimum everywhere — audience includes older rural users on cheap screens
- 48px minimum touch targets; 16px+ body text; no font weight below 400

## 2. Shared Token Foundation

All four surfaces inherit these base tokens. Per-surface CSS overrides only `primary` and `primary-hover`; everything else stays identical.

### Color palette

| Token | Hex | Role |
|-------|-----|------|
| `--bg` | `#FBFAF7` | Page/shell background. Off-white with faint warm tint. Never #FFFFFF or any gray. |
| `--surface` | `#FFFFFF` | Card, panel, table, dialog surfaces |
| `--surface-warm` | `#F0EDE6` | Sidebar, tab strip, tinted alternating rows |
| `--ink` | `#2C3930` | Primary text, headings, high-emphasis labels |
| `--muted` | `#5C6D65` | Secondary text, meta, placeholder. 5.2:1 on surface. WCAG AA compliant. |
| `--hairline` | `#DCD7C9` | Dividers, card borders, input strokes |
| `--clay` | `#A27B5C` | Universal CTA: primary buttons, active indicators, price highlights, key numbers |
| `--clay-hover` | `#8E6A4E` | Hover/pressed state for all clay surfaces |
| `--sem-green` | `#10B981` | Active, approved, healthy status only |
| `--sem-amber` | `#F59E0B` | Pending, warning status only |
| `--sem-red` | `#EF4444` | Rejected, error status only |

### Named rules

**The Clay Singularity.** `#A27B5C` is the CTA signal across the entire platform. The first eye-path on any screen should end on clay. Nav highlights and active states use the surface primary; only primary action buttons, price tags, and key impact numbers use clay. If clay appears on decorative elements, it loses its signal power.

**The Off-White Rule.** Body bg is `#FBFAF7`. Never pure `#FFFFFF` (too cold), never a warm-gray. The warmth is already baked in. This is non-negotiable.

**The No-Gray Rule.** Tailwind `gray/slate/zinc/neutral` are banned platform-wide. Secondary text uses `--muted` (#5C6D65) — a warm-forest hue at medium lightness. Borders use `--hairline` (#DCD7C9) which reads as cream-separator, not cold gray. All shadows tinted toward `--ink`, never toward neutral.

**The Semaphore System.** Green/amber/red are status language. Never use one without implying all three are available. Never use semaphore colors as brand accents or decorative fills.

## 3. Surface Identities

Four surfaces, four primaries. The primary controls nav active state, in-dashboard primary buttons, and data chart accents. Clay (#A27B5C) handles primary CTAs on all surfaces.

| Surface | Path | Primary | Primary-hover | Character |
|---------|------|---------|---------------|-----------|
| **Public** | `/(public)/` | `#3F4F44` | `#2D3B32` | Marketplace landing + discovery. Widest audience. |
| **Seller** | `/seller/` | `#3F4F44` | `#2D3B32` | Inventory, listings, earnings. Forest-green trust for the farmer-operator. |
| **Admin** | `/admin/` | `#2C3930` | `#1E2822` | Operations dispatch. Deepest primary — authority, not decoration. |
| **Courier** | `/courier/` | `#A27B5C` | `#8E6A4E` | Pickup/delivery tracking. Copper primary — movement, warmth, logistics. |

### CSS token files

| Surface | Token file |
|---------|------------|
| Public | `src/app/(public)/user.css` |
| Seller | `src/app/seller/seller.css` |
| Admin | `src/app/admin/admin.css` |
| Courier | `src/app/courier/courier.css` |

Per-surface tokens follow the naming pattern `--color-{surface}-{role}`. Shared base tokens live in `src/app/globals.css`.

### Public surface note

The public landing page currently uses legacy green (#009A44). This surface is **pending migration** to the earthy palette. Target: primary nav `#3F4F44`, primary CTA buttons clay `#A27B5C`. Populate `user.css` tokens when that migration runs.

### Admin surface note

Admin primary is `#2C3930` (Deep Forest), **not** the legacy Administrative Amethyst (#A855F7). The previous design used purple to signal admin authority; the current system uses depth (the darkest forest green) instead. Amethyst is retired.

## 4. Typography

**Display / Headings:** Baloo 2
**Body / UI text:** Nunito Sans
**Loaded via:** Google Fonts `<link>` in root `src/app/layout.tsx`

Both fonts are rounded, humanist, and legible on low-DPI screens in direct sunlight. Neither has hairline strokes that vanish on cheap displays. Both support full Latin-Extended for Indonesian text.

### Type scale

| Role | Family | Size | Weight | Line-height | Usage |
|------|--------|------|--------|-------------|-------|
| Display | Baloo 2 | clamp(2rem, 5vw, 3.5rem) | 700 | 1.15 | Landing hero headlines only |
| Heading 1 | Baloo 2 | 1.875rem / 30px | 700 | 1.2 | Page titles — one per page |
| Heading 2 | Baloo 2 | 1.375rem / 22px | 700 | 1.3 | Section titles — max two per screen |
| Heading 3 | Baloo 2 | 1.125rem / 18px | 600 | 1.4 | Card titles, subsection heads |
| Body | Nunito Sans | 1rem / 16px | 500 | 1.6 | All prose, descriptions, form values |
| Body Small | Nunito Sans | 0.875rem / 14px | 500 | 1.5 | Table cells, meta, secondary content |
| Label | Nunito Sans | 0.75rem / 12px | 700 | 1.4 | Column headers, badge text. Max 4 words. |
| Tabular | Nunito Sans | 0.875rem / 14px | 600 + tabular-nums | 1.5 | All IDs, prices, dates, counters |

### Named rules

**The 16px Floor.** Body text never drops below 16px. Body-small (14px) is reserved for density-critical surfaces (data tables, meta labels) only.

**The Tabular Absolute.** Every numeric value — prices, IDs, dates, percentages, counters — uses `font-variant-numeric: tabular-nums` (utility: `font-tabular`). Proportional digits in a table are an alignment failure.

**The Heading Ceiling.** Display clamp max is 3.5rem (56px). The platform is trusted and grounded, not exclamatory.

**Weight minimum.** No font weight below 400 in any rendered UI. Thin weights are banned.

## 5. Elevation

Clay-tactile model: flat at rest, subtle depth on interaction.

### Shadow vocabulary

| Name | Value | Usage |
|------|-------|-------|
| `shadow-clay` | `0 2px 8px -2px rgba(44,57,48,0.12), 0 1px 2px rgba(44,57,48,0.08)` | Primary buttons, interactive cards at rest |
| `shadow-clay-hover` | `0 4px 16px -4px rgba(44,57,48,0.18), 0 2px 4px rgba(44,57,48,0.10)` | Hover state on primary buttons and elevated cards |
| `shadow-clay-sm` | `0 1px 3px rgba(44,57,48,0.08)` | Inputs, secondary buttons, filter containers |
| none | — | All resting cards, panels, sidebars, tables |

### Named rules

**Flat-by-default.** Cards and panels have no shadow at rest. Depth comes from `--surface` (#FFF) on `--bg` (#FBFAF7) tonal contrast, reinforced by `--hairline` borders. Shadow is interaction feedback, not ambient decoration.

**The Clay Shadow Rule.** All shadows use the ink color decomposed (`rgba(44,57,48,…)`). Never pure black, never neutral gray. The shadow should look like it belongs to the earthy material of the surface.

## 6. Component Patterns

### Buttons

One radius scale: `rounded-xl` (12px) for standard controls; `rounded-full` for pill tags and status badges only. Never mix rounded and sharp buttons on the same screen.

| Variant | Fill | Text | Shadow | Notes |
|---------|------|------|--------|-------|
| Primary CTA | `--clay` (#A27B5C) | white | `shadow-clay` | All surfaces. Hover → `--clay-hover`. |
| Primary (surface) | Surface primary | white | `shadow-clay-sm` | In-dashboard nav active, primary dashboard actions |
| Secondary | `--surface` | `--ink` | `shadow-clay-sm` + `border-hairline` | Paired with a primary; never sole CTA |
| Ghost | transparent | `--muted` | none | Cancel, destructive confirm, tertiary |

**Touch target.** All buttons: minimum 48×48px (`min-h-[48px]`).

**Label convention.** Verb + object always: "Jual Sekarang", "Unduh Laporan", "Setujui Listing". Never bare "OK" or "Submit".

### Cards

- Corner radius: `rounded-2xl` (16px) standard; `rounded-xl` (12px) compact
- Border: `border border-hairline` — the hairline defines the card, not shadow
- Background: `--surface` (#FFF) against `--bg` (#FBFAF7) for tonal contrast
- Internal padding: `p-6` (24px) standard; `p-4` (16px) compact
- Nested cards: **prohibited** — rewrite as rows, tonal bands, or spaced sections

### Navigation sidebar (seller, admin, courier)

- Container: `--surface-warm` (#F0EDE6), `w-64`, fixed left, `border-r border-hairline`
- Active item: surface-primary fill, white text + icon, `shadow-clay-sm`
- Inactive item: `--muted` text, transparent bg, `--bg` hover
- Mobile: slides in from left (300ms ease-out-quart). Overlay `bg-ink/30`. Close on overlay tap or nav click.

### Data tables

- Header row: `bg-[#F9F8F6]`, label scale (bold 12px uppercase), `border-b border-hairline`
- Data rows: `--surface` bg, `hover:bg-surface-warm/50`, `divide-y divide-hairline`
- Numeric cells: always `font-tabular`
- Status badges: `rounded-full`, semaphore bg-tint + text (see status badges below)

### Status badges

| State | Badge bg | Indicator dot | Text color |
|-------|----------|---------------|------------|
| Active / Approved | `bg-green-50` | `#10B981` | `text-green-700` |
| Pending | `bg-amber-50` | `#F59E0B` + `animate-pulse` | `text-amber-700` |
| Rejected / Error | `bg-red-50` | `#EF4444` | `text-red-700` |

### Toast notifications

- Container: `bg-ink` (#2C3930), `rounded-xl`, white text, `max-w-xs`
- Indicator: 8px dot in matching semaphore color
- Position: `fixed bottom-14 right-6 z-[100]` — clears status footer on app surfaces
- Auto-dismiss: 4 seconds

### Form inputs

- Height: `h-12` (48px) minimum touch target
- Border: `border-hairline rounded-xl`
- Focus: `ring-2 ring-clay/40 border-clay`
- Placeholder: `--muted` at ≥4.5:1 contrast — never lighter
- Error: `border-sem-red ring-sem-red/20`, inline error text below the field

### z-index scale

Never use arbitrary values like 999 or 9999.

| Layer | Value |
|-------|-------|
| Content | `auto` |
| Sticky / topbar | `z-20` |
| Sidebar overlay | `z-[25]` |
| Sidebar | `z-30` |
| Modal backdrop | `z-40` |
| Modal | `z-50` |
| Toast | `z-[100]` |

## 7. Do's and Don'ts

### Do

- **Do** use `--clay` (#A27B5C) as the single CTA color across all surfaces. Universal action signal.
- **Do** apply `font-tabular` to every price, ID, date, percentage, and counter.
- **Do** test every text color against its background for WCAG AA (4.5:1 body, 3:1 large text).
- **Do** use `rounded-2xl` for cards and `rounded-xl` for interactive controls.
- **Do** write button labels as verb + object: "Jual Sekarang", "Setujui Listing".
- **Do** maintain the semaphore trio as a system. Green = approved/active. Amber = pending/warning. Red = error/rejected.
- **Do** tint all shadows toward `--ink` (rgba(44,57,48,…)), never neutral gray.
- **Do** honor `prefers-reduced-motion`. Every animated transition needs a reduced-motion fallback.
- **Do** keep all touch targets at minimum 48×48px.

### Don't

- **Don't** use Tailwind `gray/slate/zinc/neutral`. Use `--muted` for secondary text; `--hairline` for separators.
- **Don't** add shadow to resting cards. Shadow is interaction feedback, not ambient decoration.
- **Don't** use `border-left` or `border-right` > 1px as a colored accent stripe. Use background tints or nothing.
- **Don't** use gradient text (`background-clip: text` with gradient fill).
- **Don't** use semaphore colors as brand decoration. They are status language only.
- **Don't** use Administrative Amethyst (#A855F7). It was the previous admin accent; the earthy system retired it.
- **Don't** use legacy green (#009A44) in any component that has been migrated to the earthy palette.
- **Don't** nest cards.
- **Don't** use emoji as UI icons. Use Lucide icons with consistent 1.5–2px stroke weight.
- **Don't** use font weight below 400 in any rendered UI.
- **Don't** write all-caps sentences. Uppercase is for short labels (≤4 words) only.
