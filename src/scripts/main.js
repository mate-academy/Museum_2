'use strict';

const createModalWindow = () => {
  const modal = document.createElement('div');

  modal.className = 'modal';

  const overlay = document.createElement('div');

  overlay.className = 'modal__overlay';

  const dialog = document.createElement('div');

  dialog.className = 'modal__dialog';

  const closeBtn = document.createElement('button');

  closeBtn.className = 'modal__close';
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.textContent = '×';

  const title = document.createElement('h3');

  title.className = 'modal__title';
  title.textContent = 'Реєстрація';

  const modalForm = document.createElement('form');

  modalForm.className = 'modal__form';

  const nameInput = document.createElement('input');

  nameInput.className = 'modal__input';
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.placeholder = "Ім'я";
  nameInput.required = true;

  const emailInput = document.createElement('input');

  emailInput.className = 'modal__input';
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = 'Email';
  emailInput.required = true;

  const submitBtn = document.createElement('button');

  submitBtn.className = 'button';
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Відправити';

  modalForm.appendChild(nameInput);
  modalForm.appendChild(emailInput);
  modalForm.appendChild(submitBtn);

  dialog.appendChild(closeBtn);
  dialog.appendChild(title);
  dialog.appendChild(modalForm);

  modal.appendChild(overlay);
  modal.appendChild(dialog);

  document.body.appendChild(modal);

  const open = () => {
    modal.classList.add('modal--open');
    document.body.classList.add('no-scroll');
  };

  const close = () => {
    modal.classList.remove('modal--open');

    setTimeout(() => {
      document.body.classList.remove('no-scroll');
    }, 500);
  };

  overlay.addEventListener('click', close);
  closeBtn.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      close();
    }
  });

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    nameInput.value = '';
    emailInput.value = '';

    close();
  });

  return { open, close };
};

const setupModalForButtons = () => {
  const buttons = document.querySelectorAll('.events__button, .header__button');

  if (!buttons.length) {
    return;
  }

  const modal = createModalWindow();

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      modal.open();
    });
  });
};

document.addEventListener('DOMContentLoaded', setupModalForButtons);
