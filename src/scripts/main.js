
'use strict';

const dropdowns = document.querySelectorAll('.language-switcher');

dropdowns.forEach(dropdown => {
  const trigger = dropdown.querySelector('.language-switcher__trigger');

  if (trigger) {
    trigger.addEventListener('click', () => {
      dropdown.classList.toggle('language-switcher--active');
    });
  }
});

document.addEventListener('click', (e) => {
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('language-switcher--active');
    }
  });
});
