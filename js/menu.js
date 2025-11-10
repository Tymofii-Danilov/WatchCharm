(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    mobileMenu: document.querySelector("[data-mobile-menu]"),
    tabletMenu: document.querySelector("[data-tablet-menu]"),
    mobileCloseBtn: document.querySelector("[data-mobile-close]"),
    tabletCloseBtn: document.querySelector("[data-tablet-close]"),
    body: document.body,
  };

  // Клік по кнопці відкриття
  refs.openMenuBtn.addEventListener("click", toggleMenu);

  // Кліки по кнопках закриття
  refs.mobileCloseBtn.addEventListener("click", closeMenu);
  refs.tabletCloseBtn.addEventListener("click", closeMenu);

  // Закриття при кліку на будь-яке посилання в обох меню
  document.querySelectorAll("[data-mobile-menu] a, [data-tablet-menu] a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  let currentMenu = null;

  function toggleMenu() {
    const viewportWidth = window.innerWidth;

    // Вибір меню за шириною
    currentMenu = viewportWidth < 768 ? refs.mobileMenu : refs.tabletMenu;

    const isOpen = currentMenu.classList.toggle("is-open");
    refs.body.classList.toggle("no-scroll", isOpen);
  }

  function closeMenu() {
    [refs.mobileMenu, refs.tabletMenu].forEach(menu => menu.classList.remove("is-open"));
    refs.body.classList.remove("no-scroll");
  }

  // Якщо змінюється ширина екрана — закриваємо меню (щоб не зависло)
  window.addEventListener("resize", closeMenu);
})();
