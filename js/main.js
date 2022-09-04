//  Show nav side bar

const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navMenu = document.getElementById('nav-menu')

navToggle.addEventListener("click", function () {
    if (navToggle) {
        navMenu.classList.add('show')
        return
    }
    navMenu.classList.remove('show')
})

navClose.addEventListener('click', function () {
    navMenu.classList.remove('show')
})

// Slider for testimoninal section

var swiper = new Swiper(".testimonialSwiper", {
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
    breakpoints: {
        1140: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});