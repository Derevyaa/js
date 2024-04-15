// Явне перетворення в рядок
let numberValue = 123;

// Використання String()
let stringValue = String(numberValue);
console.log('String:', stringValue); // Виведе: String: 123

// Конкатенація з пустим рядком
stringValue = numberValue + "";
console.log('Concatenation:', stringValue); // Виведе: Concatenation: 123

// Явне перетворення в число
let stringNumber = "456";

// Використання Number()
numberValue = Number(stringNumber);
console.log('Number:', numberValue); // Виведе: Number: 456

// Унарний плюс
numberValue = +stringNumber;
console.log('Unary +:', numberValue); // Виведе: Unary +: 456

// parseInt() і parseFloat() для вилучення числа з рядка
let floatString = "123.45";
let intValue = parseInt(floatString);
let floatValue = parseFloat(floatString);
console.log('parseInt:', intValue); // Виведе: parseInt: 123
console.log('parseFloat:', floatValue); // Виведе: parseFloat: 123.45

// Явне перетворення в булеве значення
let truthyValue = "Hello";
let falsyValue = 0;

// Використання Boolean()
let booleanValue = Boolean(truthyValue);
console.log('Boolean true:', booleanValue); // Виведе: Boolean true: true
booleanValue = Boolean(falsyValue);
console.log('Boolean false:', booleanValue); // Виведе: Boolean false: false

// Логічний НЕ (двічі)
booleanValue = !!truthyValue;
console.log('!! true:', booleanValue); // Виведе: !! true: true
booleanValue = !!falsyValue;
console.log('!! false:', booleanValue); // Виведе: !! false: false
