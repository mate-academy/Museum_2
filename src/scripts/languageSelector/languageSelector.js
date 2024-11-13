'use strict';
import {
  ANIMATION_DURATION,
  CLASS_BODY_HIDDEN,
  CLASS_BUTTON_DROPDOWN_VISIBLE,
  CLASS_DROPDOWN_VISIBLE,
  LANGUAGE_UA,
  LOCAL_STORAGE_LANGUAGE_KEY,
} from '../utils/constants.js';
import {
  languageSelectorButton,
  languageSelectorDropdown,
  languageSelectorItems,
} from '../utils/elements.js';
import { translate } from './translate.js';

export const hideDropdown = () => {
  languageSelectorDropdown.classList.remove(CLASS_DROPDOWN_VISIBLE);
  languageSelectorButton.classList.remove(CLASS_BUTTON_DROPDOWN_VISIBLE);

  setTimeout(() => {
    languageSelectorDropdown.style.visibility = 'hidden';
  }, ANIMATION_DURATION); // Затримка повинна відповідати тривалості анімації
};

export const showDropdown = () => {
  languageSelectorDropdown.style.visibility = 'visible';
  languageSelectorDropdown.classList.add(CLASS_DROPDOWN_VISIBLE);
  languageSelectorButton.classList.add(CLASS_BUTTON_DROPDOWN_VISIBLE);
};

const handleLanguageButtonClick = (e) => {
  if (languageSelectorDropdown.classList.contains(CLASS_DROPDOWN_VISIBLE)) {
    hideDropdown();
  } else {
    showDropdown();
  }
};

const handleLanguageItemClick = (e) => {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  const language = e.target.getAttribute('lang');

  localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language);
  translate(language);

  languageSelectorButton.textContent = language.toUpperCase();

  languageSelectorItems.forEach((item) => {
    if (item === e.target) {
      item.setAttribute('aria-selected', 'true');
    } else {
      item.setAttribute('aria-selected', 'false');
    }
  });

  hideDropdown();
};

export const initializeLanguageSelector = () => {
  const language =
    localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) || LANGUAGE_UA;

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

export const handleDocumentClick = () => {
  if (
    !languageSelectorDropdown.classList.contains(CLASS_DROPDOWN_VISIBLE) ||
    event.target.closest('.language-selector')
  ) {
    return;
  }

  hideDropdown();
};

export const addLanguageSelectorEventListeners = () => {
  languageSelectorButton.addEventListener('click', handleLanguageButtonClick);
  languageSelectorDropdown.addEventListener('click', handleLanguageItemClick);
  document.addEventListener('click', handleDocumentClick);
};
