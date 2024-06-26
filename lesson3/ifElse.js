/**
 * Конструкція if...else в JavaScript використовується для виконання коду залежно від певної умови.
 * Якщо умова (логічний вираз) є істинною (true), виконується один блок коду; якщо ж вона хибна (false), виконується інший блок коду.
 */

const age = 2;

if (age >= 18) {
  console.log('Ви маєте право голосу.');
} else {
  console.log('Ви ще надто молоді для голосування.');
}

/** Тернарний оператор
Тернарний оператор — це скорочена форма виразу if...else, який включає три операнди.
Він часто використовується для присвоєння значення змінним на основі логічної умови.
Структура тернарного оператора: умова ? вираз1 : вираз2;, де вираз1 виконується, якщо умова істинна, а вираз2 — якщо умова хибна.
*/

const ageT = 20;
const message = ageT >= 18 ? 'Ви маєте право голосу.' : 'Ви ще надто молоді для голосування.';
console.log(message);

/**
 * Ось декілька прикладів, які ілюструють поради для ефективного використання тернарного оператора в JavaScript:

1. Користуйтеся для простих умов
Тернарний оператор ідеально підходить для простих умов, де потрібно вибрати одне з двох значень залежно від умови.
 */

const ageT1 = 17;
const canVote = ageT1 >= 18 ? 'Так' : 'Ні';
console.log(`Чи може користувач голосувати? ${canVote}`);

/**
 * Зберігайте читабельність
Хоча тернарний оператор дозволяє зменшити кількість коду, важливо забезпечити його читабельність, особливо коли він використовується в складних виразах.
 */

const score = 85;
const grade = score >= 90 ? 'A' : (score >= 80 ? 'B' : 'C');
console.log(`Ваша оцінка: ${grade}`);

/**
 * Цей приклад є читабельним, але може стати складним, якщо додати більше рівнів. Краще уникати глибокої вкладеності тернарних операторів.
 */

/**
 * Не вкладайте тернарні оператори
Вкладення тернарних операторів може ускладнити розуміння коду, тому їх слід використовувати з обережністю.
 */

const score1 = 75;
const grade1 = score1 >= 90 ? 'A' : (score1 >= 80 ? 'B' : (score1 >= 70 ? 'C' : 'D'));
console.log(`Ваша оцінка: ${grade1}`);

/**
 * Цей вираз використовує три рівні тернарних операторів, що може ускладнити його розуміння. У такому випадку краще використовувати стандартну конструкцію if...else для підвищення читабельності.
 */
