'use strict';

const buttons = document.getElementsByClassName('button');
const subscribeButton = document.getElementById('subscribe__button');

const clickHandler = function(event) {
  // eslint-disable-next-line no-undef
  alert('This button works 😉');
};

subscribeButton.addEventListener('click', (event) => {
  // eslint-disable-next-line no-undef
  alert('You have successfully subscribed to our newsletter 😉');
});

for (const button of buttons) {
  button.addEventListener('click', clickHandler);
}
