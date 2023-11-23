const dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(elem => {
    elem.addEventListener("click", (e) => {
        if (e.target != e.currentTarget) return;

        const dropdown = e.target.querySelector(".dropdown");
        
        dropdown.classList.toggle("dropdown--hidden")
    })
});