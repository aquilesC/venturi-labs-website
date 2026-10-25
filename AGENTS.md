# Venturi Labs Workspace Rules

## Python Virtual Environment
- A virtual environment is set up at `venv/` in the repository root.
- Always activate the virtual environment (`source venv/bin/activate`) or run commands via `venv/bin/...` or `uv run ...` before executing Python or Pelican commands (e.g., `source venv/bin/activate && pelican content -s pelicanconf.py -o output`).
- Do not run bare `pelican` or `python` commands without activating `venv/`.
