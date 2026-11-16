'use strict';
// Перезавантаження сторінки при натсиканні на кнопку

const subscriptionForm = document.querySelector('.subscr-form');

subscriptionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  subscriptionForm.reset();
});

// Керування плавністю прокрутки

const scrollToTopLink = document.querySelector('.footer-totop');

let scrollAnimationId;

scrollToTopLink.addEventListener('click', (event) => {
  event.preventDefault();
  window.cancelAnimationFrame(scrollAnimationId);

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (reduceMotion) {
    window.scrollTo({ top: 0, behavior: 'instant' });

    return;
  }

  const startPosition = window.scrollY;
  const startTime = performance.now();
  const duration = 1200;

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easing = (1 - Math.cos(Math.PI * progress)) / 2;

    window.scrollTo({
      top: startPosition * (1 - easing),
      behavior: 'instant',
    });

    if (progress < 1) {
      scrollAnimationId = window.requestAnimationFrame(animateScroll);
    }
  }

  scrollAnimationId = window.requestAnimationFrame(animateScroll);
});

// Зникає стрілка
function updateScrollToTopVisibility() {
  scrollToTopLink.classList.toggle('footer-totop--visible', window.scrollY > 0);
}

window.addEventListener('scroll', updateScrollToTopVisibility, {
  passive: true,
});

updateScrollToTopVisibility();
