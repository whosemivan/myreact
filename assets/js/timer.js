function startCountdown(countDownDate) {
    const timer = document.getElementById("timer");

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysSpan = document.createElement("span");
        const hoursSpan = document.createElement("span");
        const minutesSpan = document.createElement("span");
        const secondsSpan = document.createElement("span");

        daysSpan.innerHTML = days < 10 ? "0" + days : days;
        hoursSpan.innerText = hours < 10 ? "0" + hours : hours;
        minutesSpan.innerText = minutes < 10 ? "0" + minutes : minutes;
        secondsSpan.innerText = seconds < 10 ? "0" + seconds : seconds;

        timer.innerText = "";
        timer.append(daysSpan, hoursSpan, minutesSpan, secondsSpan);

        if (distance < 0) clearInterval(interval);
    }, 1000);
}

