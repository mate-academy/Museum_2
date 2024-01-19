'use strict';

window.onhashchange = (e) => {
  const menu = e.newURL.includes('#menu')
    ? document.body.classList.add('page-overflow')
    : document.body.classList.remove('page-overflow');

  return menu;
};
