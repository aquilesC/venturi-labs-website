# Venturi Labs — Project Context & Instructions

## What This Is

A marketing & content website for **Venturi Labs**, a Dutch deep-tech productization studio that turns niche academic lab inventions into professional, CE-marked scientific instruments. The site targets three audiences: **TTOs** (Tech Transfer Offices), **Principal Investigators** (PIs/researchers), and **engineers/the deep-tech ecosystem**.

- **Live URL**: `https://venturi-labs.eu`
- **Static Site Generator**: [Pelican](https://getpelican.com/) (Python-based)
- **Styling**: Tailwind CSS (see `tailwind.config.js`)
- **Theme**: Custom, located at `theme/venturi/`

---

## Architecture & File Map

```
venturi-labs/
├── pelicanconf.py              # Dev config (SITEURL, routes, menus, pagination)
├── publishconf.py              # Production config (extends pelicanconf, sets SITEURL to https://venturi-labs.eu)
├── requirements.txt            # Python deps (just pelican)
├── package.json                # Node deps (tailwindcss)
├── tailwind.config.js          # Tailwind config (custom colors, fonts, content paths)
│
├── content/                    # All Pelican content (Markdown)
│   ├── *.md                    # Articles (insights/blog posts)
│   ├── pages/                  # Static pages
│   │   ├── contact.md
│   │   ├── platform.md
│   │   ├── researchers.md
│   │   └── universities.md
│   └── images/                 # Article images
│
├── theme/venturi/              # Custom Pelican theme
│   ├── templates/              # Jinja2 templates
│   │   ├── base.html           # Root layout (head, nav, footer, Organization schema, CWV optimizations)
│   │   ├── index.html          # Homepage (hero, problem section, SVG schematic, audience gateways)
│   │   ├── article.html        # Single article (Article/TechArticle schema, BreadcrumbList, dynamic CTA)
│   │   ├── page.html           # Generic static page wrapper
│   │   ├── page_contact.html   # Contact page (custom template)
│   │   ├── page_platform.html  # Platform/architecture page (custom template)
│   │   ├── page_researchers.html  # PI landing page (custom template)
│   │   ├── page_universities.html # TTO landing page (custom template)
│   │   ├── resources.html      # Article listing with audience filter buttons
│   │   ├── category.html       # Category archive
│   │   ├── tag.html            # Tag archive
│   │   └── sitemap.html        # XML sitemap template
│   └── static/
│       ├── css/
│       │   ├── input.css       # Tailwind source (directives + custom component classes)
│       │   └── main.css        # Compiled Tailwind output (DO NOT edit directly)
│       ├── js/
│       │   └── main.js         # Dark mode toggle, mobile menu, article audience filtering
│       └── venturi_logo.jpg    # Logo image used in OG/schema markup
│
├── output/                     # Generated site (gitignored, built by Pelican)
└── .agent/
    ├── instructions.md         # This file
    └── design_brief.json       # Visual identity, color palette, typography, tone of voice
```

---

## Template Inheritance

```
base.html
├── index.html          (homepage)
├── article.html        (single article — has structured_data block)
├── page.html           (generic page)
│   └── page_*.html     (specialized pages select template via Pelican `Template:` metadata)
├── resources.html      (article listing — uses DIRECT_TEMPLATES)
├── category.html       (category archive)
├── tag.html            (tag archive)
└── sitemap.html        (XML sitemap — uses DIRECT_TEMPLATES)
```

**Key blocks in `base.html`**:
- `{% block title %}` — Page title
- `{% block description %}` / `{% block keywords %}` — SEO meta
- `{% block og_title %}` / `{% block og_description %}` / etc. — Open Graph
- `{% block tw_title %}` / `{% block tw_description %}` / etc. — Twitter Cards
- `{% block canonical %}` — Canonical URL path
- `{% block structured_data %}` — JSON-LD schema injection point (used by article.html)
- `{% block content %}` — Main page content

---

## Content Model (Articles)

Articles are Markdown files in `content/`. Frontmatter fields:

| Field | Required | Example | Notes |
|---|---|---|---|
| `Title` | Yes | `The 1-Year Productization Sprint...` | Used in `<h1>`, schema `headline` |
| `Category` | Yes | `Researchers`, `TTOs`, `Engineering`, `Ecosystem`, `Insights` | Drives article schema type & CTA |
| `Tags` | Yes | `Career Pathways, Postdocs, Scipreneur` | Comma-separated, used in schema `keywords` |
| `CTA_Target` | Yes | `PI`, `TTO`, `Engineering`, `Ecosystem` | Drives audience filter on resources page & bottom CTA |
| `Date` | Yes | `2026-05-19` | ISO date |
| `slug` | Optional | `abandoning-ip` | Auto-generated from title if omitted |

**Category → Schema mapping**:
- `Engineering` → `TechArticle` (with `proficiencyLevel: Expert`)
- All others → `Article`

**Category → CTA mapping** (bottom of article.html):
- `Researchers` → Links to `/researchers` (NWO grant discussion)
- `TTOs` → Links to `/universities` (portfolio review)
- `Engineering` → Links to `/platform` (technical collaboration)
- Anything else → Generic contact CTA

**Pages** use the `Template:` metadata field to select custom templates:
- `contact.md` → `page_contact`
- `platform.md` → `page_platform`
- `researchers.md` → `page_researchers`
- `universities.md` → `page_universities`

---

## SEO & Schema Setup

### JSON-LD (Structured Data)
All implemented via `<script type="application/ld+json">` blocks:

1. **Organization** (in `base.html` — every page):
   - `foundingLocation`: Amsterdam, Netherlands
   - `areaServed`: Europe
   - `knowsAbout`: 8 deep-tech domain tags
   - `additionalType`: ResearchOrganization, EngineeringOrganization

2. **Article / TechArticle** (in `article.html` — article pages only):
   - Dynamic `@type` based on category
   - Full publisher, author, dates, keywords, image

3. **BreadcrumbList** (in `article.html`):
   - Resources → Category → Article title

### Meta Tags (in `base.html`)
- `<meta name="description">` — auto-generated from article/page summary
- `<meta name="keywords">` — from article tags
- `<link rel="canonical">` — absolute URL
- Open Graph (`og:*`) and Twitter Card (`twitter:*`) tags

### Core Web Vitals Optimizations
- Font preloading via `<link rel="preload" as="style">`
- Trimmed Google Fonts request to only used weights (Inter 400-900, JetBrains Mono 400/700)
- Explicit `width`/`height` on SVG logo to prevent CLS
- Dark mode FOUC prevention via inline `<script>` in `<head>`

---

## URL Structure

Configured in `pelicanconf.py`:
- **Articles**: `/{slug}/` → `{slug}/index.html`
- **Pages**: `/{slug}/` → `{slug}/index.html`
- **Resources listing**: `/resources/` (via `DIRECT_TEMPLATES`)
- **Sitemap**: `/sitemap.xml` (via `DIRECT_TEMPLATES`)

---

## Custom Tailwind Tokens

Defined in `tailwind.config.js`:
- `venturi-cyan`: `#06B6D4` — primary accent
- `architecture-indigo`: `#4F46E5` — engineering/software sections
- `ecosystem-emerald`: `#10B981` — ecosystem/sustainability sections
- Fonts: `Inter`/`Roboto` (sans), `JetBrains Mono`/`Fira Code` (mono)

Custom component classes in `input.css`:
- `.venturi-prose` — Article body typography (headings, links, blockquotes, lists, code, tables)
- `.venturi-card` — Card component
- `.venturi-btn` — Button component

---

## Development Environment

### Prerequisites
- Python (with `uv` for venv/deps)
- Node.js (for Tailwind CSS)

### Setup
```bash
uv venv && uv pip install -r requirements.txt
npm install
```

### Development Commands
```bash
# Watch Tailwind CSS for changes
npm run watch:css

# Build production CSS (minified)
npm run build:css

# Run Pelican dev server with live reload
uv run pelican -lr

# Build site (dev config)
source venv/bin/activate && pelican content -s pelicanconf.py -o output

# Build site (production config)
source venv/bin/activate && pelican content -s publishconf.py -o output
```

### Key Rules for Agents
- **CSS**: Edit `theme/venturi/static/css/input.css` or Tailwind classes in templates. Never edit `main.css` directly. Run `npm run build:css` after changes to `input.css` or `tailwind.config.js`.
- **Python**: Use `uv run` or activate `venv/` before running Pelican.
- **Design**: Preserve the design brief aesthetics in `.agent/design_brief.json`. Animations must be snappy (150ms linear), never bouncy. Follow Dutch design principles — pragmatic, minimal, grid-oriented.
- **Schema**: Use the `{% block structured_data %}` in child templates to inject page-specific JSON-LD. Organization schema is global in `base.html`.
- **Content**: Articles need all frontmatter fields (`Title`, `Category`, `Tags`, `CTA_Target`, `Date`). The `CTA_Target` value must be lowercase in templates (`pi`, `tto`, `engineering`, `ecosystem`).
