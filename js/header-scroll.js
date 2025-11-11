(() => {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > header.offsetHeight) {
          // скролимо вниз — ховаємо
          header.classList.add('hide');
        } else if (currentScrollY < lastScrollY) {
          // скролимо вгору — показуємо
          header.classList.remove('hide');
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();