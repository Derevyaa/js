if (true) {
    var exampleVar = "Hello, Var!";
  }
  console.log(exampleVar); // Виведе: "Hello, Var!"
  
  function test() {
    var functionScoped = "I'm function scoped.";
  }
  console.log(functionScoped); // ReferenceError: functionScoped is not defined
  