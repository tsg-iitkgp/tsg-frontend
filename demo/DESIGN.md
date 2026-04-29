---
name: Gymkhana Sports Identity
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d1c6ab'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9a9077'
  outline-variant: '#4d4632'
  surface-tint: '#edc200'
  primary: '#fff1ce'
  on-primary: '#3c2f00'
  primary-container: '#ffd100'
  on-primary-container: '#6f5a00'
  inverse-primary: '#725c00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#f4f1f1'
  on-tertiary: '#303030'
  tertiary-container: '#d7d5d4'
  on-tertiary-container: '#5d5c5c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe07f'
  primary-fixed-dim: '#edc200'
  on-primary-fixed: '#231b00'
  on-primary-fixed-variant: '#564500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Lexend
    fontSize: 80px
    fontWeight: '800'
    lineHeight: 90px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-sm:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-v: 120px
  container-max: 1400px
  gutter: 32px
  margin-page: 64px
---

## Brand & Style

The visual identity is anchored in the concept of **Athletic Prestige**. This design system conveys the high-performance environment of IIT Kharagpur’s sports culture through a lens of exclusivity and institutional pride. It avoids the cluttered energy of typical commercial sports media in favor of a restrained, "Elite Club" aesthetic.

The style is a fusion of **Modern Minimalism** and **High-Contrast Boldness**. By utilizing deep blacks and a singular, vibrant accent color, the interface directs focus toward achievements and history. The atmosphere is confident, serious, and premium, mirroring the dedication of a varsity athlete.

- **Minimalism:** Heavy use of negative space to create a "gallery" feel for sports imagery.
- **Boldness:** Aggressive typographic scales and high-value contrast for critical information.
- **Institutionalism:** A structured, rigid adherence to grid systems that suggests tradition and order.

## Colors

The palette is restricted to maintain a "high-end" signature. The primary background uses a custom deep black to provide more depth than pure hex-black, allowing secondary grays to create subtle "tiers" of information without relying on heavy shadows.

- **Gymkhana Yellow (#FFD100):** Used strictly as a "surgical" accent. It should be reserved for interactive states (CTAs), structural borders that define sections, and critical highlights like "Live" scores or championship titles.
- **Surface Hierarchy:** The background (#0B0B0B) acts as the base, while #1A1A1A is used for large containers (cards, sections) and #2A2A2A for nested elements (inputs, hover states).
- **Typography:** White is used for headers to ensure maximum readability against the dark ground, while Light Grey is used for metadata and body copy to reduce visual fatigue.

## Typography

Typography drives the "elite" feel of the system. **Lexend** is chosen for headlines due to its athletic, clear-cut geometry that remains legible even at massive scales. **Inter** provides a utilitarian, clean counterpoint for long-form content and data-heavy tables.

- **Impact Headers:** Use `display-xl` for section introductions. The tight letter-spacing and heavy weight create a sense of power.
- **Data Labels:** Use `label-caps` for sport categories, timestamps, and status badges. The increased tracking (letter spacing) adds a refined, institutional touch.
- **Hierarchy:** Maintain a clear distinction between the "expressive" Lexend and the "functional" Inter. Use color (Yellow vs. White) to denote primary vs. secondary information within headers.

## Layout & Spacing

The system employs a **Fixed Grid** model centered within the viewport. This contains the content and prevents it from feeling "lost" on ultra-wide monitors, preserving the premium, curated feel.

- **Grid:** A 12-column grid with a maximum width of 1400px. Gutters are generous (32px) to allow for clear separation of sports modules.
- **Vertical Rhythm:** A significant 120px vertical gap is mandated between major sections. This "breathable" space is essential to the premium identity, ensuring the UI never feels crowded.
- **Alignment:** Content should primarily be left-aligned for readability, but "Hero" sections and "Call to Action" blocks may utilize centered layouts to emphasize importance.

## Elevation & Depth

In a dark, minimal system, depth is communicated through **Tonal Layering** rather than realistic shadows.

- **Z-Axis Hierarchy:** Elements closer to the user are lighter in color. The base background is #0B0B0B, while floating cards or modals should use #1A1A1A.
- **Borders over Shadows:** Use 1px solid borders (#2A2A2A) to define the edges of cards. This creates a crisp, architectural look that aligns with the "institutional" goal.
- **Active Accents:** Use Gymkhana Yellow for thin (1px to 2px) top-borders on cards to indicate "featured" content or active selections. 
- **Backdrop Blur:** For overlays or navigation bars, use a heavy backdrop blur (20px+) with a semi-transparent black fill to maintain context while focusing user attention.

## Shapes

The shape language is **Structured and Sharp**. To maintain a "Bold and Confident" look, roundedness is kept minimal.

- **Component Corners:** A base radius of 4px (`rounded-sm` or `soft`) is applied to buttons and inputs. This is enough to prevent the UI from feeling "hostile" while remaining much sharper and more professional than consumer-grade "bubbly" apps.
- **Large Containers:** Cards and image containers use 8px (`rounded-lg`) to provide a subtle distinction from the background.
- **Iconography:** Use thick-stroke, geometric icons with square caps rather than rounded ends to match the Lexend typeface.

## Components

### Buttons
- **Primary:** Solid Gymkhana Yellow with Black text. No gradient. 4px border-radius.
- **Secondary:** Ghost style. 1px White border with White text. Transitions to a subtle grey fill on hover.
- **Tertiary:** Text-only with a 2px Yellow bottom-border that expands on hover.

### Cards & Modules
- **Sports Card:** #1A1A1A background, 1px #2A2A2A border. Headlines should be Lexend Bold. Use Yellow only for the "Live" indicator or a primary CTA button within the card.
- **Stat Modules:** Large `display-xl` typography for numbers, followed by `label-caps` for the description. Numbers should be White; labels should be Light Grey.

### Inputs & Forms
- **Fields:** Dark Grey (#2A2A2A) background with no border, 4px radius. On focus, add a 1px Gymkhana Yellow border.
- **Selection Elements:** Checkboxes and Radio buttons use Gymkhana Yellow for the "checked" state.

### Navigation
- **Top Bar:** Fixed, 80px height, #0B0B0B with a 1px bottom border in #2A2A2A. Links use `label-caps` styling.
- **Footer:** Minimalist. Dark Grey text on Black background, using a centered layout for the Gymkhana logo and institutional credits.