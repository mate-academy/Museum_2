'use strict';
document.getElementById('subscription__form').addEventListener('submit', function(event) {

  setTimeout(function() {
          location.reload();
  }, 1100);

})


document.querySelectorAll(".language-switcher").forEach(switcher => {
  switcher.addEventListener("change", function () {
    const selectedLanguage = this.value;

    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.dataset.key;
      el.innerHTML = translations[selectedLanguage][key];
    });
  });
});

const translations = {
  uk: {
    headerDate: "10 серпня - 10 листопада",
    headerTitle: "Мистецтво ХІХ - ХХ ст.",
    headerDescription: "Внесок українських митців у світову культуру 19-20 ст.",
    asideTypeSchedule: "Розклад сьогодні:",
    asideTypeAddress: "Адреса:",
    addressValue: "Київ, вул. М. Грушевського, 6",
    actualExhibs: "Актуальні виставки",
    upcomingEvents: "Найближчі події",
    news: "Новини",
    archiveExhibitions: "Архів виставок",
    exhibDateFirst: "11.07 - 22.09",
    exhibDateSecond: "Діє постійно",
    exhibTitleFirst: "Кураторська виставка “Ангели”",
    exhibTitleSecond: "Мистецтво ХХ ст. — XXI ст.",
    exhibAboutFirst: "Виставковий проект «Ангели» – знакова подія для української культури і водночас наймасштабніший...",
    exhibAboutSecond: "Знакові роботи Алли Горської, Миколи Самокиша, Федора Кричевського та інших митців.",
    calendarEvents: "Календар подій",
    eventDateFirst: "14.08 о 13:00",
    eventDateSecond: "16.08 о 13:00",
    eventTitleFirst: "Кураторські екскурсії від Павла Гудімова",
    eventTitleSecond: "Майстер-клас “Подорож до Австралії”",
    eventAboutFirst: "Таємниці підготовки, історії експонатів, магія дійства до і в момент вашої присутності – розгортатиметься...",
    eventAboutSecond: "Цієї неділі о 14:00 на арт-мандрівників чекає останній пункт кругосвітньої подорожі - Австралія.",
    planVisitTitle: "Сплануйте візит до музею",
    planVisitAbout: "Оберіть зручний день, зареєструйтесь на події, що цікавлять, купіть квиток заздалегідь, щоб ніщо не завадило вам насолоджуватись мистецтвом",
    newDateFirst: "9 серпня 2019",
    newDateSecond: "9 серпня 2019",
    newTitleFirst: "Оголошення переможця",
    newTitleSecond: "Міжнародний день котів",
    newAboutFirst: "Друзі, сьогодні п'ятниця! А це означає, що час оголосити переможця розіграшу...",
    newAboutSecond: "Музей з левами не може просто так взяти і пропустити Міжнародний день котів!",
    subscribeTitle: "Підпишіться на дайджест",
    subscribeText: "Першими дізнавайтесь про новини музею та розіграші, отримуйте запрошення на події та читайте статті від кураторів",
    footerTitleContacts: "Контакти",
    footerTitleSchedule: "Розклад роботи",
    workHours: `ПН: вихідний
            <br/>ВТ: вихідний
            <br/>СР: 10:00 - 17:00
            <br/>ЧТ: 10:00 - 17:00
            <br/>ПТ: 12:00 - 19:00
            <br/>СБ: 11:00 - 18:00
            <br/>НД: 10:00 - 17:00`,
    footerTitleMain: "Головна",
    tel: "тел.",
    exhibLink: "Виставки",
    eventLink: "Події",
    registerButton: "Зареєструватись",
    buyTicket: "Купити квиток",
    startButton: "Почати",
    allNews: "Усі новини",
    subscribeButton: "Підписатись",
    contacts: "Контакти",
    previousBtn: "Назад",
    nextBtn: "Вперед"
  },
  en: {
    headerDate: "August 10 - November 10",
    headerTitle: "Art of the 19th - 20th c.",
    headerDescription: "The contribution of Ukrainian artists to world culture in the 19th-20th c.",
    asideTypeSchedule: "Schedule for today:",
    asideTypeAddress: "Address:",
    addressValue: "6, Hrushevskoho Str., Kyiv",
    actualExhibs: "Current exhibitions",
    upcomingEvents: "Upcoming events",
    news: "News",
    archiveExhibitions: "Archive of exhibitions",
    exhibDateFirst: "11.07 - 22.09",
    exhibDateSecond: "Works constantly",
    exhibTitleFirst: "Curatorial exhibition “Angels”",
    exhibTitleSecond: "Art of the XX - XXI centuries.",
    exhibAboutFirst: "The exhibition project “Angels” is a landmark event for Ukrainian culture and at the same time the largest one...",
    exhibAboutSecond: "Significant works by Alla Horska, Mykola Samokysh, Fedir Krychevskyi and other artists.",
    calendarEvents: "Calendar of events",
    eventDateFirst: "14/08 at 1:00 PM",
    eventDateSecond: "08/16 at 1:00 PM",
    eventTitleFirst: "Curatorial tours by Pavel Gudimov",
    eventTitleSecond: "Master class “Journey to Australia”",
    eventAboutFirst: "The secrets of preparation, the history of the exhibits, the magic of the action before and during your presence will unfold...",
    eventAboutSecond: "This Sunday at 2:00 PM art travelers will reach the last destination of their world tour - Australia.",
    planVisitTitle: "Plan a visit to the museum",
    planVisitAbout: "Choose a convenient day, sign up for events of interest, buy a ticket in advance so that nothing prevents you from enjoying art",
    newDateFirst: "August 9, 2019",
    newDateSecond: "August 9, 2019",
    newTitleFirst: "Winner Announcement",
    newTitleSecond: "International Cat Day",
    newAboutFirst: "Friends, it's Friday! And that means it's time to announce the winner of the draw...",
    newAboutSecond: "The Museum with Lions can't just miss International Cat Day!",
    subscribeTitle: "Subscribe to the digest",
    subscribeText: "Be the first to know about museum news and giveaways, receive invitations to events, and read articles from curators",
    footerTitleContacts: "Contacts",
    footerTitleSchedule: "Work hours",
    workHours: `Mon: Closed
            <br/>Tue: Closed
            <br/>Wed: 10:00 AM - 5:00 PM
            <br/>Thu: 10:00 AM - 5:00 PM
            <br/>Fri: 12:00 PM - 7:00 PM
            <br/>Sat: 11:00 AM - 6:00 PM
            <br/>Sun: 10:00 AM - 5:00 PM`,
    footerTitleMain: "Main",
    tel: "tel.",
    exhibLink: "Exhibitions",
    eventLink: "Events",
    registerButton: "Sign Up",
    buyTicket: "Buy Ticket",
    startButton: "Start",
    allNews: "All news",
    subscribeButton: "Subscribe",
    previousBtn: "Previous",
    nextBtn: "Next"
  }
};

// slider
const slider = document.querySelector(".news__blocks");
const prevBtn = document.querySelector(".slider__btn--prev");
const nextBtn = document.querySelector(".slider__btn--next");

let index = 0;
const step = 1;

nextBtn.addEventListener("click", () => {
  const totalSlides = document.querySelectorAll(".news__block").length;
  if (index < totalSlides - step) {
    index += step;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index -= step;
    updateSlider();
  }
});

function updateSlider() {
  const slideWidth = document.querySelector(".news__block").offsetWidth;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}
