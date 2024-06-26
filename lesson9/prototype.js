/**
 * Прототип об'єкта в JavaScript є фундаментальним концептом, який визначає стандартний шлях наслідування для об'єктів. Кожен об'єкт має "прототип", з якого він може успадковувати властивості та методи. Ось детальніше про це:

Що таке прототип?
Прототип — це звичайний об'єкт, на який вказує властивість __proto__ іншого об'єкта. Коли ви намагаєтеся отримати доступ до властивості 
або методу об'єкта, JavaScript спершу шукає цю властивість на самому об'єкті. Якщо властивість не знайдена, пошук продовжується по ланцюгу прототипів.

Створення об'єкта і його прототип
Коли ви створюєте об'єкт за допомогою літералу об'єкта або конструктора, JavaScript автоматично встановлює його прототип:
 */

let animal = {
    isAlive: true
};

let dog = Object.create(animal); // `dog` наслідує від `animal`
dog.name = "Rex";

console.log(dog.isAlive); // true, отримано з прототипу. У цьому прикладі, dog успадковує властивість isAlive від свого прототипу animal.

/**
 * 
Маніпуляція прототипами
JavaScript дозволяє модифікувати прототипи на льоту, але це зазвичай не рекомендується через питання продуктивності. Ви можете встановлювати та отримувати прототип об'єкта за допомогою Object.getPrototypeOf() і Object.setPrototypeOf():
 */

let cat = {
    isQuiet: true
};

Object.setPrototypeOf(cat, animal); // Змінюємо прототип `cat` на `animal`

console.log(cat.isAlive); // true, тепер `cat` теж має властивість `isAlive` від `animal`
console.log(Object.getPrototypeOf(cat) === animal); // true

/**
 * Прототип і конструктори
Коли ви використовуєте конструктори (наприклад, функції конструктора або класи), 
кожен створений об'єкт успадковує властивості від prototype властивості конструктора:
 */

function Bird(name) {
    this.name = name;
}

Bird.prototype.fly = function () {
    console.log(`${this.name} is flying!`);
};

let parrot = new Bird("Polly");
parrot.fly(); // "Polly is flying!", метод `fly` взято з `Bird.prototype`. У цьому прикладі, всі екземпляри Bird будуть мати доступ до методу fly через свій прототип.
