'use strict';

// The subscribe form is a mock, so it must not navigate anywhere. Clicking
// "Підписатись" clears the field and keeps the page where it is. Native
// validation still runs first: the submit event only fires once the address
// is a valid one, so an empty field is not silently wiped.
const subscribeForm = document.querySelector('.subscribe__form');

if (subscribeForm) {
  subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    subscribeForm.reset();
  });
}
