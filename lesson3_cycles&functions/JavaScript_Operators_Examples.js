
// JavaScript Operators Example File

// 1. Arithmetic Operators
// Addition (+)
let addition = 5 + 3; // equals 8

// Subtraction (-)
let subtraction = 5 - 3; // equals 2

// Multiplication (*)
let multiplication = 5 * 3; // equals 15

// Division (/)
let division = 15 / 3; // equals 5

// Modulus (%)
let modulus = 15 % 4; // equals 3

// Increment (++)
let increment = 0;
increment++; // increment is now 1

// Decrement (--)
let decrement = 0;
decrement--; // decrement is now -1

// 2. Logical Operators
// Logical AND (&&)
let logicalAnd = true && false; // equals false

// Logical OR (||)
let logicalOr = true || false; // equals true

// Logical NOT (!)
let logicalNot = !true; // equals false

// Difference between & and &&
// & is a bitwise AND, not often used for logical conditions
let bitwiseAnd = 5 & 1; // 0101 & 0001 = 0001 (binary), which is 1 in decimal

// && is a logical AND, used to test if both conditions are true
let testAnd = (5 > 1) && (1 < 5); // true because both conditions are true

// 3. Assignment Operator
// Simple assignment (=)
let assignment = 5; // assigns 5 to variable

// 4. Array and Object Operators
// Access an array element
let array = [1, 2, 3];
let element = array[1]; // access the second element (2)

// Access an object property
let obj = {name: 'John', age: 30};
let name = obj.name; // access the name property ('John')

// 5. Operator Precedence
// Operator precedence determines the order of evaluation of operators
let precedence = 3 + 4 * 5; // equals 23, not 35 because * has a higher precedence than +
