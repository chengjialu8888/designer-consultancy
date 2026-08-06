# Taste Skill integration

[Taste Skill](https://github.com/Leonxlnx/taste-skill) is a partner collection maintained by Leonxlnx. Designer Consultancy exposes all 13 upstream skills through one pinned Claude Code plugin while leaving authorship, source, research, and releases in the upstream repository.

## Choose a skill

| Install name | Use it for |
| --- | --- |
| `design-taste-frontend` | General anti-slop landing pages, portfolios, and redesigns; the upstream v2 default is experimental |
| `design-taste-frontend-v1` | Compatibility fallback when a project depends on the original v1 behavior |
| `gpt-taste` | Stricter GPT/Codex-oriented layout variance, typography, and GSAP direction |
| `image-to-code` | Generate visual references first, analyze them, then implement the frontend |
| `redesign-existing-projects` | Audit and improve an existing website or app without breaking behavior |
| `high-end-visual-design` | Calm, premium, agency-like frontend direction |
| `minimalist-ui` | Restrained editorial product UI with crisp hierarchy |
| `industrial-brutalist-ui` | Mechanical, Swiss-influenced, high-contrast interfaces |
| `stitch-design-taste` | Google Stitch-compatible design-system rules and optional `DESIGN.md` output |
| `full-output-enforcement` | Complete code output when an agent repeatedly leaves placeholders or truncates work |
| `imagegen-frontend-web` | Website concept images and section-by-section visual references |
| `imagegen-frontend-mobile` | Mobile screen concepts and coherent multi-screen flows |
| `brandkit` | Brand identity boards, logo directions, palettes, type, and applications |

## Routing with Designer Consultancy

- Use `design-taste-frontend` for expressive landing pages and portfolios. Use Designer Consultancy's `ui-design` skills for operational product surfaces, dashboards, settings, and repeated task flows.
- Use `redesign-existing-projects` when implementation changes are requested. Use `visual-critique`, `anti-ai-slop`, or `impeccable-slop-audit` for a read-only assessment.
- Use `image-to-code` when visual references should lead implementation. Use the artist-derived methods when the art direction needs a documented composition, color, material, or rhythm system.
- Use Taste Skill's image-generation skills for reference frames. Keep real interface structure and controls in HTML/CSS/JavaScript rather than baking the whole product into an image.

## Install

After adding the Designer Consultancy marketplace, install the complete Claude Code plugin:

```text
/plugin install taste-skill@designer-skills
```

For Codex, Gemini CLI, Cursor, and other compatible runtimes:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
```

Install only the default frontend skill when the full collection is unnecessary:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend
```

## Version and provenance

The marketplace entry is pinned to upstream commit [`e988add20dab0fa97d7a76781c48961c8184288e`](https://github.com/Leonxlnx/taste-skill/commit/e988add20dab0fa97d7a76781c48961c8184288e). Updating the pin requires reviewing upstream changes and validating all 13 skills again.

No Taste Skill source files are vendored here. Taste Skill remains authored and maintained by Leonxlnx under the MIT License. The upstream repository and skill files are the source of truth.
