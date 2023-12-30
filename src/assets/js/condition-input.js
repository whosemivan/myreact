const conditionsWrappers = document.querySelectorAll(".basket__conditions-wrapper");

conditionsWrappers.forEach(elem => {
    const parent = elem.parentElement;
    const content = parent.querySelector(".basket__condition-content");

    elem.querySelector(".input-with-mark").addEventListener("change", () => {
        document.querySelectorAll(".basket__condition--active").forEach(elem => {
            const content = elem.querySelector(".basket__condition-content");

            elem.classList.toggle("basket__condition--active");
            content && (content.style.maxHeight = null);
        });

        parent.classList.toggle("basket__condition--active");
        content && (content.style.maxHeight = content.scrollHeight + "px");
    });
});