function validate(evt) {
    let theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}


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