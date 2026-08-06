# Designer Consultancy

A compact design practice for agentic product work: research, systems, UI, interaction, critique, and evidence-led visual direction. The skills are written for agents, but are designed to preserve human judgment.

## Compatibility

| Runtime | Support |
| --- | --- |
| Claude Code | Plugin collections through `.claude-plugin/marketplace.json` |
| Codex | Native `SKILL.md` folders, installed per project or per user |
| Gemini CLI | Generated extensions through `scripts/build-gemini.sh` |

## Design practice

**118 local skills, 30 local commands, 10 local design plugins, plus partner collections.**

| Plugin | Skills | Commands | Focus |
| --- | ---: | ---: | --- |
| `design-research` | 12 | 4 | Research, synthesis, and evidence |
| `design-systems` | 11 | 3 | Tokens, components, and system rules |
| `ux-strategy` | 12 | 3 | Journeys, flows, and product direction |
| `ui-design` | 29 | 4 | Interfaces, visual language, and templates |
| `interaction-design` | 16 | 3 | States, motion, and behavior |
| `prototyping-testing` | 8 | 4 | Prototypes and usability loops |
| `design-ops` | 9 | 3 | Handoff, documentation, and governance |
| `designer-toolkit` | 7 | 3 | Practical design utilities |
| `visual-critique` | 9 | 3 | Quality, hierarchy, and anti-slop review |
| `blog` | 5 | 0 | WeChat editorial layout, imagery, HTML, and draft preparation |

## Install

### Codex

Codex discovers a skill at `.codex/skills/<skill-name>/SKILL.md`. Install the whole practice set into the current project:

```bash
git clone https://github.com/chengjialu8888/designer-consultancy.git /tmp/designer-consultancy
mkdir -p .codex/skills
cp -R /tmp/designer-consultancy/ui-design/skills/. .codex/skills/
cp -R /tmp/designer-consultancy/visual-critique/skills/. .codex/skills/
cp -R /tmp/designer-consultancy/blog/skills/. .codex/skills/
```

For a personal install, replace `.codex/skills` with `~/.codex/skills`. To install one collection, copy only that plugin's `skills/` directory. Start a new Codex session after installation so the skill index refreshes.

The `commands/` directories remain portable workflow references. In Codex, invoke the matching skill by name and use those command documents as supporting guidance; they are not treated as a separate command registry.

### Claude Code

```text
/plugin marketplace add chengjialu8888/designer-consultancy
/plugin install ui-design@designer-skills
/plugin install blog@designer-skills
```

### Gemini CLI

```bash
git clone https://github.com/chengjialu8888/designer-consultancy.git /tmp/designer-consultancy
cd /tmp/designer-consultancy
./scripts/build-gemini.sh
```

The generated extensions live in `.gemini/extensions/`. Copy that directory into the project or user-level Gemini extensions directory as needed.

### Garden Skills

[Garden Skills](https://github.com/ConardLi/garden-skills) is available as five pinned partner options in the Designer Consultancy marketplace:

```text
/plugin install garden-presentation-skills@designer-skills
/plugin install garden-web-design-skills@designer-skills
/plugin install garden-knowledge-base-skills@designer-skills
/plugin install garden-image-generation-skills@designer-skills
/plugin install garden-beautiful-article-skills@designer-skills
```

For Codex, Gemini CLI, Cursor, or another Agent Skills runtime, use Garden's official installer:

```bash
npx skills add ConardLi/garden-skills
```

See the [Garden Skills integration](integrations/garden-skills.md) for capability mapping, provenance, and the pinned revision.

### Taste Skill

[Taste Skill](https://github.com/Leonxlnx/taste-skill) is available as one pinned partner plugin containing 13 frontend, redesign, image-to-code, visual-direction, and image-generation skills:

```text
/plugin install taste-skill@designer-skills
```

For Codex, Gemini CLI, Cursor, or another Agent Skills runtime, use the upstream installer:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
```

See the [Taste Skill integration](integrations/taste-skill.md) for routing guidance, the complete skill map, and the pinned revision.

## Start here

| Need | Start with |
| --- | --- |
| Design a product or interface | `ui-design` |
| Audit an existing screen | `visual-critique` |
| Build a research-backed direction | `design-research` |
| Create an exhibition-style AI report | `contemporary-exhibition-editorial` |
| Create a restrained editorial poster | `minimal-zine-poster` |
| Distill a supplied photo into an expressive zine poster | `scene-distillation-zine-v1-3` |
| Review generated work for generic patterns | `anti-ai-slop` |
| Run Impeccable's deterministic frontend slop check | [`impeccable-slop-audit`](visual-critique/skills/impeccable-slop-audit/SKILL.md) |
| Use Garden's presentation, frontend, image, retrieval, or article workflows | [Garden Skills](integrations/garden-skills.md) |
| Use Taste Skill's frontend, redesign, image-to-code, or visual-direction workflows | [Taste Skill](integrations/taste-skill.md) |
| Format a WeChat Official Account article | `blog` |
| Browse WeChat theme case screenshots | [blog theme gallery](blog/README.md#theme-gallery) |
| Explore artist-derived design styles | [Artist-derived methods](#artist-derived-methods-design-styles) |

## Visual directions

These are reusable design methods, not locked themes. Use the skill instructions as constraints, then adapt the composition to the content.

| Direction | Best for | Preview |
| --- | --- | --- |
| [Contemporary Exhibition Editorial](ui-design/skills/contemporary-exhibition-editorial/SKILL.md) | Evidence-led reports and 16:9 editorial pages | <img src="ui-design/examples/contemporary-exhibition-editorial/assets/work-trace.png" width="260" alt="Contemporary exhibition editorial preview"> |
| [Minimal Zine Poster](ui-design/skills/minimal-zine-poster/SKILL.md) | Quiet posters, covers, and single-idea summaries | <img src="ui-design/examples/minimal-zine-poster/assets/night-door.jpeg" width="125" alt="Minimal zine night door preview"> <img src="ui-design/examples/minimal-zine-poster/assets/yellow-step.jpeg" width="125" alt="Minimal zine yellow step preview"> |
| [Scene Distillation Zine v1.3](ui-design/skills/scene-distillation-zine-v1-3/SKILL.md) | Source-photo distillation into expressive paper posters with semantic anchors, spacious negative space, tactile print material, and purposeful high-chroma color | <img src="ui-design/examples/scene-distillation-zine/assets/between-stops.jpg" width="150" alt="Scene Distillation Zine preview: an empty rain-soaked bus stop distilled into a sparse charcoal paper poster with one cobalt accent"> |

## Artist-derived methods: design styles

These artist-derived design styles translate documented composition, color, material, space, and rhythm principles into reusable rules for art direction, image prompts, editorial systems, brand work, product illustration, and critique. They are methods of design, not instructions to imitate a specific artwork.

### Method diagrams

Each diagram shows how a method changes frontend information architecture, hierarchy, controls, states, and rhythm. The examples combine browser-rendered HTML/CSS interfaces with original generated visual assets directed by each artist-derived method; the main artwork is not simulated with CSS geometry. Their reusable source lives in the [frontend specimen renderer](ui-design/examples/artist-derived-methods/frontend/).

| Design style | Frontend translation | Method diagram |
| --- | --- | --- |
| [Georgia O'Keeffe Style](ui-design/skills/georgia-okeeffe-style/SKILL.md) | Organic scale, concentrated color, and close looking | <img src="ui-design/examples/artist-derived-methods/assets/georgia-okeeffe-method.svg" width="300" alt="Georgia O'Keeffe method diagram: close looking, selection, and necessary color"> |
| [Mark Rothko Style](ui-design/skills/mark-rothko-style/SKILL.md) | Color fields, atmospheric hierarchy, and emotional pacing | <img src="ui-design/examples/artist-derived-methods/assets/mark-rothko-method.svg" width="300" alt="Mark Rothko method diagram: layered color fields, soft edges, and quiet intervals"> |
| [Leonora Carrington Style](ui-design/skills/leonora-carrington-style/SKILL.md) | Threshold archive: world law, autonomous agents, nested rooms, transformation states, and consequential choices | <img src="ui-design/examples/artist-derived-methods/assets/leonora-carrington-frontend.jpg" width="420" alt="Frontend method diagram for Leonora Carrington Style: a threshold archive interface with transformation states and autonomous agents"> |
| [Fujiko F. Fujio Visual Narrative Style](ui-design/skills/doraemon-style/SKILL.md) | Child-readable maker flow: one clear action per unit, an everyday science-fiction rule, and a visible causal sequence | <img src="ui-design/examples/artist-derived-methods/assets/doraemon-frontend.jpg" width="420" alt="Frontend method diagram for Fujiko F. Fujio Visual Narrative Style: a child-readable maker flow with four causal states"> |
| [Jackson Pollock Style](ui-design/skills/jackson-pollock-style/SKILL.md) | Generative motion studio: parameterized line families, uneven density, feedback passes, and three-distance reading | <img src="ui-design/examples/artist-derived-methods/assets/jackson-pollock-frontend.jpg" width="420" alt="Frontend method diagram for Jackson Pollock Style: a generative motion studio with trajectory controls and a density map"> |
| [Lucian Freud Style](ui-design/skills/lucian-freud-style/SKILL.md) | Observational sitting log: figure-room reciprocity, contact pressure, visible agency, and change over time | <img src="ui-design/examples/artist-derived-methods/assets/lucian-freud-frontend.jpg" width="420" alt="Frontend method diagram for Lucian Freud Style: an observational sitting log with contact pressure and consent status"> |
| [Lucio Fontana Style](ui-design/skills/lucio-fontana-style/SKILL.md) | Spatial configurator: surface preparation, aperture depth, backlight, and a visitor route that completes the work | <img src="ui-design/examples/artist-derived-methods/assets/lucio-fontana-frontend.jpg" width="420" alt="Frontend method diagram for Lucio Fontana Style: a spatial configurator for a membrane, aperture, light, and visitor route"> |
| [Gustav Klimt Style](ui-design/skills/gustav-klimt-style/SKILL.md) | Motif system editor: a protected living anchor, executable pattern grammar, material tokens, and controlled ornament | <img src="ui-design/examples/artist-derived-methods/assets/gustav-klimt-frontend.jpg" width="420" alt="Frontend method diagram for Gustav Klimt Style: a motif system editor balancing a living anchor with a pattern field"> |
| [Pieter Bruegel the Elder Style](ui-design/skills/pieter-bruegel-the-elder-style/SKILL.md) | Community operations map: high-view organization, seasonal causality, many legible verbs, and whole-to-detail discovery | <img src="ui-design/examples/artist-derived-methods/assets/pieter-bruegel-frontend.jpg" width="420" alt="Frontend method diagram for Pieter Bruegel the Elder Style: a high-view community operations map shaped by approaching rain"> |
| [Hans Holbein the Younger Style](ui-design/skills/hans-holbein-the-younger-style/SKILL.md) | Institutional profile: selective precision, role-bearing evidence, material-specific rendering, and bounded uncertainty | <img src="ui-design/examples/artist-derived-methods/assets/hans-holbein-frontend.jpg" width="420" alt="Frontend method diagram for Hans Holbein the Younger Style: an institutional profile with evidence objects and uncertainty labels"> |
| [Titian Style](ui-design/skills/titian-style/SKILL.md) | Chromatic revision workspace: functional layers, material touch contracts, an irreversible narrative second, and distance checks | <img src="ui-design/examples/artist-derived-methods/assets/titian-frontend.jpg" width="420" alt="Frontend method diagram for Titian Style: a chromatic revision workspace with layers, touch contracts, and distance checks"> |
| [Edvard Munch Style](ui-design/skills/edvard-munch-style/SKILL.md) | Relational journey editor: state sequence, directional line verbs, critical intervals, and controlled version changes | <img src="ui-design/examples/artist-derived-methods/assets/edvard-munch-frontend.jpg" width="420" alt="Frontend method diagram for Edvard Munch Style: a relational journey editor showing approach, contact, friction, separation, and aftereffect"> |

## Repository map

- `*/skills/`: agent-readable design methods, each with a `SKILL.md`
- `*/commands/`: repeatable workflow references for Claude Code and portable agent use
- `ui-design/examples/`: rendered examples and visual references
- `blog/`: WeChat Official Account editorial workflow and themes
- `integrations/`: pinned partner collections and install mappings
- `scripts/build-gemini.sh`: converts plugin skills into Gemini CLI extensions
- `.claude-plugin/marketplace.json`: Claude Code marketplace metadata

## Contributing

Add a focused skill when it captures a repeatable design judgment. Include a clear `SKILL.md`, keep examples close to the skill, and explain when the method should not be used. Small, opinionated contributions are easier to reuse and review.

MIT License.
