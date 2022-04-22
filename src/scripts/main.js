'use strict';

const headerBody = document.querySelector('.header__body');
const decorationWrapper = document.querySelector('.header__decoration-wrapper');
const burgerСontent = document.querySelector('.burger__content');
const burgerImage = document.querySelector('.burger__image');

if (window.innerWidth > 991) {
  /* decorationWrapper и burgerImage - блоки с изображениями в header.
  Высота устанавливается зависимо от высоты блока содержимого (headerBody),
  ширина - динамически от высоты, умноженой на соотношение ширины
  и высоты изображения.
  burgerСontent - блок с контентом в бургере. Соответсует высоте и
  ширине блока содердимого в header */
  decorationWrapper.style.height = headerBody.clientHeight + 'px';
  decorationWrapper.style.width = decorationWrapper.clientHeight * 1.06 + 'px';
  burgerСontent.style.height = headerBody.clientHeight + 'px';
  burgerСontent.style.width = headerBody.clientWidth + 'px';
  burgerImage.style.height = headerBody.clientHeight + 'px';
  burgerImage.style.width = decorationWrapper.clientHeight * 0.89 + 'px';
}

/* Тоже самое для демонстрации измненений при смене ширины экрана */
window.addEventListener('resize', function() {
  decorationWrapper.style.height = headerBody.clientHeight + 'px';

  decorationWrapper.style.width = decorationWrapper.clientHeight
    * 1.06 + 'px';
  burgerСontent.style.height = headerBody.clientHeight + 'px';
  burgerСontent.style.width = headerBody.clientWidth + 'px';
  burgerImage.style.height = headerBody.clientHeight + 'px';
  burgerImage.style.width = decorationWrapper.clientHeight * 0.89 + 'px';
});

document.addEventListener('click', function(el) {
  /* Код выпадающего списка с выбором языка */
  const langItems = document.querySelectorAll('.nav__lang-items');
  const langContainer = document.querySelector('.nav__lang-container');
  const langChoise = document.querySelector('.nav__lang-choise');
  const e = el.target;

  if (e.closest('.nav__lang-choise')) {
    /* Добавить / убрать класс, что-бы сделать плавное появление языков */
    langContainer.classList.toggle('active');
    /* Добавить / убрать класс, что-бы сделать плавный разворот стрелки */
    langChoise.classList.toggle('active');
  }

  /* Блок языков окрыт, если пользователь
  кликнул вне блока - он закрывется */
  if (langContainer.classList.contains('active')
  && !e.closest('.nav__languages')) {
    langContainer.classList.remove('active');
    langChoise.classList.remove('active');
  }

  for (let i = 0; i < langItems.length; i++) {
    if (e === langItems[i]) {
      el.preventDefault(); /* Блокируется переход по ссылке */

      /* Сохранить текс аббревиатуры выбираемого языка */
      const text = langItems[i].innerHTML;

      /* Поменять местами дефолтную и выбранную аббревиатуры */
      langItems[i].innerHTML = langChoise.innerHTML;
      langChoise.innerHTML = text;
      /* Изменить html атрибут lang на выбранный язык */
      document.documentElement.setAttribute('lang', text.toLocaleLowerCase());
      /* Блок с выбором языков снова исчезает после выбора,
      стрелка становится в стандартное положение */
      langContainer.classList.remove('active');
      langChoise.classList.remove('active');
    }
  }

  /* Меню бургер */
  const page = document.querySelector('.page');
  const burgerIcon = document.querySelector('.burger__icon');
  const burgerMenu = document.querySelector('.burger__menu');
  const scrollCompensate = function() {
    const inner = document.createElement('p');

    inner.style.width = '100%';

    inner.style.height = '200px';

    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '0px';
    outer.style.left = '0px';
    outer.style.visibility = 'hidden';
    outer.style.width = '200px';
    outer.style.height = '150px';
    outer.style.overflow = 'hidden';
    outer.appendChild(inner);

    document.body.appendChild(outer);

    const w1 = inner.offsetWidth;

    outer.style.overflow = 'scroll';

    let w2 = inner.offsetWidth;

    if (w1 === w2) {
      w2 = outer.clientWidth;
    }

    document.body.removeChild(outer);

    return (w1 - w2);
  };

  if (e.closest('.burger__icon')) {
    /* По клику появляется страница меню, изменяется значек бургера,
    скролл страницы блокируется */
    burgerMenu.classList.toggle('active');
    burgerIcon.classList.toggle('active');
    page.classList.toggle('lock');

    /* Добавляем странице правый паддинг, который соответсует ширине
    полосы прокрутки при открытии бургера. Без этого при открытии меню
    происходит едва заметное скольжение страницы */
    if (page.closest('.lock')) {
      page.style.paddingRight = scrollCompensate() + 'px';
    } else {
      page.style.paddingRight = 0 + 'px';
    }
  }

  if (burgerMenu.classList.contains('active') && e.closest('.burger__li')) {
    /* Закрытие меню бургер, возврат иконки в стандартное состояние,
    разблокировака скролла страницы, удаление паддинга у страницы */
    burgerMenu.classList.toggle('active');
    burgerIcon.classList.toggle('active');
    page.classList.toggle('lock');
    page.style.paddingRight = 0 + 'px';
  }
});

/* Для реализации особенностей отображения input при введении
  символов */

const emailInput = document.querySelector('#email-input');

emailInput.addEventListener('input', function(e) {
  if (e) {
    emailInput.classList.add('filled');
  }

  if (this.value < 1) {
    emailInput.classList.remove('filled');
  }
});

/* Разместить правую колонку блока формы зависимо от размера экрана */
const formSectionText = document.querySelector('.form-section__text');

if (window.innerWidth > 991) {
  document.querySelector('.form-section__right-block').append(formSectionText);
} else {
  emailInput.before(formSectionText);
}

/* Тоже самое при изменнении ширины окна */
window.addEventListener('resize', function() {
  if (window.innerWidth > 991) {
    document.querySelector(`.form-section__right-block
    `).append(formSectionText);
  } else {
    emailInput.before(formSectionText);
  }
});

/* Стрелка появляется, если страница прокручена ниже высоты header */
const header = document.querySelector('#header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > header.clientHeight) {
    document.querySelector('.page__scroll').style.display = 'block';
  } else {
    document.querySelector('.page__scroll').style.display = 'none';
  }
});
