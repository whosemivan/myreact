const openElem = document.querySelector(".faq-wrapper__accordion--open");
const openElemChild = openElem.querySelector(".faq-wrapper__accordion-content")
openElemChild.style.maxHeight = openElemChild.scrollHeight + "px";


function accordionsControl(el) {
    const parent = el.parentElement;
    const content = parent.querySelector(".faq-wrapper__accordion-content");

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
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

document.querySelectorAll(".faq-wrapper__accordion-summary-btn").forEach((el) => {
    el.addEventListener("click", () => accordionsControl(el));
});