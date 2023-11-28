const payInputs = document.querySelectorAll(".basket__pay-input");

payInputs.forEach(elem => {
    const parent = elem.parentElement;
    const content = parent.querySelector(".basket__pay-info");
    const radioMark = elem.querySelector(".radio-mark");

    elem.querySelector(".radio-input").addEventListener("change", () => {
        document.querySelectorAll(".basket__pay-block--active").forEach(elem => {
            const content = elem.querySelector(".basket__pay-info");
            const radioMark = elem.querySelector(".radio-mark");

            elem.classList.toggle("basket__pay-block--active");
            content && (content.style.maxHeight = null);
            radioMark.classList.toggle("radio-mark--blue");
        });

        parent.classList.toggle("basket__pay-block--active");
        content && (content.style.maxHeight = content.scrollHeight + "px");
        radioMark.classList.toggle("radio-mark--blue");
    });
});


const activeParent = document.querySelector(".basket__pay-block--active");
activeParent.querySelector(".basket__pay-info").style.maxHeight = activeParent.querySelector(".basket__pay-info").scrollHeight + "px";
activeParent.querySelector(".radio-mark").classList.toggle("radio-mark--blue");
