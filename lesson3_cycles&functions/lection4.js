/**
 * 
1. Function Declaration (Декларація функцій)
Пояснення:
Функції в JavaScript можуть бути оголошені за допомогою декларації функцій.
 Це один із способів створення функцій, який дозволяє звертатися до функції перед її оголошенням у коді, завдяки механізму підняття (hoisting).
 */

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Виводить: Hello, Alice!



/**
 * Function Expression (Функціональні вирази)
Пояснення:
Функціональний вираз створює функцію і привласнює її змінній.
Відмінність від декларації функцій полягає в тому, що функціональний вираз не підлягає механізму підняття, тому функцію можна викликати тільки після її оголошення.
 */

const sayGoodbye = function (name) {
  return `Goodbye, ${name}!`;
};

console.log(sayGoodbye("Bob")); // Виводить: Goodbye, Bob!


/**
 * Arrow Functions (Стрілкові функції)
Пояснення:
Стрілкові функції — це більш компактний спосіб оголошення функцій без використання ключового слова function. 
Ці функції часто є анонімними і не мають свого власного контексту this, замість цього вони успадковують this з зовнішнього лексичного контексту.

Пояснення контексту this у стрілкових функціях
У JavaScript, ключове слово this відіграє важливу роль у визначенні контексту виклику функції. Поведінка this може відрізнятися в залежності від того, як саме функція була визначена та викликана.

1. Традиційні Функції
В традиційних функціях (оголошених через function), this зазвичай вказує на об'єкт, який викликає функцію. Це може варіюватися в залежності від контексту виклику функції:

У глобальному контексті - this відноситься до глобального об'єкта (у браузерах це window).
У методах об'єктів - this відноситься до об'єкта, який володіє методом.
Під час використання new (конструктора) - this відноситься до новоствореного об'єкта.

2. Стрілкові Функції
Стрілкові функції, введені в ES6, мають особливу поведінку щодо this. Вони не мають власного контексту this, замість цього this у 
стрілкових функціях успадковується від зовнішнього лексичного контексту, де функція була створена. 
Це означає, що this всередині стрілкової функції вказує на те ж значення this, яке було у її зовнішньому середовищі.

У цьому прикладі, стрілкова функція всередині setInterval успадковує значення this від конструктора Person. Це дозволяє this.age 
коректно вказувати на властивість age об'єкта Person, який був створений. Якби ми використали звичайну функцію, this всередині неї вказував би на глобальний об'єкт
(або undefined у строгому режимі), що призвело б до помилки.

Така особливість стрілкових функцій робить їх ідеальними для використання у колбеках, обробниках подій, і всюди, де важливо зберегти контекст this з зовнішнього середовища.

Ось докладніше, як працює цей код:

Конструктор Person
Коли створюється новий екземпляр Person, функція конструктора ініціалізує властивість age з початковим значенням 0.
Всередині конструктора Person встановлюється таймер за допомогою setInterval. Цей таймер викликається кожну секунду (1000 мілісекунд).
Таймер і стрілкова функція
Стрілкова функція всередині setInterval виконує кілька завдань:
Збільшення віку: Кожен раз, коли таймер спрацьовує, вік (this.age) збільшується на одиницю.
Вивід віку: Поточний вік виводиться в консоль, тому можна бачити, як він змінюється з часом.
Перевірка умови: Якщо вік досягає 50, таймер зупиняється за допомогою clearInterval(this.timer). 
Це гарантує, що таймер не продовжуватиме викликати стрілкову функцію назавжди, зупиняючи його після 50 ітерацій.
Використання this
Оскільки стрілкові функції не мають власного контексту this, вони успадковують this від зовнішнього (батьківського) лексичного контексту. 
У цьому випадку, this всередині стрілкової функції вказує на екземпляр Person, що дозволяє змінювати його властивість age і правильно керувати таймером.
Створення і запуск екземпляра
При створенні екземпляра Person (const p = new Person()), вищеописаний процес починається автоматично. 
Це призводить до постійного збільшення віку кожну секунду та його виводу на консоль до тих пір, поки вік не досягне 50.
 */

function Person() {
  this.age = 0;
  this.timer = setInterval(() => {
    this.age++;  // `this` правильно вказує на об'єкт Person
    console.log(this.age);  // Виводить поточний вік на консоль

    if (this.age >= 50) {  // Зупиняємо таймер після 50 ітерацій
      clearInterval(this.timer);
    }
  }, 1000);
}

const p = new Person();


/**
 * Callback (Зворотні виклики)
Пояснення:
Callback — це функція, яку передають як аргумент іншій функції, і яка має бути виконана після завершення деякої операції. Зворотні виклики є фундаментом асинхронного програмування в JavaScript.
 
Як працює цей код:
Функція processData приймає функцію зворотного виклику як аргумент.
Усередині processData, setTimeout використовується для затримки виклику зворотного виклику на 2000 мілісекунд (5 секунд). 
Це демонструє типовий приклад асинхронної операції, де ви можете чекати на завершення якоїсь події (наприклад, отримання відповіді від сервера або завершення таймера).
Коли таймер завершується, викликається стрілкова функція, що в свою чергу викликає переданий у processData зворотний виклик із даними "Processed data".
Результатом є виведення "Processed data" на консоль після затримки у 2 секунди.
*/

function processData(callback) {
  const data = "Processed data";
  setTimeout(() => {
    callback(data);
  }, 5000); // Запуск callback після затримки у 2 секунди
}

processData((result) => {
  console.log(result); // Виводить: Processed data після затримки
});

