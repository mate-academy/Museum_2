'use strict';

const dropdown1 = document.querySelector('.dropdown');
const trigger1 = document.querySelector('.dropdown__trigger');

const dropdown2 = document.querySelectorAll('.dropdown')[1];
const trigger2 = document.querySelectorAll('.dropdown__trigger')[1];

trigger1.addEventListener('click', () => {
  dropdown1.classList.toggle('dropdown--active');
});

trigger2.addEventListener('click', () => {
  dropdown2.classList.toggle('dropdown--active');
});
