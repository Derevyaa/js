/* --- Регулярні вирази ---

    Регулярний вираз (RegExp) - це шаблон, який використовується для пошуку та заміни тексту в рядках. 
    Він складається з послідовності символів, які визначають певний шаблон, який потрібно знайти в тексті. 

    Регулярні вирази використовуються в багатьох програмах, таких як пошукові системи, 
    текстові редактори, утиліти обробки тексту, лексичний аналіз та інші.

    Регулярні вирази підтримуються в багатьох мовах програмування, таких як JavaScript, Python, PHP, Java та інші. 
    
    Вони використовуються для пошуку та заміни тексту в рядках, а також для валідації даних та інших завдань обробки тексту.
*/

var str = "миші, щури, знову миші, хом'яки, ховрахи";
var pattern = /щури/; // це RegExp. Слеші /.../ говорять JavaScript про те, що це регулярний вираз. Вони відіграють тут ту саму роль, що й лапки для позначення рядків.
console.log("Тип регулярного виразу: " + typeof pattern);
console.log("Знаходимо на якому індексі? " + str.search(pattern)); // Шукаємо шаблон у рядку
console.log("А якщо не знайшли ? " + str.search(/кіт/)); //-1
console.log("Чи знайшли ми цей паттерн, шаблон у наданому реченні? " + pattern.test(str)); // метод test() використовуеться для перевірки, чи зустрічається цей підрядок у рядку str. Якщо метод test() повертає true, це означає, що підрядок "щури" знайдено у рядку str.

// Однак поки що не сталося нічого, чого не міг би зробити indexOf()
// значок | - внутрішній оператор мови регулярних виразів, що позначає "або"
var str1 = "vasja@yahoo.com";
var str2 = "petja@gmail.com";
var pattern = /@gmail|@urknet/
console.log(str1 + ': ' + str1.search(pattern)); // Не знайшли
console.log(str2 + ': ' + str2.search(pattern)); // Знайшли

console.log("Тестуємо перший рядок: " + pattern.test(str1)); // І у зворотний бік
console.log("Тестуємо другий рядок: " + pattern.test(str2));  // Якось менш інформативно – тільки так чи ні.

// Перелік альтернативних варіантів можна укласти в дужки 
var str1 = "vasja@yahoo.com";
var str2 = "petja@gmail. com"; // Зверніть увагу: тут помилка!
var str3 = "petja@gmail9com";
var str4 = "petja@gmail.com";
var pattern = /(@gmail|@urknet).com/; // З точкою тут не все так просто
console.log(str1 + ': ' + pattern.test(str1));
console.log(str2 + ': ' + pattern.test(str2));
console.log(str3 + ': ' + pattern.test(str3));
console.log(str4 + ': ' + pattern.test(str4));

/* --- Метасимволи ---

Метасимволи слугують будівельними блоками regexp. 
Вони не є незалежними і зазвичай інтерпретуються будь-яким чином. 
Деякі метасимволи мають особливе значення, а тому поміщаються в квадратні дужки. 

Метасимволи:

.	  - Будь-який одиничний символ, за винятком нового рядка.
[ ]   - Пошук набору символів, поміщених у дужки.
[^ ]  - Негативний клас символів. Збігається з будь-яким символом, який не міститься між квадратними дужками
* - 0 - або більше повторень попереднього символу.
+ - 1 - або більше повторень попереднього символу.
?	  - Робить попередній символ опціональним.
{n,m} - Повертає як мінімум "n", але не більше "m" повторень попереднього символу.
(xyz) - Знаходить групу символу в строго заданому порядку.
|     - Розділяє допустимі варіанти.
\     - Виключає наступний символ. Дозволяє шукати службові символи [ ] ( ) { } . * + ? ^ $ \ |
^     - Знаходить початок введеного рядка.
$     - Знаходить кінець введеного рядка. 

*/

/*  Точка
. - це найпростіший приклад метасимволу. Метасимвол . відповідає будь-якому одиничному символу.

    Припустимо, ми хочемо знайти буквально точку. Не "будь-який символ", а саме крапку!
*/

// Але не все так просто!
var names = "file.txt log.txt file.png 1txt.doc one_txt.jpg";
var pattern = /.txt/g;
var matches = names.match(pattern); //match  використовується для знаходження відповідностей між регулярним виразом і рядком і повертає масив знайдених збігів
console.log(matches)

// Чи ще
var sentence = "The car parked in the garage.";
var pattern = /.ar/g;
var matches = sentence.match(pattern);
console.log(matches)

// Бо крапка заміняє будь-який символ!
var names = "Аня Ася Оля Аля Валя";
var pattern = /А.я/g;
var matches = names.match(pattern);
console.log(matches)

// Як думаете, чому не повернулася Валя?

/*
    Щоб використовувати спеціальний символ як звичайний, додайте до нього зворотну косу риску: \.
    Це називається "екранування символу".
*/
var names = "file.txt log.txt file.png 1txt.doc one_txt.jpg";
var pattern = /\.txt/g;
var matches = names.match(pattern);
console.log(matches)

// Ще приклад
var str = "ivanov_ruslan@yahoo.com";
var pattern = /.com/;
console.log(str + " - " + pattern.test(str)); // Очікувано повертає true

str = "ivanov_commer@gmail"; // Змінимо адресу
var pattern = /.com/;
console.log(str + " - " + pattern.test(str));

// !!! Ще раз, крапка значить будь-який символ !!!

var str1 = "vasja@yahoo.ua";
var str3 = "petja@gmail.com";
var str2 = "petja@gmailcom";
var pattern = /\.com/;
console.log(str1 + ': ' + pattern.test(str1));
console.log(str3 + ': ' + pattern.test(str3));
console.log(str2 + ': ' + pattern.test(str2));

// пошук '/'
var str1 = "Строка з /";
var pattern = /\//; // Чому виглядає так дивно ? насправді просто // каже про те що це регекс / ми шукаємо \ екран щоб шукати те що треба
console.log(str1 + ': ' + pattern.test(str1));

// пошук '\'
var str1 = "Строка з \\";
var pattern = /\\/;
console.log(str1 + ': ' + pattern.test(str1));

// Давайте подивимось на такий приклад :)
var str = "У цьому тексті зустрічається символ \" | \". Як знайти його через регулярний вираз?";
console.log(str);
var pattern = /\|/; //Звичайно ж - екранувати, Таким чином, цей регулярний вираз відповідатиме будь-якому символу | або . в рядку.

console.log("Тестуємо: " + pattern.test(str));



/* Інтервал символів

Інтервал або набір символів також називають символьним класом. 
Для його позначення використовуються квадратні дужки. 
Щоб вказати діапазон символів усередині класу, необхідно поставити знак тире. 
Порядок ряду символів у наборі неважливий.

*/

var sentence = "The car parked in the garage.";
var pattern = /[Tt]he/g;  // The or the
var matches = sentence.match(pattern);
console.log(matches)

// Варто зазначити, що крапка, поміщена у квадратні дужки, означає саме крапку, а ніщо інше. Таким чином регулярний вираз ar[.] означає малий символ a, за яким йде буква r, за якою йде крапка.
var sentence = "A garage is a good place to park a car.";
var pattern = /ar[.]/g;
var matches = sentence.match(pattern);
console.log(matches)

// А якщо нам потрібно знайти Аллу чи Анну?
var names = "Анна Алла аівпавпа Аркан А@#$а Абба";
var pattern = /А..а/g;
var matches = names.match(pattern);
console.log(matches)

// Нам тоді потрібно використовувати пошук за різними значень
var names = "Анна Алла аівпавпа Аркан А@#$а Абба Анла Ална";
var pattern = /А[нл][нл]а/g;  // говорить що 'н' та 'л' - допустимі значення
var matches = names.match(pattern);
console.log(matches)

// Ще приклад
var str = "vasja@gmail.com";
var pattern = /[bcdi]/; // Регулярний вираз /[bcdi]/ вказує на пошук будь-якого символу, який відповідає будь-якому з символів "b", "c", "d" або "i". 
console.log("Чи є тут співпадіння? " + pattern.test(str)); // Поверне правду, якщо у рядку є хоча б один символ із зазначеного набору. У цьому випадку, метод test() повернув true, оскільки в рядку str знайдено символ "i", який відповідає одному з символів у наборі [bcdi].
console.log("На якій позиції? " + str.search(pattern));

/* --- Класи символів ---

Класи символів у регулярних виразах дозволяють вам визначати групи символів, які ви шукаєте у тексті. 
Вони представлені в квадратних дужках [...] і дозволяють вам вказати, 
які символи приймаються як відповідні символи у тексті. 

Ось декілька прикладів класів символів:


    /[a-z]/ - діапазон значень від a до z. Тобто - всі малі англійські літери
    /[A-Z]/ - діапазон значень від a до z. Тобто - всі великі англійські літери
    /[0-9]/ - всі цифри
    /[a-zA-Z0-9]/ - загалом усі літери латинського алфавіту, а разом із ними ще й цифри
    
    Скорочення
    / \d / - Те саме, що і [0-9]
    / \w / - те ж, що [a-zA-Z0-9_] всі літери англійського алфавіту, цифри та знак підкреслення
    / \s / - різні "пробільні" символи 

    За винятком класу [^...] -  відповідає будь-яким символам, крім тих, які вказані у квадратних дужках.

*/

// Клас [a-z]
var text = "apple Banana cherry";
var pattern = /[a-z]+/g;
var matches = text.match(pattern);
console.log(matches); // ["apple", "сherry"]

// Клас [A-Z]
const text1 = "apple Banana cherry";
const pattern1 = /[A-Z]+/g;
const matches1 = text1.match(pattern1);
console.log(matches1); // ["B"]

// Клас [0-9]
const text2 = "12345 apples, 6789 bananas";
const pattern2 = /[0-9]+/g;
const matches2 = text2.match(pattern2);
console.log(matches2); // ["12345", "6789"]

// Клас [a-zA-Z0-9]
const text = "Hello123 World_456";
const pattern = /[a-zA-Z0-9]+/g;
const matches = text.match(pattern);
console.log(matches); // ["Hello123", "World", "456"]

// Ще приклад
var names = "Аня Ася Оля Аля Валя Александрия";
var pattern = /А[а-я]я/g;
var matches = names.match(pattern);
console.log(matches)

// Спокійно можемо комбінувати обидва підходи – і це вже цікаво
var str = "Сьогодні 7 день тижня";
var pattern = /[1-7asd] день тижня/;
console.log("Чи є співпадіння? " + pattern.test(str));
console.log("На якій позиції? " + str.search(pattern));

// Діапазон "крім"
// Приклад 0
const text = "The car parked in the garage";
const pattern = /[^c]ar/g;  // регулярний вираз /[^c]ar/g в JavaScript використовується для пошуку будь-яких входжень "ar", які передуються будь-яким символом, крім "c". Квадратні дужки зі знаком ^ на початку створюють набір символів, які не повинні відповідати перед "ar".
const matches = text.match(pattern);
console.log(matches);

// Приклад 1
const text = "apple banana cherry";
const pattern = /[^aeiou]+/g; //регулярний вираз /[^aeiou]+/g в JavaScript шукає одну або більше послідовностей символів, які не є голосними (a, e, i, o, u). Знак ^ усередині квадратних дужок означає "не", таким чином вираз відшукує всі послідовності, що складаються не з голосних.
const matches = text.match(pattern);
console.log(matches); // ["ppl", " bnn", " chrry"]

// Приклад 2
var str = "Дуже довгий рядок, в якому немає англійських букв і цифр";
var pattern = /[^\w]/; // регулярний вираз /[^\w]/, де \w є метасимволом, який відповідає будь-якій букві англійського алфавіту (великій чи малій), цифрі або символу підкреслення (_). 
//Знак ^ усередині квадратних дужок використовується для створення негації цього набору, тож /[^\w]/ шукає будь-який символ, який НЕ є буквою англійського алфавіту, цифрою або символом підкреслення.
console.log(pattern.test(str));
console.log(str.search(pattern));  // Метод search: Повертає індекс першого входження, яке відповідає шаблону. У вашому рядку перший символ "Д" не входить в набір \w, тому індекс першого входження буде 0.

var str = "Loremipsum";
var pattern = /[^\w]/; // Чи є щось, крім англійського алфавіту та цифр?
console.log(pattern.test(str));
console.log(str.search(pattern));

var str = "98";
var pattern = /[^\w]/; // Чи є щось, крім англійського алфавіту та цифр?
console.log(pattern.test(str));
console.log(str.search(pattern));

// Приклад 3
var str = "Дуже довгий рядок, в якому немає англійських букв і цифр";
var pattern = /[^а-я]/; // Чи є в нас великі літери,  регулярний вираз /[^а-я]/ визначає пошук будь-якого символу, що не входить до діапазону малих літер кирилиці від "а" до "я". Таким чином, він буде знаходити пробіли, розділові знаки, великі літери, а також будь-які інші символи, які не є малими літерами кирилиці.
console.log("Друга спроба: " + pattern.test(str));
console.log(str.search(pattern)); // І справді, перша літера - велика!

var str = "дуже";
var pattern = /[^а-я]/; // Чи є в нас великі літери
console.log("Друга спроба: " + pattern.test(str));
console.log(str.search(pattern));

// Приклад 4
var names = "file.txt log.txt file_1.txt 1.txt 1loj.txt";
var pattern = /[^0-9]\.txt/g;  //регулярний вираз /[^0-9]\.txt/g призначений для пошуку послідовностей, де символ, що передує розширенню .txt, не є цифрою. Символ [^0-9] вказує на знаходження будь-якого символу, що не є цифрою від 0 до 9, а \.txt точно вказує на рядок .txt.
var matches = names.match(pattern);
console.log(matches)

// Давайте спробуємо знайти дату - 01.01.1999
// dd.mm.yyyy
var names = "01.01.1999 05.08.2015 03.02.2000 07.09.1976 08.08.8888 99.99.2000";
var pattern = /[0-9][0-9]\.[0-9][0-9]\.[0-9][0-9][0-9][0-9]/g;  // регулярним виразом /[0-9][0-9]\.[0-9][0-9]\.[0-9][0-9][0-9][0-9]/g, який призначений для пошуку дат у форматі DD.MM.YYYY, де кожна частина дати складається з двох цифр для дня та місяця і чотирьох цифр для року, розділених крапками.
// Цей вираз не перевіряє коректність дати з точки зору календаря (наприклад, не враховує кількість днів у місяці,
var matches = names.match(pattern);
console.log(matches)

// Давайте трохи додамо валідацію
// dd.mm.yyyy
var names = "01.01.1999 05.08.2015 03.02.2000 07.09.1976 08.08.8888 99.99.2000";
var pattern = /[0-3][0-9]\.[0-1][0-9]\.[12][09][0-9][0-9]/g;  // регулярний вираз /[0-3][0-9]\.[0-1][0-9]\.[12][09][0-9][0-9]/g є більш точним для валідації дат, але все ще не ідеальним, оскільки він допускає деякі некоректні дати (наприклад, 31.04.1999, хоча квітень має лише 30 днів). Однак, він враховує, що дні та місяці мають правильні межі значень і роки включають 1900-1999 та 2000-2099.
var matches = names.match(pattern);
console.log(matches)



// Але не все....
/**
 * регулярний вираз /[0-3][0-9]\.[0-1][0-9]\.[12][09][0-9][0-9]/g призначений для пошуку рядків, які відповідають певному формату дати DD.MM.YYYY, де:

DD (день) може бути від 01 до 39, що не цілком правильно для календарних днів, оскільки дні мають від 01 до 31.
MM (місяць) може бути від 01 до 19, що також не зовсім правильно, оскільки місяці мають від 01 до 12.
YYYY (рік) обмежений діапазонами від 1900 до 1999 або від 2000 до 2099.
 */

var names = "01.01.1999 05.08.2015 03.02.2000 07.09.1976 08.08.8888 99.99.2000 33.01.2000 01.19.1999 05.06.2999";
var pattern = /[0-3][0-9]\.[0-1][0-9]\.[12][09][0-9][0-9]/g;
var matches = names.match(pattern);
console.log(matches)

// Давайте розберемо дні. Вони бувають від 1 до 31






// Чи підійде [1-31] ?

// Які бувають дати?






// 0 - друга може бути від 1 до 9 - 0[1-9]
// 1,2 - друга може бути від 0 до 9 - [12][0-9]
// 3 - друга тільки 0 та 1 - 3[01]




//0[1-9]|[12][0-9]|3[01]

var names = "01 02 11 12 13 21 22 23 25 30 31 32 41 42 50";
var pattern = /0[1-9]|[12][0-9]|3[01]/g;
var matches = names.match(pattern);
console.log(matches)

/* 

\d - всі цифри
\D - все, крім цифр

\W - Крім букв, цифр і _
\S - крім пробілових символів

*/


/* --- Квантифікатори та кількісні обмеження ---

Квантифікатори та кількісні обмеження в регулярних виразах дозволяють вам визначити, скільки разів даний елемент чи група елементів повинні відповідати паттерну. 

Вони роблять регулярні вирази більш гнучкими та потужними. Ось декілька типових квантифікаторів:

- Квантифікатор `*`: Відповідає нуль або більше входжень попереднього елементу.
- Квантифікатор +: Відповідає одному або більше входженню попереднього елементу.
- Квантифікатор ?: Відповідає нулю або одному входженню попереднього елементу (робить його необов'язковим).
- Квантифікатор {n}: Відповідає точно n входженням попереднього елементу.
- Квантифікатор {n, m}: Відповідає від n до m входжень попереднього елементу.
- Квантифікатор {n,}: Відповідає принаймні n входженням попереднього елементу.
- Квантифікатор {n}?: Мінімальний квантифікатор, співставлюється найменшій можливій кількості входжень.

Тобто,
? - 0 чи 1 повторення
* - 0 чи більше повторення
+ - 1 чи більше повторення

*/

//* - 0 чи більше повторення
// Приклад 1
var names = "Осіпов Осіпова Осіпову Осіповаааа";
var pattern = /Осіпов.*/g;  //  Це квантифікатор, який означає "будь-який символ (крім символу нового рядка) нуль або більше разів". Таким чином, .* збігається з будь-якою кількістю будь-яких символів після слова "Осіпов"
var matches = names.match(pattern);
console.log(matches)

// Приклад 2
/**
 * символ * позначає, що символ перед ним (в даному випадку b) може виникати в тексті нуль або більше разів. Отже, цей регулярний вираз відповідає будь-якому рядку, що починається з 'a', за яким слідує будь-яка кількість символів 'b' (включаючи нуль випадків), і закінчується на 'c'.
 */
var re = /ab*c/;
console.log(re.test("abc"));
console.log(re.test("abbbbbbbbbbbbbbbbbbbbc"));
console.log(re.test("ac"));

// Приклад 3
var names = "log.txt log1.txt log2.txt log3.txt log33.txt ";
var pattern = /log\d*\.txt/g; // регулярний вираз log\d*\.txt ефективно відшуковує файли, імена яких починаються на "log", можуть включати будь-яку кількість цифр (або не містити цифр взагалі), і закінчуються на ".txt". Символ \d відповідає будь-якій одній цифрі, а * позначає "нуль або більше" входжень попереднього елемента.
var matches = names.match(pattern);
console.log(matches)

// Також, ми можемо вказати кількість повторень
console.log(/abc/.test("abbc")); // false
console.log(/ab{2,4}c/.test("abc")); // Вказує на пошук підрядка, який починається з "a", за яким слідує від 2 до 4 символів "b", а потім "c", занадто мало b
console.log(/ab{2,4}c/.test("abbbbbc")); // Занадто багато b
console.log(/ab{2,4}c/.test("abbbc")); // true - в самий раз
console.log(/ab{2,}c/.test("abbbbbbbbbbbbc")); // Два і більше
console.log(/ab{2,}c/.test("abc"));
console.log(/ab{2}c/.test("abc")); // Строго два
console.log(/ab{2}c/.test("abbc")); // Строго два
console.log(/ab{2}c/.test("abbbc")); // Строго два

let str1 = "The number was 9.9997 but we rounded it off to 10.0.";
var regex = /[0-9]{2,3}/g // [0-9]{2,3} означає, що допустима кількість цифр має бути щонайменше дві цифри, але не більше ніж 3 (символи в діапазоні від 0 до 9)
console.log(regex.test(str1));
console.log(str1.match(regex));

let str1 = "The number was 9.9997 but we rounded it off to 10.0.";
var regex = /[0-9]{2,}/g // [0-9]{2,} означає 2 або більше цифр
console.log(regex.test(str1));
console.log(str1.match(regex));

let str1 = "The number was 9.9997 but we rounded it off to 10.0.";
var regex = /[0-9]{3}/g // [0-9]{3} знаходитиме лише 3 цифри, ні менше і ні більше
console.log(regex.test(str1));
console.log(str1.match(regex));

// ? - 0 чи 1 повторення
console.log(/ab?c/.test("abc")); // Вираз вказує на пошук підрядка, що починається з "a", за яким може слідувати нуль або один символ "b", а потім "c".
console.log(/ab?c/.test("ac"));
console.log(/ab?c/.test("abbc"));

// Ще приклад з ?
let str1 = "The car is parked in the garage.";
var regex = /[T]he/g // регулярний вираз /[T]he/g, який здається призначеним для пошуку слова "The" у рядку, але оскільки він використовується з флагом g (глобальний пошук), то він шукатиме усі входження "The" у рядку. Також, символи в квадратних дужках [T] означають, що він шукає лише велику "T" на початку слова "The", тому не знайде "the" з маленької літер
console.log(regex.test(str1));
console.log(str1.match(regex));

let str1 = "The car is parked in the garage.";
var regex = /[T]?he/g  //y виразі /[T]?he/g, використання [T]? означає, що велика літера "T" може бути присутня або відсутня перед "he". Це робить ваш вираз більш гнучким, оскільки він може знаходити як "The", так і "he". Флаг g дозволяє виявляти всі входження по всьому рядку.
console.log(regex.test(str1));
console.log(str1.match(regex));

// + - 1 чи більше повторення
var pattern = /ab+c/; // Пошук що починається з "a", за яким може слідувати один або або більше символів "b", а потім "c". 
console.log(pattern.test("abc"));
console.log(pattern.test("abbbbbbbbbbbbbbbbbbbbc"));
console.log(pattern.test("ac"));

// Ще приклад з +
let str1 = "The fat cat sat on the mat.";
var regex = /c.+t/ //  регулярний вираз /c.+t/ призначений для знаходження послідовностей у тексті, що починаються з літери "c" і закінчуються на "t", між якими можуть бути будь-які символи, включаючи пробіли. Метасимвол .+ означає "один або більше будь-яких символів". Цей вираз не має глобального флагу g, тому він знайде лише перше відповідне входження
console.log(regex.test(str1));
console.log(str1.match(regex));


// --- Якоря ---- 

// Початок рядка '^' 
/**
 * регулярний вираз ^Mary, який шукає рядки, які починаються зі слова "Mary". Функція match() використовується для знаходження відповідності між рядком і регулярним виразом. 
 * У цьому випадку, оскільки рядок починається з "Mary", вона знаходить відповідність. Результатом буде масив, що містить знайдену підстроку: ["Mary"].
 */
let str1 = "Mary had a little lamb";
var regex = /^Mary/;
console.log(str1.match(regex));

/**
 * Регулярний вираз залишився таким самим: /^Mary/. Однак цей рядок не починається з "Mary", тому результатом буде null, оскільки немає відповідності.
 */
let str1 = "Belle had a little lamb";
var regex = /^Mary/;
console.log(str1.match(regex));

/**
 * У цьому випадку ми шукаємо слово "The" або "the", яке починає рядок. Регулярний вираз (T|t)he шукає велику або маленьку літеру "T", 
 * а потім "he". Тому буде знайдено перше слово "The" у рядку. Результатом буде масив ["The", "T"].
 */

let str1 = "The car is parked in the garage.";
var regex = /^(T|t)he/;
console.log(str1.match(regex));

// Кінець рядка '$'
let str1 = "it's fleece was white as snow";
var regex = /snow$/;
console.log(str1.match(regex));

let str1 = "Today was rain";
var regex = /snow$/;
console.log(str1.match(regex));

// Більш складний приклад
/**
 * регулярний вираз /^\d\d:\d\d$/ призначений для перевірки рядків, які представляють собою час у форматі "години:хвилини" з двома цифрами для годин і хвилин, розділеними двокрапкою. Давайте розберемо його:

^ - Цей символ вказує на початок рядка, тобто відповідність має починатися саме з початку рядка.
\d\d - Це означає дві цифри підряд, що відповідають годинам.
: - Це просто літерал двокрапки, який ми очікуємо побачити між годинами і хвилинами.
\d\d - Це ще дві цифри підряд, які відповідають хвилинам.
$ - Це символ, який вказує на кінець рядка, тобто відповідність має закінчуватися саме в кінці рядка.
Отже, цей регулярний вираз точно відповідає рядкам у форматі "години:хвилини" з двома цифрами для годин і хвилин, і нічого більше
 */
let goodInput = "12:34";
let badInput = "12:345";
let badInput1 = "012:34";

var regexp = /^\d\d:\d\d$/;
console.log(regexp.test(goodInput));
console.log(regexp.test(badInput));
console.log(regexp.test(badInput1));


/* --- Прапори регулярних виразів ---

    Регулярні вирази можуть мати прапори, які впливають на пошук або надають додаткову інформацію.

    У JavaScript їх усього сім:

    i - З цим прапором пошук не залежить від регістру: немає різниці між A і a (див. приклад нижче).
    g - Із цим прапором пошук шукає всі збіги, без нього - тільки перший.
    m - Багаторядковий режим (розглядається в розділі Багаторядковий режим якорів ^ $, прапор "m").
    s - Вмикає режим "dotall", за якого крапка . може відповідати символу переведення рядка \n (розглядається в розділі Символьні класи).
    u - Вмикає повну підтримку Юнікоду. Прапор дозволяє коректне опрацювання сурогатних пар (докладніше про це в розділі Юнікод: прапор "u" і клас \p{...}).
    y - Режим пошуку на конкретній позиції в тексті (описано в розділі Пошук на заданій позиції, прапор "y").
    d - З цим прапором результат регулярного виразу поміщається в масив, який містить додаткову інформацію про регулярний вираз, наприклад індекси початку і кінця підрядків. Цей прапор не змінює поведінку регулярного виразу, а лише надає додаткову інформацію.
*/

// Найпростіший випадок - реєстронезалежний пошук.
var str = "Ох вже ця вічна ВОзНЯ з регістром"
var regex = /возня/;

console.log("Знайшли щось? " + regex.test(str));
console.log("А що саме? " + str.match(regex));

// А якщо так?
var str = "Ох вже ця вічна ВОзНЯ з регістром"
var regex = /возня/i;

console.log("Знайшли щось? " + regex.test(str));
console.log("А що саме? " + str.match(regex));

// Ще приклад
var str = "The fat cat sat on the mat."
var regex = /The/ig;
console.log("А що саме? " + str.match(regex));

// Наша задача - замінити мишей на ховрахів
// Знайдеться все. Наш перший приклад:
var str = "миші, щури, знову миші, хом'яки, ховрахи";
var regex = /миші/;
var res = str.replace(regex, "ховрахи"); // Заміна тексту, використовуючи регулярний вираз
console.log("Було: " + str + "\nСтало: " + res); // Заміна тільки перших мишей

// Давайте спробуемо з прапором - g
var str = "миші, щури, знову миші, хом'яки, ховрахи";
var regex = /миші/g; // Пошук всіх збігів у тексті
var res = str.replace(regex, "ховрахи");
console.log("Було: " + str + "\nСтало: " + res); // Заміна тільки перших мишей

// Ще приклад
var str = "The fat cat sat on the mat."
var regex = /.(at)/;
console.log(JSON.stringify(str.match(regex)));

var str = "The fat cat sat on the mat."
var regex = /.(at)/g;
console.log(JSON.stringify(str.match(regex)));

// Ще один прапор - m (multiline)
let str = `1е місце: Іванко
2е місце: Михайло
3е місце: Ганна`;

console.log(str.match(/^\d/g)); // Без прапора m було б знайдено тільки перше число!

// Виправляємо!
let str = `1е місце: Іванко
2е місце: Михайло
3е місце: Ганна`;

console.log(str.match(/^\d/gm)); // Зверніть увагу, що прапори можна поєднувати!


// Наступна задача - замінити перші літери на * 
var str = "abc\ndef\nghi";
var regex = /^[a-z]/g; // Символ "^" вказує на початок рядка."[a-z]" вказує на будь-яку маленьку літеру англійського алфавіту.Модифікатор "g" вказує на глобальний пошук, тобто пошук всіх входжень, а не тільки першого.
var res = str.replace(regex, "*");
console.log(res); // Як не крути, а "початок рядка" у нас тільки один

// Виправляємо!
var str = "abc\ndef\nghi";
regex = /^[a-z]/gm    // /gm вказує на багаторядковий режим, тобто пошук буде виконуватися для кожного рядка окремо.
res = str.replace(regex, "*");
console.log(res);

// Приклад з кінцем речення
let str = `Іванко: 1
Михайло: 2
Ганна: 3`;

console.log(str.match(/\d$/gm));
//=========================================
/**
 * Жадібні регулярні вирази: пояснення та приклади
У регулярних виразах жадібність описує поведінку, коли шаблон намагається максимально охопити символи у тексті. 
Це означає, що шаблон буде продовжувати співпадати з символами, доки не зіткнеться з обмеженням або не знайде більш відповідний шаблон.

Приклади жадібних регулярних виразів:

.*\b[A-Za-z]+\b.*: Цей шаблон буде співпадати з будь-яким текстом, який містить принаймні одне слово, незалежно від того, скільки слів насправді присутнє. 
Наприклад, він співпаде з "привіт", "це речення", "довгий текст з багатьма словами".
<.*>: Цей шаблон буде співпадати з будь-яким HTML-тегом, включаючи його вміст. 
Наприклад, він співпаде з <p>Це абзац</p>, <div class="container">...</div>, <img src="image.jpg" alt="Опис">.
\d+.*: Цей шаблон буде співпадати з будь-яким текстом, який починається з одного або декількох чисел, за яким йде будь-який інший символ.
 Наприклад, він співпаде з "123привіт", "4567.89 текст", "1000000000000000000".

 Переваги жадібних регулярних виразів:

Простота: Жадібні регулярні вирази часто простіші для написання та розуміння, ніж нежадібні.
Гнучкість: Вони можуть охопити більше тексту, що робить їх корисними для певних завдань, таких як витяг даних з HTML-сторінок.
Недоліки жадібних регулярних виразів:

Неточність: Вони можуть не співпадати з бажаним текстом, якщо є інші шаблони, які їм більше відповідають.
Складність: У деяких випадках може бути складно отримати бажаний результат за допомогою жадібних регулярних виразів.
Нежадібні регулярні вирази:

Нежадібні регулярні вирази поводяться протилежно жадібним: вони намагаються охопити якомога менше символів. 
Це робиться за допомогою спеціальних модифікаторів, таких як ?.

Приклади нежадібних регулярних виразів:

.*\b[A-Za-z]+\b.*?: Цей шаблон буде співпадати з першим словом, яке він зустріне, 
а не з усіма словами в тексті. Наприклад, він співпаде з "привіт" у реченні "привіт, як справи?".
<.*?>: Цей шаблон буде співпадати з назвою тега, а не з його вмістом. Наприклад, він співпаде з <p>, <div>, <img>.
\d+?.*: Цей шаблон буде співпадати з найкоротшою послідовністю чисел, за якою йде будь-який інший символ. Наприклад, він співпаде з "123привіт", "456.89 текст", "10".
 */

// Посилання у регулярних виразах
/**У регулярних виразах можна використовувати посилання, які дозволяють посилатися на групи або підвирази, 
 * що вже були знайдені. Це дозволяє створювати складніші шаблони для пошуку тексту.
У JavaScript ви можете використовувати посилання на групи за допомогою \n, де n - це номер групи.
Отже, наприклад, якщо ви хочете знайти парні теги HTML (наприклад, <p>...</p>, <div>...</div>, то можна скористатися посиланням на групу.
 Ось приклад такого регулярного виразу:
 */

var regex = /<([a-z]+)[^>]*>.*?<\/\1>/gi;
var str = "<div>This is a <b>bold</b> text.</div>";
console.log(regex.test(str));
console.log(JSON.stringify(str.match(regex)));

/**
 * Як то працює
 * < - Це літерал відкриваючого тега HTML.
([a-z]+) - Це група, яка відповідає іменам тегів. [a-z]+ означає одну або більше літер алфавіту.
[^>]* - Це відповідає будь-якому символу, крім >, і повторюється нуль або більше разів. Використовується для відповідності будь-яким атрибутам тега.
> - Це літерал закриваючого тега HTML.
.*? - Це відповідає будь-якому символу (включаючи новий рядок), який повторюється нуль або більше разів, у не жадібний спосіб. 
Це означає, що воно спробує знайти найменше можливе співпадіння.
<\/\1> - Це літерал закриваючого тега HTML, який починається з </, за яким слідує те саме ім'я тега, що й відкриваючий тег. 
\1 вказує на посилання на першу групу (тобто ім'я тега).
Отже, цей регулярний вираз знаходить парні HTML теги у тексті, які відповідають заданому шаблону. 
У нашому випадку, він знаходить <div>...</div> та <b>...</b>, оскільки вони є парними HTML тегами.
 */

//реальне використання
var regex = /<[^>]+>/g; // Регулярний вираз для знаходження всіх HTML тегів
var str = "<div>This is a <b>bold</b> text.</div>";

var cleanedStr = str.replace(regex, ""); // Видаляємо всі HTML теги
console.log(cleanedStr); // Виводимо рядок без HTML тегів




/*
    Частину шаблону можна укласти в дужки (...). Це називається "дужкова група".

    У такого виділення є два ефекти:
    - Дозволяє помістити частину збігу в окремий масив.
    - Якщо встановити квантифікатор після дужок, то він застосовуватиметься до всього вмісту дужки, а не до одного символу.
*/

var str = "Publication Date: 2021-09-06" // Якщо ми хочемо отримати окремі компоненти дат - рік, місяць, день? У цьому випадку ми можемо скористатися групами
var regex = /(\d{4})-(\d{2})-(\d{2})/
var res = str.match(regex);
console.log(JSON.stringify(res));
console.log(JSON.stringify(res[1]));


// --- Складніші посилання - зовнішні ---
// Згаданий вище replase працює не тільки (і не стільки) з рядками, а й з регулярними виразами
var str = "12aaa54dfhj5546b4mn56bmi456mn456";
console.log("Зразок: " + str);

var regexp = /\d+[a-z]+/; // Пошук послідовностей, які містять одну або більше цифра, за якою слідує одна або більше букв латинського алфавіту
var res = str.replace(regexp, '-+++-');
console.log("Після редагування: " + res);

// А тепер ми хочемо не просто замінити знайдену групу, а поміняти місцями цифри та літери
var str = "12aaa54dfhj5546b4mn56bmi456mn456";
console.log("Зразок: " + str);
//aaaa-12 dfhj-54
var regexp = /(\d+)([a-z]+)/g;
var res = str.replace(regexp, "|$2-$1|"); // Змінює те що знайшли в регексі на |$2-$1|. |$2-$1| -(\d+) - $1, ([a-z]+) - $2. тобто ця функція додає тире, штрихи та змінює  порядки
console.log("Після заміни: " + res);

// Ще кілька слів про дужні групи
var str = "Великий і жахливий Вася Пупкін вийшов на ґанок";
console.log("Зразок: " + str);

var regexp = /(Вася) (Пупкін)/;

var res = str.replace(regexp, "$2 $1");

// var res = str.replace(regexp, "$1 $`"); // ` - Частина рядка до збігу 
// var res = str.replace(regexp, "$1 _$'_"); // Частина рядка після збігу
// var res = str.replace(regexp, "$1 _$&_"); //Збіг цілком

console.log(res);

// Якщо скобочна група потрібна нам тільки для угруповання елементів і ми не хочемо "запам'ятовувати" її, спочатку потрібно поставити умовний знак "?:" 
var str = "Великий і жахливий Петя Пяточкін вийшов на ґанок";
var regexp = /(?:Вася|Петя) (?:Пупкін|Пяточкін)/; // У цьому випадку регулярний вираз шукає входження "Вася Пупкін", "Вася П'яточкін", "Петя Пупкін" або "Петя П'яточкін" у вхідному рядку.
var res = str.match(regexp);
console.log(res);

// split теж вміє працювати з регулярними виразами
var str = "миші щури: знову миші, вуші, Суші. ховрахи";
var regexp = /[:,.]/i;
console.log(str.search(regexp))
var res = str.split(regexp);
console.log(res);