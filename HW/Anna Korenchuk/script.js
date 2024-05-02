function getCorrectEnding(year) {
    if (year < 0 || isNaN(year)) {
        return "Будь ласка, введіть число";
    }

    const lastNumber = year % 10;
    const lastTwoNumbers = year % 100;

    if ((lastTwoNumbers >= 11 && lastTwoNumbers <= 14) || (lastNumber === 0) || (lastNumber >= 5 && lastNumber <= 9)) {
        return year + " років";
    } else if (lastNumber === 1) {
        return year + " рік";
    } else {
        return year + " роки";
    }
}

const inputYear = prompt("Будь ласка, введіть свій вік:");
const year = parseInt(inputYear);

alert(getCorrectEnding(year));