'use strict';

const but = document.getElementById('link');
const cross = document.getElementById('cross');

but.addEventListener('click', function() {
  document.getElementById('burger-menu').style.transform = 'translateY(0)';
  document.getElementById('page').style.overflowY = 'hidden';
});

cross.addEventListener('click', function() {
  document.getElementById('burger-menu').style.transform = 'translateY(-100%)';
  document.getElementById('page').style.overflowY = 'visible';
});
