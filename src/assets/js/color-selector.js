const colorPreview = document.getElementById("color-preview");
const colorSelector = document.getElementById("color-selector");
const colorsBtnsWrapper = document.querySelector(".nav__colors-btns-wrapper").children;

function setColor(color) {
    colorPreview.style.color = "#" + color;
}

function colorSelectorState() {
    colorSelector.classList.toggle("nav__color-selector--hidden");
}

setColor(colorsBtnsWrapper[0].dataset.color);

colorPreview.addEventListener("click", colorSelectorState)

for (const elem of colorsBtnsWrapper) {
    elem.style.color = "#" + elem.dataset.color;

    elem.addEventListener("click", () => {
        setColor(elem.dataset.color);
        colorSelectorState();
    });
}