function outputYears (number) {
  if (number % 10 === 1 && number % 100 !== 11) {
    return number + ' рік'
  } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 > 20)) {
    return number + ' роки'
  } else {
    return number + ' років'
  }
}

// Перевірка значень
const testData = [1, 21, 101, 41, 51.5, 9, 15, 54, 67, 0, 11, 102, 111, 122]

testData.forEach(number => {
  console.log(outputYears(number))
})

do {
  const usrYears = prompt('Введіть кількість років: ')
  // Перевірка, чи введене значення - це число і воно не є від'ємним
  if (!isNaN(usrYears) && usrYears.trim() !== '' && !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(usrYears) && usrYears >= 0) {
    alert(outputYears(usrYears))
  } else {
    alert('Будь ласка, введіть додатне число.')
  }

  var wantToCheckAgain = confirm('Чи бажаєте перевірити інше значення usrYears?')
} while (wantToCheckAgain)
