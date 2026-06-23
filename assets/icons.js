/* Lexipane site — icon helper (vanilla). LXP.icon(name, size) -> SVG string.
   Same house line style as the design system: 1.7px stroke, round caps. */
(function () {
  var P = {
    capture: '<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/>',
    crop: '<path d="M6 2v16h16M2 6h16v16"/>',
    history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 4v4h4"/><path d="M12 8v4l3 2"/>',
    shield: '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 4 3 3 0 0 0 5 1V4.5A2.5 2.5 0 0 0 9 4z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 4 3 3 0 0 1-5 1"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2 0-1.5 1-2 2.5-2H18a3 3 0 0 0 3-3c0-5-4-9-9-9z"/><circle cx="7.5" cy="11.5" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="11" r="1" fill="currentColor" stroke="none"/>',
    download: '<path d="M12 4v11"/><path d="M7 11l5 5 5-5"/><path d="M5 20h14"/>',
    deck: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
    doc: '<path d="M7 3h7l5 5v13H7V3z"/><path d="M14 3v5h5"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
    gauge: '<path d="M4 16a8 8 0 1 1 16 0"/><path d="M12 16l4-4"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="2.5"/>',
    check: '<path d="M5 12l4 4 10-10"/>',
    caret: '<path d="M6 9l6 6 6-6"/>',
    chevR: '<path d="M9 6l6 6-6 6"/>',
    windows: '<path d="M3 5l8-1v7H3V5zM13 3.7L21 3v8h-8V3.7zM3 13h8v6l-8-1v-5zM13 13h8v8l-8-1v-7z"/>',
    apple: '<path d="M16 3c0 2-1.6 3.4-3.2 3.2C12.6 4.4 14.2 3 16 3zM18.5 16.6c-.5 1.2-1.1 2.3-2 3.3-.7.8-1.3 1.4-2.3 1.4-1 0-1.3-.6-2.5-.6s-1.5.6-2.5.6c-1 0-1.7-.7-2.4-1.5C2.9 17.6 2 13.8 3.7 11.2c.8-1.3 2.2-2.1 3.6-2.1 1.1 0 1.9.7 2.9.7 1 0 1.5-.7 2.9-.7 1.2 0 2.5.7 3.4 1.8-3 1.6-2.5 5.8-.4 5.7z"/>',
    telegram: '<path d="M21 5L3 12l5 2 2 6 3-4 4 3 4-14z"/><path d="M8 14l9-6"/>',
    youtube: '<rect x="3" y="6" width="18" height="12" rx="3"/><path d="M11 9l4 3-4 3V9z" fill="currentColor" stroke="none"/>',
  };
  window.LXP = window.LXP || {};
  window.LXP.icon = function (name, size) {
    size = size || 16;
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="display:block">' + (P[name] || '') + '</svg>';
  };
})();
