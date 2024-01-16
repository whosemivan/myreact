const slider = new Swiper(".slider", {
    direction: "horizontal",
    slidesPerView: "auto",

    breakpoints: {
        1200: {
            spaceBetween: 10,
        },
    },
});

const sliderWithPagination = new Swiper(".slider--with-pagination", {
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

const recommendationsSlider = new Swiper(".main__recommendations-slider", {
    direction: "horizontal",
    slidesPerView: 3,
    slidesPerGroup: 3,
    breakpoints: {
        1200: {
            slidesPerView: "auto",
        },
    },
});

const productSlider = new Swiper(".main__product-slider", {
    direction: "horizontal",
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 10000,
    },
    pagination: {
        el: ".slider__pagination",
        bulletClass: "slider__pagination-bullet",
        bulletActiveClass: "slider__pagination-bullet-active",
        modifierClass: "slider__pagination-",
        clickable: true,
    },
});

const productTypeSelector = new Swiper(".main__product-type-selector", {
    direction: "horizontal",
    slidesPerView: "auto",
    breakpoints: {
        1200: {
            direction: "vertical",
            spaceBetween: 25,
        },
    },
});

const primarySlider = new Swiper(".main__primary-slider", {
    // Опциональные параметры
    direction: "horizontal",
    loop: false,
    autoplay: {
        delay: 10000,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 9,
        },
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