const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

matrix.forEach(row => console.log(row));

matrix.forEach(row => {
    row.forEach(element => {
      console.log(element);
    });
  });