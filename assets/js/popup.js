function openPopup(popupId = undefined) {
    const openPopups = document.querySelectorAll(".popup");

    if (openPopups.length) {

        openPopups.forEach((popup) => {
            popup.classList.remove("popup");
            popup.classList.add("popup--hidden");
        })
    }


    const popup = popupId ? document.getElementById(popupId) : document.getElementById("popup");

    document.body.style.overflow = "hidden";

    popup.classList.remove("popup--hidden");
    popup.classList.add("popup");

    popup.addEventListener("click", (e) => {
        if (e.currentTarget == e.target) {
            document.body.style.overflow = "";

            popup.classList.remove("popup");
            popup.classList.add("popup--hidden");
        }
    })
}

function closePopup(elem) {
    const popup = elem.parentElement.parentElement;

    document.body.style.overflow = "";

    popup.classList.remove("popup");
    popup.classList.add("popup--hidden");
}