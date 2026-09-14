export const initMobileMenu = () => {
  const openMenuButton = document.querySelector('#open-page-menu');
  const closeMenuButton = document.querySelector('#close-page-menu');
  const menuPage = document.querySelector('.page__menu-wrapper');
  const navLinks = document.querySelectorAll('.menu__nav-link');

  if (!openMenuButton || !closeMenuButton || !menuPage) {
    return;
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuPage.classList.remove('page__menu-wrapper--opened');
      document.body.classList.remove('page-is-locked');
    });
  });

  openMenuButton.addEventListener('click', () => {
    menuPage.classList.add('page__menu-wrapper--opened');
    document.body.classList.add('page-is-locked');
  });

  closeMenuButton.addEventListener('click', () => {
    menuPage.classList.remove('page__menu-wrapper--opened');
    document.body.classList.remove('page-is-locked');
  });
};
