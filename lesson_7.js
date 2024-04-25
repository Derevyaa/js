/**
 * ПРИНЦИПИ ООП
 * Інкапсуляція
Правильний підхід:
Інкапсуляція використовується для обмеження доступу до внутрішніх даних класу та забезпечення інтерфейсу через методи.
 */
class Account {
    constructor(username, password) {
        this.username = username;
        this._password = password; // Приватна змінна
    }

    validatePassword(inputPassword) {
        return this._password === inputPassword;
    }
}

let userAccount = new Account("user1", "pass123");
console.log(userAccount.validatePassword("pass123")); // true

/**
 * Неправильний підхід:
Прямий доступ до чутливих даних, які повинні бути захищені.
 */

class Account {
    constructor(username, password) {
        this.username = username;
        this.password = password; // Чутливі дані не захищені
    }
}

let userAccount1 = new Account("user1", "pass123");
console.log(userAccount1.password); // pass123, небезпечний доступ

/**
 * Наслідування
Правильний підхід:
Використання наслідування для розширення функціональності базового класу.
 */
class User {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Admin extends User {
    constructor(name, accessLevel) {
        super(name);
        this.accessLevel = accessLevel;
    }

    showAccessLevel() {
        console.log(`My access level is ${this.accessLevel}`);
    }
}

let admin = new Admin("Alice", "high");
admin.sayHello(); // Hello, my name is Alice
admin.showAccessLevel(); // My access level is high

/**
 * Неправильний підхід:
Ігнорування наслідування і дублювання коду в різних класах.
 */

class User {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Admin {
    constructor(name, accessLevel) {
        this.name = name;
        this.accessLevel = accessLevel;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`); // Дублювання коду
    }

    showAccessLevel() {
        console.log(`My access level is ${this.accessLevel}`);
    }
}

let admin1 = new Admin("Alice", "high");
admin1.sayHello(); // Hello, my name is Alice


/**
 * Поліморфізм
Правильний підхід:
Перевизначення методів у нащадкових класах для забезпечення специфічної поведінки.
 */

// Базовий клас для користувачів
class User {
    // Метод для входу в систему
    login() {
        console.log("User logged in");
    }
}

// Клас для гостей, який наслідується від класу User
class Guest extends User {
    // Перевизначення методу login для специфічної поведінки гостей
    login() {
        console.log("Guest logged in with limited capabilities");
    }
}

// Створення об'єкта гостя
let guest = new Guest();
guest.login(); // Виведе: "Guest logged in with limited capabilities"
let user2 = new User();
user2.login();

/**
 * У цьому прикладі клас Guest успадковує властивості та методи від класу User. Метод login() перевизначається в класі Guest, 
 * щоб надати специфічну поведінку, яка відображає обмежені можливості гостей у системі. Це є прикладом поліморфізму, де один інтерфейс (login()) 
 * використовується для різних типів об'єктів.
 */

/**
 * Неправильний підхід:
Відсутність перевизначення методів у нащадкових класах, коли це потрібно.
Тут клас Guest також успадковує властивості та методи від класу User. Проте, метод login() не перевизначається, що призводить до використання стандартної поведінки 
визначеної в класі User для об'єкта Guest. Це неправильно, оскільки гості можуть мати обмежені можливості порівняно зі звичайними користувачами, і використання 
стандартного методу login() може призвести до помилок у логіці безпеки програми.
 */
// Базовий клас для користувачів
class User {
    // Метод для входу в систему
    login() {
        console.log("User logged in");
    }
}

// Клас для гостей, який наслідується від класу User
class Guest extends User {
    // Відсутнє перевизначення методу login
}

// Створення об'єкта гостя
let guest1 = new Guest();
guest1.login(); // Виведе: "User logged in", неправильно для обмеженого доступу гостя



/**
---- Об'єкт в JavaScript - це складний тип даних, який дозволяє зберігати колекцію значень та функцій,
 що пов'язані між собою. 
 
 Об'єкти дозволяють організовувати дані у вигляді пар ключ-значення,
 де кожен ключ - це рядок (іноді називають "властивість"),
 а значення може бути різного типу даних, включаючи інші об'єкти, масиви, числа, рядки, функції тощо.

 Об'єкти містять властивості та методи.
Властивості – стан об'єкта, значення будь-якого типу.
Методи – поведінка об'єкта, функція, яка виконує будь-яку операцію.

 --- Cтворення об'єктів ---

Спосіб 1

Літерал об'єкта в JavaScript — це спосіб створення об'єкта. Це одна з найпростіших форм для визначення об'єктів; 
об'єкти можуть містити властивості та методи. Літерал об'єкта складається з вкладеної пари фігурних дужок, що можуть включати нуль або більше "пар ключ-значення". 
Кожна пара відокремлюється комою. Ключ є ідентифікатором (зазвичай рядком), а значення може бути будь-якого типу (число, рядок, масив, функція, навіть інший об'єкт).

Структура літерала об'єкта:
*/
var objectName = {
    property1: value1,
    property2: value2,
    method1: function () {
        // код методу
    }
};

// Приклад літерала об'єкта:
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

/**
 * У цьому прикладі:

person є об'єктом, створеним за допомогою літерала об'єкта.
firstName, lastName та age є властивостями об'єкта.
fullName є методом об'єкта, який використовує інші властивості об'єкта для повернення повного імені особи.

Переваги використання літералів об'єкта:
Лаконічність: Літерали об'єкта дозволяють швидко і лаконічно визначати об'єкти.
Простота створення: Вони прості для написання та зрозумілі для читання.
Можливість відразу визначити властивості та методи.

Використання літералів об'єкта в JavaScript має багато переваг, але також існують деякі недоліки або обмеження, які варто врахувати:

* Відсутність повторного використання коду: Кожен літерал об'єкта створює новий і унікальний екземпляр об'єкта. Якщо вам потрібно створити багато подібних об'єктів, 
вам доведеться повторно вводити однаковий код для кожного екземпляра, що може призвести до зайвого дублювання коду.
* Відсутність прототипів: Літерали об'єктів не використовують прототипну спадщину так само, як конструктори функцій або класи. 
Це означає, що ви не можете легко спадкувати властивості та методи від інших об'єктів без додаткової роботи з встановленням прототипу після створення об'єкта.
* Ефективність пам'яті та виконання: Оскільки кожен літерал об'єкта створює новий об'єкт, це може бути неефективним у використанні пам'яті, якщо створюється велика кількість
об'єктів. Також, методи, визначені у літералах об'єктів, можуть не мати таких же оптимізацій виконання, як методи в об'єктах, створених через конструктори чи класи, 
де методи можуть бути розміщені на прототипі та спільно використані між екземплярами.
* Ускладнення при великих об'єктах: Коли об'єкт стає дуже великим та складним, управління його структурою та поведінкою через літерал об'єкта може стати 
важчим і менш читабельним порівняно з використанням класів або фабричних функцій.
* Обмежена функціональність: Літерали об'єктів не підтримують деякі особливості, доступні в класах, такі як приватні поля та методи, або інші можливості енкапсуляції та 
управління станом.
 */

/* Спосіб 2

За допомогою конструктора Object

Це загальний спосіб створення об'єкта за допомогою вбудованого конструктора Object. 
Це може бути корисним, коли потрібно створити порожній об'єкт або клонувати існуючий.

Наприклад:    */

const obj = new Object();
obj.name = "John";
obj.age = 30;



/**
 * Створення порожнього об'єкта:
За допомогою літералу об'єкта:
Це найпростіший спосіб створити порожній об'єкт.
 */
const obj = {};
/**
 * За допомогою конструктора Object:
Це ще один стандартний спосіб створення порожнього об'єкта.
 */
const obj = new Object();

/**
 * За допомогою Object.create():
Можна створити порожній об'єкт з null як прототип, що означає, що об'єкт не матиме прототипних властивостей чи методів.
 */

const obj = Object.create(null);
/**
 * Обидва способи створення об'єктів мають різні підходи та наслідки. Ось їх відмінності:
 * 
 * const obj = new Object();:
Цей підхід створює порожній об'єкт за допомогою вбудованого конструктора Object. 
Такий об'єкт буде мати доступ до властивостей та методів, які зазвичай присутні в усіх об'єктах 
 */

const obj = new Object();
obj.property = "value";
console.log(obj); // { property: "value" }

// Перевірка властивості, яка входить у прототип Object
console.log(obj.hasOwnProperty("property")); // true


/**
 * const obj = Object.create(null);:
Цей підхід створює об'єкт, який не має прототипу, за допомогою методу Object.create(). Такий об'єкт не має доступу до властивостей чи методів, 
які зазвичай присутні в об'єктах JavaScript, таких як toString() або hasOwnProperty(). Він є досить "чистим" об'єктом і може бути корисним, 
коли вам потрібен простий контейнер для даних без додаткових методів чи властивостей в прототипі.
 */

const obj = Object.create(null);
obj.property = "value";
console.log(obj); // { property: "value" }

// Перевірка властивості, яка не входить у прототип Object
console.log(obj.hasOwnProperty("property")); // TypeError: obj.hasOwnProperty is not a function

/**
 * Реальний приклад використання Object.create(null) може бути в ситуації, коли вам потрібно створити об'єкт як "чистий" контейнер для даних без додаткових методів та властивостей в прототипі. 
 * Це особливо корисно, коли вам не потрібен доступ до стандартних методів та властивостей JavaScript, і коли вам важливо забезпечити максимальну чистоту та прозорість даних.
 */
// Створення об'єкта з конфігураційними параметрами
const config = Object.create(null); // без null буде еррора Object prototype may only be an Object or null: undefined

// Додавання конфігураційних параметрів
config.port = 3000;
config.host = 'localhost';
config.database = {
    host: 'db.example.com',
    port: 5432,
    username: 'user',
    password: 'password'
};

// Виведення конфігурації
console.log(config);

/**
 * Клонування існуючого об'єкта:
Поверхневе клонування з Object.assign():
Цей метод використовується для копіювання значень усіх властивостей від одного або декількох джерелних об'єктів до цільового об'єкта.
Цей метод копіює тільки поверхневі властивості об'єкта. Якщо ви маєте вкладені об'єкти або масиви, вони будуть посилатися на ті ж самі об'єкти або масиви 
в оригінальному об'єкті. 
Це означає, що якщо ви зміните властивості вкладеного об'єкта в копії, вони також зміняться в оригіналі, і навпаки.
 */

const original = { name: "John", age: 30 };
const clone = Object.assign({}, original);
console.log(clone);

const original0 = { a: 1, b: { c: 2 } };
const clone0 = Object.assign({}, original0);
clone0.b.c = 3;
console.log(original0); // { a: 1, b: { c: 3 } }

/**
 * Поверхневе клонування з розгортанням об'єкта (spread operator):
Це сучасний спосіб для клонування об'єктів, який також реалізує лише поверхневе копіювання.
Цей метод також копіює тільки поверхневі властивості об'єкта. Він працює аналогічно Object.assign(), 
але має більш зручний та сучасний синтаксис. Як і Object.assign(), він не глибоко клонує вкладені структури.
 */

const original1 = { name: "John1", age: 31 };
const clone1 = { ...original1 };
console.log(clone1);

const original01 = { a: 1, b: { c: 2 } };
const clone01 = { ...original01 };
clone01.b.c = 3;
console.log(original01); // { a: 1, b: { c: 3 } }


/**
 * Глибоке клонування з JSON.stringify() і JSON.parse():
Цей метод глибоко копіює всі вкладені структури, тому буде створена повна копія об'єкта та всіх його вкладених об'єктів та масивів. 
Однак він має обмеження: він не може обробляти значення, які не можуть бути серіалізовані у JSON, такі як функції або циклічні посилання.
 */

const original2 = { name: "John2", age: 32 };
const clone2 = JSON.parse(JSON.stringify(original2));
console.log(clone2);

const original02 = { a: 1, b: { c: 2 } };
const clone02 = JSON.parse(JSON.stringify(original02));
clone02.b.c = 3;
console.log(original02); // { a: 1, b: { c: 2 } }

//А що робити якщо об'єкт складний? 

// Функція для глибокого клонування об'єкта, яка враховує нерепрезентовані в JSON значення
function deepCloneObject(originalObj) {
    // Перевірка, чи originalObj є об'єктом, який не є null
    if (typeof originalObj !== 'object' || originalObj === null) {
        return originalObj; // Якщо так, повертаємо originalObj без змін
    }

    // Створення нового об'єкту або масиву залежно від типу originalObj
    const clonedObj = Array.isArray(originalObj) ? [] : {};

    // Рекурсивний обхід ключів та значень originalObj та клонування їх
    for (let key in originalObj) {
        if (Object.prototype.hasOwnProperty.call(originalObj, key)) {
            // Рекурсивне клонування для вкладених об'єктів
            clonedObj[key] = deepCloneObject(originalObj[key]);
        }
    }

    return clonedObj; // Повернення глибокої копії об'єкта
}

// Приклад об'єкту з функціями
const originalObject = {
    numProperty: 1,
    nestedObject: {
        nestedNumProperty: 2
    },
    funcProperty: function () {
        console.log('Hello from function!');
    }
};

// Глибоке клонування об'єкту
const clonedObject = deepCloneObject(originalObject);

// Перевірка результату
console.log(clonedObject);



/* --- Читання властивостей ---

Ви можете отримати доступ до властивостей об'єкта за допомогю двох основних способів: 
доступу через крапку (.) та доступу через квадратні дужки ([]). 

--- Доступ через крапку:

Цей метод використовується для отримання значення властивості об'єкта, 
якщо ключ (ім'я властивості) є відомим на етапі написання коду.  */

let person = {
    firstName: "John",
    lastName: "Doe"
};

console.log(person.firstName); // Отримання значення через крапку
console.log(person.lastName);

/* Доступ через квадратні дужки:

Цей метод дозволяє отримати доступ до властивостей об'єкта, коли ключ містить спеціальні символи, пробіли або генерується динамічно.*/

let person = {
    "first/Name": "John",
    lastName: "Doe"
};

// Отримання значення через квадратні дужки
console.log(person["first/Name"]); // John


/* --- Додавання властивостей ---

Для додавання нової властивості ви просто встановлюєте її, вказуючи ключ та значення через крапку або квадратні дужки. */
let person = {
    firstName: "John",
    lastName: "Doe"
};

console.log(person);

person.pet = "Murzik"; // Додавання властивості через крапку

console.log(person);


// Ви також можете додавати властивості до об'єкта динамічно за допомогою змінних як ключів.

let person = {
    firstName: "John",
    lastName: "Doe"
};

person["favFood&snack"] = "pizza"; // Додавання властивості через квадратні дужки

console.log(person["favFood&snack"]);

// Якщо неіснуючій властивості привласнити значення, то ця властивість буде створена в об'єкті

let user = new Object();           // створення порожнього об'єкту
console.log(user);

user.name = "admin";               // створення властивості name та присвоєння значення admin
user.email = "admin@example.com";  // створення якості email та присвоєння значення admin@examle.com
console.log(user);


// Важливою особливістю JS є можливість отримати доступ до властивості, навіть якщо такої властивості в об'єкта не існує. Наприклад:
console.log(user.myImaginaryProperty); // Тобто доступ до відсутньої властивості є, а ось самого значення властивості — немає. Тому й отримуємо undefined.


// В об'єкті може бути вкладений об'єкт.
let user1 = {
    name: "admin",
    email: "admin@example.com",
    address: { // властивість address, в якому знаходиться об'єкт
        city: "London",
        street: "Uxbridge Rd",
        building: "7",
        name: {
            name: {

            }
        }
    }
};

console.log(user1.name);
console.log(user1.address.city);

/* --- Перезапис властивостей ---

Ми можемо замінити властивість на інше значення */

let user = {
    name: "John",
    sName: "Snow"
};

console.log("Було: " + user.sName);
user.sName = 'Dou'; // Перезапис значення властивості
console.log("Стало: " + user.sName);

/* --- Видалення властивостей ---

 Якщо ми можемо додавати, змінювати нові властивості, то як нам їх видаляти
 Для цього використовується оператор delete  */

let user = {
    name: "John",
    sName: "Snow"
};

console.log("Було:");
console.log(user);

delete user.sName; // Видалення властивості lastName

console.log("Стало:");
console.log(user);

/* Destructuring assignment (розпакування) для об'єктів у JavaScript - 
це спосіб витягнути окремі властивості об'єкта та призначити їх змінним. 

Це допомагає спростити роботу з об'єктами та зробити код більш читабельним 
У цьому прикладі ми створили об'єкт person з даними про особу, такими як ім'я, прізвище та вік. Потім ми використали розпакування {} 
для отримання окремих властивостей цього об'єкта і призначення їх значень відповідним змінним. 
Кожна змінна тепер містить відповідне значення властивості об'єкта.
*/

// Створення об'єкта з даними про особу
const person = {
    firstName: "John", // Властивість з ім'ям "firstName"
    lastName: "Doe",  // Властивість з прізвищем "lastName"
    age: 30           // Властивість з віком "age"
};

// Розпакування властивостей об'єкта до змінних
const { firstName, lastName, age } = person;

// Використання отриманих змінних
console.log(firstName); // Виведе: John - значення властивості firstName об'єкта person
console.log(lastName);  // Виведе: Doe - значення властивості lastName об'єкта person
console.log(age);       // Виведе: 30 - значення властивості age об'єкта person



/* Дуже цікава штука обчислювані імена властивостей (computed property names) 
- це функціональність JavaScript, яка дозволяє використовувати вирази для визначення імен властивостей об'єктів. 
Ось приклад використання обчислюваних імен властивостей:

У цьому прикладі ми використовуємо обчислювані імена властивостей для додавання динамічних імен до об'єкта person. Змінна suffix містить рядок "Info", 
який ми потім додаємо до імені властивостей та методу об'єкта. 
Таким чином, ми отримуємо властивості "ageInfo" та метод "getFullNameInfo", які можна використовувати для отримання віку та повного імені особи відповідно.
 */
// Змінна, що містить додатковий рядок
const suffix = "Inform";

// Створення об'єкта з обчислюваними іменами властивостей
const person = {
    firstName: "John",
    lastName: "Doe",
    ["age" + suffix]: 30,  // Обчислюване ім'я властивості: "age" + "Info" = "ageInfo"
    ["getFullName" + suffix]() {  // Обчислюване ім'я методу: "getFullName" + "Info" = "getFullNameInfo"
        return `${this.firstName} ${this.lastName}`;
    }
};

// Використання властивостей з обчислюваними іменами
console.log(person["age" + suffix]); // Виведе: 30 - значення властивості "ageInfo" об'єкта person
console.log(person.getFullNameInform()); // Виведе: John Doe - результат виклику методу "getFullNameInfo" об'єкта person


const suffix1 = "Info";

// Створення об'єкта з обчислюваними іменами властивостей
const person = {
    firstName: "John",
    lastName: "Doe",
    ["age" + suffix1]: 30,  // Обчислюване ім'я властивості: "age" + "Inform" = "ageInform"
    [`getFullName${suffix1}`]() {  // Обчислюване ім'я методу: "getFullName" + "Inform" = "getFullNameInform"
        return `${this.firstName} ${this.lastName}`;
    }
};

// Використання властивостей з обчислюваними іменами
console.log(person["age" + suffix1]); // Виведе: 30 - значення властивості "ageInform" об'єкта person
console.log(person[`getFullName${suffix1}`]()); // Виведе: John Doe - результат виклику методу "getFullNameInform" об'єкта person

/* Обчислювані імена властивостей дозволяють створювати більш гнучкі об'єкти, динамічно визначаючи їхні ключі на основі змінних або виразів. */


// Властивістю об'єкта може навіть функція, то така властивість називається методом
var group = {
    name: 'QA pro',
    students: 17,
    teachers: {
        teacher: 'Ivan',
        mentor: 'Oleg'
    },
    teachersInfo: function () {
        console.log('Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor);
        //  return 'Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor; // Інший спосіб запису, для нас в цілому нічого не зміниться!
    }
}

group.teachersInfo();
//console.log(group.teachersInfo());

/* --------------------------------------------------------------------*/

/* 
Гетери і сетери - це спеціальні методи об'єктів у JavaScript, які дозволяють зчитувати і встановлювати значення властивостей об'єкта через спеціальний синтаксис, 
який нагадує доступ до властивостей. 
Гетери використовуються для отримання значення властивості, 
тоді як сетери - для встановлення її значення. Ось приклади:*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.fullName); // Виведе: John Doe


/**
 * Різниця між геттером та доступом до властивостей полягає в тому, що геттери дозволяють виконати додаткові операції при зчитуванні значення властивості, 
 * тоді як доступ до властивостей просто повертає значення властивості.
 * 
 * Доступ до властивостей:
 */
const person = {
    name: 'John',
    age: 30
};

console.log(person.name); // Звернення до властивості name

console.log(person['name'].toUpperCase()); // Виведе: JOHN
console.log(person['name'].toLowerCase()); // john


const person = {
    _name: 'John', // Приватна властивість
    get name() {
        return this._name.toUpperCase(); // Геттер, який повертає значення властивості _name в верхньому регістрі
    }
};

console.log(person.name); // Звернення до геттера name


//а якщо я захочу виводити _name toUpperCase або toLowerCase
const person = {
    _name: 'John', // Приватна властивість
    get upperCaseName() {
        return this._name.toUpperCase(); // Геттер, який повертає значення властивості _name в верхньому регістрі
    },
    get lowerCaseName() {
        return this._name.toLowerCase(); // Геттер, який повертає значення властивості _name в нижньому регістрі
    }
};

console.log(person.upperCaseName); // Звернення до геттера upperCaseName
console.log(person.lowerCaseName);

/**
 * Сеттери - це спеціальні методи об'єктів у JavaScript, 
 * які дозволяють встановлювати значення властивостей об'єкта через спеціальний синтаксис, що нагадує присвоєння значення. Ось приклади використання сеттерів:
 */
const person = {
    _age: 25, // Приватна змінна
    get age() {
        return this._age;
    },
    set age(value) {
        if (value >= 0) {
            this._age = value;
        } else {
            console.log("Вік не може бути від'ємним числом");
        }
    }
};

console.log(person.age); // Виведе: 25
person.age = -30; // Виведе: Вік не може бути від'ємним числом
console.log(person.age); // Виведе: 25 (значення не змінилося через помилку в сеттері)


/**
 * Зверныть увагу на _age
 * Звичайно, змінні, які починаються з символу підкреслення _, часто використовуються в JavaScript для позначення "приватних" змінних або властивостей об'єктів. 
 * Однак важливо зазначити, що це не надає жодного справжнього "приватного" доступу, як у багатьох інших мовах програмування, таких як Java або Python. В JavaScript це просто конвенція неймінгу, 
 * яка показує розробнику, що змінна або властивість призначена для внутрішнього використання і не має бути доступною зовнішнім чином.
 * У цьому прикладі _age використовується для збереження віку особи і призначено для внутрішнього використання. Однак будь-яка частина програми все ще може звертатися до _age, 
 * якщо це потрібно, оскільки це не справжній "приватний" доступ, а лише конвенція неймінгу.
 */

/*

Ось деякі причини, чому гетери і сетери можуть бути корисними:

- Інкапсуляція та контроль доступу: Гетери і сетери дозволяють забезпечити більшу контроль інкапсуляції. 
Ви можете приховати реальні дані із зовнішнього світу та використовувати методи доступу для взаємодії з цими даними. 
Наприклад, ви можете використовувати сетер для перевірки валідності значення перед збереженням його у властивість об'єкта.

- Додаткова логіка: Гетери і сетери дозволяють виконувати додаткову логіку під час отримання або встановлення значення властивості. 
Наприклад, ви можете автоматично оновлювати інші властивості об'єкта або виконувати певні дії на основі зміни значення.

- Зручний доступ до даних: Гетери і сетери дозволяють забезпечити зручний спосіб доступу до даних, 
особливо коли необхідно виконувати додаткові перевірки або операції перед доступом до значення.

- Підтримка сумісності з існуючим кодом: Використання гетерів і сетерів може полегшити міграцію 
або рефакторинг коду, оскільки ви можете зберегти зовнішній інтерфейс, коли реалізація внутрішніх деталей змінюється.

В цілому, гетери і сетери дозволяють створити більш безпечні та гнучкі об'єктні інтерфейси, 
які забезпечують контроль доступу до даних та дозволяють виконувати додаткову логіку під час доступу до цих даних.  */

//-------------------------------------------------------------------------------------------------------



//---------------------------------------------------------------------------------------------

//Як дізнатися, чи є в об'єкті необхідна нам властивість?
/**
 * У JavaScript є кілька способів перевірки наявності властивості в об'єкті:

Оператор in: Використовуйте оператор in, щоб перевірити, чи є властивість в об'єкті або його прототипі.
 */

const person = {
    name: 'John',
    age: 30
};

console.log('name' in person); // true
console.log('salary' in person); // false


/**
 * Метод hasOwnProperty(): Використовуйте метод hasOwnProperty(), щоб перевірити, чи є властивість без урахування прототипів.
 */

const person = {
    name: 'John',
    age: 30
};

console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('salary')); // false


/**
 * Перевірка на undefined: Ви можете перевірити, чи є значення властивості undefined, що також вказує на те, що властивість існує.
 */

const person = {
    name: 'John',
    age: 30
};

console.log(person.name !== undefined); // true
console.log(person.salary !== undefined); // false


//що буде якщо я вкажу undefined явно

const person = {
    name: undefined,
    age: 30
};

console.log(person.name); // Виведе: undefined
console.log('name' in person); // true, властивість існує
console.log(person.hasOwnProperty('name')); // true, властивість існує
console.log(person.name !== undefined); // !!! false


/** --- Перебір властивостей об'єкту ----
 * Існує кілька способів перебору властивостей об'єкта в JavaScript:
 * 
 * 
 * Цикл for...in: Цей цикл дозволяє перебирати всі властивості об'єкта, включаючи і ті, що знаходяться у прототипі. Однак важливо перевіряти, 
 * чи є властивість власною (за допомогою методу hasOwnProperty()), якщо потрібно обмежитися лише властивостями самого об'єкта.
 * 
 * Перевірка, чи є властивість власною об'єкта за допомогою методу hasOwnProperty(), є важливою для правильного перебору властивостей, особливо у циклі for...in. Ось чому це важливо:

Уникнення властивостей прототипу: Цикл for...in також перебирає властивості, які знаходяться у прототипі об'єкта. 
Якщо ви не перевіряєте, чи є властивість власною (hasOwnProperty()), то ваш код також буде перебирати властивості прототипу, що може призвести до неочікуваного поведінки 
та багів.
Збереження правильного порядку: Порядок властивостей в об'єкті не гарантується, тому якщо ви не перевіряєте, чи є властивість власною, ви можете отримати властивості 
в будь-якому порядку.
Збереження даних: Якщо ви використовуєте об'єкт для зберігання даних, то важливо переконатися, що ви отримуєте лише власні дані, а не дані, що знаходяться у прототипі.

У цьому прикладі без перевірки hasOwnProperty() цикл for...in також перебирає властивість extraProperty, яка знаходиться у прототипі. 
Це може бути неочікуваним для програміста, який очікує перебір лише власних властивостей об'єкта person.
*/

Object.prototype.extraProperty = 'Extra'; // Додаємо властивість до прототипу

const person = {
    name: 'John',
    age: 30
};

for (const key in person) {
    // if (person.hasOwnProperty(key)) { // Перевіряємо, чи властивість є власною
    console.log(key + ': ' + person[key]);
    // }
}


/**
 * Метод Object.keys(): Цей метод повертає масив із іменами властивостей об'єкта, які не є у прототипі.
 */
const person = {
    name: 'John',
    age: 30
};

Object.keys(person).forEach(key => {
    console.log(key + ': ' + person[key]);
});


/**
 * Метод Object.getOwnPropertyNames(): Цей метод повертає масив із іменами всіх властивостей об'єкта, включаючи і ті, що знаходяться у прототипі.
 */

const person = {
    name: 'John',
    age: 30
};

Object.getOwnPropertyNames(person).forEach(key => {
    console.log(key + ': ' + person[key]);
});


/**
 * Яка різниця ?
 */

const person = {
    name: 'John',
    age: 30
};

// Додаємо властивість до прототипу
Object.prototype.extraProperty = 'Extra';

console.log("Цикл for...in:");
// Цикл for...in перебирає всі властивості об'єкта, включаючи ті, що знаходяться у прототипі
for (const key in person) {
    console.log(key + ': ' + person[key]);
}

console.log("\nМетод Object.keys():");
// Метод Object.keys() повертає масив із іменами власних властивостей об'єкта, що не знаходяться у прототипі
Object.keys(person).forEach(key => {
    console.log(key + ': ' + person[key]);
});

console.log("\nМетод Object.getOwnPropertyNames():");
// Метод Object.getOwnPropertyNames() повертає масив із іменами всіх властивостей об'єкта, включаючи власні та ті, що знаходяться у прототипі
Object.getOwnPropertyNames(person).forEach(key => {
    console.log(key + ': ' + person[key]);
});



/* --- Методи Object ---

Object.assign(target, ...sources): Копіює властивості всіх джерел sources в цільовий об'єкт target і повертає змінений об'єкт target.
Object.create(proto, [propertiesObject]): Створює новий об'єкт з вказаним прототипом proto та властивостями, переданими у propertiesObject.
Object.defineProperties(obj, props): Додає або змінює властивості об'єкта obj відповідно до вказаних властивостей props.
Object.defineProperty(obj, prop, descriptor): Додає або змінює властивість об'єкта obj з іменем prop та властивостями, вказаними у descriptor.
Object.entries(obj): Повертає масив із парами ключ-значення всіх власних перераховуваних властивостей об'єкта у форматі [ключ, значення].
Object.freeze(obj): Заморожує об'єкт obj, що робить його неможливим для зміни.
Object.fromEntries(iterable): Повертає новий об'єкт із масиву, що складається з парами ключ-значення.
Object.getOwnPropertyDescriptor(obj, prop): Повертає дескриптор властивості об'єкта obj з іменем prop.
Object.getOwnPropertyDescriptors(obj): Повертає об'єкт із дескрипторами всіх властивостей об'єкта obj.
Object.getOwnPropertyNames(obj): Повертає масив із іменами всіх властивостей об'єкта, включаючи неперераховувані.
Object.getOwnPropertySymbols(obj): Повертає масив із символами всіх властивостей об'єкта.
Object.getPrototypeOf(obj): Повертає прототип об'єкта obj.
Object.is(value1, value2): Порівнює два значення на рівність, враховуючи випадки NaN та -0.
Object.isExtensible(obj): Повертає true, якщо об'єкт obj розширюваний, і false в іншому випадку.
Object.isFrozen(obj): Повертає true, якщо об'єкт obj заморожений, і false в іншому випадку.
Object.isSealed(obj): Повертає true, якщо об'єкт obj запечатаний, і false в іншому випадку.
Object.keys(obj): Повертає масив із іменами всіх власних перераховуваних властивостей об'єкта.
Object.preventExtensions(obj): Забороняє додавання нових властивостей до об'єкта obj.
Object.seal(obj): Запечатує об'єкт obj, що робить його неможливим для додавання або видалення властивостей.
Object.setPrototypeOf(obj, proto): Встановлює новий прототип proto для об'єкта obj.
Object.values(obj): Повертає масив із значеннями всіх власних перераховуваних властивостей об'єкта.
*/

// Створюємо об'єкт
const obj = { a: 1, b: 2, c: 3 };
console.log(obj);
// Object.assign(target, ...sources): Копіюємо об'єкт obj в новий об'єкт copiedObj
const copiedObj = Object.assign({}, obj);
console.log(copiedObj); // { a: 1, b: 2, c: 3 }

// Object.create(proto, [propertiesObject]): Створюємо новий об'єкт з прототипом obj
const newObj = Object.create(obj);
console.log(newObj); // {}

// Object.defineProperties(obj, props): Додаємо або змінюємо властивості об'єкта obj
Object.defineProperties(obj, {
    d: { value: 4, writable: true },
    e: { value: 5, writable: true }
});
console.log(obj); // { a: 1, b: 2, c: 3, d: 4, e: 5 }

// Object.defineProperty(obj, prop, descriptor): Додаємо або змінюємо властивість об'єкта obj
Object.defineProperty(obj, 'f', { value: 6, writable: true });
console.log(obj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// Object.entries(obj): Повертає масив з парами ключ-значення всіх властивостей об'єкта
const entries = Object.entries(obj);
console.log(entries); // [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5], ["f", 6]]

// Object.freeze(obj): Заморожує об'єкт obj, що робить його неможливим для змін
Object.freeze(obj);
obj.g = 7; // Викличе помилку в строгому режимі
console.log(obj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// Object.fromEntries(iterable): Створює новий об'єкт із масиву, що складається з пар ключ-значення
const fromEntriesObj = Object.fromEntries(entries);
console.log(fromEntriesObj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// Object.getOwnPropertyDescriptor(obj, prop): Повертає дескриптор властивості об'єкта obj
const descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
console.log(descriptor); // { value: 1, writable: true, enumerable: true, configurable: true }

// Object.getOwnPropertyDescriptors(obj): Повертає об'єкт із дескрипторами всіх властивостей об'єкта obj
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors); // Повертає дескриптори всіх властивостей

// Object.getOwnPropertyNames(obj): Повертає масив із іменами всіх властивостей об'єкта, включаючи неперераховувані
const propertyNames = Object.getOwnPropertyNames(obj);
console.log(propertyNames); // ["a", "b", "c", "d", "e", "f"]

// Object.getOwnPropertySymbols(obj): Повертає масив із символами всіх властивостей об'єкта
const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); // []

// Object.getPrototypeOf(obj): Повертає прототип об'єкта obj
const prototype = Object.getPrototypeOf(obj);
console.log(prototype); // {}

// Object.is(value1, value2): Порівнює два значення на рівність, враховуючи випадки NaN та -0
console.log(Object.is(5, 5)); // true

// Object.isExtensible(obj): Повертає true, якщо об'єкт obj розширюваний, і false в іншому випадку
console.log(Object.isExtensible(obj)); //


/*--------------------------------------------------------------------------------------------------------
Додатково:

developer mozilla
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

w3school
https://www.w3schools.com/js/js_object_methods.asp

Javascript info
https://uk.javascript.info/object
https://uk.javascript.info/constructor-new
https://uk.javascript.info/object-copy
https://uk.javascript.info/object-methods
https://uk.javascript.info/property-accessors


https://vm.tiktok.com/ZMMr6Astg


 Hardcore tasks from codewars.com:

 https://www.codewars.com/kata/57d001b405c186ccb6000304
 https://www.codewars.com/kata/570ef4d6127ad17515000b87
 https://www.codewars.com/kata/577ff15ad648a14b780000e7
 */