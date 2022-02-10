console.log('Задачи с ОБЪЕКТАМИ');
// min, max, total, Math.min, Math.max
const salaries = {
  John: 100,
  Marta: 250,
  peter: 180,
  Ann: 550,
};

const valuess = Object.values(salaries);
console.log(valuess);

let minSalaries = valuess[0];
let maxSalaries = valuess[0];
let totall = 0;

for (const value of valuess) {
  if (value < minSalaries) {
    minSalaries = value;
  }
  if (value > maxSalaries) {
    maxSalaries = value;
  }
  totall += value;
}
console.log('min:', minSalaries);

console.log('max:', maxSalaries);

console.log('total:', totall);

console.log('Math.min:', Math.min(...valuess));
console.log('Math.max:', Math.max(...valuess));
/**
 * Func that returns total price from array by name
 */

const stones = [
  { name: 'Emerald', price: 1300, quantity: 4 }, // Изумруд
  { name: 'Diamond', price: 2700, quantity: 3 }, // Бриллиант
  { name: 'Sapphire', price: 400, quantity: 7 }, // Сапфир
  { name: 'Crushed stone', price: 200, quantity: 2 }, // Щебень
];

const calcTotalPrice = (stones, stoneName) => {
  if (!stones || (stones && !stones.length)) return 0;
  if (!stoneName) return 0;
  for (let stone of stones) {
    if (stoneName === stone.name) {
      return stone.price * stone.quantity;
    }
  }
  return 0;
};

console.log(calcTotalPrice(stones, 'Diamond'));
console.log(calcTotalPrice(stones, 'Crushed stone'));
console.log(calcTotalPrice(stones, 'Emerald'));
console.log(calcTotalPrice(stones, 'Sapphire'));
console.log(calcTotalPrice(null, 'Sapphire'));
console.log(calcTotalPrice([], 'Sapphire'));
console.log(calcTotalPrice(stones, ''));
console.log(calcTotalPrice(stones, 'www'));

/*Создать функцию которая будет выводить общую цену за все камни по названию камня
например calcTotalPrice(stonesObject, 'emerald') выведет в консоль 5200.
Подумайте что может пойти не так во время выполнения вашей функции и выведите
в консоль ошибки.*/
const stonesObject = {
  emerald: { price: 1300, quantity: 4 },
  diamond: { price: 2700, quantity: 3 },
  sapphire: { price: 400, quantity: 7 },
  crushedStone: { price: 200, quantity: 2 },
};

const stonesObjectValue = Object.values(stonesObject);
const stonesObjectKeys = Object.keys(stonesObject);
const stonesObjectEntries = Object.entries(stonesObject);

console.log(stonesObjectValue);
console.log(stonesObjectKeys);
console.log(stonesObjectEntries);

const calcTotalPrices = (stones, stoneName) => {
  console.log('not implemented');
};

console.log(calcTotalPrices(stonesObject, 'emerald')); // 5200

const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
const entries = Object.entries(hotel);
console.log(entries);
