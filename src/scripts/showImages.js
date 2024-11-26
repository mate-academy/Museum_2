export const showImagesOnScroll = () => {
  const images = document.querySelectorAll('.fade-img');

  const observerOptions = {
    root: null, // Відслідковувати в контексті viewport
    rootMargin: '10% 50%', // Можна додати відступи, якщо потрібно
    threshold: 0.2, // Коли 10% елемента в полі видимості
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-img--visible');
      } else {
        entry.target.classList.remove('fade-img--visible');
      }
    });
  }, observerOptions);

  images.forEach((image) => {
    observer.observe(image);
  });
};
