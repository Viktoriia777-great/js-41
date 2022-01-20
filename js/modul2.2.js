console.log('Модуль 2 - ФУНКЦИИ');
/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */
const fnA = function () {
  console.log('Выполняется функция A');
  //fnB();
};

const fnB = function () {
  console.log('Выполняется функция B');
  //fnC();
};

const fnC = function () {
  console.log('Выполняется функция C');
};

//console.log('Лог перед вызовом функции A');

fnA();

//console.log('Лог после вызова функции A');

//console.log('Лог перед вызовом функции B');
fnB();
//console.log('Лог после вызова функции B');

//console.log('Лог перед вызовом функции C');
fnC();
//console.log('Лог после вызова функции C');
/*
 * Посчитать общую сумму покупок в корзине
 */
//const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// 2. переменная тотал до цикла
//let total = 0;

// 1. перебрать массив
//for (let i = 0; i < cart.length; i += 1) {
//console.log(cart[i]);
//3. сумма покупок
// total += cart[i];
//}
// 4.вывести в консоль
//console.log('total:', total);

//for...of
//for (const value of cart) {
//console.log(value);
//total += value;
//}
//console.log('total:', total);
const totalPrice = function (items) {
  let total = 0;

  for (const item of items) {
    total += item;
  }
  return total;
};
const result = totalPrice([10, 50, 30]);
console.log(`Общая сумма покупок: ${result}`);
const result1 = totalPrice([100, 900, 500]);
console.log(`Общая сумма покупок: ${result1}`);
/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */
const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);
/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */
//massage = logins.includes(loginToFind)
// ? `Пользователь ${loginToFind} найден.`
// : `Пользователь ${loginToFind} не найден.`;
//console.log(massage);
const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

const findLogin = function (allLogins, loginToFind) {
  //   for (const login of allLogins) {
  //     if (login === loginToFind) {
  //       return `Пользователь ${loginToFind} найден.`;
  //     }
  //   }
  //   return `Пользователь ${loginToFind} не найден.`;
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;
};

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));

/*
const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallNumber = numbers[0];
let bigNumber = numbers[0];

for (const number of numbers) {
  if (number < smallNumber) {
    smallNumber = number;
  }
}
console.log('Smallnumber:', smallNumber);

for (const number of numbers) {
  if (number > bigNumber) {
    bigNumber = number;
  }
}
console.log('Bignumber:', bigNumber);
*/

/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */
const findSmallesNumber = function (numbers) {
  let smallNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallNumber) {
      smallNumber = number;
    }
    return `Smallnumber: ${smallNumber}`;
  }
};

console.log(findSmallesNumber([26, 56, 98, 65, 90]));
console.log(findSmallesNumber([43, 87, 56, 80]));
/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */
// const string = 'jAVAsCRIPT';
// const letters = string.split('');
// let newString = '';

// //console.log(letters);
// for (const letter of letters) {
//   console.log(letter);

//   //   if (letter === letter.toLowerCase()) {
//   //     newString += letter.toUpperCase();
//   //   } else {
//   //     newString += letter.toLowerCase();
//   //   }
//   const isEqual = letter === letter.toLowerCase();
//   newString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(newString);

const changeCase = function (string) {
  let newString = '';
  const letters = string.split('');
  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();
    newString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
  }
  return newString;
};
console.log(changeCase('jAVAsCRIPT'));
console.log(changeCase('ТТрПАвЕЕк'));
/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */
// const title = 'Top 10 benefits of React framework';

// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);
const slugify = function (string) {
  return string.toLowerCase().split(' ').join('-');
};
console.log(slugify('Top 10 benefits of React framework'));
/*
 * Псевдомассив arguments и Array.from и ...
 */

// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

const fn = function (a, b, c, ...args) {
  console.log(`${a} ${b} ${c}`);
  console.log([a, b, c]);
  console.log(args);
};

fn('hello', 1, 2, 3);
fn('aloha', 1, 2, 3, 4, 5);
fn('hi', 1, 2, 3, 4, 5, 6, 7);
fn(6, 8);
/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */
const add = function (...args) {
  console.log(args);
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));
