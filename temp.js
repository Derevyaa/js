var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  // метод для обчислення суми послуг
  price() {
    let total = 0;
    for (let service in this) {
      let value = parseInt(this[service]);
      if (!isNaN(value)) {
        total += value;
      }
    }
    return total;
  },

  // метод для знаходження мін ціни послуги
  minPrice() {
    let min = Infinity;
    for (let service in this) {
      let value = parseInt(this[service]);
      if (!isNaN(value)) {
        min = Math.min(min, value);
      }
    }
    return min;
  },

  // метод для знаходження макс ціни послуги
  maxPrice() {
    let max = -Infinity;
    for (let service in this) {
      let value = parseInt(this[service]);
      if (!isNaN(value)) {
        max = Math.max(max, value);
      }
    }
    return max;
  }
};

services['Розбити скло'] = "200 грн";

console.log("Загальна вартість послуг, грн: " + services.price());
console.log("Мінімальна ціна послуги, грн: " + services.minPrice());
console.log("Максимальна ціна послуги, грн: " + services.maxPrice());
