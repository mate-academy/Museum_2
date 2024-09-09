'use strict';
AOS.init({
  duration:1100,
  disable: window.innerWidth < 1001,
});



    const menuBtnOpen = document.querySelector('.header__top-burger');
    const dropdownMenu = document.querySelector('.dropdown-menu')
    const menuBtnClose = document.querySelector('.header__top-burger-close')

menuBtnOpen.addEventListener('click',()=> {
dropdownMenu.classList.toggle('active')
})

menuBtnClose.addEventListener('click',()=> {
  dropdownMenu.classList.remove('active')
})



const activeLink = document.querySelector('.header__content-active-link')
const activeLinkEvents = document.querySelector('.header__content-active-link-events')
const activeLinkNews = document.querySelector('.header__content-active-link-news')

activeLink.addEventListener('click',()=> {
  dropdownMenu.classList.remove('active')
})

activeLinkEvents.addEventListener('click',()=> {
  dropdownMenu.classList.remove('active')
})
activeLinkNews.addEventListener('click',()=> {
  dropdownMenu.classList.remove('active')
})