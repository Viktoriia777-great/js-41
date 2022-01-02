console.log('Ветвления и циклы');
const stars = 1;
let price;

if (stars === 1) {
  price = 20;
} else if (stars === 2) {
  price = 30;
} else if (stars === 3) {
  price = 50;
} else if (stars === 4) {
  price = 70;
} else if (stars === 5) {
  price = 120;
} else {
  console.log('Такого лоличества звезд нет');
}

console.log(price);

switch (stars) {
  case 1:
    price = 20;
    break;

  case 2:
    price = 30;
    break;

  case 3:
    price = 50;
    break;

  case 4:
    price = 70;
    break;
  case 5:
    price = 120;
    break;

  default:
    console.log('Такого лоличества звезд нет');
}
console.log(price);

// скрипт вибора стоимости отеля по кол-ву звезд
// 1,2 - 20; 3,4 - 30; 5 - 120

const starss = 3;
let prices;

if (starss === 1 || starss === 2) {
  prices = 20;
} else if (starss === 3 || starss === 4) {
  prices = 30;
} else if (starss === 5) {
  prices = 120;
} else {
  console.log('Такого лоличества звезд нет');
}

console.log(prices);

switch (starss) {
  case 1:
  case 2:
    prices = 50;
    break;

  case 3:
  case 4:
    prices = 70;
    break;

  case 5:
    prices = 120;
    break;
  default:
    console.log('Такого лоличества звезд нет');
}

console.log(prices);

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

const option = 6;
let message;

switch (option) {
  case 1:
    message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
    break;

  case 2:
    message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
    break;
  case 3:
    message = 'Посылка будет отправлена сегодня';
    break;

  default:
    console.log('Вам перезвонит менеджер');
}

console.log(message);

for (let i = 0; i <= 10; i += 1) {
  console.log(i);
}
/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */
const employees = 8;
const minSalary = 500;
const maxSalary = 5000;
let totalSalary = 0;

for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
  console.log(`ЗП работника номер ${i} - ${salary}`);

  totalSalary += salary;
}

console.log('totalSalary:', totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */
const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log('Четное:', i);
  total += i;
}
console.log(`Сумма четніх чисел в отрезке от ${min} до ${max}:`, total);
/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

//  1 вары
let balance = 10000;
const payment = 5000;

console.log(
  `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`,
);

if (payment <= balance) {
  balance -= payment;
  console.log(`На счету осталось ${balance} кредитов`);
} else {
  console.log('На счету недостаточно средств для проведения операции!');
}
console.log('Операция завершена');
/*
 * Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
 * от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

let totalSpent = 6000;
let payments = 500;
let discount = 0;

if (totalSpent < 100) {
  console.log('не партнёр, скидка 0%');
} else if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('бронзовый партнёр, скидка 2%');
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log('серебрянный партрёр, скидка 5%');
  discount = 0.05;
} else {
  console.log('золотой партрёр, скидка 10%');
  discount = 0.1;
}

console.log(`Оформляем заказ на сумму ${payments} со скидкой ${discount * 100}%`);
totalSpent += payments;
console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);
