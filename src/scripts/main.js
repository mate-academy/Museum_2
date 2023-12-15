'use strict';

// upward
const scroll = document.querySelector('.upward');

window.addEventListener('scroll', () => {
  scroll.classList.toggle('upward--active', window.scrollY > 500);
});

scroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// menu

const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const menuLinks = document.querySelectorAll('.menu__link');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';

    document.body.classList.remove('no-scroll');
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';

    document.body.classList.add('no-scroll');
  }
}

function closeMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';

    document.body.classList.remove('no-scroll');
  }
}

navigation.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Dropdown List

document.addEventListener('DOMContentLoaded', function() {
  // Header Dropdown Icon
  const dropdownIcon = document.getElementById('dropdownIcon');
  const dropdownList = document.createElement('ul');

  dropdownList.classList.add('dropdown-list');

  const items = ['PL', 'EN', 'FR'];

  items.forEach(function(itemText) {
    const listItem = document.createElement('li');

    listItem.textContent = itemText;
    dropdownList.appendChild(listItem);
  });

  dropdownIcon.appendChild(dropdownList);

  dropdownIcon.addEventListener('click', function() {
    toggleDropdown(dropdownList);
  });

  // Menu Dropdown Icon
  const menuDropdownIcon = document.querySelector('.menu__dropdown-icon');
  const menuDropdownList = document.createElement('ul');

  menuDropdownList.classList.add('menu-dropdown-list');

  const menuItems = ['PL', 'EN', 'FR'];

  menuItems.forEach(function(itemText) {
    const menuItem = document.createElement('li');

    menuItem.textContent = itemText;
    menuDropdownList.appendChild(menuItem);
  });

  menuDropdownIcon.appendChild(menuDropdownList);

  menuDropdownIcon.addEventListener('click', function() {
    toggleDropdown(menuDropdownList);
  });

  // Function to toggle dropdown visibility
  function toggleDropdown(dropdown) {
    dropdown.classList.toggle('visible');
  }
});
