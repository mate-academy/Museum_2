'use strict';

const translations = {
  ua: {
    logo: {
      attr: 'Перейти догори сторінки',
    },
    menuBtnOpen: {
      attr: 'Відкрити бічне меню',
    },
    menuBtnClose: {
      attr: 'Закрити бічне меню',
    },
    languageSelector__button: {
      attr: 'Українська, Вибрати мову',
    },
    langugageSlector__description: {
      text: 'Виберіть мову',
    },
    headerDates: {
      text: '10 серпня - 10 листопада',
    },
    headerTitle: {
      text: 'Мистецтво ХІХ - ХХ ст.',
    },
    headerDescription: {
      text: 'Внесок українських митців у світову культуру 19-20 ст.',
    },
    buyTicketButton: {
      attr: 'Перейти до планування візиту',
      text: 'Купити квиток',
    },
    menuSheduleLabel: {
      text: 'Розклад сьогодні',
    },
    menuAddressLabel: {
      text: 'Адреса:',
    },
    menuAddressText: {
      text: 'Київ, вул. М. Грушевського, 6',
    },
    menuExhibitions: {
      attr: 'Перейти до виставок',
      text: 'Актуальні виставки',
    },
    menuNews: {
      attr: 'Перейти до новин',
      text: 'Новини',
    },
    menuEvents: {
      attr: 'Перейти до подій',
      text: 'Найближчі події',
    },
    actualExhibitionsTitle: {
      text: 'Актуальні виставки',
    },
    exhibitionTitleAngels: {
      text: 'Кураторська виставка “Ангели”',
    },
    exhibitionDescriptionAngels: {
      text: `Виставковий проект «Ангели» – знакова подія для української культури і водночас наймасштабніший...`,
    },
    exhibitionDatesArt: {
      text: 'Діє постійно',
    },
    exhibitionTitleArt: {
      text: 'Мистецтво ХХ ст. — XXI ст.',
    },
    exhibitionDescriptionArt: {
      text: `Знакові роботи Алли Горської, Миколи Самокиша, Федора Кричевського та інших митців.`,
    },
    goToArchiveExhibitionsButton: {
      attr: 'Перейти до архіву виставок',
      text: 'Архів виставок',
    },
    eventRegisterButton: {
      attr: 'Перейти до планування візиту',
      text: 'Зареєструватися',
    },
    eventTitleExcursion: {
      text: 'Кураторські екскурсії від Павла Гудімова ',
    },
    eventDescriptionExcursion: {
      text: `Таємниці підготовки, історії експонатів, магія дійства до і в момент вашої присутності – розгортатиметься...`,
    },
    eventDatesExcursion: {
      text: '14.08 о 13:00',
    },
    eventDatesMasterClass: {
      text: '16.08 о 13:00',
    },
    eventTitleMasterClass: {
      text: 'Майстер-клас “Подорож до Австралії”',
    },
    eventDescriptionMasterClass: {
      text: `Цієї неділі о 14:00 на арт-мандрівників чекає останній пункт кругосвітньої подорожі - Австралія.`,
    },
    goToEventCalendar: {
      text: 'Календар подій',
      attr: 'Перейти до календаря подій',
    },
    planVisitTitle: {
      text: 'Сплануйте візит до музею',
    },
    planVisitDescription: {
      text: `Оберіть зручний день, зареєструйтесь на події, що цікавлять, купіть квиток заздалегідь, щоб ніщо не завадило вам насолоджуватись мистецтвом.`,
    },
    planVisitButton: {
      text: 'Почати',
      attr: 'Перейти до планування візиту',
    },
    newsTitle: {
      text: 'Новини',
    },
    newsAnnouncementWinnerTitle: {
      text: 'Оголошення переможця',
    },
    newsAnnouncementWinnerDates: {
      text: '9 серпня 2019',
    },
    newsAnnouncementWinnerDescription: {
      text: `Друзі, сьогодні п'ятниця! А це означає, що час оголосити переможця розіграшу...`,
    },
    newsInternationalCatDayTitle: {
      text: 'Міжнародний день котів',
    },
    newsInternationalCatDayDates: {
      text: '9 серпня 2019',
    },
    newsInternationalCatDayDescription: {
      text: `Музей з левами не може просто так взяти і пропустити Міжнародний день котів!`,
    },
    newsAllNewsButton: {
      text: 'Усі новини',
      attr: 'Перейти до всіх новин',
    },
    digestSubscribeTitle: {
      text: 'Підпишіться на дайджест',
    },
    digestSubscribeDescription: {
      text: `Першими дізнавайтесь про новини музею та розіграші, отримуйте запрошення на події та читайте статті від кураторів`,
    },
    digestSubscribeButton: {
      text: 'Підписатись',
      attr: 'Перейти до підписки на дайджест',
    },
    contactsTitle: {
      text: 'Контакти',
    },
    contactsAdress: {
      text: 'Київ, вул. М. Грушевського, 6',
      attr: 'Показати на карті',
    },
    contactsTel: {
      text: 'тел.',
    },
    contactsFacebook: {
      attr: 'Перейти на офіційну сторінку у Facebook',
    },
    contactsX: {
      attr: 'Перейти на офіційну сторінку у X',
    },
    contactsInstagram: {
      attr: 'Перейти на офіційну сторінку у Instagram',
    },
    contactsTelegram: {
      attr: 'Перейти в офіційну групу у Telegram',
    },
    workSheduleTitle: {
      text: 'Розклад роботи',
    },
    workSheduleShedule: {
      text: `ПН: вихідний
              ВТ: вихідний
              СР: 10:00 - 17:00
              ЧТ: 10:00 - 17:00
              ПТ: 12:00 - 19:00
              СБ: 11:00 - 18:00
              НД: 10:00 - 17:00`,
    },
    footerMainLink: {
      text: 'Головна',
      attr: 'Перейти на головну сторінку',
    },
    footerExhibitionsLink: {
      text: 'Виставки',
      attr: 'Перейти до виставок',
    },
    footerNewsLink: {
      text: 'Новини',
      attr: 'Перейти до новин',
    },
    footerEventsLink: {
      text: 'Події',
      attr: 'Перейти до подій',
    },
    goToTopButton: {
      attr: 'Повернутися догори сторінки',
    },
  },

  en: {
    logo: {
      attr: 'Go to top of the page',
    },
    menuBtnOpen: {
      attr: 'Open side menu',
    },
    menuBtnClose: {
      attr: 'Close side menu',
    },
    languageSelector__button: {
      attr: 'English, Select language',
    },
    langugageSlector__description: {
      text: 'Choose your language',
    },
    headerDates: {
      text: 'August 10 - November 10',
    },
    headerTitle: {
      text: 'Art of the XIX - XX centuries',
    },
    headerDescription: {
      text: `Contribution of Ukrainian artists to world culture of the 19-20 centuries.`,
    },
    buyTicketButton: {
      attr: 'Go to planning a visit',
      text: 'Buy a ticket',
    },
    menuSheduleLabel: {
      text: "Today's schedule",
    },
    menuAddressLabel: {
      text: 'Address:',
    },
    menuAddressText: {
      text: 'Kyiv, 6, M. Hrushevskoho St.',
    },
    menuExhibitions: {
      attr: 'Go to exhibitions',
      text: 'Current exhibitions',
    },
    menuNews: {
      attr: 'Go to news',
      text: 'News',
    },
    menuEvents: {
      attr: 'Go to events',
      text: 'Upcoming events',
    },
    actualExhibitionsTitle: {
      text: 'Current exhibitions',
    },
    exhibitionTitleAngels: {
      text: 'Curatorial exhibition “Angels”',
    },
    exhibitionDescriptionAngels: {
      text: `The exhibition project "Angels" is a landmark event for Ukrainian culture and at the same time the largest...`,
    },
    exhibitionDatesAngels: {
      text: 'Is permanent',
    },
    exhibitionTitleArt: {
      text: 'Art of the XX century — XXI century',
    },
    exhibitionDescriptionArt: {
      text: `Iconic works by Alla Horska, Mykola Samokysh, Fedir Krychevsky and other artists.`,
    },
    goToArchiveExhibitionsButton: {
      attr: 'Go to the archive of exhibitions',
      text: 'Exhibition archive',
    },
    eventRegisterButton: {
      attr: 'Go to planning a visit',
      text: 'Register',
    },
    eventTitleExcursion: {
      text: 'Curatorial excursions by Pavlo Hudymov',
    },
    eventDescriptionExcursion: {
      text: `Secrets of preparation, stories of exhibits, the magic of the action before and during your presence - will unfold...`,
    },
    eventDatesExcursion: {
      text: 'August 14 at 13:00',
    },
    eventDatesMasterClass: {
      text: 'August 16 at 13:00',
    },
    eventTitleMasterClass: {
      text: 'Master class “Journey to Australia”',
    },
    eventDescriptionMasterClass: {
      text: `This Sunday at 14:00, art travelers will have the last point of a round-the-world trip - Australia.`,
    },
    goToEventCalendar: {
      text: 'Events calendar',
      attr: 'Go to events calendar',
    },
    planVisitTitle: {
      text: 'Plan your visit to the museum',
    },
    planVisitDescription: {
      text: `Choose a convenient day, register for events that interest you, buy a ticket in advance so that nothing prevents you from enjoying art.`,
    },
    planVisitButton: {
      text: 'Start',
      attr: 'Go to planning a visit',
    },
    newsTitle: {
      text: 'News',
    },
    newsAnnouncementWinnerTitle: {
      text: 'Winner announcement',
    },
    newsAnnouncementWinnerDates: {
      text: 'August 9, 2019',
    },
    newsAnnouncementWinnerDescription: {
      text: `Friends, today is Friday! And this means that it's time to announce the winner of the drawing...`,
    },
    newsInternationalCatDayTitle: {
      text: 'International Cat Day',
    },
    newsInternationalCatDayDates: {
      text: 'August 9, 2019',
    },
    newsInternationalCatDayDescription: {
      text: `A museum with lions cannot just ignore International Cat Day!`,
    },
    newsAllNewsButton: {
      text: 'All news',
      attr: 'Go to all news',
    },
    digestSubscribeTitle: {
      text: 'Subscribe to the digest',
    },
    digestSubscribeDescription: {
      text: `Be the first to learn about museum news and drawings, receive invitations to events and read articles from curators`,
    },
    digestSubscribeButton: {
      text: 'Subscribe',
      attr: 'Go to digest subscription',
    },
    contactsTitle: {
      text: 'Contacts',
    },
    contactsAdress: {
      text: 'Kyiv, 6, M. Hrushevskoho St.',
      attr: 'Show on map',
    },
    contactsTel: {
      text: 'tel.',
    },
    contactsFacebook: {
      attr: 'Go to the official Facebook page',
    },
    contactsX: {
      attr: 'Go to the official X page',
    },
    contactsInstagram: {
      attr: 'Go to the official Instagram page',
    },
    contactsTelegram: {
      attr: 'Go to the official Telegram group',
    },
    workSheduleTitle: {
      text: 'Work schedule',
    },
    workSheduleShedule: {
      text: `Mon: day off
              Tue: day off
              Wed: 10:00 - 17:00
              Thu: 10:00 - 17:00
              Fri: 12:00 - 19:00
              Sat: 11:00 - 18:00
              Sun: 10:00 - 17:00`,
    },
    footerMainLink: {
      text: 'Main',
      attr: 'Go to the main page',
    },
    footerExhibitionsLink: {
      text: 'Exhibitions',
      attr: 'Go to exhibitions',
    },
    footerNewsLink: {
      text: 'News',
      attr: 'Go to news',
    },
    footerEventsLink: {
      text: 'Events',
      attr: 'Go to events',
    },
    goToTopButton: {
      attr: 'Go to top of the page',
    },
  },
};

export default translations;
