'use strict';

const languageBlocks = document.querySelectorAll('.language');
const options = document.querySelectorAll('.language__option');
const i18nElements = document.querySelectorAll('[data-i18n]');
const menuNav = document.querySelector('.menu__nav');
const navLink = menuNav.querySelectorAll('.nav__link');

const openedClassName = 'language__opened';

const translations = {
  UA: {
    headerDate: '10 серпня - 10 листопада',
    headerTitle: 'Мистецтво ХІХ - ХХ ст.',
    headerMain: 'Внесок українських митців у світову культуру 19-20 ст.',
    buyButton: 'Купити квиток',
    menuScheduleTitle: 'Розклад сьогодні:',
    menuScheduleTime: '12:00 - 19:00',
    menuAddressTitle: 'Адреса:',
    menuAddressInfo: 'Київ, вул. М. Грушевського, 6',
    exhibitionTitle: 'Актуальні виставки',
    menuNavEvents: 'Найближчі події',
    menuNavNews: 'Новини',
    exhibitionDate: '11.07 - 22.09',
    exhibitionAngelsTitle: 'Кураторська виставка “Ангели”',
    exhibitionAngelsDescription:
      'Виставковий проект «Ангели» – знакова подія для української культури і водночас наймасштабніший...',
    exhibitionArtTitle: 'Мистецтво ХХ ст. — XXI ст.',
    exhibitionArtDescription:
      'Знакові роботи Алли Горської, Миколи Самокиша, Федора Кричевського та інших митців.',
    exhibitionDateAlways: 'Діє постійно',
    closeEvents: 'Найближчі події',
    eventGudimovSubtitle: '14.08 о 13:00',
    eventGudimovTitle: 'Кураторські екскурсії від Павла Гудімова ',
    eventGudimovDescription:
      'Таємниці підготовки, історії експонатів, магія дійства до і в момент вашої присутності – розгортатиметься...',
    registrationButton: 'Зареєструватись',
    masterClassSubtitle: '16.08 о 13:00',
    masterClassTitle: 'Майстер-клас “Подорож до Австралії”',
    masterClassDescription:
      'Цієї неділі о 14:00 на арт-мандрівників чекає останній пункт кругосвітньої подорожі - Австралія.',
    calendarButton: 'Календар подій',
    archiveButton: 'Архів виставок',
    startButton: 'Почати',
    visitTitle: 'Сплануйте візит до музею',
    visitDescription:
      'Оберіть зручний день, зареєструйтесь на події, що цікавлять, купіть квиток заздалегідь, щоб ніщо не завадило вам насолоджуватись мистецтвом.',
    newsButton: 'Усі новини',
    winnerSubtitle: '9 серпня 2019',
    winnerDescription:
      "Друзі, сьогодні п'ятниця! А це означає, що час оголосити переможця розіграшу...",
    winnerTitle: 'Оголошення переможця',
    catSubtitle: '9 серпня 2019',
    catTitle: 'Міжнародний день котів',
    catDescription:
      'Музей з левами не може просто так взяти і пропустити Міжнародний день котів!',
    digestTitile: 'Підпишіться на дайджест',
    digestDescription:
      'Першими дізнавайтесь про новини музею та розіграші, отримуйте запрошення на події та читайте статті від кураторів',
    subscribeButton: 'Підписатись',
    contactsTitle: 'Контакти',
    scheduleTitle: 'Розклад роботи',
    scheduleMonday: 'ПН: вихідний',
    scheduleTuesday: 'ВТ: вихідний',
    scheduleWednesday: 'СР: 10:00 - 17:00',
    scheduleThursday: 'ЧТ: 10:00 - 17:00',
    scheduleFriday: 'ПТ: 12:00 - 19:00',
    scheduleSaturday: 'СБ: 11:00 - 18:00',
    scheduleSunday: 'НД: 10:00 - 17:00',
    scheduleTitle: 'Розклад роботи',
    footerMenuTitle: 'Головна',
    footerEvents: 'Події',
    footerExhibiton: 'Виставки',
    addressCity: 'Київ,',
    addressStreet: 'вул. М. Грушевського, 6',
    phoneNumber: 'тел. 278-13-57, 278-74-54',
    mainPage:  'Головна'
  },
  EN: {
    headerDate: 'August 10 – November 10',
    headerTitle: '19th–20th Century Art',
    headerMain:
      'The Contribution of Ukrainian Artists to World Culture of the 19th–20th Centuries',
    buyButton: 'Buy Ticket',
    menuScheduleTitle: 'Today’s Schedule:',
    menuScheduleTime: '12:00 – 19:00',
    menuAddressTitle: 'Address:',
    menuAddressInfo: 'Kyiv, 6 M. Hrushevskyi St.',
    exhibitionTitle: 'Current Exhibitions',
    menuNavEvents: 'Upcoming Events',
    menuNavNews: 'News',
    exhibitionDate: '11.07 – 22.09',
    exhibitionAngelsTitle: 'Curatorial Exhibition “Angels”',
    exhibitionAngelsDescription:
      'The “Angels” exhibition project is a landmark event for Ukrainian culture and at the same time the most large-scale...',
    exhibitionArtTitle: '20th–21st Century Art',
    exhibitionArtDescription:
      'Iconic works by Alla Horska, Mykola Samokysh, Fedir Krychevskyi, and other artists.',
    exhibitionDateAlways: 'Permanent Exhibition',
    closeEvents: 'Upcoming Events',
    eventGudimovSubtitle: '14.08 at 13:00',
    eventGudimovTitle: 'Curatorial Tours by Pavlo Gudimov',
    eventGudimovDescription:
      'Behind-the-scenes insights, stories of the exhibits, and the magic of the event before and during your visit will unfold...',
    registrationButton: 'Register',
    masterClassSubtitle: '16.08 at 13:00',
    masterClassTitle: 'Workshop “Journey to Australia”',
    masterClassDescription:
      'This Sunday at 14:00, art travelers will reach the final stop of their world tour — Australia.',
    calendarButton: 'Event Calendar',
    archiveButton: 'Exhibition Archive',
    startButton: 'Start',
    visitTitle: 'Plan Your Visit to the Museum',
    visitDescription:
      'Choose a convenient day, register for events that interest you, and buy your ticket in advance so nothing interrupts your enjoyment of art.',
    newsButton: 'All News',
    winnerSubtitle: 'August 9, 2019',
    winnerDescription:
      'Friends, today is Friday! And that means it’s time to announce the winner of our giveaway...',
    winnerTitle: 'Winner Announcement',
    catSubtitle: 'August 9, 2019',
    catTitle: 'International Cat Day',
    catDescription:
      'A museum with lions simply can’t ignore the International Cat Day!',
    digestTitile: 'Subscribe to the Digest',
    digestDescription:
      'Be the first to receive museum news and giveaways, get invitations to events, and read articles from curators.',
    subscribeButton: 'Subscribe',
    contactsTitle: 'Contacts',
    scheduleTitle: 'Opening Hours',
    scheduleMonday: 'Mon: Closed',
    scheduleTuesday: 'Tue: Closed',
    scheduleWednesday: 'Wed: 10:00 – 17:00',
    scheduleThursday: 'Thu: 10:00 – 17:00',
    scheduleFriday: 'Fri: 12:00 – 19:00',
    scheduleSaturday: 'Sat: 11:00 – 18:00',
    scheduleSunday: 'Sun: 10:00 – 17:00',
    footerMenuTitle: 'Home',
    footerEvents: 'Events',
    footerExhibiton: 'Exhibitions',
    addressCity: 'Kyiv,',
    addressStreet: '6 M. Hrushevskyi St.',
    phoneNumber: 'Tel. 278-13-57, 278-74-54',
    mainPage: 'Main page'
  },
};

languageBlocks.forEach((block) => {
  block.addEventListener('click', () => {
    block.classList.toggle(openedClassName);
  });
});

options.forEach((option) => {
  option.addEventListener('click', (e) => {
    e.stopPropagation();
    const selectedLanguage = e.currentTarget.textContent;
    languageBlocks.forEach((block) => {
      const label = block.querySelector('.language__selected-label');
      label.textContent = selectedLanguage;
    });

    setLanguage(selectedLanguage);
    languageBlocks.forEach((block) => block.classList.remove(openedClassName));
  });
});

document.addEventListener('click', (e) => {
  if (![...languageBlocks].some((block) => block.contains(e.target))) {
    languageBlocks.forEach((block) => block.classList.remove(openedClassName));
  }
});

function setLanguage(lang) {
  i18nElements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

function updateClassBasedOnScreenSize() {
  const screenWidth = window.outerWidth;

  if (screenWidth >= 768) {
    navLink.forEach((el) => {
      el.classList.remove('font-h5');
      el.classList.add('font-h3');
    });
  } else {
    navLink.forEach((el) => {
      el.classList.remove('font-h3');
      el.classList.add('font-h5');
    });
  }
}

updateClassBasedOnScreenSize();

window.addEventListener('resize', updateClassBasedOnScreenSize);
