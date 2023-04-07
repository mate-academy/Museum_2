'use strict';

const firstEventItem = document.querySelector('#firstEvent');
const secondEventItem = document.querySelector('#secondEvent');
const form = document.querySelector('.digest__from');

const handleEventItemSlide = (eventItem) => {
  const triggerPoint = eventItem.offsetTop
   + eventItem.offsetHeight - window.innerHeight;

  if (window.pageYOffset > triggerPoint) {
    eventItem.style.transform = 'translateX(0px)';
    eventItem.style.opacity = 1;
  }
};

window.addEventListener('scroll', () => {
  handleEventItemSlide(firstEventItem);
});

window.addEventListener('scroll', () => {
  handleEventItemSlide(secondEventItem);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formElements = [...form.elements];

  formElements.forEach(element => {
    if (element.type === 'email') {
      element.value = '';
    }
  });
});
