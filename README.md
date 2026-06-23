# Lexipane — public site

A small, fast, static marketing site for **Lexipane** (desktop overlay for learning English
from games and fullscreen apps). Dark theme, bilingual (RU/EN, extensible), four pages, and a
GitHub Actions workflow that builds to `dist/` and publishes to GitHub Pages.

No framework, no build step on your machine — just static files. Open `index.html` in a
browser to preview.

---

## Pages

| File | Page | What's on it |
|---|---|---|
| `index.html` | Home / Главная | Hero + download buttons + a replaceable demo media slot |
| `about.html` | About / Подробнее | Feature blocks + a "Demonstration" grid of GIF slots |
| `pricing.html` | Pricing / Тарифы | Free vs Pro, two columns |
| `guides.html` | Guides / Инструкции | Cards linking to your how-to pages |
| `terms.html` | Terms | Standalone legal page (linked in the footer) |

The top tabs switch between these pages. The globe button (top-right) switches language.

---

## How to fill it in (the important part)

Everything you normally touch is in **`assets/`**:

### 1. Links — `assets/config.js`
One object with every button target. Point them at your GitHub Releases, Telegram, etc.:

```js
window.LXP_CONFIG = {
  downloadWindows: "https://github.com/<you>/<repo>/releases/latest/download/Lexipane-Setup.exe",
  downloadMac:     "https://github.com/<you>/<repo>/releases/latest/download/Lexipane.dmg",
  telegram:        "https://t.me/your_channel",
  youtube:         "https://youtube.com/@your_channel",
  proSubscribe:    "https://t.me/your_channel",
  systemRequirements: "Windows 10/11 · macOS 13+",
  defaultLang:     "ru",   // "ru" or "en"
};
```

> A handy pattern: `…/releases/latest/download/<asset-name>` always points at the newest
> release's asset, so you never edit the link again after a new build.

### 2. Text — `assets/i18n.js`
All visible copy for every language, in one file. Edit the strings under `ru` and `en`.
Feature lists, pricing bullets, guide cards are arrays — add/remove items freely.

**Add a language later** (ko / ja / zh / vi / id): copy a whole `ru` or `en` block, rename
the key, translate, and add `{ code: "xx", label: "XX", name: "…" }` to `window.LXP_LANGS`.

### 3. Demo GIFs — `assets/demo/`
Drop your screen recordings in here. See `assets/demo/README.md` for the exact filenames.
Missing files fall back to a styled placeholder automatically.

### 4. Guide pages
The Guides cards link to `#` by default. Create your own `how-to-install.html` etc. (copy
`terms.html` as a starting shell) and set the `href:` values in `assets/i18n.js`.

You normally **don't** edit `assets/lexipane.css` (design tokens/components),
`assets/site.css` (layout), `assets/icons.js`, or `assets/app.js` (rendering).

---

## Deploy to GitHub Pages

1. Put these files at the **root** of your repo (e.g. `lexipane_site`).
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` copies the site into
   `dist/` and publishes it. The live URL appears in the Actions run / Pages settings.

Local preview: just open `index.html`, or run `python3 -m http.server` in this folder and
visit `http://localhost:8000`.

---

## Honesty note
The site clearly tags features as **Released / Beta / Planned**. Live Subtitles, Pro AI,
Game Freeze and paid subscriptions are presented as in-progress — please keep that until
they actually ship, and don't claim payment/license activation works before it does.

Built on the **Lexipane design system** (Manrope + JetBrains Mono, Energon Purple theme).
