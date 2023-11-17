// Связано с датой
function getMonthName(date) {
    const monthNames = [
        "янв", "фев", "мар", "апр", "май", "июн",
        "июл", "авг", "сен", "окт", "ноя", "дек"
    ];

    return monthNames[date.getMonth()]
}

function getDayAndMonthName({ numWeeks = 0 } = {}) {
    const now = new Date();
    now.setDate(now.getDate() + numWeeks * 7);
    
    return `${now.getDate()} ${getMonthName(now)}`;
}
//


function textToEllipsis(target) {
    const text = target.innerText.split("");
    target.innerText = text.slice(0, 110).join("") + "...";    
}