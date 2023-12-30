'use strict';

const modalManager = {
  modal: null,
  scrollPosition: 0,

  init: function() {
    this.modal = document.getElementById('myModal');
    this.setupEventListeners();
  },

  open: function() {
    this.scrollPosition = window.scrollY;
    document.body.style.overflow = 'hidden';
    this.modal.classList.add('modal--open');
  },

  close: function() {
    document.body.style.overflow = '';

    if (this.scrollPosition !== undefined) {
      window.scrollTo(0, this.scrollPosition);
      this.scrollPosition = undefined;
    }

    this.modal.classList.remove('modal--open');
  },

  setupEventListeners: function() {
    const menuButton = document.getElementById('openModal');
    const closeButton = document.getElementById('closeModal');
    const modalItems = document.querySelectorAll('.modal__item');

    menuButton.addEventListener('click', () => this.open());
    closeButton.addEventListener('click', () => this.close());

    modalItems.forEach(item => {
      item.addEventListener('click', (event) => {
        this.close();

        const targetSectionId = event.currentTarget
          .getAttribute('href')
          .substring(1);

        const targetSection = document.getElementById(targetSectionId);

        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });

    window.addEventListener('click', (event) => {
      if (event.target === this.modal) {
        this.close();
      }
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape'
        && this.modal.classList.contains('modal--open')) {
        this.close();
      }
    });
  },
};

modalManager.init();

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    form.reset();

    modalManager.close();
  });
});

const links = document.querySelectorAll('footer__scroll');

links.forEach(item => item.addEventListener('click', function(e) {
  e.preventDefault();

  const id = item.getAttribute('href').slice(1);

  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}));
