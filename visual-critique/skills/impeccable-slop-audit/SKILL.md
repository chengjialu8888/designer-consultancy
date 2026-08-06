---
name: impeccable-slop-audit
description: Audit frontend UI with Impeccable's anti-slop taxonomy and deterministic detector, then verify browser evidence, contextual exceptions, design-system drift, and production defects. Use when the user links impeccable.style/slop, asks for an Impeccable or slop scan, wants generated UI to feel less generic, or needs a pre-ship frontend quality gate.
---

# Impeccable Slop Audit

Use Impeccable as a deterministic evidence layer inside a design critique. A detector finding is a lead, not a verdict: verify it against the product, surface mode, design system, and rendered page before recommending a change.

This integration does not vendor Impeccable. It calls the official CLI and adds Designer Consultancy's evidence review, content-truth checks, prioritization, and repair loop. Read [references/slop-catalog.md](references/slop-catalog.md) when classifying findings or when the CLI is unavailable.

## Boundaries

- Audit first. Do not edit unless the user asks for fixes, polish, or redesign.
- Do not infer that a person or tool made the interface from a visual pattern.
- Preserve intentional brand rules. A documented exception is not slop.
- Never invent copy, metrics, testimonials, logos, or product behavior to make a fix look complete.
- Separate deterministic findings from browser observations and design judgment.

## Workflow

### 1. Resolve the target

Identify a source file, directory, or rendered URL. Read `PRODUCT.md`, `DESIGN.md`, tokens, theme files, and representative components when present. Record:

- surface mode: persuade, operate, read, or experience;
- approved fonts, colors, radii, spacing, and components;
- target desktop and mobile viewports;
- content, image, icon, and data sources.

If the target is not frontend UI, use `anti-ai-slop` instead.

### 2. Run the official detector

Check that Node is at least 22.12, then run:

```bash
node --version
npx --yes impeccable --version
npx --yes impeccable detect --json <file-or-directory>
```

For a rendered page, scan both desktop and mobile:

```bash
npx --yes impeccable detect --json --viewport 1280x800 <url>
npx --yes impeccable detect --json --viewport 390x844 <url>
```

Exit code `2` means findings were detected; it is not a tool failure. Keep the JSON output. If installation, network, browser launch, or parsing fails, report the exact failure and continue with the manual catalog. Never claim a deterministic pass when the command did not run.

Use `--no-config` only for diagnosis. Normal audits should honor `.impeccable/config.json`, inline ignores, and `DESIGN.md`. Treat advisory findings as non-blocking unless visual inspection shows real harm.

### 3. Inspect the rendered interface

Open the real page and inspect at least one desktop and one mobile viewport. Verify:

- text wrapping, overflow, clipping, card gutters, and reading order;
- hierarchy, contrast, focus, hover, disabled, loading, empty, and error states;
- whether imagery is real, generated, or purpose-built rather than shape-assembled filler;
- whether motion communicates state or merely demands attention;
- whether the flagged pattern is brief-specific, system-owned, or an interchangeable default.

Capture screenshots when browser tools are available. A source-only scan cannot clear browser-only quality checks.

### 4. Add design judgment

Run the `anti-ai-slop` skill for concerns the detector cannot establish alone: fabricated proof, generic macrostructure, weak product specificity, repeated structural fingerprints, and unearned visual authority.

For every finding, label the evidence channel:

- `CLI`: deterministic source or rendered-page detector finding;
- `Browser`: observed layout, state, or interaction defect;
- `Judgment`: contextual design critique;
- `Advisory`: useful signal that must not block shipping by itself.

Confirm false positives explicitly. Do not turn personal taste into a production defect.

### 5. Rank and report

Group related findings under root causes. Prefer three consequential fixes over a long catalog dump.

- **P1 — ship blocker:** broken interaction, unreadable content, accessibility failure, severe overflow, missing critical asset, or fabricated evidence.
- **P2 — fix before release:** repeated generic pattern, design-system drift, weak hierarchy, misleading motion, or mobile breakage.
- **P3 — polish:** isolated default styling, redundant copy, minor rhythm issue, or non-blocking advisory.

Return:

1. **Target and constraints** — files, URLs, viewports, surface mode, system rules.
2. **Run notes** — CLI command, version, exit status, config/ignores, browser coverage, failures.
3. **Verdict** — `pass`, `revise`, or `ship blocker`.
4. **Findings** — severity, evidence channel, rule or observation, location, impact, concrete fix.
5. **False positives and intentional exceptions** — what should remain and why.
6. **Verification plan** — exact reruns, viewports, states, and acceptance criteria.

## Fix Mode

When the user asks for changes:

1. Preserve product truth, routes, component ownership, and documented design tokens.
2. Fix root causes before individual symptoms.
3. Use real or generated image assets when imagery matters; do not replace them with generic geometric illustration.
4. Re-run the same CLI commands and browser viewports after editing.
5. Report remaining advisories separately from failures.

## Source

The taxonomy and detector are from [Impeccable](https://impeccable.style/slop/), created by Paul Bakaus and released under Apache-2.0 at [pbakaus/impeccable](https://github.com/pbakaus/impeccable). This integration was written against the upstream state observed on 2026-08-06; the official CLI and documentation remain the source of truth.
