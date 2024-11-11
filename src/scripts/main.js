'use strict';
import { translate } from './translate.js';

const CLASS_DROPDOWN_VISIBLE = 'language-selector__dropdown--visible';
const CLASS_BUTTON_DROPDOWN_VISIBLE =
  'language-selector__button--dropdown-visible';
const CLASS_BODY_HIDDEN = 'body--hidden';
const ANIMATION_DURATION = 300;

const languageSelector = document.querySelector('.language-selector');
const languageSelectorButton = languageSelector.querySelector(
  '.language-selector__button',
);
const languageSelectorDropdown = languageSelector.querySelector(
  '.language-selector__dropdown',
);
const languageSelectorItems = languageSelectorDropdown.querySelectorAll(
  '.language-selector__item',
);

const hideDropdown = () => {
  languageSelectorDropdown.classList.remove(CLASS_DROPDOWN_VISIBLE);
  languageSelectorButton.classList.remove(CLASS_BUTTON_DROPDOWN_VISIBLE);
  setTimeout(() => {
    languageSelectorDropdown.style.visibility = 'hidden';
  }, ANIMATION_DURATION); // Затримка повинна відповідати тривалості анімації
};

const showDropdown = () => {
  languageSelectorDropdown.style.visibility = 'visible';
  languageSelectorDropdown.classList.add(CLASS_DROPDOWN_VISIBLE);
  languageSelectorButton.classList.add(CLASS_BUTTON_DROPDOWN_VISIBLE);
};

const handleLanguageButtonClick = (event) => {
  if (languageSelectorDropdown.classList.contains(CLASS_DROPDOWN_VISIBLE)) {
    hideDropdown();
  } else {
    showDropdown();
  }
};

const handleLanguageItemClick = (event) => {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  const language = event.target.getAttribute('lang');
  localStorage.setItem('language', language);
  translate(language);

  languageSelectorButton.textContent = language.toUpperCase();
  languageSelectorItems.forEach((item) => {
    if (item === event.target) {
      item.setAttribute('aria-selected', 'true');
    } else {
      item.setAttribute('aria-selected', 'false');
    }
  });

  hideDropdown();
};

const handleDocumentClick = (event) => {
  if (
    !event.target.closest('.language-selector') &&
    languageSelectorDropdown.classList.contains(CLASS_DROPDOWN_VISIBLE)
  ) {
    hideDropdown();
  }
};

const initialize = () => {
  const language = localStorage.getItem('language') || 'ua';
  translate(language);

  languageSelectorItems.forEach((item) => {
    if (item.getAttribute('lang') === language) {
      item.setAttribute('aria-selected', 'true');
    } else {
      item.setAttribute('aria-selected', 'false');
    }
  });

  languageSelectorButton.textContent = language.toUpperCase();

  document.body.classList.remove(CLASS_BODY_HIDDEN);
};

languageSelectorButton.addEventListener('click', handleLanguageButtonClick);
languageSelectorDropdown.addEventListener('click', handleLanguageItemClick);
document.addEventListener('click', handleDocumentClick);
document.addEventListener('DOMContentLoaded', initialize);
