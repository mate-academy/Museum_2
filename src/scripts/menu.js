// eslint-disable-next-line max-len
import { toggleLanguageSelectorButtonVisibility } from './languageSelector/languageSelector.js';
import translations from './languageSelector/translations.js';
import {
  ANIMATION_DURATION,
  CLASS_HEADER_BOTTOM_PART_HIDDEN,
  CLASS_HEADER_MAIN_PART_HIDDEN,
  CLASS_MENU_BTN_CLOSE,
  CLASS_MENU_VISIBLE,
  DATA_TRANSLATE_MENU_CLOSE,
  DATA_TRANSLATE_MENU_OPEN,
  LANGUAGE_UA,
  LOCAL_STORAGE_LANGUAGE_KEY,
} from './utils/constants.js';
import {
  headerBottomPart,
  headerMainPart,
  menu,
  menuBtn,
} from './utils/elements';

export const showMenuButton = () => {
  const currentLanguage =
    localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) || LANGUAGE_UA;

  const menuBtnOpenText =
    translations[currentLanguage][DATA_TRANSLATE_MENU_OPEN].attr;

  menuBtn.setAttribute('data-translate', DATA_TRANSLATE_MENU_OPEN);

  menuBtn.setAttribute('aria-label', menuBtnOpenText);
  menuBtn.setAttribute('title', menuBtnOpenText);
  menuBtn.setAttribute('href', '#menu');
  menuBtn.classList.remove(CLASS_MENU_BTN_CLOSE);
};

export const showCloseButton = () => {
  const currentLanguage =
    localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) || LANGUAGE_UA;
  const menuBtnCloseText =
    translations[currentLanguage][DATA_TRANSLATE_MENU_CLOSE].attr;

  menuBtn.setAttribute('data-translate', DATA_TRANSLATE_MENU_CLOSE);

  menuBtn.setAttribute('aria-label', menuBtnCloseText);
  menuBtn.setAttribute('title', menuBtnCloseText);
  menuBtn.setAttribute('href', '#');

  menuBtn.classList.add(CLASS_MENU_BTN_CLOSE);
};

export const showMenu = () => {
  menu.classList.add(CLASS_MENU_VISIBLE);
  menu.style.visibility = 'visible';
};

export const hideMenu = () => {
  menu.classList.remove(CLASS_MENU_VISIBLE);

  setTimeout(() => {
    menu.style.visibility = 'hidden';
  }, ANIMATION_DURATION);
};

export const isMenuVisible = () => menu.classList.contains(CLASS_MENU_VISIBLE);

export const makeInvisibleHeaderContent = () => {
  if (!headerMainPart.classList.contains(CLASS_HEADER_MAIN_PART_HIDDEN)) {
    headerMainPart.classList.add(CLASS_HEADER_MAIN_PART_HIDDEN);

    setTimeout(() => {
      headerMainPart.style.visibility = 'hidden';
    }, ANIMATION_DURATION);
  }

  if (!headerBottomPart.classList.contains(CLASS_HEADER_BOTTOM_PART_HIDDEN)) {
    headerBottomPart.classList.add(CLASS_HEADER_BOTTOM_PART_HIDDEN);

    setTimeout(() => {
      headerBottomPart.style.visibility = 'hidden';
    }, ANIMATION_DURATION);
  }
};

export const makeVisibleHeaderContent = () => {
  if (headerMainPart.classList.contains(CLASS_HEADER_MAIN_PART_HIDDEN)) {
    headerMainPart.classList.remove(CLASS_HEADER_MAIN_PART_HIDDEN);
    headerMainPart.style.visibility = 'visible';
  }

  if (headerBottomPart.classList.contains(CLASS_HEADER_BOTTOM_PART_HIDDEN)) {
    headerBottomPart.classList.remove(CLASS_HEADER_BOTTOM_PART_HIDDEN);
    headerBottomPart.style.visibility = 'visible';
  }
};

const hideMenuRevealHeader = () => {
  showMenuButton();
  hideMenu();
  makeVisibleHeaderContent();
};

const revealMenuHideHeader = () => {
  showCloseButton();
  showMenu();
  makeInvisibleHeaderContent();
};

export const handleMenuBtnclick = (e) => {
  if (menuBtn.classList.contains(CLASS_MENU_BTN_CLOSE)) {
    hideMenuRevealHeader();
  } else {
    revealMenuHideHeader();
  }
};

const handleDocumentClick = (e) => {
  if (e.target.tagName === 'A' && menu.classList.contains(CLASS_MENU_VISIBLE)) {
    hideMenuRevealHeader();
  }
};

export const addMenuBtnEventListener = () => {
  menuBtn.addEventListener('click', () => {
    handleMenuBtnclick();
    toggleLanguageSelectorButtonVisibility();
  });
  document.addEventListener('click', handleDocumentClick);
};
