'use strict';

let changeLanguage;
let syncLanguage;

document.addEventListener('DOMContentLoaded', () => {
  const customSelects = document.querySelectorAll('.select');
  const elementsToChange = document.querySelectorAll(
    '[data-lang-ua], [data-lang-en]',
  );
  const todaySchedule = document.getElementById('today-schedule');

  const getScheduleText = (lang) => {
    const dayIndex = new Date().getDay();
    const isEn = lang.toLowerCase() === 'en';
    const offText = isEn ? 'day off' : 'вихідний';

    switch (dayIndex) {
      case 0:
        return '10:00 - 17:00';
      case 1:
      case 2:
        return offText;
      case 3:
        return '10:00 - 17:00';
      case 4:
      case 5:
        return '12:00 - 19:00';
      case 6:
        return '11:00 - 18:00';
      default:
        return '12:00 - 19:00';
    }
  };

  changeLanguage = (lang) => {
    elementsToChange.forEach((el) => {
      const text = el.getAttribute(`data-lang-${lang.toLowerCase()}`);

      if (text) {
        el.textContent = text;
      }
    });

    if (todaySchedule) {
      todaySchedule.textContent = getScheduleText(lang);
    }
  };

  syncLanguage = (lang) => {
    window.localStorage.setItem('selectedLang', lang);

    customSelects.forEach((cs) => {
      const btn = cs.querySelector('.select__button');

      if (btn) {
        btn.textContent = lang;
      }
    });

    changeLanguage(lang);
  };

  customSelects.forEach((customSelect) => {
    const btn = customSelect.querySelector('.select__button');
    const items = customSelect.querySelectorAll('.select__item');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      customSelect.classList.toggle('is-open');

      const expanded = customSelect.classList.contains('is-open');

      btn.setAttribute('aria-expanded', expanded);
    });

    items.forEach((item) => {
      item.addEventListener('click', () => {
        const lang = item.getAttribute('data-value');

        syncLanguage(lang);
        customSelect.classList.remove('is-open');
      });
    });
  });

  document.addEventListener('click', (e) => {
    customSelects.forEach((cs) => {
      if (!cs.contains(e.target)) {
        cs.classList.remove('is-open');
      }
    });
  });

  const initialLang = window.localStorage.getItem('selectedLang') || 'UA';

  syncLanguage(initialLang);

  const subscribeForm = document.querySelector('.subscribe__form');

  if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      subscribeForm.reset();

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});
