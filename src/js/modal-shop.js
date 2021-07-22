const openMenu = document.querySelector('.button--mobile-menu');
const menu = document.querySelector('.shop-modal');

const test = document.querySelector('.mobile-menu');

if (openMenu) {
    openMenu.addEventListener("click", function (e) {
        menu.classList.toggle('shop-modal--is-hidden')
    })
    closeMenu.addEventListener("click", function (e) {
        menu.classList.toggle('shop-modal--is-hidden');


    })
}
if (test.classList.contains('mobile-menu--is-active')) {
    test.classList.remove('mobile-menu--is-active');
}
 