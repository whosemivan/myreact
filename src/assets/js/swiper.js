const slider = new Swiper(".slider", {
    direction: "horizontal",
    slidesPerView: "auto",
});

const sliderWithPagination = new Swiper(".slider--with-pagination", {
    direction: "horizontal",
    slidesPerView: "auto",

    pagination: {
        el: ".slider__pagination",
        bulletClass: "slider__pagination-bullet",
        bulletActiveClass: "slider__pagination-bullet-active",
        modifierClass: "slider__pagination-",
        clickable: true,
    },
});

const sliderWithArrows = new Swiper(".slider--with-arrows", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const freeModeSlider = new Swiper(".slider--free-mode", {
    direction: "horizontal",
    slidesPerView: "auto",

    freeMode: {
        enabled: true,
        sticky: false,
    },
});

const primarySlider = new Swiper(".main__primary-slider", {
    // Опциональные параметры
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 10000,
    },

    // Если нужна пагинация
    pagination: {
        el: ".slider__pagination",
        bulletClass: "slider__pagination-bullet",
        bulletActiveClass: "slider__pagination-bullet-active",
        modifierClass: "slider__pagination-",
        clickable: true,
    },

    // Стрелки навигации
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },

    // Если нужен scrollbar
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },
});