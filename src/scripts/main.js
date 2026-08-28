'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector('.dropdown__trigger');
    const content = dropdown.querySelector('.dropdown__content');

    // спочатку ховаємо
    content.style.height = '0';
    content.style.overflow = 'hidden';
    content.style.transition = 'height 0.3s ease';

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();

      if (dropdown.classList.contains('is-open')) {
        dropdown.classList.remove('is-open');
        content.style.height = '0';
      } else {
        dropdown.classList.add('is-open');

        const fullHeight = content.scrollHeight;

        content.style.height = `${fullHeight}px`;
      }
    });

    // клік поза dropdown закриває його
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('is-open');
        content.style.height = '0';
      }
    });
  });
});
