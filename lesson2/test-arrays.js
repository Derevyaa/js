const colors = ["red", "green", "blue"];
const numbers = [1, 2, 3, 4, 5];


colors.push("yellow"); // Додає "yellow" в кінець масиву
numbers.pop(); // Видаляє останній елемент
colors.map(color => console.log(color));
console.log(colors.length);

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

for (const color of colors) {
    console.log(color);
}

numbers.forEach(function (number) {
    console.log(number);
});

numbers.forEach(number => console.log(number));


for (let index in colors) {
    console.log(colors[index]);
}

let index = 0;
while (index < numbers.length) {
    console.log(numbers[index]);
    index++;
}