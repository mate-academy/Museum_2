'use strict';

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const subscribeForm = document.getElementById('subscribeForm');
const langBtn = document.querySelector('.header__lang');

const translations = {
  ua: {
    'date': '30 квітня – 30 листопада',
    'hero-title': 'Мистецтво XIX – XX ст.',
    'hero-subtitle': 'Внесок українських митців у світову культуру до XXI',
    'btn-ticket': 'Купити квиток',
    'exhibitions-title': 'Актуальні виставки',
    'exhibitions-link': 'Архів виставок →',
    'card1-date': '11.07 - 31.08',
    'card1-title': 'Кураторська виставка «Ангели»',
    'card1-desc': 'Виставковий проект «Ангели» — знакова подія для української культури і широкої глядацької аудиторії впродовж сімнадцяти.',
    'card2-date': '06 листопад',
    'card2-title': 'Мистецтво XX ст. – XXI ст.',
    'card2-desc': 'Знакові роботи Анни Горської, Миколи Самокиша, Федора Кричевського та інших митців.',
    'events-title': 'Найближчі події',
    'events-link': 'Календар подій →',
    'event1-date': '14/8 в 13:00',
    'event1-title': 'Кураторські екскурсії від Павла Гудімова',
    'event1-desc': 'Таємниця творчості, складний мистецький шлях — все це та ні цього немає в нашій пропозиції — розпочинається нова глава.',
    'btn-register': 'Зареєструватись',
    'event2-date': '20/8 в 15:00',
    'event2-title': 'Майстер-клас «Подорож до Австралії»',
    'event2-desc': 'Цей майстер-клас від нас арт-мандрівника можна вважати останнім пунктом кругосвітньої подорожі — тестів є.',
    'plan-title': 'Сплануйте візит до музею',
    'plan-desc': 'Оберіть зручний день, зареєструйтеся на той захід, що цікавить вас, або просто завітайте до нас — ми завжди раді допомогти вам насолодитися мистецтвом.',
    'btn-start': 'Почати',
    'news-title': 'Новини',
    'news-link': 'Усі новини →',
    'news1-date': '5 травня 2022',
    'news1-title': 'Оголошення переможця',
    'news1-desc': 'Друга картина Поляці Поляця для А це більш обмежений видатних успіхів що здобув перемогу розповсюджується.',
    'news2-date': '5 травня 2022',
    'news2-title': 'Міжнародний день котів',
    'news2-desc': 'Музей у своєму розмаїтті простих вагань перетворює Міжнародний день котів на нечувано яскраву подію.',
    'subscribe-title': 'Підпишіться на дайджест',
    'subscribe-desc': 'Першими дізнавайтесь про нові новини та розробки, отримуйте запрошення подій та читайте статті від куратора.',
    'subscribe-placeholder': 'e-mail',
    'btn-subscribe': 'Підписатись',
    'footer-contacts': 'Контакти',
    'footer-address': 'Київ, вул. М. Грушевського 6',
    'footer-schedule': 'Розклад роботи',
    'footer-nav': 'Головна',
    'day-mon': 'Пн.',
    'day-tue': 'Вт.',
    'day-wed': 'Ср.',
    'day-thu': 'Чт.',
    'day-fri': 'Пт.',
    'day-sat': 'Сб.',
    'day-sun': 'Нд.',
    'day-off': 'виходний',
    'nav-exhibitions': 'Виставки',
    'nav-events': 'Події',
    'nav-news': 'Новини',
    'nav-visit': 'Відвідати',
    'footer-terms': 'Умови',
    'footer-tickets': 'Квитки',
  },
  en: {
    'date': 'April 30 – November 30',
    'hero-title': 'Art of XIX – XX century',
    'hero-subtitle': 'The contribution of Ukrainian artists to world culture',
    'btn-ticket': 'Buy a ticket',
    'exhibitions-title': 'Current Exhibitions',
    'exhibitions-link': 'Archive of exhibitions →',
    'card1-date': '11.07 - 31.08',
    'card1-title': 'Curatorial exhibition «Angels»',
    'card1-desc': 'The exhibition project «Angels» is a landmark event for Ukrainian culture and a wide audience of viewers for seventeen years.',
    'card2-date': '06 November',
    'card2-title': 'Art of XX century – XXI century',
    'card2-desc': 'Iconic works by Anna Gorska, Mykola Samokysh, Fedir Krychevsky and other artists.',
    'events-title': 'Upcoming Events',
    'events-link': 'Events calendar →',
    'event1-date': '14/8 at 13:00',
    'event1-title': 'Curator tours by Pavlo Gudimov',
    'event1-desc': 'The mystery of creativity, a complex artistic path — all this and more awaits you in our proposal — a new chapter begins.',
    'btn-register': 'Register',
    'event2-date': '20/8 at 15:00',
    'event2-title': 'Master class «Journey to Australia»',
    'event2-desc': 'This master class from our art traveler can be considered the last stop of the world tour — full of discoveries.',
    'plan-title': 'Plan your museum visit',
    'plan-desc': 'Choose a convenient day, register for the event that interests you, or simply visit us — we are always glad to help you enjoy art.',
    'btn-start': 'Start',
    'news-title': 'News',
    'news-link': 'All news →',
    'news1-date': 'May 5, 2022',
    'news1-title': 'Winner announcement',
    'news1-desc': 'The second painting for A is a more limited achievement that won and is being distributed across the country.',
    'news2-date': 'May 5, 2022',
    'news2-title': 'International Cat Day',
    'news2-desc': 'The museum in all its variety turns International Cat Day into an incredibly vibrant and memorable event.',
    'subscribe-title': 'Subscribe to digest',
    'subscribe-desc': 'Be the first to know about new news and developments, receive event invitations and read articles from the curator.',
    'subscribe-placeholder': 'e-mail',
    'btn-subscribe': 'Subscribe',
    'footer-contacts': 'Contacts',
    'footer-address': 'Kyiv, M. Hrushevsky St. 6',
    'footer-schedule': 'Working hours',
    'footer-nav': 'Navigation',
    'day-mon': 'Mon.',
    'day-tue': 'Tue.',
    'day-wed': 'Wed.',
    'day-thu': 'Thu.',
    'day-fri': 'Fri.',
    'day-sat': 'Sat.',
    'day-sun': 'Sun.',
    'day-off': 'day off',
    'nav-exhibitions': 'Exhibitions',
    'nav-events': 'Events',
    'nav-news': 'News',
    'nav-visit': 'Visit',
    'footer-terms': 'Terms',
    'footer-tickets': 'Tickets',
  },
};

let currentLang = 'ua';

function applyTranslations(lang) {
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;

    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;

    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  document.documentElement.lang = lang === 'ua' ? 'uk' : 'en';
}

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');

    menuBtn.setAttribute('aria-expanded', isOpen.toString());
    nav.setAttribute('aria-hidden', (!isOpen).toString());
  });

  document.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-hidden', 'true');
    });
  });
}

if (langBtn) {
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ua' ? 'en' : 'ua';
    langBtn.textContent = currentLang === 'ua' ? 'UA-' : 'EN-';
    applyTranslations(currentLang);
  });
}

if (subscribeForm) {
  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = subscribeForm.querySelector('input[type="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailInput || !emailRegex.test(emailInput.value.trim())) {
      emailInput.focus();

      return;
    }

    subscribeForm.reset();
  });
}
