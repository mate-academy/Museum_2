"use strict";

const dialog = document.getElementById("navMenu");
const links = document.querySelectorAll(".nav-menu__body-nav-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (dialog.open) {
      dialog.close();
    }
  });
});

const navMenu = document.getElementById("navMenu");
const openBtn = document.querySelector(".header__burger");
const closeBtn = navMenu.querySelector(".nav-menu__close");

openBtn.addEventListener("click", () => {
  navMenu.showModal();
  requestAnimationFrame(() => {
    navMenu.classList.add("nav-menu--open");
  });
});

function closingMenu() {
  navMenu.classList.remove("nav-menu--open");
  navMenu.classList.add("nav-menu--closing");

  setTimeout(() => {
    navMenu.classList.remove("nav-menu--closing");
    navMenu.close();
  }, 300);
}

const closeMenu = () => {
  closingMenu();
};

closeBtn.addEventListener("click", closeMenu);

document.querySelector("body").addEventListener("click", (event) => {
  if (event.target === navMenu) {
    closingMenu();
  }
});
