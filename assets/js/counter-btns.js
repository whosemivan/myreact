const counter = document.getElementById("counter");
const incBtn = document.getElementById("inc-count");
const decBtn = document.getElementById("dec-count");

incBtn.addEventListener("click", () => counter.stepUp());
decBtn.addEventListener("click", () => counter.stepDown());