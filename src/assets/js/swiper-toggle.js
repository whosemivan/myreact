const canBeViewedSwippers = document.querySelectorAll(".can-be-viewed");

canBeViewedSwippers.forEach((swipper) => {
    swipper.addEventListener(("click"), (e) => {
        console.log("AWD");
        e.currentTarget.classList.toggle("slider--viewed");
    })
});