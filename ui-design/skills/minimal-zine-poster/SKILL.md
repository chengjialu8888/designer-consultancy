---
name: minimal-zine-poster
description: Create quiet vertical editorial posters with large paper fields, one imageable subject, restrained typography, and a single high-chroma print anchor.
---

# Minimal Zine Poster

You design sparse editorial posters that feel found, printed, and quietly specific. The output is closer to a page from an independent zine or a small gallery handout than to a campaign poster, product ad, or polished UI mockup.

The governing tension is:

> **Make one small thing carry the whole mood.**

The style is intentionally narrow: a tall paper field, a small visual subject, a short line of type, and one color that survives the scan. The empty space is not unused space; it is the pacing system.

This style is adapted from [gc-minimal-zine-poster](https://github.com/LiamGvchi/gc-minimal-zine-poster). Preserve the method, not its sample subjects, captions, or exact images.

## Use This Style When

- A report, article, idea, or object needs a quiet cover or section poster.
- The content benefits from metaphor and atmosphere more than a full data dashboard.
- A single insight should be remembered as an image.
- The output is a raster poster, editorial opener, social image, Feishu insert, or printed zine page.
- You want Japanese/Korean indie-zine restraint, archival warmth, or a handmade print feeling without illustration overload.

Do not use this style for dense operational interfaces, product comparison tables, multi-metric dashboards, commercial landing pages, or any brief that needs several equal-weight actions above the fold.

## Format and Attention Geometry

- Master canvas: vertical `3:5`.
- Surface: full-frame aged or warm paper, with no device mockup, poster frame, or decorative border.
- Negative space: roughly 70–90% of the canvas should read as paper or quiet surface.
- Visual cluster: one subject or small relation occupying roughly 8–25% of the canvas.
- Keep the anchor away from the edge by default. Use center, upper-middle, lower-middle, lower-left, or upper-right placements.
- Leave enough paper around the subject for the image to feel deliberately quiet, not accidentally empty.
- If the source is a complex article, reduce it to one imageable relation. Do not turn the entire argument into a miniature infographic.

## Image Anchor

Choose one anchor and make it legible at thumbnail scale:

- faded photograph or photo crop;
- torn-paper clipping;
- flat silhouette;
- solid color block;
- old printed illustration;
- object specimen;
- translucent geometric overlay;
- small texture window.

The anchor is not a decorative sticker. It is the physical metaphor for the idea. For an AI report about work traces, the anchor might be one stamped route, one open notebook, one tiny cursor trail, or one colored fragment of a process diagram.

### Material treatment

Let the anchor belong to the paper through one or two print processes:

- grayscale photocopy softness;
- torn or softened edge;
- halftone degradation;
- risograph grain;
- xerox wear;
- letterpress bleed;
- scanline, paper fiber, or slight misregistration.

Keep the high-chroma anchor opaque and visible. Do not apply low saturation to the one element that is supposed to carry the color.

## Typography

- Use a serif, typewriter, or monospaced face with a small footprint.
- Keep the image text short: one phrase, a small title, or a tiny caption. Image models and small posters do not reward long clean paragraphs.
- Optional metadata can include a date, weather, location, edition, or signature, but it must remain subordinate.
- Let type drift, press against the image edge, fragment, blur, or misregister when that supports the print metaphor.
- Avoid commercial headline hierarchy, logo locks, CTA language, or a long perfectly typeset block.
- When Chinese text is required, use one concise line and verify that it remains legible after rasterization.

## Color Logic

Use paper plus gray/black support and one clearly visible high-chroma anchor.

Suggested anchors:

- cobalt or ultramarine;
- cyan;
- violet;
- magenta-pink;
- lemon yellow;
- pear green;
- orange;
- tomato red.

Rules:

- Use one main high-chroma hue per poster. A tiny secondary hue is allowed only when it supports the subject.
- The saturated area should occupy about 0.8–2.5% of the canvas or 15–35% of the visual cluster.
- Prefer a colored subject, cutout, block, or partial-color photo region over a gray poster with one meaningless registration dot.
- Rotate the hue and its material form across a series; variety should change the visual grammar, not only the position of a dot.
- Do not describe the whole image as low saturation. Keep the paper and secondary marks subdued, not the anchor.

## Variation Recipe

Choose one option from each axis before rendering. The recipe should change the composition, not only the color.

### Layout

- `center-fragment` — tiny central image with maximum air;
- `lower-left-float` — small anchor in the lower-left with open upper field;
- `upper-right-block` — small image/color block with loose type drift;
- `dual-panel` — two small panels with a narrow gap;
- `irregular-cutout` — torn or organic paper shape carries the anchor;
- `type-led` — typography is the main object;
- `single-specimen` — one isolated subject and almost no support graphics.

### Type behavior

- fragmented floating letters;
- short phrase pressed against an image edge;
- archive microtext with date/weather;
- diagonal scattered words;
- low-contrast ghost text;
- rough letterpress headline;
- type inside a color block;
- almost textless with only a tiny caption.

### Texture

- xerox softness;
- risograph grain;
- letterpress ink bleed;
- halftone degradation;
- film grain photo;
- scan noise and paper fibers;
- aged paper mottling;
- soft motion blur on selected type.

### Mood

Quiet, summer, solitude, childhood, seaside, afternoon, night, memory, or slight surrealism. Use the mood to control temperature and distance, not to justify extra objects.

## AI Report Adaptation

For a trend report, use the poster as an argument bookmark:

1. Write one sentence that names the shift.
2. Convert the shift into one object or material relation.
3. Use one number only when it materially sharpens the claim.
4. Place source details in the document text or caption, not as a dense citation wall inside the poster.
5. Add a short interpretation note so the viewer knows what the object is standing for.

Example:

- Claim: “真实工作轨迹正在取代更多网页文本，成为下一轮训练数据红利。”
- Anchor: a small cobalt route mark crossing an aged paper fragment.
- Type: `THE RECORD IS THE RESOURCE`.
- Texture: xerox softness plus one sharp cobalt risograph block.
- Avoid: a full agent diagram, six metric cards, glowing AI imagery, or a commercial “future of work” headline.

## Anti-Identity

Always avoid:

- full-bleed scenes or a whole illustrated world;
- product-ad layout, logo lockup, CTA, or campaign polish;
- glossy mockups, clean digital UI backgrounds, 3D depth, cinematic lighting, or hard shadows;
- neon, cyberpunk, cute cartoon, kawaii, anime poster, or fashion-editorial drama;
- dense scrapbook composition, stickers, too many objects, or many competing colors;
- stock-photo realism with no material transformation;
- long clean text blocks;
- an anchor so tiny or pale that the visual idea disappears at thumbnail size.

## Output and Accessibility

- Return the rendered raster image, the final generation prompt or construction note, the selected variation recipe, and one sentence of interpretation.
- Supply alt text or a text summary. The poster must not be the only place the claim exists.
- If the poster is inserted into Feishu, keep the original 3:5 ratio and add the explanatory paragraph outside the image.
- Test the output at thumbnail size, full size, and the target document width. Check Chinese text, small captions, and the saturated anchor separately.

## Quality Gate

Before shipping, confirm:

- 70–90% of the poster reads as paper or quiet surface;
- the cluster is one subject or one relation, not a scene;
- the visual metaphor can be named in one sentence;
- one high-chroma anchor remains visible at thumbnail size;
- type is short, intentional, and not pretending to be a full article;
- print/scan material is present but not used as noise wallpaper;
- no commercial, glossy, 3D, neon, or template-default cues slipped in;
- the variation recipe is materially different from the previous poster in the series;
- the image and its alt text communicate the same claim.
