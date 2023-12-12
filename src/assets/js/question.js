const questionCard = document.querySelectorAll(".question-cards__card");

questionCard.forEach(elem => {
    const radioInputs = elem.querySelectorAll("input[type='radio']");

    radioInputs.forEach(elem => {
        elem.addEventListener("change", () => {
            radioInputs.forEach(elem => {
                if (elem.checked) {
                    elem.parentElement.style.opacity = 1;
                    return;
                }

                elem.parentElement.style.opacity = 0.5;
            });
        })
    });
});