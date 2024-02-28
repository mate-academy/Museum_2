// duplicate tags
const sourceContent = document.getElementById('top-bar').innerHTML;
const duplicationContent = document.getElementById('duplication_top-bar');

duplicationContent.innerHTML = sourceContent;

// #region creating a scroll for the menu
const bodyContent = document.querySelector('body');
const iconMenu = document.querySelector('.top-bar__menu');
const classLock = 'body__lock';

// add class
iconMenu.addEventListener('click', function() {
  bodyContent.classList.add(classLock);
});

// delete the class in the menu
const iconClose = document.querySelectorAll('.top-bar__close');
const iconLogo = document.querySelectorAll('.top-bar__logo');
const listMenu = document.querySelectorAll('.menu__list li > a');

// event processing
listMenu.forEach(event => {
  event.addEventListener('click', function() {
    bodyContent.classList.remove(classLock);
  });
});

iconClose.forEach(event => {
  event.addEventListener('click', function() {
    bodyContent.classList.remove(classLock);
  });
});

iconLogo.forEach(event => {
  event.addEventListener('click', function() {
    bodyContent.classList.remove(classLock);
  });
});
// #endregion
