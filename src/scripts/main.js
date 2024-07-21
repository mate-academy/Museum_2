'use strict';

const langObj = {
  'header-date' : {
    "en" : "august 10 - november 10",
    "ua" : "10 серпня - 10 листопада",
  },

  'header-label' : {
    "en" : "Art of the 19th - 20th centuries.",
    "ua" : "Мистецтво ХІХ - ХХ ст.",
  },

  'middle-text' : {
    "en" : "The contribution of Ukrainian artists to the world culture of the 19th and 20th centuries",
    "ua" : "Внесок українських митців у світову культуру 19-20ст",
  },

  'middle-btn' : {
    "en" : "Buy a ticket",
    "ua" : "Купити квиток",
  },

  'exhibitions' : {
    "en" : "Actual exhibitions",
    "ua" : "Актуальні виставки",
  },

  'exhibitions-date' : {
    "en" : "Works constantly",
    "ua" : "Діє постійно",
  },

  'exhibitions-title' : {
    "en" : "Curated exhibition Angels",
    "ua" : "Кураторська виставка “Ангели”",
  },

  'exhibitions-text' : {
    "en" : "The exhibition project Angels is a landmark event for Ukrainian culture and at the same time the largest...",
    "ua" : "Виставковий проект «Ангели» – знакова подія для української культури і водночас наймасштабніший...",
  },

  'exhibitions-btn' : {
    "en" : "Buy a ticket",
    "ua" : "Купити квиток",
  },

  'exhibitions-title-2' : {
    "en" : "Art of the 20th century — XXI century.",
    "ua" : "Мистецтво ХХ ст. — XXI ст.",
  },

  'exhibitions-text-2' : {
    "en" : "Iconic works of Alla Gorska, Mykola Samokysh, Fedor Krychevsky, and other artists.",
    "ua" : "Знакові роботи Алли Горської, Миколи Самокиша, Федора Кричевського та інших митців.",
  },

  'exhibitions-btn-2' : {
    "en" : "Buy a ticket",
    "ua" : "Купити квиток",
  },

  'exhibitions-content-btn' : {
    "en" : "Archive of exhibitions",
    "ua" : "Архів виставок",
  },

  'event-title' : {
    "en" : "Upcoming events",
    "ua" : "Найближчі події",
  },

  'event-card' : {
    "en" : "Curated tours by Pavel Gudimov",
    "ua" : "Кураторські екскурсії від Павла Гудімова ",
  },

  'event-text' : {
    "en" : "The secrets of preparation, the history of the exhibits, the magic of action before and during your presence will unfold...",
    "ua" : "Таємниці підготовки, історії експонатів, магія дійства до і в момент вашої присутності – розгортатиметься...",
  },

  'event-btn' : {
    "en" : "Register",
    "ua" : "Зареєструватись",
  },

  'event-title-2' : {
    "en" : "Master class “Travel to Australia”",
    "ua" : "Майстер-клас “Подорож до Австралії”",
  },

  'event-text-2' : {
    "en" : "This Sunday at 2:00 p.m., the last point of the round-the-world trip awaits art travelers - Australia",
    "ua" : "Цієї неділі о 14:00 на арт-мандрівників чекає останній пункт кругосвітньої подорожі - Австралія.",
  },

  'event-btn-2' : {
    "en" : "Register",
    "ua" : "Зареєструватись",
  },

  'event-button' : {
    "en" : "Calendar of events",
    "ua" : "Календар подій",
  },

  'visit-title' : {
    "en" : "Plan a visit to the museum",
    "ua" : "Сплануйте візит до музею",
  },

  'visit-text' : {
    "en" : "Choose a convenient day, register for events of interest, and buy a ticket in advance so that nothing prevents you from enjoying art",
    "ua" : "Оберіть зручний день, зареєструйтесь на події, що цікавлять, купіть квиток заздалегідь, щоб ніщо не завадило вам насолоджуватись мистецтвом",
  },

  'visit-btn' : {
    "en" : "Start",
    "ua" : "Почати",
  },

  'news-title' : {
    "en" : "News",
    "ua" : "Новини",
  },

  'news-date' : {
    "en" : "August 9, 2019",
    "ua" : "9 серпня 2019",
  },

  'news-label' : {
    "en" : "Announcement of the winner",
    "ua" : "Оголошення переможця",
  },

  'news-text' : {
    "en" : "Friends, today is Friday! And that means it's time to announce the winner of the raffle...",
    "ua" : "Друзі, сьогодні п'ятниця! А це означає, що час оголосити переможця розіграшу...",
  },

  'news-date-2' : {
    "en" : "August 9, 2019",
    "ua" : "9 серпня 2019",
  },

  'news-label-2' : {
    "en" : "International Cat Day",
    "ua" : "Міжнародний день котів",
  },

  'news-text-2' : {
    "en" : "A museum with lions cannot simply take and miss International Cat Day!",
    "ua" : "Музей з левами не може просто так взяти і пропустити Міжнародний день котів!",
  },

  'news-btn' : {
    "en" : "All news",
    "ua" : "Усі новини",
  },

  'subscribe-title' : {
    "en" : "Subscribe to the digest",
    "ua" : "Підпишіться на дайджест",
  },

  'subscribe-text' : {
    "en" : "Be the first to learn about museum news and raffles, receive invitations to events and read articles from curators",
    "ua" : "Першими дізнавайтесь про новини музею та розіграші, отримуйте запрошення на події та читайте статті від кураторів",
  },

  'subscribe-btn' : {
    "en" : "Subscribe",
    "ua" : "Підписатися",
  },

  'contacts-title' : {
    "en" : "Contacts",
    "ua" : "Контакти",
  },

  'contacts-city' : {
    "en" : "Kyiv,",
    "ua" : "Київ,",
  },

  'contacts-street' : {
    "en" : "St. M. Hrushevsky, 6",
    "ua" : "вул. М. Грушевського, 6",
  },

  'contacts-num' : {
    "en" : "tel. 278-13-57, 278-74-54",
    "ua" : "тел. 278-13-57, 278-74-54",
  },

  'shedule-title' : {
    "en" : "Work schedule",
    "ua" : "Розклад роботи",
  },

  'shedule-mon' : {
    "en" : "Mon: day off",
    "ua" : "ПН: вихідний",
  },

  'shedule-tue' : {
    "en" : "Tue: day off",
    "ua" : "ВТ: вихідний",
  },

  'shedule-wed' : {
    "en" : " Wed: 10:00 - 17:00",
    "ua" : "СР: 10:00 - 17:00",
  },

  'shedule-thu' : {
    "en" : "Thu: 10:00 - 17:00",
    "ua" : "ЧТ: 10:00 - 17:00",
  },

  'shedule-fri' : {
    "en" : " Fri: 12:00 - 19:00",
    "ua" : "ПТ: 12:00 - 19:00",
  },

  'shedule-sat' : {
    "en" : "Sat: 11:00 - 18:00",
    "ua" : "СБ: 11:00 - 18:00",
  },

  'shedule-sun' : {
    "en" : "Sun: 10:00 - 17:00",
    "ua" : "НД: 10:00 - 17:00",
  },

  'bottom-title' : {
    "en" : "The main",
    "ua" : "Головна",
  },

  'bottom-exhibitions' : {
    "en" : "Exhibitions",
    "ua" : "Виставки",
  },

  'bottom-event' : {
    "en" : "Events",
    "ua" : "Події",
  },

  'bottom-news' : {
    "en" : "News",
    "ua" : "Новини",
  },

  'midle-shedule' : {
    "en" : "News",
    "ua" : "Новини",
  },

  'midle-shedule-adres' : {
    "en" : "Address:",
    "ua" : "Адреса:",
  },

  'midle-shedule-street' : {
    "en" : "Kyiv, str. M. Hrushevsky, 6",
    "ua" : "Київ, вул. М. Грушевського, 6",
  },

  'menu-exhibitions' : {
    "en" : "Actual exhibitions",
    "ua" : "Актуальні виставки",
  },


  'menu-event' : {
    "en" : "Upcoming events",
    "ua" : "Найближчі події",
  },


  'menu-news' : {
    "en" : "News",
    "ua" : "Новини",
  },


  'menu-btn' : {
    "en" : "Buy a ticket",
    "ua" : "Купити квиток",
  },

};



const allLang = ['en', 'ua'];

// Вибір основних елементів селектора мови
const mainSelect = document.querySelector('.main-select');
const sidebarSelect = document.querySelector('.menu__top__lng');

// Додання обробника подій для зміни мови
mainSelect.addEventListener('change', changeUrlLanguage);
sidebarSelect.addEventListener('change', changeUrlLanguage);

// Функція для зміни мови та оновлення URL без перезавантаження сторінки
function changeUrlLanguage() {
    let lang = this.value;

    // Оновлення параметрів URL без перезавантаження сторінки
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('lang', lang);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.pushState({}, '', newUrl);

    changeLanguage(); // Виклик функції зміни мови без перезавантаження сторінки
}

// Функція для зміни мови на основі параметрів URL
function changeLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang');

    if (!allLang.includes(lang)) {
        lang = 'en'; // Мова за замовчуванням, якщо параметр не вірний
    }

    // Оновлення вибраної мови в обох селекторах
    mainSelect.value = lang;
    sidebarSelect.value = lang;

    // Оновлення текстового вмісту в елементах з класами мови
    for (let key in langObj) {
        let elem = document.querySelector(`.lng-${key}`);
        if (elem) {
            elem.textContent = langObj[key][lang];
        }
    }
}

// Початковий виклик для встановлення мови на основі параметрів URL
changeLanguage();
