# Venturi Labs Project Context & Instructions

## Architecture
- **Static Site Generator**: Pelican
- **Theme**: Custom theme located in `theme/venturi`
- **Styling**: Tailwind CSS (configuration in `tailwind.config.js`)

## Development Environment Setup
- **Virtual Environment**: Located in the `.venv` directory (or fallback to `venv`).
  - The project uses `uv` for managing dependencies and virtual environments.
  - To create a virtual environment if it does not exist: `uv venv`
  - To install/sync dependencies: `uv pip install -r requirements.txt`
  - To activate: 
    - Windows PowerShell: `.venv\Scripts\Activate.ps1`
    - Unix/macOS: `source .venv/bin/activate`
  - To run Python/Pelican commands directly without activation: `uv run <command>` (e.g. `uv run pelican <args>`)

## Build & Development Commands
- **Tailwind CSS**: 
  - To watch for changes during development: `npm run watch:css`
  - To build for production (minified): `npm run build:css`
  - The input file is `theme/venturi/static/css/input.css` and the output is `theme/venturi/static/css/main.css`.

- **Pelican Setup**:
  - The main configuration file is `pelicanconf.py` and the content directory is `content`.
  - Typical development server command (relying on `uv` to run Pelican): `uv run pelican -lr`

## Agent Guidelines
- When working on styling, modify `theme/venturi/static/css/input.css` or Tailwind classes in HTML templates, and ensure the CSS build step is executed.
- Always rely on `uv` for virtual environments. Create the virtual environment if it doesn't exist, and run Python commands via `uv run` or by invoking the binary within `.venv`.
- Preserve the design brief aesthetics found in `.agent/design_brief.json`.
