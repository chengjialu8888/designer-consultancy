# Garden Skills integration

[Garden Skills](https://github.com/ConardLi/garden-skills) is a partner collection maintained by ConardLi. Designer Consultancy exposes its five skills as installable Claude Code marketplace options while leaving the source, scripts, references, templates, and release process in the upstream repository.

## Options

| Designer Consultancy plugin | Upstream skill | Best for |
| --- | --- | --- |
| `garden-presentation-skills` | [`web-video-presentation`](https://github.com/ConardLi/garden-skills/tree/aaf9a82f5efd73e87cc0998edc398e75bfc35901/skills/web-video-presentation) | Click-driven 16:9 web presentations and screen-recorded explainers |
| `garden-web-design-skills` | [`web-design-engineer`](https://github.com/ConardLi/garden-skills/tree/aaf9a82f5efd73e87cc0998edc398e75bfc35901/skills/web-design-engineer) | Pages, dashboards, prototypes, slides, animation, and data visualization |
| `garden-knowledge-base-skills` | [`kb-retriever`](https://github.com/ConardLi/garden-skills/tree/aaf9a82f5efd73e87cc0998edc398e75bfc35901/skills/kb-retriever) | Progressive retrieval from local Markdown, text, PDF, and Excel knowledge bases |
| `garden-image-generation-skills` | [`gpt-image-2`](https://github.com/ConardLi/garden-skills/tree/aaf9a82f5efd73e87cc0998edc398e75bfc35901/skills/gpt-image-2) | GPT Image 2 generation, editing, and structured prompt direction |
| `garden-beautiful-article-skills` | [`beautiful-article`](https://github.com/ConardLi/garden-skills/tree/aaf9a82f5efd73e87cc0998edc398e75bfc35901/skills/beautiful-article) | Turning source material into an offline-friendly single-file HTML article |

## Install

After adding the Designer Consultancy marketplace, Claude Code users can install one Garden option:

```text
/plugin install garden-web-design-skills@designer-skills
```

Or install Garden directly in Codex, Gemini CLI, Cursor, and other compatible runtimes:

```bash
npx skills add ConardLi/garden-skills
```

Select one skill with `-s`, for example:

```bash
npx skills add ConardLi/garden-skills -s web-design-engineer
```

## Version and provenance

The five marketplace entries are pinned to upstream commit [`aaf9a82f5efd73e87cc0998edc398e75bfc35901`](https://github.com/ConardLi/garden-skills/commit/aaf9a82f5efd73e87cc0998edc398e75bfc35901). Updating the pin requires reviewing the upstream diff and validating all five plugin entries again.

No Garden source files are vendored here. Garden Skills remains authored and maintained by ConardLi under the MIT License. Its upstream repository, manifests, and release artifacts are the source of truth.
