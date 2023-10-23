import './../scss/style.scss';

/*=============== SEARCH ===============*/
const searchButton = document.getElementById("search-button"),
    searchClose = document.getElementById("search-close"),
    searchContent = document.getElementById("search-content");

if (searchButton) {
    searchButton.addEventListener("click", () => {
        searchContent.classList.add("show-search")
    })
}

if (searchClose) {
    searchClose.addEventListener("click", () => {
        searchContent.classList.remove("show-search")
    })
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById("login-button"),
    loginClose = document.getElementById("login-close"),
    logContent = document.getElementById("login-content");

if (loginButton) {
    loginButton.addEventListener("click", () => {
        logContent.classList.add("show-login")
    })
}

if (loginClose) {
    loginClose.addEventListener("click", () => {
        logContent.classList.remove("show-login")
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById("header");
    window.scrollY >= 50 ? header.classList.add("shadow-header") : header.classList.remove("shadow-header")
}
window.addEventListener("scroll", shadowHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1220: {
            spaceBetween: -32
        }
    }
});

/*=============== FEATURED SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/