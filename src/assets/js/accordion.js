document.querySelectorAll(".faq-wrapper__accordion-summary-wrapper").forEach((el) => {
    el.addEventListener("click", () => {
        let parent = el.parentElement;
        let content = parent.querySelector(".faq-wrapper__accordion-content");

        if (parent.classList.contains("faq-wrapper__accordion--open")) {
            document.querySelectorAll(".faq-wrapper__accordion").forEach((el) => {
                el.classList.remove("faq-wrapper__accordion--open");
                el.querySelector(".faq-wrapper__accordion-content").style.maxHeight = null;
            });
        } else {
            document.querySelectorAll(".faq-wrapper__accordion").forEach((el) => {
                el.classList.remove("faq-wrapper__accordion--open");
                el.querySelector(".faq-wrapper__accordion-content").style.maxHeight = null;
            });
            parent.classList.add("faq-wrapper__accordion--open");
            content.style.maxHeight = el.scrollHeight + "px";
        }
    });
});