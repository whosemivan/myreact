const productSizeCard = document.querySelectorAll(".product-size-card+input[type='checkbox']");

productSizeCard.forEach(elem => {
    elem.addEventListener("change", (e) => {
        document.querySelector(`[for=${e.target.id}]`).classList.toggle("selected");
    });
});