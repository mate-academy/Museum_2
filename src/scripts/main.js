'use strict';

const modalManager = {
  modal: null,

  init: function() {
    this.modal = document.getElementById('myModal');
    this.setupEventListeners();
  },

  open: function() {
    this.modal.classList.add('modal--open');
  },

  close: function() {
    this.modal.classList.remove('modal--open');
  },

  setupEventListeners: function() {
    const menuButton = document.getElementById('openModal');
    const closeButton = document.getElementById('closeModal');

    menuButton.addEventListener('click', () => this.open());
    closeButton.addEventListener('click', () => this.close());

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

document.addEventListener('DOMContentLoaded', function() {
  modalManager.init();

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
