'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const burgerMenuIcon = document.querySelector('.burger-button');
  const languageSelect = document.querySelector('.header__language');
  const headerMenu = document.querySelector('.menu');
  const headerMenuContacts = document.querySelector('.menu__contacts');
  const headerMenuList = document.querySelector('.menu__list');
  const headerMenuLink = document
    .querySelectorAll('.menu__link, .menu__button');
  const headerMenuLine = document.querySelector('.menu__line');
  const mainPageBody = document.querySelector('.page__body');
  const menuButton = document.querySelector('.menu__button');
  const menuImage = document.querySelector('.menu__image');

  burgerMenuEventListners();

  function burgerMenuEventListners() {
    burgerMenuIcon.addEventListener('click', burgerMenuIconClick);

    headerMenuLink.forEach(el =>
      el.addEventListener('click', burgerMenuItemsClick)
    );
  }

  function burgerMenuIconClick() {
    burgerMenuIcon.classList.toggle('burger-button--is-active');
    headerMenu.classList.toggle('menu--is-open');
    headerMenuContacts.classList.toggle('menu__contacts--is-visible');
    headerMenuList.classList.toggle('menu__list--is-visible');
    headerMenuLine.classList.toggle('menu__line--max-width');
    mainPageBody.classList.toggle('page__body--with-menu');
    menuButton.classList.toggle('menu__button--is-visible');
    menuImage.classList.toggle('menu__image--is-visible');

    if (window.innerWidth > 640) {

    } else {
      languageSelect.classList.toggle('header__language--is-visible');
    }
  }

  function burgerMenuItemsClick() {
    if (headerMenu.classList.contains('menu--is-open')) {
      burgerMenuIcon.click();
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  let j, c;

  const x = document.querySelector('.select');

  const selElmnt = x.getElementsByTagName('select')[0];

  const ll = selElmnt.length;

  x.innerHTML += '<div class="select__button">'
      + '<span class ="select__txt">'
      + selElmnt.options[selElmnt.selectedIndex].innerHTML + '</span>'
      + '<span class="select__chevron">' + '</div>';

  const b = document.createElement('DIV');

  b.setAttribute('class', 'select__items select__items--hide');

  for (j = 0; j < ll; j++) {
    c = document.createElement('DIV');
    c.setAttribute('class', 'select__item');

    if (selElmnt.options[j].hasAttribute('selected')) {
      c.classList.toggle('select__item--selected');
    }
    c.innerHTML = selElmnt.options[j].innerHTML;

    c.addEventListener('click', function(e) {
      let y, i, k, yl;

      const s = this.parentNode.parentNode.getElementsByTagName('select')[0];
      const sl = s.length;
      const h = document.querySelector('.select__txt');

      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML === this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName('select__item--selected');
          yl = y.length;

          for (k = 0; k < yl; k++) {
            y[k].classList.remove('select__item--selected');
          }
          this.classList.toggle('select__item--selected');
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x.appendChild(b);

  const a = document.querySelector('.select__button');

  a.addEventListener('click', function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle('select__items--hide');
    this.classList.toggle('select__button--active');
  });

  function closeAllSelect(elmnt) {
    let i;
    const arrNo = [];

    const xx = document.getElementsByClassName('select__items');
    const y = document.getElementsByClassName('select__button');
    const xl = xx.length;
    const yl = y.length;

    for (i = 0; i < yl; i++) {
      if (elmnt === y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove('select__button--active');
      }
    }

    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        xx[i].classList.add('select__items--hide');
      }
    }
  }

  document.addEventListener('click', closeAllSelect);
});

document.addEventListener('DOMContentLoaded', function() {
  const event = document.querySelectorAll('.event');

  event.forEach(function(el) {
    el.addEventListener('mouseover', function(e) {
      if (e.target.tagName.toLowerCase() === 'img') {
        e.target.style.transform = 'scale(1.1)';

        el.querySelector('.event__title').style.color = '#cd4d31';
      }

      if (e.target.classList.contains('event__title')) {
        e.target.style.color = '#cd4d31';

        el.getElementsByTagName('img')[0].style.transform = 'scale(1.1)';
      }
    });

    el.addEventListener('mouseout', function() {
      el.getElementsByTagName('img')[0].style.transform = null;
      el.querySelector('.event__title').style.color = null;
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const subscribeButton = document.querySelector('#subscribeButton');
  const form = document.querySelector('.subscribe__form');

  subscribeButton.addEventListener('click', function(e) {
    e.preventDefault();

    const result = form.reportValidity();

    if (result === true) {
      form.reset();
    }
  }, false);
});
