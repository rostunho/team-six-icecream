(() => {
  const refs = {
    openMenuBtn: document.querySelector('.site-nav__button-open'),
    closeMenuBtn: document.querySelector('.mobile-menu__button-close'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('mobile-menu--is-active');
  }
})();

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.header__mobile-menu-button'),
//     closeMenuBtn: document.querySelector('.mobile-menu__close-button'),
//     menu: document.querySelector('.mobile-menu'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('mobile-menu--is-open');
//   }
// })();