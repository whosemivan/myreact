document.querySelectorAll(".filter-buttons__btn").forEach((el) => {
    el.addEventListener("click", () => {
        if (el.classList.contains("filter-buttons__btn--active")) return;

        const parent = el.parentElement;

        parent.querySelectorAll(".filter-buttons__btn").forEach((el) => {
            el.classList.remove("filter-buttons__btn--active");
        });
        el.classList.add("filter-buttons__btn--active");
    });
});