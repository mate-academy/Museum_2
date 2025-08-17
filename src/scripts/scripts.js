// Переклади для різних мов
const translations = {
  ua: {
    date: "10 серпня - 10 листопада",
    shortDate: "10.08 - 10.10",
    title: "Мистецтво ХІХ - ХХ ст.",
    description: "Внесок українських митців у світову культуру 19-20 ст.",
    buyTicket: "Купити квиток",
    scheduleText: "Розклад сьогодні:",
    scheduleInfo: "12:00 - 19:00",
    addressText: "Адреса:",
    addressInfo: "Київ, вул. М. Грушевського, 6",
    exhibitions: "Актуальні виставки",
    events: "Найближчі події",
    news: "Новини",
    buyTicket: "Купити квиток",
  },
  en: {
    date: "August 10 - November 10",
    shortDate: "10.08 - 10.10",
    title: "Art of the 19th - 20th centuries",
    description: "The contribution of Ukrainian artists to world culture of the 19th-20th centuries",
    buyTicket: "Buy a ticket",
    scheduleText: "Schedule today:",
    scheduleInfo: "12:00 - 19:00",
    addressText: "Address:",
    addressInfo: "Kyiv, Mykhaila Hrushevs'koho St., 6",
    exhibitions: "Current Exhibitions",
    events: "Upcoming Events",
    news: "News",
    buyTicket: "Buy a ticket",
  }
};


// Функція для зміни мови
function changeLanguage(lang) {
  // Зміна мови на кнопці
  const languageButtonText = document.querySelector('.menu__language__toggle .language-text');
  if (lang === 'ua') {
    languageButtonText.innerText = 'UA';
  } else if (lang === 'en') {
    languageButtonText.innerText = 'EN';
  }

  // Оновлення тексту на сторінці
  document.getElementById('date').innerText = translations[lang].date;
  document.getElementById('title').innerText = translations[lang].title;
  document.getElementById('description').innerText = translations[lang].description;
  document.getElementById('buy-ticket').innerText = translations[lang].buyTicket;
  document.getElementById('bottom-text').textContent = translations[lang].shortDate;
  document.getElementById('schedule-text').textContent = translations[lang].scheduleText;
  document.getElementById('schedule-info').textContent = translations[lang].scheduleInfo;
  document.getElementById('address-text').textContent = translations[lang].addressText;
  document.getElementById('address-info').textContent = translations[lang].addressInfo;
  document.getElementById('exhibitions-link').textContent = translations[lang].exhibitions;
  document.getElementById('events-link').textContent = translations[lang].events;
  document.getElementById('news-link').textContent = translations[lang].news;
  document.getElementById('buy-ticket-menu').textContent = translations[lang].buyTicket;

  // Зберігаємо вибрану мову в LocalStorage
  localStorage.setItem('language', lang);

  // Закриваємо меню після вибору мови
  closeLanguageMenu();
}

// Функція для відкриття/закриття меню
function toggleLanguageMenu() {
  const languageList = document.querySelector('.menu__language__list');
  languageList.classList.toggle('visible');
}

// Функція для закриття меню
function closeLanguageMenu() {
  const languageList = document.querySelector('.menu__language__list');
  languageList.classList.remove('visible');
}

// Завантаження мови з LocalStorage при завантаженні сторінки
window.addEventListener('load', () => {
  const savedLang = localStorage.getItem('language') || 'ua';  // За замовчуванням українська
  changeLanguage(savedLang);  // Завантажуємо переклад

  // Оновлюємо текст на кнопці для вибраної мови
  const languageButtonText = document.querySelector('.menu__language__toggle .language-text');
  if (savedLang === 'ua') {
    languageButtonText.innerText = 'UA';
  } else if (savedLang === 'en') {
    languageButtonText.innerText = 'EN';
  }
});

// Слухач події для кнопки перемикання мови
const languageButton = document.querySelector('.menu__language__toggle');
languageButton.addEventListener('click', toggleLanguageMenu);

// Слухачі подій для вибору мови
const languageItems = document.querySelectorAll('.menu__language__item');
languageItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const lang = e.target.getAttribute('data-lang');
    changeLanguage(lang);
  });
});





/*---------------------------------------------------------Прокрутка----------------------------------------------------------------*/

// Слухаємо зміни хешу в адресному рядку
window.addEventListener('hashchange', function() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('no-scroll');  // Коли меню відкривається — блокуємо скрол
  } else {
    document.body.classList.remove('no-scroll');  // Коли меню закрите — відновлюємо скрол
  }
});

// Перевірка, чи меню відкрите при першому завантаженні сторінки
if (window.location.hash === '#menu') {
  document.body.classList.add('no-scroll');
}
