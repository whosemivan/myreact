function startCountdown(
    countDownDate,
    timeFormat = "DD:HH:mm:ss",
) {
    countDownDate = moment(countDownDate).add(-1, "day");
    const timer = document.getElementById("timer");

    const interval = setInterval(() => {
        const distance = (moment(countDownDate.diff(moment())).format(timeFormat)).split(":");

        timer.innerText = "";
        distance.map(item => {
            const elem = document.createElement("span");
            
            elem.innerText = item;
            timer.append(elem);
        });

        if (countDownDate.diff(moment(), "seconds") == 0) clearInterval(interval);
    }, 1000);
}