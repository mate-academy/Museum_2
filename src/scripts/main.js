/* eslint-disable max-len */
'use strict';

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const body = document.body;
const page = document.documentElement;
const openMenuButton = document.getElementById('mbom');
const closeMenuButton = document.getElementById('mbcm');

function openMenu() {
  menuButton.classList.add('menu-button--close');
  // menuButton.classList.remove('open-menu');
  openMenuButton.style.opacity = '0';
  openMenuButton.classList.remove('menu-button__open');
  closeMenuButton.classList.add('menu-button__close');
  closeMenuButton.style.opacity = '1';
  menu.classList.add('menu--open');
  body.style.overflowY = 'hidden';
  // page.style.paddingRight = 0;
  page.style.paddingRight = getScrollbarWidth() + 'px';
}

function closeMenu() {
  menuButton.classList.remove('menu-button--close');
  closeMenuButton.style.opacity = '0';
  closeMenuButton.classList.remove('menu-button__close');
  openMenuButton.classList.add('menu-button__open');
  openMenuButton.style.opacity = '1';
  menu.classList.remove('menu--open');
  body.style.overflowY = 'auto';
  page.style.paddingRight = 0;
}

// closeMenu();

menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('menu-button--close')) {
    closeMenu();
  } else {
    openMenu();
  }
});

function getScrollbarWidth() {
  const outer = document.createElement('div');

  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outer);

  const inner = document.createElement('div');

  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

/*
document.addEventListener('click', function(e) {
  // console.info(e.target);

  // Check if the clicked element is an anchor tag with a hash in the href
  if (e.target.tagName === 'BUTTON' && e.target.href.includes('#')) {
    closeMenu();

    e.preventDefault(); // Prevent the default anchor click behavior

    // Get the target element by the href attribute
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Scroll to the target element smoothly
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
});
*/
const input = document.getElementById('myInput');

input.addEventListener('blur', () => {
  // event.preventDefault();
  if (input.value === '') {
    input.style.borderBottomColor = '';
    input.style.color = '';
  }
  // input.value = '';
});

input.addEventListener('input', (event) => {
  event.preventDefault();

  if (input.checkValidity()) {
    input.style.borderBottomColor = '#1c1b29';
    input.style.color = '#1c1b29';
  } else {
    input.style.borderBottomColor = '#cd4d31';
    input.style.color = '#cd4d31';
  }
});

/* Example 2: Using change Event

Copy code
const inputElement = document.querySelector('#myInput');

inputElement.addEventListener('change', () => {
  if (inputElement.checkValidity()) {
    alert('Input is valid!');
  } else {
    alert('Input is invalid!');
  }
});
Example 3: Form Validation with invalid Event

Copy code
const form = document.querySelector('#myForm');

form.addEventListener('invalid', (event) => {
  event.preventDefault(); // Prevent default browser behavior
  console.log('Invalid input detected:', event.target);
}, true); // Use capture phase to catch invalid events on child elements

These examples demonstrate how to handle input validation dynamically. You can adapt them to suit your specific needs!
*/

/* input.addEventListener('input', () => {
  if (input.value.trim() !== '') {
    input.style.backgroundColor = '#d4edda'; // Light green
    input.style.color = '#155724'; // Dark green
  } else {
    input.style.backgroundColor = ''; // Reset
    input.style.color = '';
  }
});
*/
