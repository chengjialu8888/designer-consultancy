# Blog / WeChat Editorial

An editorial production kit for WeChat Official Account articles: choose a visual theme, protect the source text, create mobile-first layout, generate WeChat-ready HTML, inspect screenshots, and optionally prepare a draft.

Adapted from [DUYI WeChat Skill Suite](https://github.com/duyi2076/duyi-wechat-skill-suite). See [NOTICE.md](NOTICE.md) for the integration boundary.

## Skills

| Skill | Role |
| --- | --- |
| `duyi-wechat` | Orchestrates the article workflow |
| `duyi-wechat-css-layer` | Chooses one of 16 Chinese editorial themes |
| `duyi-wechat-paipan` | Formats mobile reading and renders WeChat HTML |
| `duyi-wechat-peitu` | Creates covers and article illustrations |
| `duyi-wechat-fabu` | Runs checks and, only when requested, creates a draft |

The default output is a preview plus WeChat-ready HTML. Publishing is an explicit second step; no credentials or local browser state are included in this repository.

## Codex

Install the skills into a project-scoped Codex directory:

```bash
mkdir -p .codex/skills
cp -R /path/to/designer-consultancy/blog/skills/. .codex/skills/
export WECHAT_SKILL_ROOT="$PWD/.codex/skills"
```

For a personal install, use `~/.codex/skills` and set `WECHAT_SKILL_ROOT="$HOME/.codex/skills"`. Start a new Codex session after installation.

## Render a preview

The renderer uses the 16 editorial themes documented in `duyi-wechat-css-layer/templates/styles.md`:

```bash
python3 "${WECHAT_SKILL_ROOT}/duyi-wechat-paipan/scripts/render_wechat_html.py" \
  article.md --style 白瓷 --standalone --output article-preview.html
```

The first local run may need the renderer dependency:

```bash
npm install --prefix "${WECHAT_SKILL_ROOT}/duyi-wechat-paipan/scripts/vendor"
python3 -m pip install -r /path/to/designer-consultancy/blog/requirements.txt
```

Use `duyi-wechat-paipan` for layout-only work. Use `duyi-wechat` for the complete editorial flow. Say `进草稿箱` explicitly before invoking `duyi-wechat-fabu`.
