/* ============================================================
   Lexipane site — CONTENT (EN / RU)
   Edit all visible text here. To add a language later (ko, ja, zh,
   vi, id), copy one whole block, change the key, translate the
   strings, and add it to window.LXP_LANGS below.
   Keep the SHAPE identical across languages.
   ============================================================ */
window.LXP_LANGS = [
  { code: "ru", label: "RU", name: "Русский" },
  { code: "en", label: "EN", name: "English" },
];

window.LXP_I18N = {
  en: {
    nav: { home: "Home", about: "About", pricing: "Pricing", guides: "Guides" },

    hero: {
      eyebrow: "Desktop overlay · Windows & macOS",
      titleA: "Translate, understand and save words from ",
      titleAccent: "anywhere on your screen",
      titleB: ".",
      sub: "Lexipane floats over any window — articles, books, games, PDFs, subtitles. Capture a word or phrase, get an instant translation with context and grammar, then save it to Anki with one key.",
      windows: "Download for Windows",
      mac: "Download for macOS",
      telegram: "Telegram",
      mediaCaption: "Replace this with your demo GIF",
    },

    about: {
      title: "What Lexipane does",
      sub: "Built around one loop: see a word, understand it, keep it.",
      features: [
        { icon: "capture", status: "released", t: "Capture text & save to Anki", d: "Select any region of the screen, OCR the text, and send words or phrases to your Anki decks with translation, definition and context." },
        { icon: "history", status: "beta", t: "Live Subtitles with history", d: "Transcribe English audio or video in real time. Scroll back through the history and click any word to translate it inline." },
        { icon: "shield", status: "planned", t: "Game Freeze · Pause & Read", d: "Pause the action to read calmly, with safety limits that keep it fair. Planned Pro feature — not yet released." },
        { icon: "brain", status: "released", t: "Free mode — no AI key required", d: "The free app runs dictionary, OCR and Anki export with no AI key. Bring your own model only if you want explanations." },
        { icon: "sparkle", status: "planned", t: "Pro AI explanations & credits", d: "Grammar breakdowns, nuance and usage notes from a built-in AI model, with monthly credit limits. Planned Pro feature." },
      ],
    },

    demo: {
      title: "Demonstration",
      sub: "Short clips of each flow. Drop your own GIFs into assets/demo/ — see the README.",
      items: [
        { icon: "capture", t: "Capture a word from a web page → Anki", status: "released", file: "assets/demo/capture-web.gif" },
        { icon: "crop", t: "Capture text from inside a game", status: "released", file: "assets/demo/capture-game.gif" },
        { icon: "history", t: "Live Subtitles from English audio", status: "beta", file: "assets/demo/subtitles.gif" },
        { icon: "globe", t: "Click a subtitle word → translation", status: "beta", file: "assets/demo/subtitle-click.gif" },
        { icon: "shield", t: "Game Freeze flow", status: "planned", file: "assets/demo/freeze.gif" },
        { icon: "palette", t: "Settings & options", status: "released", file: "assets/demo/settings.gif" },
      ],
    },

    pricing: {
      title: "Simple pricing",
      sub: "Start free. Upgrade when you want AI and Live features.",
      free: {
        name: "Free", price: "$0", per: "forever", cta: "Download free",
        features: ["Screen capture + OCR", "Dictionary & context translation", "Save words to Anki", "Basic history", "All themes", "No AI key required"],
      },
      pro: {
        name: "Pro", price: "$5", per: "/ month", cta: "Subscribe to Pro", badge: "PRO",
        features: ["Everything in Free", "Built-in Lexipane AI credits", "AI grammar & nuance", "Live Subtitles", "Subtitle history & export", "Game Freeze · Pause & Read", "Use your own API key after credits run out"],
      },
    },

    guides: {
      title: "Guides",
      sub: "Short how-tos for setup and safe use.",
      items: [
        { icon: "download", t: "How to install", d: "Windows & macOS setup, permissions, first run.", href: "#" },
        { icon: "deck", t: "How to connect Anki", d: "AnkiConnect, deck mapping, note type.", href: "#" },
        { icon: "crop", t: "How to use screen capture", d: "Hotkeys, region select, OCR languages.", href: "#" },
        { icon: "history", t: "How Live Subtitles work", d: "Audio source, history, click-to-translate.", href: "#" },
        { icon: "shield", t: "Pro limits & safe use", d: "Credits, Game Freeze fairness, what's allowed.", href: "#" },
        { icon: "doc", t: "FAQ", d: "Common questions, troubleshooting, refunds.", href: "#" },
      ],
    },

    footer: {
      tagline: "A calm overlay for reading and learning from anything on screen.",
      product: "Product", legal: "Legal", connect: "Connect",
      termsHref: "terms.html", privacyHref: "privacy.html", refundHref: "refund.html",
      terms: "Terms and Conditions", privacy: "Privacy Policy", refund: "Refund Policy",
      telegram: "Telegram", youtube: "YouTube",
      rights: "© 2026 Lexipane. All rights reserved.",
    },

    status: { released: "Released", beta: "Beta", planned: "Planned" },
  },

  ru: {
    nav: { home: "Главная", about: "Подробнее", pricing: "Тарифы", guides: "Инструкции" },

    hero: {
      eyebrow: "Оверлей для рабочего стола · Windows и macOS",
      titleA: "Учите английский в играх и ",
      titleAccent: "полноэкранных приложениях",
      titleB: " — не сворачивая экран.",
      sub: "Lexipane поверх любого окна на экране. Захватывайте текст из любой области, разбирайте слово или предложение и сохраняйте полезные фразы прямо в Anki. Живые субтитры и Pro-AI расширяют возможности.",
      windows: "Скачать для Windows",
      mac: "Скачать для macOS",
      telegram: "Telegram",
      mediaCaption: "Замените на свою демо-GIF",
    },

    about: {
      title: "Что умеет Lexipane",
      sub: "Один цикл: увидел слово — понял — сохранил.",
      features: [
        { icon: "capture", status: "released", t: "Захват текста и сохранение в Anki", d: "Выделите область экрана, распознайте текст и отправьте слова или фразы в колоды Anki с переводом, определением и контекстом." },
        { icon: "history", status: "beta", t: "Живые субтитры с историей", d: "Транскрипция английского аудио или видео в реальном времени. Листайте историю и кликайте по слову для перевода." },
        { icon: "shield", status: "planned", t: "Заморозка игры · Пауза для чтения", d: "Поставьте паузу, чтобы спокойно прочитать, с честными ограничениями. Запланированная Pro-функция — пока не выпущена." },
        { icon: "brain", status: "released", t: "Бесплатный режим — без ключа AI", d: "Бесплатное приложение использует словарь, OCR и экспорт в Anki без ключа AI. Подключайте свою модель, только если нужны объяснения." },
        { icon: "sparkle", status: "planned", t: "Pro AI-объяснения и кредиты", d: "Разбор грамматики, нюансы и примеры от встроенной AI-модели с месячными лимитами кредитов. Запланированная Pro-функция." },
      ],
    },

    demo: {
      title: "Демонстрация",
      sub: "Короткие ролики каждого сценария. Положите свои GIF в assets/demo/ — см. README.",
      items: [
        { icon: "capture", t: "Захват слова с веб-страницы → Anki", status: "released", file: "assets/demo/capture-web.gif" },
        { icon: "crop", t: "Захват текста прямо из игры", status: "released", file: "assets/demo/capture-game.gif" },
        { icon: "history", t: "Живые субтитры из английского аудио", status: "beta", file: "assets/demo/subtitles.gif" },
        { icon: "globe", t: "Клик по слову субтитра → перевод", status: "beta", file: "assets/demo/subtitle-click.gif" },
        { icon: "shield", t: "Сценарий «Заморозка игры»", status: "planned", file: "assets/demo/freeze.gif" },
        { icon: "palette", t: "Настройки и опции", status: "released", file: "assets/demo/settings.gif" },
      ],
    },

    pricing: {
      title: "Простые тарифы",
      sub: "Начните бесплатно. Переходите на Pro ради AI и Live-функций.",
      free: {
        name: "Free", price: "0 ₽", per: "навсегда", cta: "Скачать бесплатно",
        features: ["Захват экрана + OCR", "Словарь и контекстный перевод", "Сохранение слов в Anki", "Базовая история", "Все темы", "Без ключа AI"],
      },
      pro: {
        name: "Pro", price: "499 ₽", per: "/ мес", cta: "Оформить Pro", badge: "PRO",
        features: ["Всё из Free", "Встроенные AI-кредиты Lexipane", "AI-грамматика и нюансы", "Живые субтитры", "История и экспорт субтитров", "Заморозка игры · Пауза для чтения", "Свой API-ключ, когда кредиты закончатся"],
      },
    },

    guides: {
      title: "Инструкции",
      sub: "Короткие гайды по настройке и безопасному использованию.",
      items: [
        { icon: "download", t: "Как установить", d: "Установка на Windows и macOS, разрешения, первый запуск.", href: "#" },
        { icon: "deck", t: "Как подключить Anki", d: "AnkiConnect, выбор колоды, тип заметки.", href: "#" },
        { icon: "crop", t: "Как пользоваться захватом", d: "Горячие клавиши, выбор области, языки OCR.", href: "#" },
        { icon: "history", t: "Как работают субтитры", d: "Источник звука, история, перевод по клику.", href: "#" },
        { icon: "shield", t: "Лимиты Pro и безопасность", d: "Кредиты, честность «Заморозки», что разрешено.", href: "#" },
        { icon: "doc", t: "FAQ", d: "Частые вопросы, решение проблем, возвраты.", href: "#" },
      ],
    },

    footer: {
      tagline: "Спокойный оверлей для чтения и обучения из чего угодно на экране.",
      product: "Продукт", legal: "Правовое", connect: "Связь",
      terms: "Условия использования", privacy: "Политика конфиденциальности", refund: "Политика возврата",
      telegram: "Telegram", youtube: "YouTube",
      rights: "© 2026 Lexipane. Все права защищены.",
    },

    status: { released: "Выпущено", beta: "Бета", planned: "Планируется" },
  },
};
