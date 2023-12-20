const colorPreview = document.getElementById("color-preview");
const colorSelector = document.getElementById("color-selector");
const colorsBtnsWrapper = document.querySelectorAll(".nav__colors-btns-wrapper");

function setColor(color) {
    colorPreview.style.color = "#" + color;
}

function colorSelectorState() {
    colorSelector.classList.toggle("nav__color-selector--hidden");
}

setColor(colorsBtnsWrapper[0].children[0].dataset.color);

colorPreview.addEventListener("click", colorSelectorState)

for (const elems of colorsBtnsWrapper) {
    for (const elem of elems.children) {
        elem.style.color = "#" + elem.dataset.color;

        elem.addEventListener("click", () => {
            setColor(elem.dataset.color);
            colorSelectorState();
        });
    }
}