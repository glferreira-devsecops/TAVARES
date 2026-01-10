# 🎨 Design System

Our design language is built to reflect the vibrancy, warmth, and authenticity of the Favela. We bridge the gap between "Premium SaaS" aesthetics and "Cultural Heritage".

## 🌈 Color Palette (OKLCH)

We use the `oklch` color space for perceptual uniformity.

### Brand Primaries

| Token | Value | Preview | Usage |
|-------|-------|---------|-------|
| `primary-500` | `oklch(0.623 0.214 28.5)` | 🔴 | Main Brand Color (CTA, Highlights) |
| `primary-600` | `oklch(0.55 0.2 28.5)` | 🔴 | Hover States |

### Neutrals (Dark Mode Core)

| Token | Value | Preview | Usage |
|-------|-------|---------|-------|
| `neutral-900` | `oklch(0.205 0 0)` | ⚫ | Background Base |
| `neutral-800` | `oklch(0.269 0 0)` | ⚫ | Cards / Surfaces |
| `neutral-50` | `oklch(0.985 0 0)` | ⚪ | Text (On Dark) |

### Semantic Colors

* 🟢 **Success**: `#25D366` (WhatsApp Green)
* 🟡 **Warning**: `#f59e0b` (Star Ratings)

---

## ✒️ Typography

### Headings: `Unbounded` / `Georgia`

Used for titles and expressive text.

* **Weights**: Bold (700), Black (900)
* **Tracking**: Tighter (-0.02em) for modern impact.

### Body: `Inter`

Used for long-form text and UI elements.

* **Weights**: Light (300), Regular (400), Medium (500)
* **Line Height**: 1.6 (Relaxed reading experience)

---

## 🧩 Components

### Buttons

* **Primary**: Gradient background, rounded-full, shadow-lg.
* **Secondary**: Outline, glassmorphism effect.

### Cards

* **Glassmorphism**: `bg-white/5 backdrop-blur-md border-white/10`
* **Hover**: Scale 1.02 + Shadow XL.
