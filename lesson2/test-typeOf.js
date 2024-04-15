console.log(typeof "Hello World"); // Виведе: "string"
console.log(typeof 25);            // Виведе: "number"
console.log(typeof true);          // Виведе: "boolean"
console.log(typeof undefined);     // Виведе: "undefined"
console.log(typeof null);          // Виведе: "object" (це відома непослідовність JavaScript)


console.log(typeof {});            // Виведе: "object"
console.log(typeof []);            // Виведе: "object" (масиви є типом об'єкта в JavaScript)
console.log(typeof function() {}); // Виведе: "function"


const value = "Hello World";

if (typeof value === "string") {
  console.log("Значення є рядком.");
} else {
  console.log("Значення не є рядком.");
}


let someVariable;

if (typeof someVariable === "undefined") {
  console.log("Змінна 'someVariable' не була визначена.");
} else {
  console.log("Змінна 'someVariable' була визначена.");
}
