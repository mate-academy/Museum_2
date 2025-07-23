'use strict';

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const body = document.body;
const page = document.documentElement;

menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('menu-button--close')) {
    closeMenu()
  } else {
    openMenu()
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

  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  outer.parentNode.removeChild(outer);

  return scrollbarWidth;

}

function openMenu() {
  menuButton.classList.add('menu-button--close');
  menu.classList.add('menu--open');
  body.style.overflowY = "hidden";
  page.style.paddingRight = getScrollbarWidth() + 'px';
}

function closeMenu() {
  menuButton.classList.remove('menu-button--close');
  menu.classList.remove('menu--open');
  body.style.overflowY = "auto";
  page.style.paddingRight = 0;
}

document.addEventListener('click', function(e) {
  console.log(e.target)
  // Check if the clicked element is an anchor tag with a hash in the href
  if (e.target.tagName === 'A' && e.target.href.includes('#')) {
      closeMenu()

      e.preventDefault(); // Prevent the default anchor click behavior

      // Get the target element by the href attribute
      const targetId = e.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          // Scroll to the target element smoothly
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      }
  }
});
