const user = {
    name: "Alice",
    address: {
      street: "123 Main St",
      city: "New York"
    },
    hobbies: ["reading", "hiking"]
  };
  
  // Виводимо всю інформацію об'єкта цілком
  console.log(user);

  // Виводимо одне хоббі
  console.log(user.hobbies[0]);
  
  // Або форматований вивід
  console.log(`Name: ${user.name}`);
  console.log(`Address: ${user.address.street}, ${user.address.city}`);
  console.log(`Hobbies: ${user.hobbies.join(', ')}`);
  