/* ============================================================
   Lexipane site — CONFIG
   This is the ONLY file you normally edit to wire up the site.
   Put your real download / social links here. They are used by
   every "Download", "Telegram", "YouTube" and "Subscribe" button.
   ============================================================ */
window.LXP_CONFIG = {
  // ---- Download links (e.g. your GitHub Releases assets) ----
  // Tip: a "latest release" asset URL looks like:
  //   https://github.com/<you>/<repo>/releases/latest/download/Lexipane-Setup.exe
  // GitHub resolves /releases/latest/download/... to the newest release automatically.
  // Both filenames are fixed — no need to update on each new version.
  downloadWindows: "https://github.com/Markovskoy/lexipane_site/releases/latest/download/Lexipane-Setup.exe",
  downloadMac:     "https://github.com/Markovskoy/lexipane_site/releases/latest/download/Lexipane-macOS.dmg",

  // ---- Social / community ----
  telegram: "https://t.me/your_channel",
  youtube:  "https://youtube.com/@your_channel",

  // ---- Pro subscription button target (Telegram / Tribute / payment page) ----
  proSubscribe: "https://t.me/your_channel",

  // ---- System requirements line (shown in hero) ----
  systemRequirements: "Windows 10/11 · macOS 13+",

  // ---- Default language: "en" or "ru" ----
  defaultLang: "ru",
};
