'use strict';

const dropdown = document.querySelector('.dropdown');
const trigger = dropdown.querySelector('.dropdown__button');

trigger.addEventListener('click', () => {
  dropdown.classList.toggle('dropdown--active');
});

// const dropdownMenu = dropdown.querySelector('.dropdown__content');
// const selectedItem = dropdownMenu.querySelector('.dropdown__item--selected');

// function updateSelection(newItem) {
//   if (selectedItem) {
//     selectedItem.classList.remove('dropdown__item--selected');
//   }
//   newItem.classList.add('dropdown__item--selected');
//   trigger.textContent = newItem.textContent;
// }

// dropdownMenu.addEventListener('click', (event) => {
//   const clickedItem = event.target.closest('.dropdown__item');

//   if (clickedItem) {
//     updateSelection(clickedItem);
//     dropdown.classList.remove('dropdown--active');
//   }
// });

// if (selectedItem) {
//   updateSelection(selectedItem);
// } else {
//   const defaultItem = dropdownMenu.querySelector('.dropdown__item:first-child');
//   if (defaultItem) {
//     updateSelection(defaultItem);
//   }
// }

