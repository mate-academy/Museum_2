'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    for (const element of document.body.children) {
      if (!element.classList.contains('menu')) {
        setTimeout(() => {
          element.classList.add('page__element-disabled');
        }, 500);
      }
    }
  } else {
    for (const element of document.body.children) {
      if (!element.classList.contains('menu')) {
        element.classList.remove('page__element-disabled');
      }
    }
  }
});
