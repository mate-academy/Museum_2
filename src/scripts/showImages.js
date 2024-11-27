export const showImagesOnScroll = () => {
  const images = document.querySelectorAll('.fade-img');

  const observerOptions = {
    root: null,
    rootMargin: '10% 50%',
    threshold: 0,
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
