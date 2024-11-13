// eslint-disable-next-line max-len
import {
  addLanguageSelectorEventListeners,
  initializeLanguageSelector,
} from './languageSelector/languageSelector';
import { addMenuBtnEventListener } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeLanguageSelector();
  addLanguageSelectorEventListeners();
  addMenuBtnEventListener();

  // const hash = window.location.hash;

  // console.log(hash);

  // if (hash === '#menu') {
  //   console.log('showCloseButton');
  //   showCloseButton();
  // }
});
