'use strict';

document.querySelector('#form').addEventListener('submit', function() {
  const checkForm = document.querySelector('#form').reportValidity();

  if (checkForm === true) {
    document.getElementById('form').reset();
  };
}, false);

// to show languages for selecting (main)
const drop = document.getElementById('language2');

document.querySelector('#switcher').addEventListener('click', function() {
  const down = drop.classList.contains('show');

  if (down === true) {
    document.querySelector('#language2').classList.remove('show');
  } else {
    document.querySelector('#language2').classList.add('show');
  };
});

// to show languages for selecting (menu)
const dropMenu = document.getElementById('language2-menu');

document.querySelector('#switcher-menu').addEventListener('click', function() {
  const down = dropMenu.classList.contains('show-menu');

  if (down === true) {
    document.querySelector('#language2-menu').classList.remove('show-menu');
  } else {
    document.querySelector('#language2-menu').classList.add('show-menu');
  };
});

const WeekDay = (new Date()).getDay();
const hours = ['10:00 - 17:00',
  'вихідний',
  'вихідний',
  '10:00 - 17:00',
  '10:00 - 17:00',
  '12:00 - 19:00',
  '11:00 - 18:00'];
const todayHours = hours[WeekDay];

document.getElementById('hours').innerHTML = todayHours;
