---
name: contemporary-exhibition-editorial
description: Build evidence-led editorial visuals for AI and technology reporting using exhibition-like 16:9 frames, hard color fields, typographic tension, and traceable data narratives.
---

# Contemporary Exhibition Editorial

You design visual reporting that feels closer to a contemporary exhibition wall than a software dashboard. The system is for AI trend reports, research notes, product theses, and evidence-heavy briefings where the reader should feel a point of view before reading every detail.

The governing idea is:

> **The record is the resource.**

Make the evidence visible as a structure: an archive, a boundary, a trajectory, a ledger, a delivery surface, or a set of competing signals. Do not decorate a summary after the fact. Build one visual argument and let the typography, diagram, and evidence agree about what matters.

## Use This Style When

- A weekly or monthly AI report needs a memorable editorial identity.
- The content is about systems, agents, infrastructure, research, or changing work patterns.
- The output will be a 16:9 HTML panel, Feishu document image, slide, or report opener.
- The audience wants judgment and evidence, not another dashboard of undifferentiated cards.
- A contemporary-art sensibility is desired without imitating a named artist or reproducing a specific artwork.

Do not use this style for dense operational dashboards, form-heavy product UI, or interfaces where a calm neutral hierarchy is more important than a strong editorial proposition.

## The Visual Thesis

Frame the report as an exhibition of decisions:

1. **Name the tension.** Start with one sentence that changes how the reader sees the topic.
2. **Show the mechanism.** Use a concrete visual grammar: archive to trajectory, prompt to authority, model to runtime boundary, token to industrial ledger, or chat to delivery surface.
3. **Attach evidence.** Put the few numbers and source signals that support the thesis directly on the frame.
4. **Leave a trace.** Include the next action, unresolved question, or operational consequence.

The frame should still make sense when viewed at thumbnail size. The title gives the claim; the diagram gives the mechanism; the evidence rail gives the reason to believe it.

## Composition Recipe

Use a fixed 16:9 frame for desktop output. Treat the canvas as a 12-column modular grid with a 48px desktop safe area, 24px internal gutters, and a 20px baseline rhythm. At 1440 × 810, preserve the following zones:

```text
┌────────────────────────────────────────────────────┐
│ index / proposition / short editorial deck          │ 18%
├──────────────────────┬─────────────────────────────┤
│ archive / context     │ mechanism / visual argument │ 52%
├──────────────────────┴─────────────────────────────┤
│ evidence rail / source signals / consequence        │ 20%
└────────────────────────────────────────────────────┘
```

### Primary layout rules

- Use one large typographic anchor and one dominant diagram. Do not let five mini-charts compete for first attention.
- Prefer a slightly asymmetric split: a narrow context/archive field and a wider mechanism field.
- Keep the title, mechanism, and evidence rail on shared alignment lines. Intentional overlap is allowed only when it is the visual argument, not an accidental collision.
- Use hard-edged blocks, thin rules, circles, bars, arrows, and cropped fields. Use rounded corners sparingly and avoid nested cards.
- Let one element break the grid: a cropped circle, an oversized numeral, a path that exits the frame, or a vertical label. The break should explain the content.
- Put sources in an expandable index or a compact footer, never as a wall of URLs inside the main composition.

## Palette Tokens

Use a paper field plus a small set of high-pressure accents. The accents are semantic, not ornamental.

| Token | Hex | Role |
|---|---|---|
| `ink` | `#171814` | body text, rules, primary structure |
| `black` | `#0E0F0D` | archive fields, authority, deep contrast |
| `paper` | `#E8E5DC` | main canvas, quiet reading field |
| `white` | `#F6F4ED` | evidence surfaces and text on dark fields |
| `acid` | `#D9FF3F` | live signal, agency, “next” or unresolved potential |
| `red` | `#FF5B3F` | friction, failure, risk, high-salience evidence |
| `blue` | `#3159FF` | judgment, verification, system boundary, trusted signal |
| `orange` | `#FFB338` | scale, energy, infrastructure, throughput |
| `line` | `#B9B6AC` | low-emphasis divisions and chart guides |

Rules:

- Keep the background mostly paper or black; do not turn the frame into a gradient or a neon collage.
- Use at most three accent colors in one visual argument. A fourth accent can appear in a small evidence rail if it has a clear semantic role.
- Never encode critical meaning with color alone. Pair each color with a label, number, shape, or position.
- Check the composition in grayscale. The title, mechanism, and evidence should remain distinguishable without hue.

## Typography

- Use a strong grotesk or system sans with a heavy display weight. If the environment is unknown, use an available system sans rather than importing a decorative font.
- Set display headlines in uppercase English when the concept benefits from compression; use Chinese as the explanatory layer, not as a tiny translation afterthought.
- Use large type with tight line-height, but keep the longest word inside its container. A controlled two-line break is better than a squeezed single line.
- Use small uppercase labels for index, source, and semantic status. Keep them short: `ARCHIVE`, `TRACE`, `VERIFY`, `SCALE`.
- Use numerals as evidence, not decoration. Give them a unit, a denominator, or a comparison whenever the source provides one.
- Never use negative letter spacing. Use weight, scale, and spacing to create pressure.

## Data and Diagram Grammar

Choose a diagram that expresses the kind of evidence in the story.

### Archive → trajectory

Use a dark stack of static strips on the left and a connected work path on the right. The path should show the actual sequence of work, for example:

```text
ASK → PLAN → TOOL → FAIL → REVISE → VERIFY → DELIVER
```

Use this for agent training data, workflow telemetry, research process, or any story where “what exists” is less valuable than “how it gets done.”

### Boundary map

Use a clean paper field with a hard outer boundary and labeled zones for identity, permission, network, write scope, logs, approval, rollback, and human checkpoints. Use blue for the rule boundary and red for the escape or failure condition.

### Evidence rail

Use four to six compact source signals along the bottom edge. Each signal has a source label, one number or phrase, and one sentence of consequence. Keep the cards flat and adjacent; do not nest them in a container card.

### Ledger

Use large numbers, horizontal bars, and one short cost statement to show the full system bill: tokens, throughput, power, hardware, debt, or governance. The visual should make the denominator visible instead of celebrating a single headline metric.

### Three-layer reading order

1. **Claim:** what changed or what should be re-evaluated.
2. **Mechanism:** how the system behaves differently.
3. **Evidence:** which source, number, or observed trace makes the claim credible.

Prefer direct labels on marks over detached legends. If a chart needs a legend to be understood, simplify the chart or label the marks directly.

## Contemporary-Art Direction

The art reference is a method, not a costume:

- Treat the frame as an installation with a deliberate viewing distance: one strong field, one interruption, one set of traces.
- Use scale and cropping to create attention, not ornamental gradients or decorative blobs.
- Let the material metaphor carry the thesis: paper archive, warning label, test strip, route map, ledger, or evidence wall.
- Keep an active edge. A line can leave the canvas, a circle can be cropped, or a label can sit at the margin if it clarifies the system.
- Allow a little visual friction. The reader should notice the proposition, but never have to decode basic navigation.
- Build for repeated issues. A weekly report should feel like another room in the same exhibition, not a new brand every week.

Do not copy a named artist, a specific artwork, or a gallery's identity. Translate principles such as scale, field, contrast, material, and viewing condition into a new evidence-led system.

## Responsive and Feishu Output

- Render the master frame at 1440 × 810 or another exact 16:9 size.
- For a Feishu document image, preserve the 16:9 ratio and use a display width around 980px; keep the source image sharp enough for labels and numerals.
- On narrow screens, stack context above mechanism, preserve the path direction, and reduce the evidence rail to a two-column or single-column flow.
- Do not let fixed labels, vertical stamps, or source rails cause horizontal scrolling. Test at 390px and 768px widths.
- Provide an alt text or a short text summary for every visual argument. The image is not the only place the claim should exist.

## Quality Gate

Before shipping, check:

- The title states a judgment, not merely a topic.
- The diagram can be read in the intended direction without guessing.
- Every number has a label, unit, or comparison.
- Source signals are traceable and do not overwhelm the composition.
- The main text fits its parent at desktop and mobile widths.
- No labels, numerals, paths, or evidence cards overlap accidentally.
- The palette works in grayscale and does not rely on red/green alone.
- There are no gradients, decorative orbs, accidental shadows, or dashboard-like card nesting.
- The output is exactly 16:9 for the master asset and has no browser page errors.
- The same system can produce the next issue without changing its visual identity.

## Worked Example: Real Work Traces

For the AI weekly report theme “the next training-data dividend comes from real work traces,” the visual argument is:

- **Claim:** more web text is not more work.
- **Mechanism:** static archive → task trajectory.
- **Trace:** `ASK → PLAN → TOOL → FAIL → REVISE → VERIFY → DELIVER`.
- **Evidence:** Founder Park's Type 1.5 data, Anthropic's connector, Unslop's AI-writing measurement, Google's token scale, and BigMac's nested pipeline speedups.
- **Consequence:** one answer is a sample; a verifiable, improvable trajectory is training material.

The result is a paper-and-black 16:9 frame with a red archive field, an acid/blue/red trace path, and a five-signal evidence rail. This is the reference composition for future AI News Digest visuals.
