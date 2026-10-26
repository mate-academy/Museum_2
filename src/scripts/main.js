'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.nav');
const languageToggle = document.querySelector('.language-toggle');
const languageMenu = document.querySelector('.language-menu');
const languageLabel = document.querySelector('.language-toggle__label');

const translations = {
  en: {
    'Відкрити меню': 'Open menu', 'Закрити меню': 'Close menu', 'Мова сайту': 'Site language',
    'Головна навігація': 'Main navigation', 'Розклад сьогодні:': "Today's hours:", 'Адреса:': 'Address:',
    'Київ, вул. М. Грушевського, 6': '6 M. Hrushevskoho Street, Kyiv', 'вул. М. Грушевського, 6': '6 M. Hrushevskoho Street',
    'NAMU — на головну': 'NAMU — home', 'Навігація у футері': 'Footer navigation', 'Актуальні виставки': 'Current exhibitions',
    'Найближчі події': 'Upcoming events', 'Новини': 'News', 'Купити квиток': 'Buy a ticket',
    '10 серпня - 10 листопада': 'August 10 – November 10', 'Мистецтво': 'Art', 'XIX - XX ст.': '19th–20th century',
    'Внесок українських митців у світову культуру 19-20 ст.': 'The contribution of Ukrainian artists to world culture in the 19th and 20th centuries.',
    '10.08 - 10.10': '10 Aug – 10 Oct', 'Архів виставок': 'Exhibition archive',
    'Детальніше про виставку Ангели': 'More about the Angels exhibition', 'Скульптура ангела у виставковій залі': 'Angel sculpture in the exhibition hall',
    '11.07 - 22.09': '11 Jul – 22 Sep', 'Кураторська виставка “Ангели”': 'Curated exhibition “Angels”',
    'Виставковий проект «Ангели» — знакова подія для української культури і водночас наймасштабніший...': 'The “Angels” exhibition is a landmark event for Ukrainian culture and the museum’s largest project...',
    'Діє постійно': 'Permanent exhibition', 'Детальніше про виставку Мистецтво XX–XXI століть': 'More about the 20th–21st century art exhibition',
    'Портрет чоловіка з музейної колекції': 'Portrait of a man from the museum collection', 'Мистецтво XX ст. — XXI ст.': 'Art of the 20th–21st centuries',
    'Знакові роботи Алли Горської, Миколи Самокиша, Федора Кричевського та інших митців.': 'Notable works by Alla Horska, Mykola Samokysh, Fedir Krychevskyi, and other artists.',
    'Календар подій': 'Events calendar', 'Куратор Павло Гудімов у музейному залі': 'Curator Pavlo Hudimov in a museum gallery',
    '14.08 о 13:00': '14 Aug at 13:00', 'Кураторські екскурсії від Павла Гудімова': 'Curator-led tours with Pavlo Hudimov',
    'Таємниці підготовки, історії експонатів, магія дійства і момент вашої присутності — розгортатиметься...': 'Discover the preparation, stories behind the exhibits, and the magic of the experience...',
    'Зареєструватись': 'Register', 'Відвідувачка серед скульптур у музеї': 'Visitor among sculptures in the museum',
    '16.08 о 13:00': '16 Aug at 13:00', 'Майстер-клас “Подорож до Австралії”': 'Workshop “Journey to Australia”',
    'Цієї неділі о 14:00 на арт-мандрівників чекає останній пункт кругосвітньої подорожі - Австралія.': 'This Sunday at 14:00, art explorers reach the final stop of their round-the-world journey: Australia.',
    'Фрагмент живописного портрета жінки з музейної колекції': 'Detail of a painted portrait of a woman from the museum collection',
    'Сплануйте': 'Plan your', 'візит до музею': 'museum visit',
    'Оберіть зручний день, зареєструйтесь на події, що цікавлять, купіть квиток заздалегідь, щоб нічого не завадило вам насолоджуватись мистецтвом.': 'Choose a convenient day, register for events, and buy a ticket in advance so you can enjoy the art without a worry.',
    'Почати': 'Get started', 'Усі новини': 'All news', 'Читати про музейні видання': 'Read about museum publications',
    'Три репродукції музейних творів на столі': 'Three reproductions of museum artworks on a table', '9 серпня 2019': 'August 9, 2019',
    'Оголошення переможців': 'Winners announced', 'Друзі, сьогодні п\'ятниця! А це означає, що час оголосити переможця розіграшу...': 'Friends, it’s Friday! That means it’s time to announce the giveaway winner...',
    'Читати про колекцію': 'Read about the collection', 'Ліногравюра кота з музейної колекції': 'Cat linocut from the museum collection',
    'Міжнародний день котів': 'International Cat Day', 'Музей з левами не може просто так взяти і пропустити Міжнародний день котів!': 'A museum with lions simply cannot let International Cat Day pass by!',
    'Підпишіться на': 'Subscribe to the', 'дайджест': 'newsletter', 'Ваша електронна пошта': 'Your email address',
    'Підписатись': 'Subscribe', 'Раз на місяць, тільки важливе.': 'Once a month, only the important news.',
    'Першими дізнавайтесь про новини музею та розіграші, отримуйте запрошення на події та читайте статті від кураторів': 'Be the first to hear museum news, get event invitations, and read articles by our curators.',
    'Контакти': 'Contact', 'Розклад роботи': 'Opening hours', 'ПН: вихідний': 'Mon: closed', 'ВТ: вихідний': 'Tue: closed',
    'СР: 10:00 - 17:00': 'Wed: 10:00 – 17:00', 'ЧТ: 10:00 - 17:00': 'Thu: 10:00 – 17:00',
    'ПТ: 12:00 - 19:00': 'Fri: 12:00 – 19:00', 'СБ: 11:00 - 18:00': 'Sat: 11:00 – 18:00',
    'НД: 10:00 - 17:00': 'Sun: 10:00 – 17:00', 'Головна': 'Home', 'Виставки': 'Exhibitions', 'Події': 'Events',
    'На початок сторінки': 'Back to top', 'Дякуємо за підписку! До зустрічі у вашій пошті.': 'Thanks for subscribing! See you in your inbox.',
  },
};

const translatableTextNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  if (node.nodeValue.trim() && !node.parentElement.closest('.language-switcher')) {
    translatableTextNodes.push({ node, original: node.nodeValue });
  }
}

const translatedAttributes = [];
document.querySelectorAll('[aria-label], [alt]').forEach((element) => {
  ['aria-label', 'alt'].forEach((attribute) => {
    if (element.hasAttribute(attribute)) {
      translatedAttributes.push({ element, attribute, original: element.getAttribute(attribute) });
    }
  });
});

const closeMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Open menu' : 'Відкрити меню');
  siteNav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
};

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute(
    'aria-label',
    document.documentElement.lang === 'en'
      ? (isOpen ? 'Open menu' : 'Close menu')
      : (isOpen ? 'Відкрити меню' : 'Закрити меню'),
  );
  siteNav.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    languageMenu.hidden = true;
    languageToggle.setAttribute('aria-expanded', 'false');
  }
});

const setLanguage = (language) => {
  const isEnglish = language === 'en';
  document.documentElement.lang = isEnglish ? 'en' : 'uk';
  languageLabel.textContent = isEnglish ? 'EN' : 'UA';
  languageToggle.setAttribute('aria-label', isEnglish ? 'Site language' : 'Мова сайту');
  menuToggle.setAttribute('aria-label', isEnglish ? 'Open menu' : 'Відкрити меню');
  document.querySelector('.nav').setAttribute('aria-label', isEnglish ? 'Main navigation' : 'Головна навігація');
  translatableTextNodes.forEach(({ node, original }) => {
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    const phrase = original.trim();
    node.nodeValue = isEnglish ? `${leading}${translations.en[phrase] || phrase}${trailing}` : original;
  });
  translatedAttributes.forEach(({ element, attribute, original }) => {
    element.setAttribute(attribute, isEnglish ? translations.en[original] || original : original);
  });
  document.title = isEnglish
    ? 'NAMU — National Art Museum of Ukraine'
    : 'NAMU — Національний художній музей України';
  document.querySelector('meta[name="description"]').content = isEnglish
    ? 'The National Art Museum of Ukraine — exhibitions, events, and art.'
    : 'Національний художній музей України — виставки, події та мистецтво.';
  document.querySelector('#email').placeholder = 'e-mail';
  document.querySelectorAll('.language-option').forEach((option) => {
    if (option.dataset.language === language) option.setAttribute('aria-current', 'true');
    else option.removeAttribute('aria-current');
  });
  localStorage.setItem('namu-language', language);
};

languageToggle.addEventListener('click', () => {
  const willOpen = languageToggle.getAttribute('aria-expanded') !== 'true';
  languageToggle.setAttribute('aria-expanded', String(willOpen));
  languageMenu.hidden = !willOpen;
});

document.querySelectorAll('.language-option').forEach((option) => {
  option.addEventListener('click', () => {
    setLanguage(option.dataset.language);
    languageMenu.hidden = true;
    languageToggle.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.language-switcher')) {
    languageMenu.hidden = true;
    languageToggle.setAttribute('aria-expanded', 'false');
  }
});

setLanguage(localStorage.getItem('namu-language') === 'en' ? 'en' : 'uk');

const newsletterForm = document.querySelector('.newsletter__form');
const newsletterMessage = document.querySelector('.newsletter__message');

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!newsletterForm.reportValidity()) {
    return;
  }

  newsletterForm.reset();
  newsletterMessage.textContent = document.documentElement.lang === 'en'
    ? 'Thanks for subscribing! See you in your inbox.'
    : 'Дякуємо за підписку! До зустрічі у вашій пошті.';
});
