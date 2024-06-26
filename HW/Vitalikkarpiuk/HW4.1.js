// Просимо користувача ввести свій вік
const age = prompt('Введіть ваш вік:');

// Перевіряємо, чи користувач натиснув кнопку "Скасувати"
if (age === null) {
  // Виводимо повідомлення про відмову, якщо користувач натиснув "Скасувати"
  alert("Ви натиснули 'Скасувати'.");
} else if (!isNaN(age) && age >= 0 && age.indexOf('.') === -1 && age.indexOf(' ') === -1) {
  // Визначаємо останню цифру віку
  const lastDigit = age % 10;

  // Визначаємо слово для виведення в залежності від цифри
  let word;
  if (lastDigit === 1) {
    word = 'рік';
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    word = 'роки';
  } else {
    word = 'років';
  }

  // Виводимо результат вводу
  alert(age + ' ' + word);
} else {
  // Виводимо повідомлення про помилку, якщо вік не є числом або від'ємним числом, або містить ".", " "
  alert('Введено некоректне значення віку.');
}
