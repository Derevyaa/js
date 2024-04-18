function validateInput (input) {
  const num = parseInt(input)
  return !isNaN(num) && num >= 0
}

function getYearWord (year) {
  const lastDigit = year % 10
  const lastTwoDigits = year % 100

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return 'рік'
  } else if (lastDigit >= 2 && lastDigit <= 4 && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)) {
    return 'роки'
  } else {
    return 'років'
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const userInput = prompt('Скільки вам років?')
  const outputElement = document.getElementById('ageOutput')
  if (validateInput(userInput)) {
    const age = parseInt(userInput)
    const yearWord = getYearWord(age)
    outputElement.textContent = `Вам ${age} ${yearWord}.`
  } else {
    outputElement.textContent = "Некоректний ввід. Будь ласка, введіть невід'ємне число."
  }
})
