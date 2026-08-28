export const initLanguageSwitcher = () => {
  const langLinks = document.querySelectorAll('.language__option');

  if (!langLinks.length) {
    return;
  }

  langLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetLang = e.currentTarget.getAttribute('data-lang');
      const targetUrl = e.currentTarget.getAttribute('href');

      if (targetLang) {
        window.localStorage.setItem('preferredLang', targetLang);
      }

      document.body.style.transition = 'opacity 0.3s ease';
      document.body.style.opacity = '0';

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 300);
    });
  });

  const savedLang = window.localStorage.getItem('preferredLang');
  const currentPath = window.location.pathname;

  const isEnglishPage = currentPath.includes('en.html');

  if (savedLang === 'en' && !isEnglishPage) {
    document.body.style.opacity = '0';
    window.location.replace('./en.html');
  }
};
