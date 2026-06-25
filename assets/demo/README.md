# Demo media

Drop your screen-recording GIFs (or short MP4s) here. The site looks for these
filenames and shows them automatically; if a file is missing, a styled placeholder
is shown instead, so the site never looks broken while you record.

| Where it shows | Expected file |
|---|---|
| Home — hero (right side) | `hero.gif` |
| About — capture a word from a web page → Anki | `capture-web.gif` |
| About — capture text from inside a game | `capture-game.gif` |
| About — Game Freeze flow | `freeze.gif` |
| About — settings & options | `settings.gif` |

Tips
- 16:10 aspect looks best (the frames are 16:10). Anything reasonable works — it's cropped to fill.
- Keep GIFs small (ideally < 4–5 MB). For longer clips use an `.mp4` and change the
  filename in `assets/i18n.js` (the `file:` field) plus swap `<img>` for `<video>` in
  `assets/app.js` if you prefer video.
- To rename or point a tile at a different file, edit the `file:` values in `assets/i18n.js`.
