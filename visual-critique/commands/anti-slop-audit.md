---
description: Audit a design artifact for generic AI defaults, fabricated proof, structural sameness, token drift, and responsive or accessibility failures.
argument-hint: "[path, screenshot, URL, or brief — e.g., 'weekly report HTML' or a screenshot]"
---
# /anti-slop-audit

Run the `anti-ai-slop` skill against the supplied artifact. This is a read-only audit unless the user explicitly asks for redesign or fixes.

## Steps

1. **Pre-flight** — read the target's existing tokens, fonts, framework, data sources, design documentation, and prior output stamps. State what will be preserved.
2. **Self-critique** — score Philosophy, Hierarchy, Execution, Specificity, Restraint, and Variety from 1–5. Any score below 3 requires a revision recommendation.
3. **Slop gates** — check structure, content truth, tokens, typography, imagery, interaction, responsive behavior, and delivery safety using `anti-ai-slop`.
4. **Rank** — group failures by root cause and rank P1 ship blockers, P2 current-sprint issues, and P3 polish.
5. **Handoff** — return intentional strengths to retain and an exact verification plan. Do not edit files as part of the audit.

## Output

Return:

- pre-flight findings;
- six self-critique scores and verdict;
- ranked punch list with gate number, observation, impact, and concrete fix;
- strengths to preserve;
- viewport, state, source, and screenshot checks for the next pass.
