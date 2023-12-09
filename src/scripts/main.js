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

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menuIcon');
  const closeIcon = document.querySelector('.closeIcon');
  const menu = document.querySelector('.menu');

  menuIcon.addEventListener('click', function() {
    menu.style.display = 'flex';
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  });

  closeIcon.addEventListener('click', function() {
    menu.style.display = 'none';
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });
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
