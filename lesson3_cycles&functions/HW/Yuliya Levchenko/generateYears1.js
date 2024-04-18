// Функція для підрахування останньоі цифри і підстановки правильного слова рік, років, роки
function generateYears (input) {
  const numInput = parseInt(input) // Конвертація введення у число

  let suffix
  // знаходимо решту від діленя на 10, якщо дорівнює 1, але не 11 і не 111
  if (numInput % 10 === 1 && numInput % 100 !== 11) {
    // add word "рік"
    suffix = 'рік'
    // знаходимо решту від діленя на 10, якщо дорівнює від 2 до 4, але не 12, 13, 14
  } else if (
    numInput % 10 >= 2 &&
    numInput % 10 <= 4 &&
    !(numInput % 100 >= 12 && numInput % 100 <= 14)
  ) {
    // add word "роки"
    suffix = 'роки'
  } else {
    // якщо попередні дві умови не виконуються, то додаєм 'років'
    suffix = 'років'
  }

  document.body.innerHTML = `<p>${numInput} ${suffix}</p>` // Вивід результату на сторінці
}
