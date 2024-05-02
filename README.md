
# JavaScript Coding Conventions

This document outlines the coding conventions and best practices for writing maintainable and readable JavaScript code for our project.

## 1. Naming Conventions

- **Variables and Functions**: Use `camelCase` for variables and function names.
- **Classes and Constructors**: Use `PascalCase`.
- **Constants**: Use `UPPER_CASE` with underscores.

### Examples
```javascript
// Correct variable
let itemCount = 10;

// Correct class
class ShoppingCart {}

// Correct constant
const MAX_USERS = 50;
```

## 2. Syntax and Formatting

- **Semicolons**: Always use semicolons to terminate statements.
- **Curly Braces**: Opening curly braces on the same line as the statement.
- **Line Length**: Limit lines to 100 characters.
- **Indentation**: Use 2 spaces for indentation.

### Examples
```javascript
if (user.isValid) {
  console.log('User is valid.');
}
```

## 3. Commenting and Documentation

- **Inline Comments**: Use `//` for brief comments.
- **Block Comments**: Use `/* ... */` for detailed comments.
- **Documentation**: Use JSDoc for function and module documentation.

### Examples
```javascript
// Checks if the user is logged in
function isLoggedIn(user) {
  return user.status === 'active';
}

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
  this.title = title;
  this.author = author;
}
```

## 4. Variable Declarations

- **ES6 Syntax**: Use `let` and `const` for variable declarations.
- **Scoping**: Declare variables as close to usage as possible.

### Examples
```javascript
let userName = 'John Doe';
const userCount = 100;
```

## 5. Functions

- **Arrow Functions**: Prefer arrow functions for anonymous functions.
- **Function Parameters**: Use default parameter values where appropriate.

### Examples
```javascript
const add = (a, b = 1) => a + b;
```

## 6. Error Handling

- **Try/Catch**: Use try/catch blocks for handling exceptions.
- **Throwing Errors**: Use `Error` or subclasses of `Error`.

### Examples
```javascript
try {
  const userData = fetchUserData();
} catch (error) {
  console.error('Error fetching user data:', error);
}
```

## 7. ES6+ Features

- **Template Literals**: Use template literals for strings.
- **Destructuring**: Use object and array destructuring.

### Examples
```javascript
const user = { name: 'Alice', age: 25 };
const { name, age } = user;

const greeting = `Hello, ${name}!`;
```

## 8. Testing and Quality

- **Linting**: Use ESLint to enforce coding standards.
- **Testing**: Ensure comprehensive test coverage.

### Examples
_No specific code example for linting and testing. Set up ESLint and Jest for your project._

## 9. File Structure

- **Modularity**: Organize code into modules based on functionality.
- **File Naming**: Use kebab-case for filenames.

### Examples
_File naming: `user-profile.js`, `shopping-cart.js`_

## 10. Code Reviews

- **Peer Reviews**: Conduct peer reviews to improve code quality and enforce standards.
