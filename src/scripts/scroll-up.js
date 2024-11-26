import { CLASS_SCROLL_UP_BTN_VISIBLE } from './utils/constants';
import { header, scrollUpBtn } from './utils/elements';

export const toggleScrollUpBtnVisibility = () => {
  const headerRect = header.getBoundingClientRect();

  if (headerRect.bottom < 0) {
    scrollUpBtn.classList.add(CLASS_SCROLL_UP_BTN_VISIBLE);
  } else {
    scrollUpBtn.classList.remove(CLASS_SCROLL_UP_BTN_VISIBLE);
  }
};
