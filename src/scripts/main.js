'use strict';
// sync the switches

const headerSwitch = document.querySelector('.header__switch');
const menuSwitch = document.querySelector('.menu__switch');

headerSwitch.addEventListener('change', (event) => {
  menuSwitch.value = event.target.value;
});

menuSwitch.addEventListener('change', (event) => {
  headerSwitch.value = event.target.value;
});

// menu classes added for body and overlay

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// email for reset

const form = document.querySelector('#form');

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};

// translations

const translateArrHeader = {
  'dates': {
    'ua': '10 серпня - 10 листопада',
    'en': '10th August - 10th Novemner',
  },
  'headline': {
    'ua': 'Мистецтво ХІХ - ХХ ст.',
    'en': 'Art of the XIX - XX centuries.',
  },
  'description': {
    'ua': 'Внесок українських митців у світову культуру 19-20 ст.',
    // eslint-disable-next-line max-len
    'en': 'The influence of Ukrainian artists on the world culture of the 19th and 20th centuries.',
  },
  'button': {
    'ua': 'Купити квиток',
    'en': 'Buy your ticket',
  },
};

// changing the language

const select = document.querySelector('select');
const allLang = ['ua', 'en'];
const location = window.location;

select.addEventListener('change', changeURLLanguage);

// 1) redirect towards the url incl. the language name

function changeURLLanguage() {
  const lang = select.value;

  location.href = window.location.pathname + '#' + lang;
}

function changeLanguage() {
  let hash = window.location.hash;

  hash = hash.substring(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#ua';
  }

  select.value = hash;

  document.querySelector('title').innerHTML
  = translateArrHeader['header__dates'][hash];

  for (const key in translateArrHeader) {
    const elem = document.querySelector(key);

    if (elem) {
      elem.innerHTML = translateArrHeader[key][hash];
    }
  }
}

changeLanguage();
