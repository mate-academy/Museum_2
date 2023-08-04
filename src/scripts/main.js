/* eslint-disable max-len */
/* eslint-disable no-undef */
'use strict';

const scrollTopBtn = document.getElementById('myBtn');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1000
    || document.documentElement.scrollTop > 1000) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
// eslint-disable-next-line no-unused-vars
scrollTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.header__burger-menu');
const html = document.querySelector('html');
const header = document.querySelector('.header');
const navLinkHeader = header.querySelectorAll('.nav__link');
const headerButton = header.querySelector('.button');
const buttonsBuy = document.querySelectorAll('[data-buy]');
const buttonsRegister = document.querySelectorAll('[data-register]');
const form = document.querySelector('.subscribe__form');
const footer = document.querySelector('.footer');
const subscribe = document.querySelector('.subscribe');
const selectLanguage = document.querySelector('.header__change-lang');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('header__burger-menu--active');
  menu.classList.toggle('menu--active');
  headerButton.classList.toggle('button--menu-active');
  html.classList.toggle('block-scroll');
  selectLanguage.classList.toggle('header__change-lang--active');
});

navLinkHeader.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.toggle('header__burger-menu--active');
    menu.classList.toggle('menu--active');
    headerButton.classList.toggle('button--menu-active');
    html.classList.toggle('block-scroll');
  });
});

buttonsBuy.forEach((button) => {
  button.addEventListener('click', () => {
    footer.scrollIntoView({ behavior: 'smooth' });
  });
});

buttonsRegister.forEach((button) => {
  button.addEventListener('click', () => {
    subscribe.scrollIntoView({ behavior: 'smooth' });
  });
});

headerButton.addEventListener('click', () => {
  footer.scrollIntoView({ behavior: 'smooth' });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

// -------------------------

const languageArr = {
  'header__date': {
    'ua': '10 серпня - 10 листопада',
    'en': 'August 10 - November 10',
  },

  'header__title': {
    'ua': 'Мистецтво ХІХ - ХХ ст.',
    'en': 'Art of the 19th - 20th centuries.',
  },

  'header__event-name': {
    'ua': 'Внесок українських митців у світову культуру 19-20 ст.',
    'en': 'The contribution of Ukrainian artists to the world culture of the 19th and 20th centuries.',
  },

  'button--header': {
    'ua': 'Купити квиток',
    'en': 'Buy a ticket',
  },

  'menu__timetable-today': {
    'ua': `Розклад сьогодні:
      <br>
      <strong>12:00 - 19:00</strong>`,
    'en': `Schedule today:
      <br>
      <strong>12:00 - 19:00</strong>`,
  },

  'menu__address': {
    'ua': `Адреса:
      <br>
      <strong>Київ, вул. М. Грушевського, 6</strong>
      </address>`,
    'en': `Address:
      <br>
      <strong>Kyiv, str. M. Hrushevsky, 6</strong>
      </address>`,
  },

  'nav__link-header-1': {
    'ua': 'Актуальні виставки',
    'en': 'Actual exhibitions',
  },

  'nav__link-header-2': {
    'ua': 'Найближчі події',
    'en': 'Upcoming events',
  },

  'nav__link-header-3': {
    'ua': 'Новини',
    'en': 'News',
  },

  'title--exhibitions': {
    'ua': 'Актуальні виставки',
    'en': 'Actual exhibitions',
  },

  'card__image-caption-1': {
    'ua': 'Кураторська виставка “Ангели”',
    'en': 'Curated exhibition "Angels"',
  },

  'card__descr--exhibition-1': {
    'ua': 'Виставковий проект «Ангели» – знакова подія для української культури і водночас наймасштабніший...',
    'en': 'The exhibition project "Angels" is a landmark event for Ukrainian culture and at the same time the largest...',
  },

  'button--card-1': {
    'ua': 'Купити квиток',
    'en': 'Buy a ticket',
  },

  'card__date-1': {
    'ua': 'Діє постійно',
    'en': 'Works constantly',
  },

  'card__image-caption-2': {
    'ua': 'Мистецтво ХХ ст. — XXI ст.',
    'en': 'Art of the 20th century — XXI century.',
  },

  'card__descr-2': {
    'ua': 'Знакові роботи Алли Горської, Миколи Самокиша, Федора Кричевського та інших митців.',
    'en': 'Iconic works by Alla Gorska, Mykola Samokysh, Fedor Krychevsky and other artists.',
  },

  'button--card-2': {
    'ua': 'Купити квиток',
    'en': 'Buy a ticket',
  },

  'button--card-transparent-1': {
    'ua': 'Архів виставок',
    'en': 'Archive of exhibitions',
  },

  'title-events': {
    'ua': 'Найближчі події',
    'en': 'Upcoming events',
  },

  'card__date-2': {
    'ua': '14.08 о 13:00',
    'en': '14.08 at 13:00',
  },

  'card__image-caption-3': {
    'ua': 'Кураторські екскурсії від Павла Гудімова',
    'en': 'Curated tours by Pavel Gudimov',
  },

  'card__descr-3': {
    'ua': 'Таємниці підготовки, історії експонатів, магія дійства до і вмомент вашої присутності – розгортатиметься...',
    'en': 'The secrets of preparation, the history of the exhibits, the magic of action before and at the moment of your presence will unfold...',
  },

  'button--card-3': {
    'ua': 'Зареєструватись',
    'en': 'Register',
  },

  'card__date-3': {
    'ua': '16.08 о 13:00',
    'en': '16.08 at 13:00',
  },

  'card__image-caption-4': {
    'ua': 'Майстер-клас “Подорож до Австралії”',
    'en': 'Master class "Travel to Australia"',
  },

  'card__descr-4': {
    'ua': 'Цієї неділі о 14:00 на арт-мандрівників чекає останній пункт кругосвітньої подорожі - Австралія.',
    'en': 'This Sunday at 2:00 p.m., the last point of the round-the-world trip awaits art travelers - Australia.',
  },

  'button--card-4': {
    'ua': 'Зареєструватись',
    'en': 'Register',
  },

  'button--card-transparent-2': {
    'ua': 'Календар подій',
    'en': 'Calendar of events',
  },

  'plan-your-visit__title': {
    'ua': 'Сплануйте візит до музею',
    'en': 'Plan a visit to the museum',
  },

  'plan-your-visit__text': {
    'ua': 'Оберіть зручний день, зареєструйтесь на події, що цікавлять, купіть квиток заздалегідь, щоб ніщо не завадило вам насолоджуватись мистецтвом.',
    'en': 'Choose a convenient day, register for events of interest, buy a ticket in advance so that nothing prevents you from enjoying art.',
  },

  'button--plan-your-visit': {
    'ua': 'Почати',
    'en': 'Begin',
  },

  'title-news': {
    'ua': 'Новини',
    'en': 'News',
  },

  'card__date-4': {
    'ua': '9 серпня 2019',
    'en': 'August 9, 2019',
  },

  'card__image-caption-5': {
    'ua': 'Оголошення переможця',
    'en': 'Announcement of the winner',
  },

  'card__descr-5': {
    'ua': `Друзі, сьогодні п'ятниця! А це означає, що час оголосити переможця розіграшу...`,
    'en': `Friends, today is Friday! And that means it's time to announce the winner of the raffle...`,
  },

  'card__date-5': {
    'ua': '9 серпня 2019',
    'en': 'August 9, 2019',
  },

  'card__image-caption-6': {
    'ua': 'Міжнародний день котів',
    'en': 'International Cat Day',
  },

  'card__descr-6': {
    'ua': 'Музей з левами не може просто так взяти і пропустити Міжнародний день котів!',
    'en': 'A museum with lions cannot simply take and miss International Cat Day!',
  },

  'button--card-transparent-3': {
    'ua': 'Усі новини',
    'en': 'All news',
  },

  'title-subscribe': {
    'ua': 'Підпишіться на дайджест',
    'en': 'Subscribe to the digest',
  },

  'subscribe__text': {
    'ua': 'Першими дізнавайтесь про новини музею та розіграші, отримуйте запрошення на події та читайте статті від кураторів',
    'en': 'Be the first to hear about museum news and raffles, receive invitations to events and read articles from curators',
  },

  'button--subscribe': {
    'ua': 'Підписатись',
    'en': 'Subscribe',
  },

  'footer__caption-1': {
    'ua': 'Контакти',
    'en': 'Contacts',
  },

  'footer__link-1': {
    'ua': `Київ, <br>
      вул. М. Грушевського, 6`,
    'en': `Kyiv, <br>
      St. M. Hrushevsky, 6`,
  },

  'footer__link-2': {
    'ua': 'тел. 278-13-57, 278-74-54',
    'en': 'tel. 278-13-57, 278-74-54',
  },

  'footer__caption-2': {
    'ua': 'Розклад роботи',
    'en': 'Work schedule',
  },

  'footer__timetable': {
    'ua': `<li class="footer__list-item">
        ПН: вихідний
      </li>
      <li class="footer__list-item">
        ВТ: вихідний
      </li>
      <li class="footer__list-item">
        СР: 10:00 - 17:00
      </li>
      <li class="footer__list-item">
        ЧТ: 10:00 - 17:00
      </li>
      <li class="footer__list-item">
        ПТ: 12:00 - 19:00
      </li>
      <li class="footer__list-item">
        СБ: 11:00 - 18:00
      </li>
      <li class="footer__list-item">
        НД: 10:00 - 17:00
      </li>`,
    'en': `<li class="footer__list-item">
        Mon: day off
      </li>
      <li class="footer__list-item">
        Tue: day off
      </li>
      <li class="footer__list-item">
        Wed: 10:00 - 17:00
      </li>
      <li class="footer__list-item">
        Thu: 10:00 - 17:00
      </li>
      <li class="footer__list-item">
        Fri: 12:00 - 19:00
      </li>
      <li class="footer__list-item">
        Sat: 11:00 - 18:00
      </li>
      <li class="footer__list-item">
        Sun: 10:00 - 17:00
      </li>`,
  },

  'footer__caption-3': {
    'ua': 'Головна',
    'en': 'Main',
  },

  'nav__link-footer-1': {
    'ua': 'Виставки',
    'en': 'Exhibitions',
  },

  'nav__link-footer-2': {
    'ua': 'Події',
    'en': 'Events',
  },

  'nav__link-footer-3': {
    'ua': 'Новини',
    'en': 'News',
  },
};

const select = document.querySelector('select');
const allLang = ['en', 'ua'];

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
  const lang = select.value;

  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;

  hash = hash.substr(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#ua';
    location.reload();
  }

  select.value = hash;

  for (const key in languageArr) {
    const elem = document.querySelector('.lng-' + key);

    if (elem) {
      elem.innerHTML = languageArr[key][hash];
    }
  }
}

changeLanguage();
