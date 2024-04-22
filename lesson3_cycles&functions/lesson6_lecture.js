/* ---- Методи примітивів! -----

    В JavaScript, примітиви (такі як числа, рядки, булеві значення і так далі) не є об'єктами. 
    Однак вони мають доступ до деяких методів завдяки концепції обгорток примітивів.
    Коли ви намагаєтеся викликати метод на примітивному значенні, 
    JavaScript тимчасово обгортає це значення в об'єкт, щоб дозволити виклик методу, 
    а потім видаляє цей обгортач.

    Числа (Numbers): Представляють числа, як цілі, так і дійсні, наприклад, 5, 3.14.
    Рядки (Strings): Представляють послідовності символів, наприклад, "Hello, World!".
    Логічні значення (Booleans): Вони можуть бути лише true або false.
    Null: Вказує на відсутність значення.
    Undefined: Вказує на змінну, яка була оголошена, але не має значення.
    Symbols: Використовуються для створення унікальних властивостей об'єктів.
    BigInt: Спеціальний тип для роботи з дуже великими цілими числами.
*/

/* ----- Методи Number ----- 
  В JavaScript існує глобальний об'єкт Number, який має різні статичні методи, 
  що дозволяють виконувати операції з числами. 
  Статичні методи Number викликаються без створення екземпляра об'єкта Number 
  і використовуються для виконання різних операцій з числами або перетворення даних в числа. 
  
  Ось декілька статичних методів об'єкта Number та їх приклади:

--- Number.parseFloat(): Цей метод перетворює рядок в число з плаваючою точкою (десяткове число). 
    Він ігнорує всі нечислові символи у рядку, поки не знайде перше число або десятковий роздільник (крапку). */

var str = "3.14";
var num = Number.parseFloat(str);
console.log(num, typeof num); // Виведе 3.14. Цей метод перетворює рядок в ціле число. Він ігнорує всі нечислові символи у рядку, поки не знайде перше число.

// Приклад:

var str = "42.75";
var num = Number.parseInt(str);
console.log(num, typeof num); // Виведе 42 

// А давайте подивимось таку ситуацію

let adc = 'qwerty' / 10;
console.log(adc, typeof adc); // Виведе NaN

/*
 NaN означає обчислювальну помилку - Це результат неправильної або невизначеної математичної операції.
 
 Функція isNaN приймає аргумент і перевіряє, чи він є NaN (Not-a-Number).

 !!! Функція isNaN в першу чергу намагається перетворити переданий їй аргумент в число. 
Якщо це вдалося, і результат цього перетворення є NaN, тоді isNaN повертає true. 
Однак, якщо результат перетворення не є NaN, то isNaN повертає false. !!! 

Функція повертає true якщо аргумент може бути перетворений у число і є NaN після цього перетворення

 і false в іншому випадку.

*/

let a = 'qwerty' / 10;
console.log(isNaN(a)); // У цьому прикладі є запитання "Чи NaN є NaN?", тому цей вираз поверне true
console.log(isNaN(NaN)); // The same
console.log(isNaN(undefined)); // Не може бути перетворений в число, тому поверне true
console.log(isNaN(null)); // Може бути перетворений в число, і його перетворене значення буде 0. Отже поверне false.
console.log(isNaN(20)); //  Число 20 є дійсним числом, тому поверне false
console.log(isNaN("20")); // Рядок "20" може бути перетворений в число 20, тому поверне false
console.log(isNaN("qwerty"));

/*  Але, ми будемо використовувати це трохи інакше.

    На відміну від глобальної функції isNaN(), 
    Number.isNaN() не має проблеми примусового перетворення параметра в число.

    Це означає, що в нього безпечно передавати значення, які зазвичай перетворюються в NaN, 
    але насправді NaN не є.
    
    Number.isNaN - це функція, яка перевіряє, чи значення є NaN (Not a Number, "Не числом").

     Вона повертає:
     - true: якщо значення є NaN (не число).
     - false: якщо значення є дійсним числом.
 */

let a1 = 'qwerty' / 10;
console.log(Number.isNaN(a1)); //  Повертає true, оскільки саме NaN = NaN
console.log(Number.isNaN(NaN)); // Отже, Number.isNaN(NaN) завжди повертає true, оскільки саме NaN є представником нечислових значень у JavaScript
console.log(Number.isNaN(undefined)); // Повертає false,  оскільки undefined не є числовим значенням, навіть якщо воно може бути перетворене в NaN в деяких випадках
console.log(Number.isNaN("qwee")); // Повертає false, оскільки string != NaN
console.log(Number.isNaN(20)); // Повертає false, оскільки integer != NaN
console.log(Number.isNaN("20")); // Повертає false, оскільки string != NaN

/* Тобто, ще раз - метод isNaN спробує перетворити передане значення в число,
 метод Number.isNaN() не перетворює значення, а просто перевіряє, чи воно є NaN */

//Приклад використовуваня
var your_age = "undefined";
if (isNaN(your_age)) {
    console.log("Age is invalid. Please enter a valid number.");
} else {
    console.log("Your age is " + your_age + ".");
}

// Number.isInteger - використовується для перевірки, чи є передане значення цілим числом
console.log(Number.isInteger(42));
console.log(Number.isInteger(42.3));
console.log(Number.isInteger("qwer"));
console.log(Number.isInteger(true));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));

// Number.isFinite - використовується для перевірки, чи є передане значення скінченим числом
// Перевірка на скінченні числа
console.log(Number.isFinite(0));        // true
console.log(Number.isFinite(2e64));     // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity));// false

// Перевірка на нечислові значення
console.log(Number.isFinite(NaN));      // false
console.log(Number.isFinite('123'));    // false, бо це рядок
console.log(Number.isFinite(null));     // false

// Використання зі змінними
let x = 500;
let y = 0 / 0;  // NaN
console.log(Number.isFinite(x));  // true
console.log(Number.isFinite(y));  // false

/* Number.isSafeInteger - перевіряє, чи є передане число "безпечним цілим числом".

 Безпечне ціле число включає в себе всі цілі числа від -2^53 + 1 до 2^53 - 1 

 */

console.log(Number.isSafeInteger(5));
console.log(Number.isSafeInteger(5.5));
console.log(Number.isSafeInteger("5"));
console.log(Number.isSafeInteger(2 ** 53));
console.log(Number.isSafeInteger(2 ** 53 - 1));

//Number.parseInt() - його призначення конвертувати рядок в ціле число, використовуючи десяткову систему числення.

console.log(Number.parseInt('12.45'));
console.log(Number.parseInt('12.3.4'));
console.log(Number.parseInt('12px'));
console.log(Number.parseInt('a123'));
console.log(Number.parseInt('11', 2)); // Двійкова система
console.log(Number.parseInt('ff', 16));
console.log(Number.parseInt('100', 32));

// Number.parseFloat - його призначення конвертувати рядок в число з плаваючою точкою

console.log(Number.parseFloat("3.14"));
console.log(Number.parseFloat("0.5"));
console.log(Number.parseFloat("123.456"));
console.log(Number.parseFloat("3.14abc"));

/*-----------------------------------------------------------------------------------------------------*/
// Хотілось би також розібрати бібліотеку Math
// Округлення

console.log("floor: из 3.6 до " + Math.floor(3.6)); //округлює число  вниз до найближчого меншого цілого числа
console.log('ceil: из 3.1 до ' + Math.ceil(3.1)); // округлює число  вгору до найближчого меншого цілого числа
console.log('round: из 3.4 до ' + Math.round(3.4)); //до найближчого цілого числа
console.log('round: из 3.7 до ' + Math.round(3.7)); //до найближчого цілого числа

console.log("floor: из 3.5 до " + Math.floor(3.5)); //округлює число  вниз до найближчого меншого цілого числа
console.log('ceil: из 3.5 до ' + Math.ceil(3.5)); // округлює число  вгору до найближчого меншого цілого числа
console.log('round: из 3.5 до ' + Math.round(3.5)); //до найближчого цілого числа
console.log('round: из 3.5 до ' + Math.round(3.5)); //до найближчого цілого числа

/* toFixed(): Цей метод встановлює фіксовану кількість знаків після коми в числі 
і повертає рядок, представляючи число у цьому форматі. */

var n = 12.66467;
var str = n.toFixed(1); //скільки знаків після коми залишити
console.log(n + ' => ' + str);


/* Метод toPrecision() в JavaScript використовується для форматування числа до заданої кількості значущих цифр. 
Якщо вказана довжина виходить за межі кількості цифр у числі, метод додасть нулі або використовуватиме науковий (експоненційний) формат для відображення числа.
*/

num.toPrecision(precision);
let num = 123.456;

console.log(num.toPrecision(1)); // "1e+2" - одна значуща цифра
console.log(num.toPrecision(2)); // "1.2e+2" - дві значущі цифри
console.log(num.toPrecision(3)); // "123" - три значущі цифри
console.log(num.toPrecision(4)); // "123.5" - чотири значущі цифри
console.log(num.toPrecision(5)); // "123.46" - п'ять значущих цифр
console.log(num.toPrecision(6)); // "123.456" - шість значущих цифр

let num2 = 0.004567;
console.log(num2.toPrecision(2)); // "0.0046" - дві значущі цифри
console.log(num2.toPrecision(3)); // "0.00457" - три значущі цифри

let num3 = 1500;
console.log(num3.toPrecision(2)); // "1.5e+3" - дві значущі цифри у експоненційному форматі


/* Генератор випадеових чисел. 
Вбудована функція Math.random() створює випадкове значення від 0 до1 (не враховуючи 1) */
var rnd = Math.random();
console.log('rnd = ' + rnd);

// Більш практична задача: ціле випадкове число від 1 до 10:

var rnd = Math.random();
console.log(rnd)
rnd *= 10;
console.log(rnd)
rnd = Math.round(rnd);
console.log(rnd)

// Cтворення випадкового числа з плаваючою крапкою від min до max (не враховуючи max)
function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(1, 5));


/* Довільне ціле число від min до max

Існує багато правильних рішень задачі. 
Один з них – коригування інтервальних меж. Щоб забезпечити однакові інтервали, 
ми можемо генерувати значення від 0.5 до 3.5, тим самим додаючи необхідні ймовірності до граничних значеннь:

*/

function randomInteger(min, max) {
    // тепер rand від (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

console.log(randomInteger(50, 300));

//Альтернативним способом може бути використання Math.floor (округлення числа вниз) для випадкового числа від min до max + 1:


function randomInteger(min, max) {
    // тепер rand від min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log(randomInteger(1, 3));

/* Корисні функції з бібліотеки Math
Math.sqrt(x)		Повертає квадратний корінь із x.
Math.pow(x, exp)	Зводить число до ступеня
Math.abs(x)			Повертає абсолютне значення числа (модуль)
Math.max(a, b, c...)Повертає найбільший із списку аргументів
Math.min(a, b, c...)Повертає найменший зі списку аргументів */

//Повертає найбільше/найменше число з довільної кількості аргументів.
console.log(Math.max(3, 5, -10, 0, 1)); // 5
console.log(Math.min(1, 2)); // 1

//Повертає n, зведене у ступінь power.
console.log(Math.pow(2, 10)); // 2 у ступені 10 = 1024

//Пару слів про точність
var s = 0.1 + 0.2;
console.log("s = " + s);
var round = s.toFixed(1);
console.log("round = " + round);
console.log(s === 0.3);
console.log(round == 0.3);
console.log("До десятого знака: s = " + s.toFixed(10));
console.log((+null == false) < 1 ** 5);

/*-----------------------------------------------------------------------------------------------------*/
// Методи String

// Найпростіший рядок
console.log("Бачиш лапки - значить це рядок");
console.log('І не важливо, які саме лапки');

//Але що буде якщо ми захочемо передати всередені рядка слово в лапках?
//console.log("Моя улюблена книга - "Том Сойер"");

/* 
 Річ у тім, що компілятор сприймає лапки строго певним чином, а саме - обертає в них рядок.
 І щоразу, коли він бачить символ ", він очікує, що для нього далі буде слідувати такий самий символ, а між ними знаходитиметься текст рядка,
 який він, компілятор, має створити.
 У нашому ж випадку лапки навколо слова "Том Сойер" знаходяться всередині інших лапок.
 І коли компілятор доходить до цього шматка тексту, він просто не розуміє, що від нього хочуть.
 Нібито стоїть лапка, а отже, він має створити рядок. Але ж він уже це робить!

 Нам потрібно пояснити компілятору, коли лапка є для нього командою ("створи рядок!"), 
 а коли вона є простим символом ("виведи на екран слово "Том Сойер" разом із лапками!").

 Для цього використовується екранування символів.
 Воно здійснюється за допомогою спеціального символу. Ось такого: \.
 У звичайному житті він називається "зворотний слеш" чи керуючою послідовністю.

 Наприклад, \" - ось вона - керуюча послідовність для виведення на екран лапки.
 Зустрівши таку конструкцію всередині твого коду, компілятор зрозуміє, що це просто символ "лапка", який потрібно вивести на екран.


 # # # https://www.tiktok.com/@scrumlaunch/video/7203745188089531653?is_from_webapp=1&sender_device=pc&web_id=7326574036041303557 # # #

 */

console.log("Моя улюблена книга - \"Том Сойер\"")

//Лапки - далеко не єдиний випадок, коли нам може знадобитися екранування символів. Наприклад,
console.log("Мій діплом зберігаеться в папці - D:\Work Projects\Diploma ") // знову помилка, здогадуетесь чому?

console.log("Мій діплом зберігаеться в папці - D:\\Work Projects\\Diploma ")

/* Керівні си́мволи — елементи кодування символів, які не відображаються графічно, 
але які використовуються для пересилання даних й інших цілей.

Example,
\b - backspace
\t - tab
\n - New line
\r - Carriage return
\f - Form feed
\u00A9 -символ юнікоду */


console.log("Садок вишневий коло хати,\nХрущі над вишнями гудуть,\nПлугатарі з плугами йдуть,\nСпівають ідучи дівчата.\nА матері вечерять ждуть.");
console.log("один\tдва\tтри\nuno\tdos\ttres")

// Юнікод - це список спеціальних кодів, у якому знайдеться код майже для будь-якого символу з будь-якої мови
console.log("Лекція \"Екранування символів\" \u00A9 Hillel")


// Які методи ми вже вивчали?






// length - вказує на кількість символів (для рядка)
const myString = "Hello";
console.log(myString.length);

// charAt - дозволяє отримати символ за певним індексом у рядку
const str = "Hello, world!";
console.log(str.charAt(0));
console.log(str.charAt(6));
console.log(str.charAt(7));
console.log(str.charAt(13)); // Пустий рядок, бо нічого нема

//А тепер докладніше. charAt()
var str = "Якийсь рядок просто для прикладу";
console.log(str);
console.log("Символ номер три: " + str.charAt(3));
console.log("Те саме по іншому: " + str[3]);

//І не обов'язково бути змінною
console.log("я також рядок".charAt(20)); //пустий рядок
console.log("я також рядок"[20]); //undefined

// repeat - дозволяє повторити вміст рядка декілька разів і створити новий рядок
const str = "QA pro ";
const repeatStr = str.repeat(3);
console.log(repeatStr);

// Всім відома конкатенація
let str = 'QA ';
console.log(str.concat('Pro!'));
console.log(str.concat('Pro!', ' in Hillel school!'));

// endWith - використовується для перевірки, чи закінчується рядок заданим підрядком.
const str = "script.js";
console.log(str.endsWith(".js"));
console.log(str.endsWith("script"));
console.log(str.endsWith("js", 6)); // параметр, який вказує довжину основного рядка, яку слід враховувати при пошуку. повертає false ми вказали 6, він перевіряє 2 символи перед 6, а це "cr", і вони не є рівними "js"
console.log(str.endsWith("js", 9)); // true, оскільки "js" дійсно закінчує рядок "script.js" на позиції 9
console.log(str.endsWith('ript', 6)) // true, оскільки "ript" дійсно закінчує рядок "script.js" на позиції 6

// includes - дозволяє перевірити, чи міститься певний підрядок (для рядків)
const str = "Hello, world!";
console.log(str.includes("world"));
console.log(str.includes("World"));
console.log(str.includes("world", 8)); // позицію, з якої почати пошук
console.log(str.includes("world", 7));

// startsWith(): Цей метод перевіряє, чи рядок починається з певної підстроки і повертає true, якщо так, або false, якщо ні.
var str = "JavaScript is fun";
var startsWithJS = str.startsWith("JS");
console.log(startsWithJS);
var startsWithJa = str.startsWith("Ja");
console.log(startsWithJa);

// endsWith(): Цей метод перевіряє, чи рядок закінчується певною підстрокою і повертає true, якщо так, або false, якщо ні.
var str = "JavaScript is fun";
var endsWithFun = str.endsWith("fun");
console.log(endsWithFun); // Виведе true
var endsWithJS = str.endsWith("JS");
console.log(endsWithJS);

// indexOf - дозволяє знайти індекс першого входження певного підрядка у вихідному рядку
const str = "Hello, world!";
console.log(str.indexOf("world")); // шукає підстрічку у рядку і повертає індекс першого символу цієї підстрічки. У  заданому рядку "world" починається з символу на позиції 7
console.log(str.indexOf("World")); // А ось тут цікаво !
console.log(str.indexOf("o", 5)); // Починає шукати "o" починаючи з позиції 5
console.log(str.indexOf("o", 9)); // Починає шукати "o" починаючи з позиції 9

//lastIndexOf - використовується для пошуку останнього входження підрядка або символа в рядок
const str = "Hello, world!";
console.log(str.indexOf("o")); //шукає перше входження символу "o" у рядок
console.log(str.lastIndexOf("o")); // шукає останнє входження символу "o" у рядок

/* padStart/padEnd - - це методи для рядків які використовуються для додавання додаткових символів
 (зазвичай пробіли) до початку або кінця рядка

 В дужках ми вказуємо цільову кількість символів, яку ви хочете мати в післяопрацьованому рядку */
console.log('example'.padStart(8));
console.log('example'.padEnd(8));
console.log('example'.padStart(8, '*'));
console.log('example'.padEnd(8, '*'));

console.log('example'.padStart(11, '*'));
console.log('example'.padEnd(11, '*'));

// trim, trimStart, trimEnd - це методи для рядків які використовуються для видалення пробілів
console.log('   hello'.trimStart());
console.log('hello   '.trimEnd());
console.log('  hello  '.trim());

// toLowerCase/toUpperCase - це методи для рядків які використовуються для зміни регістру символів у рядку
var str = "Ось така дивна строчка";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log("І один у полі воїн"[3].toUpperCase());
console.log("  А ще можна Ось так  ".toUpperCase().trim().concat("!"))

/* replace -  використовується для заміни певного підрядка або паттерну
 у вихідному рядку іншим рядком або значенням */

//У рядку не можна нічого змінити просто так, наприклад:
var str = "рядок";
console.log("str[4] = " + str[4]);
str[5] = "F";   //Тут буде помилка
console.log(str);

//Ну а якщо ДУЖЕ хочеться?
var str = "Якийсь рядок просто для прикладу";
console.log(str.replace(' ', '_')); // Він замінить лише перший пробіл (перше співпадіння) на символ підкреслення

var str = "Якийсь рядок просто для прикладу";
console.log(str.replaceAll(' ', '_'));

var str = "Якийсь рядок просто для прикладу";
console.log(str.replaceAll('', '*')); // replaceAll() використовується для заміни всіх входжень певного рядкового шаблону на інший рядок у даному рядку, тобто тут він намагається замінити всі порожні підстроки на *

/* substring/ substr/ slice - ці методи дозволяють вам вирізати частину рядка,
 починаючи з певного індексу і закінчуючи іншим індексом.

 substring(startIndex, endIndex) - видаляє підстроку з рядка, починаючи з індексу startIndex і закінчуючи endIndex - 1
 Якщо endIndex не вказано, він приймається як довжина рядка. 
 Якщо startIndex більше endIndex, вони будуть автоматично обернені. 
 Цей метод не змінює вихідний рядок.

 substr(startIndex, length)- видаляє підстроку з рядка, починаючи з індексу startIndex і взявши length символів після цього індексу.
 Якщо length не вказано, весь решта рядка буде включено. 
 Цей метод також не змінює вихідний рядок.

 slice(startIndex, endIndex)- він видаляє підстроку з рядка, але також дозволяє від'ємні індекси.
 Від'ємні індекси вказують з кінця рядка.
 Якщо endIndex від'ємний, то він вказує кількість символів з кінця рядка. 
 Цей метод також не змінює вихідний рядок.

# # # https://www.tiktok.com/@elrincondeldev/video/7172985864514030853?is_from_webapp=1&sender_device=pc&web_id=7326574036041303557 # # #
*/

//У найпростішому випадку всі три працюють однаково
var str = "стрибок з хитроперепідвивертом";
console.log(str.substr(9));
console.log(str.substring(9));
console.log(str.slice(9));

//А що якщо використати негативний аргумент?
var str = "стрибок з хитроперепідвивертом";
console.log(str.substr(-9)); // Вказує кількість символість котрі будуть витягнуті з кінця
console.log(str.substring(-9)); // Він вважає, що від'ємний індекс -9 буде рівнозначний нульовому індексу (початку рядка), тобто він витягне все, що знаходиться від початку рядка до кінця
console.log(str.slice(-9)); // Працює як і substr,  вважає від'ємний індекс -9 як рівнозначний нульовому індексу. Тобто він також витягне все, що знаходиться від початку рядка до кінця


//А тепер давайте подивимость що буде якщо додати другий аргумент
var str = "стрибок з хитроперепідвивертом";
console.log(str.substr(10, 14)); //  Тут ми використовуєм substr(), починаючи з індексу 10 і витягуючи 14 символів
console.log(str.substring(10, 14)); // Тут ми вибираємо підстроку від індексу 10 до 14 (не включаючи 14)
console.log(str.slice(10, 14)); //  Також вибирає підстроку від індексу 10 до 14 (не включаючи 14)


// А якщо другий аргумент буде відємним ?
var str = "стрибок з хитроперепідвивертом";
console.log(str.substring(9, -1)); // У substring, коли один аргумент < 0, він сприймається як 0. Тому цей вираз означає вибір підстроки з індексу 9 до 0
console.log(str.substr(9, -2)); //Взагалі гадає не розуміє відємне число, тобто в мене міє 9 та -2 нічого не має - пустий рядок
console.log(str.slice(9, -1)); // Тут другий аргумент, він вказує на відрахування символів з кінця рядка, тобто, цей вираз означає вибір підстроки з індексу 9 до передостаннього символу


//Два слова про юнікод
console.log(String.fromCharCode("97")); //повертає значення з таблиці юнікод
console.log("qbc".charCodeAt(0)); //навпаки, говорить номер значення в таблиці юнікод

/*--------------------------------------------------------------------------------------------------------

Developer Mozilla:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String

W3school:
https://www.w3schools.com/jsref/jsref_obj_string.asp
https://www.w3schools.com/jsref/jsref_obj_number.asp
https://www.w3schools.com/jsref/jsref_obj_math.asp

JavaScript Info:
https://uk.javascript.info/primitives-methods
https://uk.javascript.info/number
https://uk.javascript.info/string

https://codeburst.io/all-about-javascript-functions-in-1-article-49bfd94b31ab
*/