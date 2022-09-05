'use strict';

// disable scroll when menu is open
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// // clear input fields in form when butoon was pressed,
// // in this case, page is not updating
// const form = document.querySelector('.contacts__form');
// const inputs = document.querySelectorAll('.contacts__field');

// function handler(event) {
//   event.preventDefault();

//   inputs.forEach(input => {
//     input.value = '';
//   });
// }

// form.addEventListener('submit', handler);
