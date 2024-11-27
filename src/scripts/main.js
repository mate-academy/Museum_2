// eslint-disable-next-line max-len
import { addFormSubmitHandler } from './handleFormSubmit.js';
import {
  addLanguageSelectorEventListeners,
  initializeLanguageSelector,
} from './languageSelector/languageSelector';
import { addMenuBtnEventListener } from './menu.js';
import { toggleScrollUpBtnVisibility } from './scroll-up.js';
import { showImagesOnScroll } from './showImages.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeLanguageSelector();
  addLanguageSelectorEventListeners();
  addMenuBtnEventListener();
  addFormSubmitHandler();
  window.addEventListener('scroll', toggleScrollUpBtnVisibility);
  toggleScrollUpBtnVisibility(); // Викликати при завантаженні сторінки
  showImagesOnScroll();
});
