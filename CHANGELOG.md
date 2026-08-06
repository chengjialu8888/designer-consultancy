# Changelog

All notable changes to this collection are documented here.

---

## Unreleased

### ui-design — Scene Distillation Zine v1.3

- Added `scene-distillation-zine-v1-3` as a local visual-direction template for transforming supplied photos into original, source-derived paper-poster illustrations.
- Preserved the upstream semantic distillation, expressive proposition, central tension, visual metaphor, negative-space, color-mode, edge, and authorial typography workflow.
- Added upstream MIT provenance at reviewed commit `e764b7f`, plus the original license and OpenAI skill metadata.
- Added an original `BETWEEN STOPS` preview generated with the built-in image tool and listed the template under Visual directions.

### Repository — Taste Skill partner collection

- Added a pinned `taste-skill` Claude Code marketplace option exposing all 13 upstream frontend, redesign, image-to-code, visual-direction, and image-generation skills.
- Added routing guidance for choosing Taste Skill alongside Designer Consultancy's operational UI, visual critique, Impeccable, and artist-derived methods.
- Added Codex, Gemini CLI, Cursor, and generic Agent Skills installation guidance through the upstream `npx skills` workflow.
- Kept the source external and credited Leonxlnx's MIT-licensed project; the marketplace entry is pinned to reviewed commit `e988add`.

### Repository — Garden Skills partner collection

- Added five pinned Garden Skills options to the Claude Code marketplace: web video presentation, web design engineering, local knowledge retrieval, GPT Image 2, and beautiful single-file HTML articles.
- Added Codex, Gemini CLI, Cursor, and generic Agent Skills installation guidance through Garden's official `npx skills` workflow.
- Kept the upstream source external and credited ConardLi's MIT-licensed project; marketplace entries are pinned to reviewed commit `aaf9a82`.
- Normalized marketplace metadata to the cross-version structure accepted by the Claude Code validator.

### visual-critique — Impeccable slop audit

- Added `impeccable-slop-audit` as a frontend-specific option backed by Impeccable's official CLI, rendered desktop/mobile checks, evidence-channel labels, false-positive review, and a repair verification loop.
- Expanded `/anti-slop-audit` to combine deterministic Impeccable findings with the existing content-truth, specificity, and structural judgment gates.
- Added a compact local field guide for the live 64-pattern catalog without vendoring the upstream detector.
- Credited Paul Bakaus and the Apache-2.0 Impeccable project; the official CLI and live catalog remain the source of truth.

### ui-design — contemporary exhibition editorial

- Added `contemporary-exhibition-editorial`, a reusable visual system for evidence-led AI and technology reporting.
- Documented 16:9 exhibition-frame composition, paper/black color fields, semantic accent tokens, work-trace diagrams, evidence rails, Feishu output guidance, and responsive quality gates.
- Added a worked example based on the AI News Digest visual “The next training data is a work trace.”

### ui-design — minimal zine poster

- Added `minimal-zine-poster`, a quiet vertical 3:5 poster system with large paper fields, one imageable subject, restrained type, and a single high-chroma print anchor.
- Added screenshot examples and upstream MIT attribution under `ui-design/examples/minimal-zine-poster/`.
- Added a root README style gallery showing the reusable visual templates side by side.

### Repository — artist-derived methods gallery

- Added a README section for the Georgia O'Keeffe and Mark Rothko method-based style skills, with distilled principles and recommended use cases.

### visual-critique — anti-AI-slop quality gate

- Added `anti-ai-slop`, a read-only audit skill adapted from Hallmark's anti-AI-slop practice.
- Added `/anti-slop-audit` with pre-flight findings, six-axis self-critique, 31 gates, ranked severity, and a verification handoff.
- Added checks for fabricated evidence, structural sameness, token drift, fake UI chrome, typography defaults, responsive failures, and missing interaction states.

## [1.0.0] — 2026-06-11

First stable release. Tagging the current state of main as v1.0.0 to give integrators a stable version to pin to.

### Design practice collection

- 9 plugins, 97 skills, 30 commands
- Plugins: design-research, design-systems, ux-strategy, ui-design, interaction-design, prototyping-testing, design-ops, designer-toolkit, visual-critique
- Gemini CLI extension support across all plugins

### visual-critique — expanded from 4 to 7 skills

Added three new critique dimensions and a second command:

- **critique-color** — contrast ratios, palette coherence, semantic colour use, and colour accessibility
- **critique-affordance** — clickability signals, state visibility, CTA clarity, and action discoverability
- **critique-information-density** — cognitive load, content priority, scanning patterns, and progressive disclosure
- `/critique-ux` command — focused functional critique (hierarchy + affordance + density) for quick loops and PM-led reviews
- `/critique-screen` updated to run all seven dimensions

### Repository

- Added `.gitattributes` so GitHub detects Markdown as the primary language
- Added `CHANGELOG.md`
- Added `README.md` getting-started section with three starting-point paths, deliverable lookup table, recommended install set, and sequence guide

---

## Pre-release history

| Date | Change |
|---|---|
| 2026-06 | Rename project from Skills Suite to Skills Pack |
| 2026-05 | Aggregate full designer skills suite into one marketplace |
| 2026-05 | Add Gemini CLI extension support |
| 2026-04 | Add visual-critique plugin (four skills, one command) |
| 2026-04 | Add 15 skills covering gaps across all design plugins |
| 2026-04 | Add 9 UX design principle skills across ui-design and interaction-design |
| 2026-03 | Initial release: 6 design plugins, 53 skills, 23 commands |
