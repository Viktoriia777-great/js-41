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
// 1-й способ
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
// 2-й способ
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

/*const stonesObjectValue = Object.values(stonesObject);
const stonesObjectKeys = Object.keys(stonesObject);
const stonesObjectEntries = Object.entries(stonesObject);
const stonesObjectRest = {
  ...stonesObject,
};
console.log(stonesObject);
console.log(stonesObjectValue);
console.log(stonesObjectKeys);
console.log(stonesObjectEntries);
console.log(stonesObjectRest);*/

const calcTotalPrices = (stones, stoneName) => {
  // 1-й способ
  const stone = stones[stoneName];
  if (stone) {
    return stone.price * stone.quantity;
  }
  // 2-й способ
  /* if (stones.hasOwnProperty(stoneName)) {
    return stones[stoneName].price * stones[stoneName].quantity;
  }
  // 3-й способ
  if (stoneName in stones) {
    return stones[stoneName].price * stones[stoneName].quantity;
  }*/
  return 'No such stone!';
};

const stonesObject = {
  emerald: { price: 1300, quantity: 4 },
  diamond: { price: 2700, quantity: 3 },
  sapphire: { price: 400, quantity: 7 },
  crushedStone: { price: 200, quantity: 2 },
};
console.log(calcTotalPrices(stonesObject, 'emerald')); // 5200
console.log(calcTotalPrices(stonesObject, 'diamond'));
console.log(calcTotalPrices(stonesObject, 'sapphire'));
console.log(calcTotalPrices(stonesObject, 'crushedStone'));
console.log(calcTotalPrices(stonesObject, 'www'));
console.log(calcTotalPrices(stonesObject, ''));
console.log(calcTotalPrices([], '123'));
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

const a = { x: 1, y: 2 };
const b = a;
b.c = 3;
a.f = 5;
console.log(a);
console.log(b);
/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */
const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
  changeName(newName) {
    this.name = newName;
  },
  addTrack(newTrack) {
    this.tracks.push(newTrack);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};
playlist.changeName('New name');
playlist.addTrack('new track');
playlist.updateRating(10);
console.log(playlist.getTrackCount());
console.log(playlist);
