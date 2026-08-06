# Slop catalog field guide

Impeccable's live catalog currently presents 64 patterns, with deterministic rules split between source and browser checks plus broader LLM-only judgments. Do not freeze the upstream list here. Use this guide to classify evidence and consult [the live catalog](https://impeccable.style/slop/) for current rule names and examples.

## Evidence classes

| Class | What it can establish | Typical method |
| --- | --- | --- |
| Source CLI | Detectable syntax, values, and repeated patterns | `npx impeccable detect --json <path>` |
| Browser | Computed layout, contrast, clipping, visibility, and viewport behavior | Scan a rendered URL at desktop and mobile sizes |
| Judgment | Product specificity, appropriateness, visual intent, and holistic composition | Independent design review |

## Catalog families

### Design-system drift

Check fonts, colors, radii, and type sizes against `DESIGN.md`. A literal value is not automatically wrong; establish whether it is an intentional addition or undocumented drift.

### Visual details

Look for decorative grid backgrounds, side-tab cards, hairline borders paired with diffuse shadows, repeating stripes, decorative glass, excessive rounding, and crude hand-built SVG scenes. Ask what job each treatment performs.

### Typography

Check flat type scales, overused font defaults, one-font monotony, giant sentence-length headlines, eyebrow-plus-hero formulas, icon tiles stacked above headings, crushed tracking, all-caps body copy, and undersized functional text. Editorial exceptions need evidence from the brief.

### Color and contrast

Check purple or cyan gradient defaults, neon glows on dark surfaces, gradient text, cream-by-reflex palettes, gray text on colored backgrounds, and measurable contrast failures. A saturated palette can be correct when it belongs to the product.

### Layout and space

Check nested cards, identical card grids, monotonous spacing, hero metric formulas, ornamental numbered sections, long line length, scroller-edge gutters, overflow, clipping, and unbalanced first viewports. Flatten hierarchy before adding more containers.

### Motion

Check pulsing status dots without changing data, decorative cursors, auto-scrolling marquees, bounce easing, layout-property animation, and image scaling on hover. Motion should explain state, continuity, causality, or spatial change.

### Copy

Check repeated labels, generic marketing superlatives, manufactured contrast aphorisms, habitual em-dashes, and vague category language. Replace them with specific nouns, verbs, constraints, and outcomes supplied by the product.

### Imagery

Check generic shape-assembled illustration and broken or placeholder image sources. Prefer product screenshots, real photography, commissioned illustration, or generated assets with a brief-specific art direction.

### General production quality

Check script errors, invisible-at-rest content, cramped padding, body text touching viewport edges, justified web body copy, low contrast, skipped heading levels, tight leading, tiny body text, and disruptive wide tracking.

## Contextual exceptions

Record an exception only when at least one of these is true:

- it is explicitly required by the brief or documented design system;
- it communicates a real product state or domain convention;
- removing it would reduce comprehension, identity, or task completion;
- the detector matched syntax but the rendered effect is absent;
- the rule is advisory and the design review found no user harm.

Never waive measurable accessibility, broken content, or task-blocking behavior as a stylistic exception.
