'use strict';

const translations = {
  ua: {
    'header.burger.ariaLabel': 'Відкрити меню',
    'lang.current': 'UA',
    'lang.other': 'ENG',
    'lang.img.alt': 'переклад',
    'menu.close.alt': 'Закрити меню',
    'menu.ariaLabel': 'Навігаційне меню',
    'header.date.from': '10 серпня',
    'header.date.to': '10 листопада',
    'header.title': 'Мистецтво ХІХ - ХХ ст.',
    'header.desc': 'Внесок українських митців у світову культуру 19-20 ст.',
    'header.btn': 'Купити квиток',
    'menu.schedule.label': 'Розклад сьогодні:',
    'menu.address.label': 'Адреса:',
    'menu.nav.current': 'Актуальні виставки',
    'menu.nav.upcoming': 'Найближчі події',
    'menu.nav.news': 'Новини',
    'menu.btn': 'Купити квиток',
    'current.title': 'Актуальні виставки',
    'current.archive': 'Архів виставок',
    'current.event1.alt': 'Скульптура ангела з розкритими крилами',
    'current.event1.title': 'Кураторська виставка "Ангели"',
    'current.event1.desc':
      'Виставковий проект «Ангели» – знакова подія для української культури i водночас наймасштабніший...',
    'current.event1.btn': 'Купити квиток',
    'current.event2.alt': 'Автопортрет українського художника Миколи Пимоненка',
    'current.event2.date': 'Діє постійно',
    'current.event2.title': 'Мистецтво ХХ ст. — XXI ст.',
    'current.event2.desc':
      'Знакові роботи Алли Горської, Миколи Самокиша, Федора Кричевського та інших митців.',
    'current.event2.btn': 'Купити квиток',
    'upcoming.title': 'Найближчі події',
    'upcoming.calendar': 'Календар подій',
    'upcoming.event1.alt': 'Фото куратора екскурсії Павла Гудімова',
    'upcoming.event1.date': '14.08 о 13:00',
    'upcoming.event1.title': 'Кураторські екскурсії від Павла Гудімова',
    'upcoming.event1.desc':
      'Таємниці підготовки, історії експонатів, магія дійства до i в момент вашої присутності – розгортатиметься...',
    'upcoming.event1.btn': 'Зареєструватись',
    'upcoming.event2.alt': 'фото майстра з майстер-класа Подорож до Австралії',
    'upcoming.event2.date': '16.08 о 13:00',
    'upcoming.event2.title': 'Майстер-клас "Подорож до Австралії"',
    'upcoming.event2.desc':
      'Цієї неділі о 14:00 на арт-мандрівників чекає останній пункт кругосвітньої подорожі – Австралія.',
    'upcoming.event2.btn': 'Зареєструватись',
    'visit.title': 'Сплануйте візит до музею',
    'visit.desc':
      'Оберіть зручний день, зареєструйтесь на події, що цікавлять, купіть квиток заздалегідь, щоб ніщо не завадило вам насолоджуватись мистецтвом.',
    'visit.btn': 'Почати',
    'news.title': 'Новини',
    'news.all': 'Усі новини',
    'news.item1.alt':
      'Три мистецькі листівки з репродукціями картин на світлій поверхні',
    'news.item1.date': '9 серпня 2019',
    'news.item1.title': 'Оголошення переможця',
    'news.item1.desc':
      "Друзі, сьогодні п'ятниця! А це означає, що час оголосити переможця розіграшу...",
    'news.item2.alt':
      'Стилізована ілюстрація кота з мишею та написом «Дитяча мальованка»',
    'news.item2.date': '9 серпня 2019',
    'news.item2.title': 'Міжнародний день котів',
    'news.item2.desc':
      'Музей з левами не може просто так взяти i пропустити Міжнародний день котів!',
    'sub.title': 'Підпишіться на дайджест',
    'sub.desc':
      'Першими дізнавайтесь про новини музею та розіграші, отримуйте запрошення на події та читайте статті від кураторів',
    'sub.input.ariaLabel': 'Електронна пошта',
    'sub.btn': 'Підписатись',
    'footer.contacts': 'Контакти',
    'footer.tel': 'тел:',
    'footer.schedule': 'Розклад роботи',
    'footer.mon': 'пн:',
    'footer.tue': 'вт:',
    'footer.wed': 'ср:',
    'footer.thu': 'чт:',
    'footer.fri': 'пт:',
    'footer.sat': 'сб:',
    'footer.sun': 'нд:',
    'footer.closed': 'вихідний',
    'footer.nav.title': 'Головна',
    'footer.nav.exhibitions': 'Виставки',
    'footer.nav.events': 'Події',
    'footer.nav.news': 'Новини',
    'footer.arrow.ariaLabel': 'Нагору',
  },
  en: {
    'header.burger.ariaLabel': 'Open menu',
    'lang.current': 'EN',
    'lang.other': 'UA',
    'lang.img.alt': 'translation',
    'menu.close.alt': 'Close menu',
    'menu.ariaLabel': 'Navigation menu',
    'header.date.from': 'August 10',
    'header.date.to': 'November 10',
    'header.title': 'Art of the XIX–XX Centuries',
    'header.desc':
      'The contribution of Ukrainian artists to world culture of the 19th–20th centuries.',
    'header.btn': 'Buy a ticket',
    'menu.schedule.label': "Today's schedule:",
    'menu.address.label': 'Address:',
    'menu.nav.current': 'Current exhibitions',
    'menu.nav.upcoming': 'Upcoming events',
    'menu.nav.news': 'News',
    'menu.btn': 'Buy a ticket',
    'current.title': 'Current exhibitions',
    'current.archive': 'Exhibition archive',
    'current.event1.alt': 'Sculpture of an angel with spread wings',
    'current.event1.title': 'Curatorial exhibition “Angels”',
    'current.event1.desc':
      'The “Angels” exhibition project is a landmark event for Ukrainian culture and at the same time the most large-scale...',
    'current.event1.btn': 'Buy a ticket',
    'current.event2.alt': 'Self-portrait of Ukrainian artist Mykola Pymonenko',
    'current.event2.date': 'Permanent exhibition',
    'current.event2.title': 'Art of the XX–XXI Centuries',
    'current.event2.desc':
      'Iconic works by Alla Horska, Mykola Samokysh, Fedir Krychevsky and other artists.',
    'current.event2.btn': 'Buy a ticket',
    'upcoming.title': 'Upcoming events',
    'upcoming.calendar': 'Events calendar',
    'upcoming.event1.alt': 'Photo of curator Pavlo Hudimov',
    'upcoming.event1.date': '14.08 at 13:00',
    'upcoming.event1.title': 'Curator tours by Pavlo Hudimov',
    'upcoming.event1.desc':
      'Secrets of preparation, stories of exhibits, the magic of the event before and at the moment of your presence – will unfold...',
    'upcoming.event1.btn': 'Register',
    'upcoming.event2.alt': 'Photo from master class Journey to Australia',
    'upcoming.event2.date': '16.08 at 13:00',
    'upcoming.event2.title': 'Master class “Journey to Australia”',
    'upcoming.event2.desc':
      'This Sunday at 14:00, art travellers await the last stop on the round-the-world journey – Australia.',
    'upcoming.event2.btn': 'Register',
    'visit.title': 'Plan your museum visit',
    'visit.desc':
      'Choose a convenient day, register for events of interest, buy your ticket in advance so nothing prevents you from enjoying art.',
    'visit.btn': 'Start',
    'news.title': 'News',
    'news.all': 'All news',
    'news.item1.alt':
      'Three art postcards with painting reproductions on a light surface',
    'news.item1.date': 'August 9, 2019',
    'news.item1.title': 'Winner announcement',
    'news.item1.desc':
      "Friends, today is Friday! And that means it's time to announce the winner of the giveaway...",
    'news.item2.alt':
      'Stylized illustration of a cat with a mouse and the inscription «Children’s drawing»',
    'news.item2.date': 'August 9, 2019',
    'news.item2.title': 'International Cat Day',
    'news.item2.desc':
      'The museum with lions cannot just let International Cat Day pass by!',
    'sub.title': 'Subscribe to the digest',
    'sub.desc':
      'Be the first to know about museum news and giveaways, receive invitations to events and read articles from curators.',
    'sub.input.ariaLabel': 'Email address',
    'sub.btn': 'Subscribe',
    'footer.contacts': 'Contacts',
    'footer.tel': 'tel:',
    'footer.schedule': 'Working hours',
    'footer.mon': 'Mon:',
    'footer.tue': 'Tue:',
    'footer.wed': 'Wed:',
    'footer.thu': 'Thu:',
    'footer.fri': 'Fri:',
    'footer.sat': 'Sat:',
    'footer.sun': 'Sun:',
    'footer.closed': 'closed',
    'footer.nav.title': 'Main',
    'footer.nav.exhibitions': 'Exhibitions',
    'footer.nav.events': 'Events',
    'footer.nav.news': 'News',
    'footer.arrow.ariaLabel': 'Back to top',
  },
};

function setLang(lang) {
  const t = translations[lang];

  if (!t) {
    return;
  }

  document.documentElement.lang = lang === 'ua' ? 'uk' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;

    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.dataset.i18nAriaLabel;

    if (t[key] !== undefined) {
      el.setAttribute('aria-label', t[key]);
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.dataset.i18nAlt;

    if (t[key] !== undefined) {
      el.setAttribute('alt', t[key]);
    }
  });

  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang__link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const current = localStorage.getItem('lang') || 'ua';
    const next = current === 'ua' ? 'en' : 'ua';

    setLang(next);

    document.querySelectorAll('details.lang').forEach((d) => {
      d.open = false;
    });
  });
});

const subscriptionForm = document.querySelector('.subscription__form');

if (subscriptionForm) {
  subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    subscriptionForm.reset();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const savedLang = localStorage.getItem('lang') || 'ua';

setLang(savedLang);
