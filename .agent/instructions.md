# Venturi Labs Project Context & Instructions

## Architecture
- **Static Site Generator**: Pelican
- **Theme**: Custom theme located in `theme/venturi`
- **Styling**: Tailwind CSS (configuration in `tailwind.config.js`)

## Development Environment Setup
- **Virtual Environment**: Located in the `venv` directory.
  - To activate: `source venv/bin/activate`
  - To use the Python binary directly: `venv/bin/python`
  - Ensure packages are installed via `pip install -r requirements.txt`

## Build & Development Commands
- **Tailwind CSS**: 
  - To watch for changes during development: `npm run watch:css`
  - To build for production (minified): `npm run build:css`
  - The input file is `theme/venturi/static/css/input.css` and the output is `theme/venturi/static/css/main.css`.

- **Pelican Setup**:
  - The main configuration file is `pelicanconf.py` and the content directory is `content`.
  - Typical development server command (once venv is active): `pelican -lr`

## Agent Guidelines
- When working on styling, modify `theme/venturi/static/css/input.css` or Tailwind classes in HTML templates, and ensure the CSS build step is executed.
- Always check that you are running Python commands using the `venv` directory.
- Preserve the design brief aesthetics found in `.agent/design_brief.json`.
