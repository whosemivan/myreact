const canBeViewedSwippers = document.querySelectorAll(".can-be-viewed");

canBeViewedSwippers.forEach((swipper) => {
    swipper.addEventListener(("click"), (e) => {
        e.currentTarget.classList.toggle("slider--viewed");
    })
});