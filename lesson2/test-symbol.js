const person = {
    name: "John",
    [Symbol("id")]: 12345
  };
  
  // Get all symbol properties on the object
  const symbols = Object.getOwnPropertySymbols(person);
  const idSymbol = symbols[0];
  console.log(person[idSymbol]); // This will log: 12345
  

  const person1 = {
    name: "John",
    [Symbol("id")]: 23456
  };
  
  console.log(person1[Symbol("id")]); // Результат: undefined