'use strict';

let mySwiper = null;

function initSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768 && !mySwiper) {
    mySwiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      },
    });
  } else if (screenWidth >= 768 && mySwiper) {
    mySwiper.destroy(true, true);
    mySwiper = null;
  }
};

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);

document.querySelectorAll('.dropdown').forEach((dropdown) => {
  const button = dropdown.querySelector('.dropdown__button');
  const list = dropdown.querySelectorAll('.dropdown__item');
  const value = dropdown.querySelector('.dropdown__value');

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dropdown.classList.contains('dropdown--active')) {
      dropdown.classList.remove('dropdown--active');
    } else {
      dropdown.classList.add('dropdown--active');
    }
  });

  list.forEach((item) => {
    item.addEventListener('click', () => {
      value.innerText = item.innerText;
      dropdown.classList.remove('dropdown--active');
    });
  });

  document.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target !== dropdown) {
      dropdown.classList.remove('dropdown--active');
    }
  })
});
