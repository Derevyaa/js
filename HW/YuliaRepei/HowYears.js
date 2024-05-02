let yearStr = prompt('Ваш вік:');
let year = parseInt(yearStr);
let resultElement = document.getElementById('result');

if (!isNaN(year) && yearStr != null && yearStr !== '' && year >= 0) {
    let ageTxt;

    if (year === 0) {
        resultElement.textContent = `Тобі менше року, малюк`;
    } else if (year % 10 === 1 && year % 100 !== 11) {
        ageTxt = 'рік';
    } else if ((year % 10 === 2 || year % 10 === 3 || year % 10 === 4) && (year % 100 < 10 || year % 100 > 20)) {
        ageTxt = 'роки';
    } else {
        ageTxt = 'років';
    }

    if (ageTxt) {
        resultElement.textContent = `Тобі ${year} ${ageTxt}`;
    }
} else {
    resultElement.textContent = 'Введено некоректні дані';
}
