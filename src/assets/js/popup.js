const popup = document.getElementById("popup");

function openPopup() {
    popup.classList.remove("popup--hidden");
    popup.classList.add("popup");
}

function closePopup() {
    popup.classList.remove("popup");
    popup.classList.add("popup--hidden");
}