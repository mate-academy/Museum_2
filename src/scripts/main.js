// eslint-disable-next-line max-len
import { addFormSubmitHandler } from './handleFormSubmit.js';
import {
  addLanguageSelectorEventListeners,
  initializeLanguageSelector,
} from './languageSelector/languageSelector';
import { addMenuBtnEventListener } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeLanguageSelector();
  addLanguageSelectorEventListeners();
  addMenuBtnEventListener();
  addFormSubmitHandler();
});
