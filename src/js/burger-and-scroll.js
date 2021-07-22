//  "магазин"
const openShop = document.querySelector('.button--open-modal');
const closeShop = document.querySelector('[data-shop-close]');
const shop = document.querySelector('.shop-modal');

if (openShop) {
    openShop.addEventListener("click", function (e) {
        shop.classList.toggle('shop-modal--is-hidden')
    })
    closeShop.addEventListener("click", function (e) {
        shop.classList.toggle('shop-modal--is-hidden')
    })
}

// бургер-меню

const openMenu = document.querySelector('.site-nav__button-open');
const closeMenu = document.querySelector('.mobile-menu__button-close');
const menu = document.querySelector('.mobile-menu');

if (openMenu) {
    openMenu.addEventListener("click", function (e) {
        menu.classList.toggle('mobile-menu--is-active')
    })
    closeMenu.addEventListener("click", function (e) {
        menu.classList.toggle('mobile-menu--is-active')
    })

}



// скрол по кліку
const menuLinks = document.querySelectorAll('[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
    
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            if (menu.classList.contains('mobile-menu--is-active')) {
                menu.classList.remove('mobile-menu--is-active');
            }

                window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}




