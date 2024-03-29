const slider = new Swiper(".slider", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 5,

    breakpoints: {
        1200: {
            spaceBetween: 10,
        },
    },
});

const descriptionSlider = new Swiper(".description-slider", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 10,

    breakpoints: {
        1200: {
            spaceBetween: 30,
        },
    },
});

const sliderLogoSlider = new Swiper(".main__logo-slider", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 43,

    breakpoints: {
        1200: {
            spaceBetween: 100,
        },
    },

    pagination: {
        el: ".slider__pagination",
        bulletClass: "slider__pagination-bullet",
        bulletActiveClass: "slider__pagination-bullet-active",
        modifierClass: "slider__pagination-",
        clickable: true,
    },
});

const recommendationsSlider = new Swiper(".main__recommendations-slider", {
    direction: "horizontal",
    slidesPerView: 4,
    slidesPerGroup: 4,
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