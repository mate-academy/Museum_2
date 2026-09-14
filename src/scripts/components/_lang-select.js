export const initLangSelectDropdown = () => {
  const summaryLang = document.querySelectorAll('.lang-select__summary');
  const langSelect = document.querySelectorAll('.lang-select');

  summaryLang.forEach((el, index) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      langSelect[index].classList.toggle('lang-select--open');
    });
  });

  document.addEventListener('click', () => {
    langSelect.forEach((el, index) => {
      el.classList.remove('lang-select--open');
    });
  });
};
