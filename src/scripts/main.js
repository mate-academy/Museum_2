'use strict';

// to show languages for selecting (main)
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('#switcher').click(function() {
    document.getElementById('#language2').toggleClass('show');
  });
});

// to show languages for selecting (menu)
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('#switcher-menu').click(function() {
    document.getElementById('#language2-menu').toggleClass('show-menu');
  });
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

document.querySelector('.news__image-container').hover(
  function() {
    document.querySelector(this).parent().css({
      'background-color': 'rgb(222, 220, 220)',
      'border-color': '#1c1b29',
    });
  },
  function() {
    document.querySelector(this).parent().css({
      'background-color': '#f1f5f4',
      'border-color': 'transparent',
    });
  }
);

document.querySelector('#form').addEventListener('submit', function() {
  const checkForm = document.querySelector('#form').reportValidity();

  if (checkForm === true) {
    document.getElementById('form').reset();
  };
}, false);
