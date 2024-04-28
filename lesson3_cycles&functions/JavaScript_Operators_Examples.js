// JavaScript Operators Example File

// 1. Arithmetic Operators
// Addition (+)
const addition = 5 + 3; // equals 8
console.log(addition);
// Subtraction (-)
const subtraction = 5 - 3; // equals 2

// Multiplication (*)
const multiplication = 5 * 3; // equals 15

// Division (/)
const division = 15 / 3; // equals 5

// Modulus (%)
const modulus = 15 % 4; // equals 3

// Increment (++)
let increment = 0;
increment++; // increment is now 1

// Decrement (--)
let decrement = 0;
decrement--; // decrement is now -1

// 2. Logical Operators
// Logical AND (&&)
const logicalAnd = true && false; // equals false

// Logical OR (||)
const logicalOr = true || false; // equals true

// Logical NOT (!)
const logicalNot = !true; // equals false

// Difference between & and &&
// & is a bitwise AND, not often used for logical conditions
const bitwiseAnd = 5 & 1; // 0101 & 0001 = 0001 (binary), which is 1 in decimal

// && is a logical AND, used to test if both conditions are true
const testAnd = (5 > 1) && (1 < 5); // true because both conditions are true

// 3. Assignment Operator
// Simple assignment (=)
const assignment = 5; // assigns 5 to variable

// 4. Array and Object Operators
// Access an array element
const array = [1, 2, 3];
const element = array[1]; // access the second element (2)

// Access an object property
const obj = { name: 'John', age: 30 };
const name = obj.name; // access the name property ('John')

// 5. Operator Precedence
// Operator precedence determines the order of evaluation of operators
const precedence = 3 + 4 * 5; // equals 23, not 35 because * has a higher precedence than +

// Приклад 1: Пріоритет множення над додаванням
const result1 = 2 + 3 * 5;
// Спочатку виконується множення (3 * 5 = 15), потім додавання (2 + 15 = 17).
console.log(result1); // Виведе: 17

// Приклад 2: Зміна пріоритетності за допомогою дужок
const result2 = (2 + 3) * 5;
// Дужки змінюють порядок обчислень: спочатку виконується додавання (2 + 3 = 5), потім множення (5 * 5 = 25).
console.log(result2); // Виведе: 25

// Приклад 3: Пріоритетність між множенням та діленням (виконуються зліва направо)
const result3 = 4 * 2 / 2;
// Множення та ділення мають однаковий пріоритет, виконуються зліва направо: спочатку 4 * 2 = 8, потім 8 / 2 = 4.
console.log(result3); // Виведе: 4

// Приклад 4: Пріоритетність ділення та множення (однаковий пріоритет, зліва направо)
const result4 = 100 / 2 * 10;
// Ділення та множення виконуються послідовно зліва направо: спочатку 100 / 2 = 50, потім 50 * 10 = 500.
console.log(result4); // Виведе: 500

// Приклад 5: Використання декількох операторів з різним пріоритетом
const result5 = 3 + 4 * 2 - 1;
// Спочатку множення (4 * 2 = 8), потім додавання (3 + 8 = 11), і нарешті віднімання (11 - 1 = 10).
console.log(result5); // Виведе: 10
