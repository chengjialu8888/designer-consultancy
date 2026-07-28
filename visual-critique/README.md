# Visual Critique

Visual critique skills for designers. Analyse a screen across seven core dimensions — hierarchy, brand consistency, composition, typography, colour, affordance, and information density — with a separate anti-AI-slop quality gate for generated or highly templated work.

## Skills

| Skill | What it does |
|---|---|
| `critique-visual-hierarchy` | Audits entry point, eye flow, weight distribution, and emphasis |
| `critique-brand-consistency` | Checks against `mood.md`, `voice.md`, and `tokens.md` |
| `critique-composition` | Evaluates balance, whitespace, rhythm, and gestalt principles |
| `critique-typography` | Reviews scale usage, readability, consistency, and token compliance |
| `critique-color` | Audits contrast ratios, palette coherence, semantic colour use, and colour accessibility |
| `critique-affordance` | Evaluates clickability signals, state visibility, CTA clarity, and action discoverability |
| `critique-information-density` | Assesses cognitive load, content priority, scanning patterns, and progressive disclosure |
| `anti-ai-slop` | Audits generic AI defaults, fabricated proof, structural sameness, token drift, and responsive or accessibility failures |

## Commands

| Command | What it does |
|---|---|
| `/critique-screen` | Runs all seven critiques in sequence and outputs a prioritised fix list |
| `/critique-ux` | Focused functional critique: hierarchy, affordance, and information density — for quick loops and PM-led reviews |
| `/anti-slop-audit` | Read-only anti-AI-slop audit with self-critique scores, 31 gates, and a ranked punch list |

## Usage

Run a full screen critique:
```
/critique-screen onboarding step 2
```

Run a focused UX critique (faster, no visual polish dimensions):
```
/critique-ux checkout step 3
```

Or invoke individual skills for targeted feedback:
```
Use the critique-affordance skill on this screen.
```
