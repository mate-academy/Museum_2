'use strict';

transform(document.getElementById('menu'));
transform(document.getElementById('close'));

document.querySelectorAll('.burger__link').forEach(el => {
  transform(el);
});

document.getElementById('MyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('email').value = '';
});

function transform(element) {
  element.addEventListener('click', () => {
    if (element === document.getElementById('menu')) {
      document.querySelector('.burger').style.transform = 'translateY(0)';
      disableScroll();
    } else {
      document.querySelector('.burger').style.transform = 'translateY(-100%)';
      enableScroll();
    }
  });
}

function disableScroll() {
  const scrollY = window.scrollY;

  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';

  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
}

function enableScroll() {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';

  const scrollY = parseInt(document.body.style.top || '0');

  document.body.style.position = '';
  document.body.style.top = '';

  window.scrollTo(0, scrollY);
}

document.addEventListener('DOMContentLoaded', function() {
  const languageFormHeader = document.getElementById('languageFormHeader');
  const languageFormFooter = document.getElementById('languageFormFooter');
  const selectedLanguageHeader = document.getElementById('chooseOption');
  const selectedLanguageFooter = document.getElementById('chooseOptionFooter');
  const elementsToChangeLanguage = document
    .querySelectorAll('[data-lang-ua], [data-lang-eng]');

  const changeLanguage = function(selectedOption) {
    elementsToChangeLanguage.forEach(function(element) {
      if (selectedOption === 'UA' && element.hasAttribute('data-lang-ua')) {
        element.textContent = element.getAttribute('data-lang-ua');
      } else if (selectedOption === 'ENG'
        && element.hasAttribute('data-lang-eng')) {
        element.textContent = element.getAttribute('data-lang-eng');
      }
    });
  };

  const syncLanguage = function(selectedOption) {
    selectedLanguageHeader.value = selectedOption;
    selectedLanguageFooter.value = selectedOption;
    changeLanguage(selectedOption);
  };

  languageFormHeader.addEventListener('change', function() {
    const selectedOption = selectedLanguageHeader
      .options[selectedLanguageHeader.selectedIndex].value;

    syncLanguage(selectedOption);
  });

  languageFormFooter.addEventListener('change', function() {
    const selectedOption = selectedLanguageFooter
      .options[selectedLanguageFooter.selectedIndex].value;

    syncLanguage(selectedOption);
  });
});
