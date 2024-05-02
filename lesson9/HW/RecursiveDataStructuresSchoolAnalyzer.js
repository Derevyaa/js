/**
 * код JavaScript призначений для роботи з JSON-структурою, яка містить дані про школу, включаючи інформацію про студентів та їх оцінки. 
 * розберемо, як він працює:

const data = require('./school.json');: Цей рядок завантажує JSON-файл з даними про школу та зберігає його у змінній data.
const stack = [data];: Тут створюється масив stack, в якому перше значення - це завантажені дані data.
while (stack.length > 0) {...}: Цикл while, який продовжується, доки масив stack не стане порожнім.
const obj = stack.pop();: З кожної ітерації циклу вибирається останній об'єкт з масиву stack і зберігається у змінній obj.
if (obj.students) {...}: Перевіряється, чи є в поточному об'єкті obj поле students.
obj.students.forEach(student => {...}): Якщо поле students існує, то для кожного студента з цього масиву виконуються певні дії.
for (const key in obj) {...}: Перебирається кожний ключ в об'єкті obj.
if (obj.hasOwnProperty(key)) {...}: Перевіряється, чи має поточний об'єкт obj власне властивості з цим ключем.
const value = obj[key];: Значення, яке відповідає ключу key, зберігається у змінній value.
if (typeof value === 'object' && value !== null) {...}: Перевіряється, чи є значення об'єктом (а не примітивом) і не є null.
stack.push(value);: Якщо значення є об'єктом, воно додається до масиву stack для подальшого оброблення.
 */

const data = require('./school.json');

const stack = [data];
while (stack.length > 0) {
    const obj = stack.pop();
    if (obj.students) {
        obj.students.forEach(student => {
            console.log("Ім'я:", student.name);
            console.log("ID:", student.id);
            console.log("Оцінки:", student.grade);
            console.log("\n");
        });
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'object' && value !== null) {
                stack.push(value);
            }
        }
    }
}
