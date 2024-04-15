const exampleConst = "Hello, Const!";
console.log(exampleConst); // Виведе: "Hello, Const!"

exampleConst = "Trying to change"; // TypeError: Assignment to constant variable.

//just select to execute
const exampleObject = { greeting: "Hello, Const Object!" };
exampleObject.greeting = "Hello, Changed!";
console.log(exampleObject.greeting); // Виведе: "Hello, Changed!"
