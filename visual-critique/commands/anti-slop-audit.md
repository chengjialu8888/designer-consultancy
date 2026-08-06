---
description: Audit a design artifact for generic AI defaults, fabricated proof, structural sameness, detector findings, token drift, and responsive or accessibility failures.
argument-hint: "[path, screenshot, URL, or brief — e.g., 'weekly report HTML' or a screenshot]"
---
# /anti-slop-audit

Run the `anti-ai-slop` skill against the supplied artifact. For frontend source or a rendered URL, also run `impeccable-slop-audit` so deterministic evidence and browser checks complement the judgment-led review. This is a read-only audit unless the user explicitly asks for redesign or fixes.

## Steps

1. **Pre-flight** — read the target's existing tokens, fonts, framework, data sources, design documentation, and prior output stamps. State what will be preserved.
2. **Self-critique** — score Philosophy, Hierarchy, Execution, Specificity, Restraint, and Variety from 1–5. Any score below 3 requires a revision recommendation.
3. **Deterministic scan** — for frontend targets, run Impeccable against source and rendered desktop/mobile pages. Record CLI version, commands, exit status, configuration, ignores, and unavailable checks. Exit code `2` means findings, not failure.
4. **Slop gates** — check structure, content truth, tokens, typography, imagery, interaction, responsive behavior, and delivery safety using `anti-ai-slop`. Keep `CLI`, `Browser`, `Judgment`, and `Advisory` evidence distinct.
5. **Rank** — verify false positives, group failures by root cause, and rank P1 ship blockers, P2 current-sprint issues, and P3 polish.
6. **Handoff** — return intentional strengths to retain and an exact verification plan. Do not edit files as part of the audit.

## Output

Return:

- pre-flight findings;
- six self-critique scores and verdict;
- detector run notes for frontend targets, including failures or skipped checks;
- ranked punch list with evidence channel, gate or rule, observation, impact, and concrete fix;
- false positives and intentional exceptions;
- strengths to preserve;
- viewport, state, source, and screenshot checks for the next pass.
