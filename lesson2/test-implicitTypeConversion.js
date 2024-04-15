// Неявне перетворення рядка і числа в рядок під час конкатенації
let number = 123;
let string = " apples and ";
let result = number + string + 10;
console.log(result); // "123 apples and 10"

// Неявне перетворення рядка в число під час математичних операцій
let stringNumber = "100";
let sum = stringNumber - 10;
console.log(sum); // 90

// Неявне перетворення булевих значень в числа
let trueValue = true;
let falseValue = false;
console.log(trueValue + falseValue); // 1 (true перетворюється в 1, false в 0)

// Неявне перетворення рядка в true або false під час використання в логічних операціях
let truthyString = "Hello";
let falsyString = "";
console.log(!!truthyString); // true
console.log(!!falsyString); // false

// Неявне перетворення об'єкта в рядок або число
let obj = { key: "value" };
console.log(obj + 10); // "[object Object]10"

// Неявне перетворення null та undefined в числа
console.log(null + 25); // 25 (null перетворюється в 0)
console.log(undefined + 25); // NaN (undefined не може бути перетворене в число)

// Неявне перетворення дати в число
let date = new Date();
console.log(+date); // Тут виводиться timestamp дати