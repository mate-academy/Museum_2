'use strict';

const subscribeForm = document.querySelector('.subscribe__form');
const formInput = document.querySelector('.subscribe__form__input');

subscribeForm.addEventListener('submit', event => {
  event.preventDefault();

  formInput.value = '';
});

window.addEventListener('hashchange', () =>{
  if(window.location.hash === '#menu') {
    document.body.classList.add('page__with-menu');
  } else {
    document.body.classList.remove('page__with-menu');
  }
})