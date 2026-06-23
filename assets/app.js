/* ============================================================
   Lexipane site — runtime
   Renders header (tabs + language switcher), the page body, and
   the footer from i18n.js + config.js. Language persists in
   localStorage and re-renders the whole page on change.
   Each page sets <body data-page="home|about|pricing|guides">.
   ============================================================ */
(function () {
  var CFG = window.LXP_CONFIG, I18N = window.LXP_I18N, LANGS = window.LXP_LANGS;
  var icon = window.LXP.icon;
  var LS = "lxp.lang";

  function lang() {
    var v = localStorage.getItem(LS);
    if (v && I18N[v]) return v;
    return (CFG.defaultLang && I18N[CFG.defaultLang]) ? CFG.defaultLang : "en";
  }
  function setLang(v) { localStorage.setItem(LS, v); render(); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  var PAGES = ["home", "about", "pricing", "guides"];
  var HREF = { home: "index.html", about: "about.html", pricing: "pricing.html", guides: "guides.html" };
  var TABICON = { home: "layers", about: "sparkle", pricing: "deck", guides: "doc" };

  function statusBadge(t, kind) {
    var cls = kind === "released" ? "badge-rel" : kind === "planned" ? "badge-plan" : "badge-beta";
    return '<span class="gl-badge ' + cls + '">' + esc(t.status[kind]) + '</span>';
  }

  /* ---------------- header ---------------- */
  function header(page, t) {
    var tabs = PAGES.map(function (p) {
      return '<a class="tab' + (p === page ? " is-active" : "") + '" href="' + HREF[p] + '">' +
        icon(TABICON[p], 16) + '<span>' + esc(t.nav[p]) + '</span></a>';
    }).join("");
    var opts = LANGS.map(function (l) {
      return '<div class="lang-opt' + (l.code === lang() ? " is-sel" : "") + '" data-lang="' + l.code + '">' +
        esc(l.name) + '<span class="l">' + esc(l.label) + '</span></div>';
    }).join("");
    var cur = LANGS.filter(function (l) { return l.code === lang(); })[0] || LANGS[0];
    return '' +
    '<header class="site-head"><div class="wrap">' +
      '<a class="brand" href="index.html"><img src="assets/logo/lexipane-icon.svg" width="30" height="30" alt="Lexipane"/><b>Lexipane</b></a>' +
      '<nav class="tabs">' + tabs + '</nav>' +
      '<span class="spacer"></span>' +
      '<div class="lang">' +
        '<button class="lang-btn" id="langBtn">' + icon("globe", 15) + esc(cur.label) + icon("caret", 13) + '</button>' +
        '<div class="lang-menu" id="langMenu">' + opts + '</div>' +
      '</div>' +
    '</div></header>';
  }

  /* ---------------- media slot (replaceable GIF) ---------------- */
  function mediaSlot(file, captionText, extraClass) {
    var ph = '<div class="ph"><div class="ph-ic">' + icon("capture", 26) + '</div><small>' + esc(captionText) + '</small></div>';
    // <img> tries to load the gif; if absent it removes itself and the placeholder shows.
    return '<div class="media ' + (extraClass || "") + '">' +
      '<img src="' + file + '" alt="" onerror="this.remove()"/>' + ph + '</div>';
  }

  /* ---------------- buttons ---------------- */
  function btn(href, cls, ic, label) {
    return '<a class="gl-btn ' + cls + '" href="' + href + '"' + (href.indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : '') + '>' +
      (ic ? icon(ic, cls.indexOf("gl-btn--lg") > -1 ? 18 : 16) : "") + esc(label) + '</a>';
  }

  /* ---------------- pages ---------------- */
  function home(t) {
    var h = t.hero;
    return '<section class="hero"><div class="wrap"><div class="hero-grid">' +
      '<div>' +
        '<span class="gl-badge gl-badge--soft" style="height:26px">' + icon("layers", 13) + esc(h.eyebrow) + '</span>' +
        '<h1>' + esc(h.titleA) + '<span class="ac">' + esc(h.titleAccent) + '</span>' + esc(h.titleB) + '</h1>' +
        '<p class="lead">' + esc(h.sub) + '</p>' +
        '<div class="cta-row">' +
          btn("install.html#card-windows", "gl-btn--primary gl-btn--lg", "windows", h.windows) +
          btn("install.html#card-macos", "gl-btn--lg", "apple", h.mac) +
          btn(CFG.telegram, "gl-btn--lg gl-btn--ghost", "telegram", h.telegram) +
        '</div>' +
        '<div class="req">' + icon("gauge", 14) + '<span>' + esc(CFG.systemRequirements) + '</span></div>' +
      '</div>' +
      mediaSlot("assets/demo/hero.gif", h.mediaCaption) +
    '</div></div></section>';
  }

  function about(t) {
    var cards = t.about.features.map(function (f) {
      return '<div class="fcard"><div class="top"><span class="fic">' + icon(f.icon, 20) + '</span>' +
        statusBadge(t, f.status) + '</div>' +
        '<h3>' + esc(f.t) + '</h3><p>' + esc(f.d) + '</p></div>';
    }).join("");
    var tiles = t.demo.items.map(function (d) {
      var ph = '<div class="ph"><div class="ph-ic">' + icon(d.icon, 24) + '</div><small>GIF</small></div>';
      return '<div class="tile"><figure>' +
        '<div class="frame"><span class="stat">' + statusBadge(t, d.status) + '</span>' +
        '<img src="' + d.file + '" alt="" onerror="this.remove()"/>' + ph + '</div>' +
        '<figcaption>' + esc(d.t) + '</figcaption></figure></div>';
    }).join("");
    return '<main><section class="section"><div class="wrap">' +
        '<div class="section-head"><h2>' + esc(t.about.title) + '</h2><p>' + esc(t.about.sub) + '</p></div>' +
        '<div class="grid3">' + cards + '</div>' +
      '</div></section>' +
      '<section class="section" style="padding-top:40px"><div class="wrap">' +
        '<div class="section-head"><h2>' + esc(t.demo.title) + '</h2><p>' + esc(t.demo.sub) + '</p></div>' +
        '<div class="demo-grid">' + tiles + '</div>' +
      '</div></section></main>';
  }

  function plan(t, p, isPro) {
    var lis = p.features.map(function (f) { return '<li>' + icon("check", 16) + '<span>' + esc(f) + '</span></li>'; }).join("");
    var cta = isPro
      ? btn(CFG.proSubscribe, "gl-btn--primary gl-btn--lg", "telegram", p.cta)
      : btn(CFG.downloadWindows, "gl-btn--lg", "download", p.cta);
    return '<div class="plan' + (isPro ? " pro" : "") + '">' +
      '<div class="pname"><h3>' + esc(p.name) + '</h3>' + (p.badge ? '<span class="gl-badge">' + esc(p.badge) + '</span>' : "") + '</div>' +
      '<div class="pricerow"><span class="amt">' + esc(p.price) + '</span><span class="per">' + esc(p.per) + '</span></div>' +
      '<ul>' + lis + '</ul>' +
      '<div style="display:block">' + cta.replace('class="gl-btn', 'style="width:100%" class="gl-btn') + '</div>' +
    '</div>';
  }

  function pricing(t) {
    return '<main><section class="section"><div class="wrap">' +
      '<div class="section-head"><h2>' + esc(t.pricing.title) + '</h2><p>' + esc(t.pricing.sub) + '</p></div>' +
      '<div class="price-grid">' + plan(t, t.pricing.free, false) + plan(t, t.pricing.pro, true) + '</div>' +
    '</div></section></main>';
  }

  function guides(t) {
    var cards = t.guides.items.map(function (g) {
      return '<a class="guide" href="' + g.href + '"><span class="gic">' + icon(g.icon, 19) + '</span>' +
        '<span><span class="gt">' + esc(g.t) + icon("chevR", 14) + '</span><span class="gd">' + esc(g.d) + '</span></span></a>';
    }).join("");
    return '<main><section class="section"><div class="wrap">' +
      '<div class="section-head"><h2>' + esc(t.guides.title) + '</h2><p>' + esc(t.guides.sub) + '</p></div>' +
      '<div class="guide-grid">' + cards + '</div>' +
    '</div></section></main>';
  }

  /* ---------------- footer ---------------- */
  function footer(t) {
    var f = t.footer;
    function col(title, links) {
      return '<div class="foot-col"><h4>' + esc(title) + '</h4>' +
        links.map(function (l) {
          var ext = l[1].indexOf("http") === 0;
          return '<a href="' + l[1] + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + esc(l[0]) + '</a>';
        }).join("") + '</div>';
    }
    return '<footer class="site-foot">' +
      '<div class="wrap foot-grid">' +
        '<div><a class="brand" href="index.html"><img src="assets/logo/lexipane-icon.svg" width="28" height="28" alt=""/><b>Lexipane</b></a>' +
          '<p class="tag">' + esc(f.tagline) + '</p></div>' +
        col(f.product, [[t.nav.about, "about.html"], [t.nav.pricing, "pricing.html"], [t.nav.guides, "guides.html"]]) +
        col(f.legal, [[f.terms, "terms.html"], [f.privacy, "privacy.html"], [f.refund, "refund.html"], [f.eula, "eula.html"]]) +
        col(f.resources, [[f.faq, "faq.html"], [f.changelog, "changelog.html"]]) +
        col(f.connect, [[f.telegram, CFG.telegram], [f.youtube, CFG.youtube]]) +
      '</div>' +
      '<div class="foot-bar"><div class="wrap">' +
        '<a href="terms.html">' + esc(f.terms) + '</a>' +
        '<span>' + esc(f.rights) + '</span>' +
      '</div></div>' +
    '</footer>';
  }

  var RENDER = { home: home, about: about, pricing: pricing, guides: guides };

  function render() {
    var page = document.body.getAttribute("data-page") || "home";
    var t = I18N[lang()];
    document.documentElement.lang = lang();
    var root = document.getElementById("app");
    root.innerHTML = '<div class="glow"></div>' + header(page, t) + RENDER[page](t) + footer(t);

    // language menu
    var btnEl = document.getElementById("langBtn"), menu = document.getElementById("langMenu");
    btnEl.addEventListener("click", function (e) { e.stopPropagation(); menu.classList.toggle("open"); });
    document.addEventListener("click", function () { menu.classList.remove("open"); });
    Array.prototype.forEach.call(menu.querySelectorAll(".lang-opt"), function (o) {
      o.addEventListener("click", function () { setLang(o.getAttribute("data-lang")); });
    });
  }

  window.LXP.render = render;
  if (document.readyState !== "loading") render();
  else document.addEventListener("DOMContentLoaded", render);
})();
