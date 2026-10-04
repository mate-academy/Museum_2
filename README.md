# NA MU — National Art Museum of Ukraine

## Brief Project Description

NA MU is a responsive landing page concept inspired by the National Art Museum of Ukraine.
The project presents current exhibitions and lectures, includes a news section, schedule, subscription form, social links, contact information, and working hours. The main goal of the project was to practice modern responsive layout techniques, semantic HTML, accessibility basics, and CSS-first interactivity.

## Technologies Used

- HTML5 (semantic markup)
- CSS3
- SCSS / Sass
- BEM methodology
- Google Fonts (Playfair Display, Raleway)
- JavaScript (ES6+)
- Vite
- Stylelint
- Prettier

## Features

- Responsive mobile-first layout (320px → 640px → 1280px)
- CSS Grid layout system across breakpoints
- CSS-only burger menu using `:target` and `:has()` — no JavaScript
- Animated overlay backdrop controlled entirely via CSS `:has()` selector
- `<details>` / `<summary>` language switcher with CSS-only styling
- JavaScript UA/EN language switcher with full page translation via `data-i18n` attributes
- `localStorage` persistence of selected language across page reloads
- Translated text content, `aria-label`, and `alt` attributes via `data-i18n-aria-label` / `data-i18n-alt`
- `document.documentElement.lang` updated on language switch for screen-reader and SEO correctness
- `prefers-reduced-motion` support via CSS
- Facebook / Instagram social links via SVG sprite (`<use>`)
- Semantic HTML5 (`<article>`, `<address>`, `<time>`, `<dl>/<dt>/<dd>`, `<aside>`)
- Accessibility improvements: aria-label, and visually-hidden text
- Touch-friendly interactions via `@media (hover: hover)`
- `scrollbar-gutter: stable` to prevent layout shift on scroll
- Modular SCSS architecture (blocks/, utils/)

## Preview

- [DEMO LINK](https://ht1204.github.io/Museum_2/)

## Design Reference

- [Figma design](https://www.figma.com/file/HL3XGt5ZatvJoYBhOaWY5x/museum-prototype?node-id=323%3A1957)
