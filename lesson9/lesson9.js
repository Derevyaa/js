/**
 --- Масиви ---

 У JavaScript масив (Array) є структурою даних, яка дозволяє зберігати колекцію елементів в одній змінній.
 Масиви в JavaScript можуть містити елементи будь-якого типу даних, такі як числа, рядки, об'єкти, функції та інше.
 Кожен елемент у масиві має унікальний індекс, що дозволяє доступатися до нього та взаємодіяти з ним.

 Тобто, 
 * масив – впорядкована колекція значень. JavaScript масив може містити елементи будь-якого типу. Масив – це особливий вид об'єктів.
 * Елемент масиву – окреме значення, що знаходиться у масиві.
 * Індекс – числова позиція елемента масиву. Індексація масиву починається з 0

 --- Ініціалізація масивів ---

 Літеральний спосіб: Ви можете створити масив, вказуючи його елементи у квадратних дужках.   */

// Cтворення порожнього масива
let emptyArray = [];            // створення масиву з використанням літералу (частіше використовується цей варіант)
let emptyArrayConstructor = new Array();   // створення масиву з використанням конструктора

const fruits = ["яблуко", "груша", "апельсин"]; // створення масиву та заповнення масиву рядковими значеннями
const numbers = new Array(1, 2, 3, 4, 5); // використання конструктора Array

var arr = [10, "John", true]; // Масив у JS дуже невибагливий, туди можна наштовхати чого завгодно

// під час використання consol.log будуть відображатися всі елементи масиву
console.log(fruits);
console.log(arr);
console.log(typeof arr); // object - масив, особливий вид об'єктів

/* Отримання доступу до елементів масиву відбувається за допомогою наступного синтаксису:

масив[індекс] = значення; - зміна значення елемента масиву за індексом
змінна = масив[індекс]; - читання значення елемента масиву за індексом */

let cities = []; // створення порожнього масиву
cities[0] = "London"; // присвоєння значення за індексом 0
cities[1] = "Paris"; // присвоєння значення за індексом 1
cities[2] = "Berlin"; // присвоєння значення за індексом 2
cities[3] = "Rome"; // присвоєння значення за індексом 3

let cityName = cities[0];
console.log("First array element - " + cityName);

// Додавання значень в існуючий запис
var arr = ['Oleg', 'Olga', 'Mykola'];
arr[3] = 'Koly';
console.log(arr)

// Перезапис значень
var arr = ['Oleg', 'Olga', 'Mikola'];
arr[0] = 'Solomiya';
console.log(arr)

// Додавання значень за допомогою push
const emptyArray1 = [];
console.log(emptyArray1)
emptyArray1.push("елемент 1");
emptyArray1.push("елемент 2");
console.log(emptyArray1)

/** 
 * В JavaScript, масиви і об'єкти мають схожу структуру, але є деякі важливі відмінності:

Призначення:
Масиви призначені для зберігання впорядкованих колекцій елементів. Вони зазвичай використовуються для зберігання списків однорідних даних, наприклад чисел, рядків чи інших об'єктів.
Об'єкти призначені для зберігання неупорядкованих колекцій даних у форматі ключ-значення. Вони ідеально підходять для представлення сутностей з властивостями, які можуть бути різних типів.
*/
let numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2)

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car)

/**
Індексація:
Масиви використовують числову індексацію, що починається з нуля, що означає, що елементи в масиві можна отримати або змінити за допомогою їх числового індексу.
Об'єкти використовують імена ключів для доступу до значень. Ключами можуть бути рядки або символи, і вони не мають впорядкованого порядку.
*/
let numbers3 = [1, 2, 3, 4, 5];
let thirdElement = numbers3[2]; // 3
console.log(thirdElement)


let car2 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
let carModel = car2["model"]; // "Corolla"
console.log(carModel);

/**Методи:
Масиви в JavaScript мають багато вбудованих методів для роботи з елементами, наприклад push(), pop(), shift(), unshift(), slice(), splice() та інші.
Об'єкти не мають цих методів, але для роботи з об'єктами можна використовувати глобальні методи, такі як Object.keys(), Object.values(), і Object.entries().
*/
let numbers4 = [1, 2, 3, 4, 5];
numbers4.push(6); // [1, 2, 3, 4, 5, 6]
console.log(numbers4);

let car3 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
let keys = Object.keys(car3); // ["make", "model", "year"]
console.log(keys);

/**Прототипи:
Масиви наслідують від Array.prototype, який надає їм доступ до різних методів для маніпуляції масивами.
Об'єкти наслідують від Object.prototype, що означає, що вони мають доступ до методів, таких як hasOwnProperty() і toString().
*/

//отримати список усіх методів, які доступні для масивів 
const getAllArrayMethods = () => {
    const arrayPrototype = Array.prototype;
    return Object.getOwnPropertyNames(arrayPrototype).filter(prop => typeof arrayPrototype[prop] === 'function');
};

console.log(getAllArrayMethods());

//використання методу slice() для створення копії частини масиву:
let numbers5 = [1, 2, 3, 4, 5];
let firstThree = numbers5.slice(0, 3); // [1, 2, 3]
console.log(firstThree);

//перевірка, чи має об'єкт власну властивість (не унаслідувану):
let car4 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
let hasMake = car4.hasOwnProperty('make'); // true
console.log(hasMake);

/*
- Масиви зазвичай використовуються для зберігання списків елементів одного типу (наприклад, чисел, рядків).
- Об'єкти використовуються для зберігання асоціативних даних, де кожен ключ має своє значення.

- У масивах доступ до даних відбувається за допомогою індексів, які є числами.
- У об'єктах доступ до даних відбувається за допомогою ключів, які можуть бути рядками.
*/

// А що буде якщо записати у неіснуючий індекс?

const numbers6 = [1, 2, 3, 4, 5];

console.log("Init length: " + numbers6.length);
console.log(numbers6[7]); // Якщо спробувати прочитати значення індексу для якого немає елемента масиву, буде отримано значення undefined.
numbers6[7] = 10;
/**
 * 
Початковий масив: [1, 2, 3, 4, 5]
Задання значення індексу 7: numbers6[7] = 10
Кінцевий стан масиву: [1, 2, 3, 4, 5, undefined, undefined, 10]
Розглянемо деталі:

Масив спочатку має п'ять елементів.
Ви встановлюєте восьмий елемент (індекс 7, оскільки індексація починається з 0) рівним 10.
Індекси 5 і 6 (шостий і сьомий елементи) не були встановлені, тому вони стають undefined.
Довжина масиву стане 8.
Це призводить до того, що масив має "діри", тобто позиції, які заповнені undefined.

Використання конструкції типу numbers6[7] = 10;
Ініціалізація Специфічних Позицій
Розширення Масиву
Спеціальні Алгоритми (наприклад, купи в сортуванні купою)
Заповнення Масиву Під час Ітерації
 */
console.log(numbers6);
console.log("length1: " + numbers6.length);
console.log(numbers6[7]);
numbers6[70] = 700;
console.log("length2: " + numbers6.length);
console.log(numbers6);

/* 

Важливо пам'ятати, що індекси масивів починаються з нуля. 
Тобто перший елемент має індекс 0, другий - індекс 1 і так далі. 
Якщо ви намагаєтесь прочитати або записати значення за індексом, який виходить за межі розміру масиву, 
то це може призвести до помилки. Також, важливо перевіряти діапазон індексів перед читанням або записом даних у масив.
 
*/

// Властивість length

let cities1 = ["London", "Paris", "Berlin", "Rome"];
console.log(cities1.length); // length - властивість масиву, в якому знаходиться кількість елементів масиву

cities1[4] = "Lisbon"; // при зміні елемента масиву, що знаходиться за межами поточної довжини масиву, відбувається автоматичне оновлення властивості length
console.log(cities1.length); // довжина масиву збільшилась на 1

cities1[10] = "Madrid";
console.log(cities1.length); // тепер довжина масиву 11, оскільки індекс останнього елемента масиву 10
console.log(cities1);

cities1.length = 2; // встановивши length менше розміру масиву, ми видалили елементи, що виходять за межі нового розміру масиву
console.log(cities1);

cities1.length = 5;
console.log(cities1);

let cities2 = ["London", "Paris", "Berlin", "Rome"];
cities2[3] = "Lisbon"; // при зміні елемента масиву, відбувається автоматична заміна значення
console.log(cities2);
console.log(cities2.length);

/* 
   Оператор delete видалить елемент масиву, але залишить його індекс з властивістю undefined.

   Важливо враховувати, що видалені елементи залишаються в масиві як undefined, і вони можуть впливати на подальшу роботу з масивом. 
   Тому ретельно вивчайте потреби та вимоги вашого коду, перш ніж використовувати оператор delete для масивів.
*/

var arr = ['Oleg', 'Olga', 'Mykola'];
delete arr[0];
console.log(arr)
console.log(arr[0])

// Як зрозуміти, що перед вами масив?
var arr = ["один", "два", "три"];
console.log(typeof arr);

var notArr = {
    0: "Один",
    1: "Другой",
    2: "Третий",
    length: 3
}
console.log(typeof notArr);

/* 

Метод Array.isArray() - використовується для перевірки, чи об'єкт є масивом.
Він повертає true, якщо об'єкт є масивом, і false у протилежному випадку. 

*/

var arr = ["один", "два", "три"];
var notArr = {
    0: "Один",
    1: "Другой",
    2: "Третий",
    length: 3
}
console.log(Array.isArray(arr));
console.log(Array.isArray(notArr));

// Виведення елементів масиву за допомогою циклу

let cities3 = ["London", "Paris", "Berlin", "Rome"];

// запускаємо цикл із лічильником від 0 до 4 (довжини масиву)
for (let index = 0; index < cities3.length; index++) {
    const element = cities3[index]; // звертаємось до елементу масиву за індексом (значенням лічильника циклу)
    console.log(element);
}

// for...of

let cities4 = ["London", "Paris", "Berlin", "Rome"];

// прохід за значеннями масиву cities
// на кожній ітерації в змінну city записуватиметься наступні значення з масиву cities
// Всередині циклу city використовується як тимчасова змінна, яка містить посилання на поточне ім'я міста, яке ітерується з масиву cities. На кожному циклі ітерації з масиву cities до city присвоюється нове ім'я міста, а потім його значення виводиться на консоль.
for (const city of cities4) {
    console.log(city);
}

// Пошук максимального значення масиву
/**
 * Вибір методу залежить від контексту. Якщо вам потрібен найшвидший та найпростіший метод для великих масивів, 
 * краще використовувати ітераційний підхід або reduce(). 
 * Для невеликих масивів, де простота коду є більш важливою, можна використовувати Math.max() з оператором розширення.
 * 
 * Ініціалізація змінних:
values: масив значень, в якому потрібно знайти максимальне.
max: змінна для зберігання поточного максимального значення. Вона ініціалізується першим елементом масиву values[0].
Цикл for:
Цикл ітерує через кожен елемент масиву values.
index: лічильник циклу, що починається з 0 і закінчується на останньому індексі масиву.
element: змінна, що зберігає поточний елемент масиву, який перевіряється.
Умовний оператор if:
Перевіряє, чи поточний елемент масиву (element) більший за поточне значення max.
Якщо умова true, то значення element присвоюється змінній max.
Вивід результату:
Після завершення циклу, максимальне значення в масиві виводиться у консоль за допомогою console.log(max).
 */

//Ітераційний підхід
var values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
var max = values[0];

for (let index = 0; index < values.length; index++) {
    const element = values[index];
    if (element > max) {
        max = element;
    }
}

console.log(max);

//може не підходити для дуже великих масивів через обмеження на розмір стека.
var values1 = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 300];
var max = Math.max(...values1);
console.log(max);

//Використання методу reduce() може бути використаний для згортання масиву до одного значення, яке, у цьому випадку, буде максимальним:
var values2 = [10, 20, 4, 6, 11, 9, 1205, 1, 8, 0, 300];
var max = values2.reduce((acc, val) => val > acc ? val : acc, values2[0]);
console.log(max); // Виведе 1205

//Використання методу sort()
var values3 = [10, 20, 4, 6632, 11, 9, 1205, 1, 8, 0, 300];
var sortedValues = values3.slice().sort((a, b) => b - a);
var max = sortedValues[0];
console.log(max); // Виведе 6632


/* ----- Методи масивів ------

Метод – функція, визначена в об'єкті. 
Функція – блок коду, який виконує певну дію, цей  блок коду можна використовувати неодноразово. 
У багатьох об'єктів, таких як масиви, є 
багато вбудованих методів, які спрощують роботу розробника. Використання методів  має наступний загальний принцип: 

змінна.ім'я_методу(список_параметрів);

Для отримання доступу до методів об'єкта необхідно скористатися оператором ”.”, після  якого вказати ім'я методу. 
Після імені методу обов'язково потрібно вказати круглі дужки,  у яких, залежно від методу, використовуватимуться різні значення.

*/

// Перетворення масиву на рядок
var arr = [1, 2, 3, 4, 5];
console.log('toString() : ' + arr.toString()); // метод, який перетворює масив в рядок. Він повертає рядок, який містить розділені комами значення масиву
console.log('join без параметрів : ' + arr.join());	// якщо в метод join() не передати роздільник, то елементи масиву будуть об'єднані за допомогою коми
console.log('join з параметром : ' + arr.join('----'));// можна вказати роздільник

// Дія зворотна join - split
var str = "Був рядок із пробілами. Став масив слів";
var arr = str.split(' '); //Вказуємо символ, яким будемо " розбивати "
console.log(arr);

var str = "value1, value2, value3";
var values = str.split(', '); // створення масиву на основі рядка, використовуючи як роздільник ', '  
console.log(values);

// concat - об'єднує два масиви
var a = [1, 2];
var b = [3, 4];
var res = a.concat(b);
console.log(res);

// У метод concat можна передати багато параметрів, і навіть не обов'язково - масивів
var a = [1, 2];
var b = [3, 4];
var res = a.concat("five", true, b); // Вихідні масиви не змінилися, поверне НОВИЙ масив
console.log(res);

// Начебто як "складення" масивів
var a = [1, 2];
var b = [3, 4];
var str = a + b; // Спробує об'єднати (з'єднати) масиви a і b за допомогою оператора +. Однак в JavaScript оператор + 
//між масивами виконує примус типу, перетворюючи їх на рядки перед об'єднанням.
console.log(str);
console.log(typeof str);

// indexOf - шукає елемент із зазначеним значенням у масиві та повертає його індекс, або -1, якщо елемент не знайдений
var arr = ['Oleg', 'Olga', 'Mikola', 'Vadim', 'Vadim'];
console.log(arr.indexOf('Olga'));
console.log(arr.indexOf('Vadim'));
console.log(arr.indexOf("Vadim", 4)); // шукає індекс значення Vadim, починаючи з 4 індексу масиву
console.log(arr.indexOf("Anton")); // -1 значення не знайдено
console.log(arr.lastIndexOf('Vadim')); // lastIndexOf - пошук праворуч наліво 

// slice(start, end) - повертає новий масив, який копіює елементи з start до end (не включаючи end)
var arr = [1, 3, 7, 5, 8, 9];
// var newArray = arr.slice(3);// З третього – і до кінця
// var newArray = arr.slice(2, 5); // з другого по п'ятий
//var newArray = arr.slice(3, 1);//порожній масив
// var newArray = arr.slice(-4, -1);//відраховує з кінця
//var newArray = arr.slice(); // Поверне весь масив. Тобто фактично клонує його!
console.log('arr = ' + arr); // Початковий масив залишився незмінним
console.log('x = ' + newArray);

// Задом наперед - все навпаки!
var arr = [1, 3, 7, 5, 8, 9];
arr.reverse(); //Змінює сам масив!
console.log(arr)

/*  includes()  використовується для визначення того, чи містить масив певне значення. 
Він повертає true, якщо значення знайдено у масиві, та false, якщо воно відсутнє */
var arr = [1, 3, 7, 5, 8, 9];
console.log(arr.includes(7));
console.log(arr.includes(2));
console.log(arr.includes(5)); // виведе true, оскільки 5 є в масиві
console.log(arr.includes()); // метод не має вказівок, що саме шукати в масиві

// Епічна тема: сортування масиву

/**
 * Стандартне сортування (алфавітне)
 * JavaScript використовує алфавітний порядок за замовчуванням, який може не завжди працювати очікувано для чисел
 */

var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.sort();
console.log(fruits1); // ["Apple", "Banana", "Mango", "Orange"]

/**
 * JavaScript використовує метод sort() для масиву numbers7, 
 * який містить як числа, так і рядки. 
 * Коли викликає метод sort() 
 * без додаткового компаратора, він сортує елементи масиву як рядки у лексикографічному порядку.
 * Отже, навіть числові значення будуть сприйняті як рядки і впорядковані відповідно до їх лексикографічного порядку.
 *  Наприклад, у лексикографічному порядку "10" йде перед "2", оскільки перший символ "1" є меншим за "2".
 * Спочатку йдуть всі числа, що починаються на "0" ("0", "010") Потім числа, що починаються на "1" ("10", "100") Далі "2", "3" і так далі.
 */

var numbers7 = ["0", "10", 7, 800, 82, "799", "800", "010", "100", "30", 3, 5];
numbers7.sort();
console.log(numbers7);

/**
 * Сортування чисел
 * Для коректного сортування чисел потрібно передати функцію порівняння:
 */

var numbers8 = ["500", "10", 7, 800, 82, "799", "800", "100", "30", 3, -5, "", 1, "-1", "A"];


numbers8.sort(function (a, b) {
    return a - b;
});
console.log(numbers8);



// кастомна функція бо числа в 16 системі 
var numbers9 = ["500", "10", 7, 800, 82, "799", "800", "100", "30", 3, -5, "", 1, "-1", "A", "BB", "ce", "da"];

numbers9.sort(function (a, b) {
    // Функція для перетворення значення на 16-річне число
    function toHexNumber(x) {
        // Якщо вхідне значення порожнє, розглядаємо його як 0
        if (typeof x === 'string' && x.trim() === '') {
            return 0;
        }
        // Перетворення рядка або числа на число та обмеження його у 16-річному форматі
        let num = parseInt(x, 16);
        if (isNaN(num)) {
            // Якщо x не є числом, повертаємо 0
            return 0;
        }
        return num;
    }

    let numA = toHexNumber(a);
    let numB = toHexNumber(b);

    return numA - numB;
});

console.log(numbers9);



//перетворення 16 >> 10
let hexValues = numbers9
let decimalValues = [];

for (let i = 0; i < hexValues.length; i++) {
    decimalValues.push(parseInt(hexValues[i], 16));
}

console.log(decimalValues);


/**
 * Обернене сортування
Це просто сортування в зворотному порядку, що також використовує функцію порівняння:
 */

var numbers10 = [1, 3, 2, 10, 4];
numbers10.sort(function (a, b) {
    return b - a;
});
console.log(numbers10); // [10, 4, 3, 2, 1]


/**
 * Сортування об'єктів
 * Якщо у вас є масив об'єктів, ви можете сортувати його на основі одного або кількох атрибутів об'єктів:
 */

var people = [
    { name: "John", age: 45 },
    { name: "Anna", age: 24 },
    { name: "Andrew", age: 35 },
    { name: "Paul", age: 18 }
];

// Сортування за віком
people.sort(function (a, b) {
    return a.age - b.age;
});
console.log(people.map(p => p.name)); // ["Paul", "Anna", "Andrew", "John"]

/**
 * Сортування за кількома критеріями
Іноді вам може знадобитися сортування за кількома полями, наприклад, спершу за іменем, а потім за віком:

people.sort(function(a, b) { ... }); - Це сортує масив people за допомогою методу sort(). 
Він приймає функцію порівняння, яка визначає порядок сортування. 
У цьому випадку, функція порівнює об'єкти a та b за їхніми іменами. 
Якщо ім'я a менше ніж ім'я b, то sort() повертає від'ємне число, яке вказує, що a має бути перед b у відсортованому масиві. 
Якщо ім'я a більше, ніж ім'я b, то повертається позитивне число, що вказує, що b має бути перед a. 
Якщо імена однакові, вони порівнюються за віком. В цьому випадку a.age - b.age забезпечує сортування за зростанням віку.
console.log(people.map(p => ${p.name}: ${p.age})); - Після того як масив people відсортований, код використовує метод map() 
для перетворення кожного елемента масиву на рядок, що містить ім'я та вік об'єкта. Ці рядки потім виводяться на консоль за допомогою console.log().
 */

var people1 = [
    { name: "John", age: 45 },
    { name: "Anna", age: 24 },
    { name: "Andrew", age: 35 },
    { name: "Paul", age: 18 }
];

people1.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return a.age - b.age;
});
console.log(people1.map(p => `${p.name}: ${p.age}`));
// ["Andrew: 35", "Anna: 24", "John: 45", "Paul: 18"]

// ----- Маніпуляції з масивом -----

// push та pop - додають елементи в кінець масиву або видаляють останній елемент
// pop() - метод масиву, який видаляє останній елемент масиву та повертає його
var cities5 = ["London", "Paris", "Berlin", "Rome"];
console.log('Початковий arr = ' + cities5);
let last = cities5.pop();
console.log("pop result " + last);
console.log('Після змін arr = ' + cities5);

// push - метод, який додає вказане значення в кінець масиву
var cities6 = ["London", "Paris", "Berlin", "Rome"];
console.log('Початковий arr = ' + cities6);
cities6.push("> Lisbon <");
console.log('Після змін arr = ' + cities6);

/**
 * 
Методи unshift() та shift() використовуються для роботи з початком масиву в JavaScript.

unshift(): Цей метод додає один або кілька елементів на початок масиву та повертає нову довжину масиву. Наприклад:
 */

let arr1 = [2, 3, 4];
console.log('1: ' + arr1);
arr1.unshift(1); // тепер arr = [1, 2, 3, 4]
console.log('2: ' + arr1);
arr1.unshift(-2, -1, 0); // тепер arr = [-2, -1, 0, 1, 2, 3, 4]
console.log('3: ' + arr1);


/**
 * shift(): Цей метод видаляє перший елемент з масиву та повертає його значення. Він також змінює початковий масив, 
 * зміщуючи всі наступні елементи на одну позицію до початку масиву. Наприклад:
 */

let arr2 = [1, 2, 3, 4];
console.log('1: ' + arr2);
let firstElement = arr2.shift(); // тепер arr = [2, 3, 4], firstElement = 1
console.log('firstElement: ' + firstElement);
console.log('2: ' + arr2);

// зсув масиву - праворуч, додаючи елементи
var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
var v = arr.unshift(1, 2); // повертає довжину масиву
console.log('v = ' + v + '\narr = ' + arr);

// fill -  дозволяє заповнювати весь або частину масиву статичним значенням
var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
console.log('Новий arr = ' + arr.fill('blablabla'));

var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
console.log('Змінений arr = ' + arr.fill('blablabla', 1)); // заповнює з 2ої позиції

var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
console.log('Змінений arr = ' + arr.fill('blablabla', 1, 3)); // заповнює з 2ої до 4ої позиції

// Функція для генерації випадкової електронної адреси
function generateRandomEmail() {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const username = Math.random().toString(36).substring(7);
    return `${username}@${randomDomain}`;
}

// Генерація масиву електронних адрес з використанням fill() та map()
const numberOfEmails = 10;
const emails = new Array(numberOfEmails).fill().map(generateRandomEmail);

console.log(emails);



/*  Метод splice, !!!не плутати з slice!!! 

    splice - використовується для зміни вмісту масиву, включаючи вставку, видалення та заміну елементів.

    array.splice(start, deleteCount, item1, item2, ...);
    start: Індекс, з якого починається зміна масиву.
    deleteCount: Кількість елементів, які потрібно видалити починаючи з start. 
        Якщо deleteCount відсутнє або дорівнює 0, жоден елемент не буде видалений.
        Якщо він більше за кількість доступних елементів в масиві з start, видаляться всі елементи до кінця масиву.
    item1, item2, ...: Елементи, які додаються до масиву, якщо потрібно.

    */

var arr = [1, 2, 3, 4, 5];
console.log('Початковий arr = ' + arr);

var newArr = arr.splice(1, 2); // Видаляє два елементи, починаючи з індексу 1
console.log('newArr = ' + newArr); // Виводить масив, який містить видалені елементи
console.log('arr = ' + arr); // Виводить вихідний масив arr після виклику splice()


// Вставиляє шматочок у середину
var arr = [1, 2, 3, 4, 5];
console.log('Початковий arr = ' + arr);
var res = arr.splice(2, 0, 'a', 'b'); // Вставляє 'a' та 'b' починаючи з індексу 2, при цьому не видаляючи жодного елемента бо є 0 на другій позицціі
console.log('res = ' + res); // Виводить порожній масив, оскільки нічого не було видалено
console.log('arr = ' + arr); // Виводить масив arr після виклику splice()

// Можна і вирізати та вставити
var arr = [1, 2, 3, 4, 5];
console.log('Початковий arr = ' + arr);
var res = arr.splice(1, 2, 'a', 'b', 'c'); // Видаляє елементи 2 та 3, починаючи з індексу 1, та вставляє 'a' та 'b' на їхнє місце
console.log('res = ' + res); // Виводить масив, який містить видалені елементи
console.log('arr = ' + arr); // Виводить масив arr після виклику splice()


/* А що робити якщо хочемо провести якусь операцію для кожного члена масиву?

 Метод forEach():
Особливості:
Виконує задану функцію один раз для кожного елемента масиву.
Не створює новий масив.
Не повертає значення.
Зручний для виконання певної дії для кожного елемента масиву.

*/
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (element) {
    console.log(element * 10); // Проводиться операція для кожного елемента масиву
});

/**
 * Метод map():
Особливості:
Створює новий масив на основі результатів виконання заданої функції для кожного елемента масиву.
Повертає новий масив з результатами операції.
Не змінює вихідний масив.
 */

var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (element) {
    return element * 10; // Повертає новий масив з результатами операції
});
console.log(newArr);


/**
 * Метод reduce():
Особливості:
Використовується для обчислення одного значення на основі всіх елементів масиву.
Повертає одне значення.
Може бути використаний для акумуляції значень або редукції масиву до одного значення.
 */

var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue; // Обчислює суму всіх елементів масиву
}, 0);
console.log(sum);

/**
 * Метод filter():
Особливості:
Створює новий масив, який містить елементи, що задовольняють умову, визначену в переданій функції.
Повертає новий масив з відфільтрованими елементами.
Не змінює вихідний масив.
 */

var arr = [1, 2, 3, 4, 5];
var filteredArr = arr.filter(function (element) {
    return element > 2; // Відфільтровує елементи, які більше за 2
});
console.log(filteredArr);


/**
 * Метод every():
Особливості:
Перевіряє, чи задана умова виконується для кожного елемента масиву.
Повертає true, якщо умова виконується для кожного елемента, інакше - false.
 */

var arr = [1, 2, 3, 4, 5];
var isGreaterThanZero = arr.every(function (element) {
    return element > 0; // Перевіряє, чи всі елементи більші за 0
});
console.log(isGreaterThanZero);

/**
 * Метод some():
Особливості:
Перевіряє, чи хоча б один елемент масиву задовольняє умову.
Повертає true, якщо хоча б один елемент задовольняє умову, інакше - false.
 */

var arr = [1, 2, 3, 4, 5];
var hasEvenNumber = arr.some(function (element) {
    return element % 2 === 0; // Перевіряє, чи є хоча б один парний елемент
});
console.log(hasEvenNumber);


/**
 * Метод find() в JavaScript використовується для знаходження першого елемента в масиві, 
 * який задовольняє вказану умову у вигляді функції. Ось кілька прикладів використання методу find():
 */

var arr = [1, 3, 5, 2, 6, 7];
var firstEvenNumber = arr.find(function (element) {
    return element % 2 === 0; // Повертає true, якщо число парне
});
console.log(firstEvenNumber); // Виводить перше знайдене парне число (2)


var arr = ['apple', 'banana', 'kiwi', 'orange', 'strawberry'];
var longString = arr.find(function (element) {
    return element.length > 5; // Повертає true, якщо рядок має довжину більше за 5 символів
});
console.log(longString); // Виводить перший рядок, який має довжину більше за 5 символів (strawberry)


var arr = ['apple', 'banana', 42, 'orange', 'strawberry'];
var firstNumber = arr.find(function (element) {
    return typeof element === 'number'; // Повертає true, якщо елемент є числом
});
console.log(firstNumber); // Виводить перший знайдений елемент, який є числом (42)


var arr = ['apple', false, true, 'orange', 'strawberry'];
var firstTrueValue = arr.find(function (element) {
    return element === true; // Повертає true, якщо елемент є true
});
console.log(firstTrueValue); // Виводить перший знайдений елемент, який є true (true)

/**
 * Проте слід зазначити, що метод find() в першу чергу шукає значення в масиві, яке точно співпадає з вказаним значенням (за допомогою строгого порівняння ===). 
 * У випадку, якщо масив містить різні типи даних (наприклад, числа, рядки, булеві значення), find() може привести до неочікуваного результату.
 */

var arr = [1, '2', true, '4', 5, 'test'];
var result = arr.find(function (element) {
    return element === '4'; // Шукаємо рядок '4'
});
console.log(result); // Виводить '4', оскільки значення строго співпадає

var arr = [1, '2', true, '4', 5, 'test'];
var result = arr.find(function (element) {
    return element === 4; // Шукаємо число 4
});
console.log(result); // Виводить undefined, оскільки числа і рядки не строго співпадають


// більш лаконічна форма
const fruits4 = ["яблуко", "груша", "апельсин", "банан"];
const firstCitrusFruit = fruits4.find((fruit) => fruit === "апельсин"); // Пошук першого елемента, що дорівнює "апельсин"
console.log(firstCitrusFruit); // "апельсин"

// можна достукатись і до об'єктів
var arr = [
    { name: "John Snow", age: 45 },
    { name: "Cersei Lannister", age: 32 },
    { name: "Daenerys Targaryen", age: 18 },
    { name: "Jorah Mormont", age: 28 }
];

console.log(arr.find((el) => {
    return el.age === 18;
}))

// findIndex - знаходить індекс першого елемента, який задовольняє умову
const colors = ["червоний", "зелений", "синій", "жовтий"];
const indexOfBlue = colors.findIndex((color) => color === "синій"); // indexOfBlue: 2
console.log(indexOfBlue);

/*--------------------------------------------------------------------------------------------------------
Додатково:

w3schools

https://www.w3schools.com/js/js_arrays.asp
https://www.w3schools.com/js/js_array_methods.asp
https://www.w3schools.com/js/js_array_search.asp
https://www.w3schools.com/js/js_array_sort.asp
https://www.w3schools.com/js/js_array_iteration.asp

developer mozilla

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Hardcore tasks from codewars.com:

https://www.codewars.com/kata/57cc975ed542d3148f00015b
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
https://www.codewars.com/kata/56576f82ab83ee8268000059
https://www.codewars.com/kata/563e320cee5dddcf77000158
https://www.codewars.com/kata/5a092d9e46d843b9db000064
https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
https://www.codewars.com/kata/57f22b0f1b5432ff09001cab
https://www.codewars.com/kata/5b6c220fa0a661fbf200005d
https://www.codewars.com/kata/55eeddff3f64c954c2000059
https://www.codewars.com/kata/558fc85d8fd1938afb000014
*/