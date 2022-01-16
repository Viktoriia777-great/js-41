console.log('решение задач - МАССИВЫ');

/*
 * Посчитать общую сумму покупок в корзине
 */
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// // 2. переменная тотал до цикла
// let total = 0;
/*
// 1. перебрать массив
for (let i = 0; i < cart.length; i += 1) {
  console.log(cart[i]);
  //3. сумма покупок
  total += cart[i];
}
// 4.вывести в консоль
console.log('total:', total);*/

// for...of
// for (const value of cart) {
//   console.log(value);
//   total += value;
// }
// console.log('total:', total);
/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */
// 1 найти четные
// 2 вычислить тотал
// вывести в консоль
//const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
//let total = 0;

//for (const number of numbers) {
//if (number % 2 === 0) {
// total += number;
//}
//}

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     continue;
//   }
//   total += number;
// }

//console.log('Total:', total);
/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'k1widab3st';
let massage;

// 1 перебрать массив
//2 сравнить логины
// 3 переменная massage
//4  вывести сообщения в консоль

// for
//for (let i = 0; i < logins.length; i += 1) {
// console.log(logins[i]);
// if (loginToFind === logins[i]) {
//  massage = `Пользователь ${loginToFind} найден.`;
//  break;
//}
// massage = `Пользователь ${loginToFind} не найден.`;
//}
//console.log(massage);

// for of

//for (const login of logins) {
// if (loginToFind === login) {
//   massage = `Пользователь ${loginToFind} найден.`;
//   break;
// }
// massage = massage = `Пользователь ${loginToFind} не найден.`;
//}
//console.log(massage);

//Метод includes() с тернарным оператором
//const type = age >= 18 ? 'adult' : 'child';
/*if (redFruits.includes(fruit)) {
  console.log('It is a red fruit!');
}*/

massage = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;
console.log(massage);

let a = 10;
let b = a;
console.log(a);
console.log(b);

a = 20;
//b = a;
console.log(a);
console.log(b);

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

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
/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
//let string = '';

/*1. переменная строка лет
2. перебрать через фор
3. записать новое значение в в строку  */

// for (const friend of friends) {
//   //   //console.log(friend);

//   string += friend + ', ';
// }
// string = string.slice(0, string.length - 1);
// string = string.slice(0, string.length - 1);

// console.log(string);
console.log(friends.join(', '));
/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */
const string = 'jAVAsCRIPT';
const letters = string.split('');
let newString = '';

//console.log(letters);
for (const letter of letters) {
  console.log(letter);

  //   if (letter === letter.toLowerCase()) {
  //     newString += letter.toUpperCase();
  //   } else {
  //     newString += letter.toLowerCase();
  //   }
  const isEqual = letter === letter.toLowerCase();
  newString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}
console.log(newString);
/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

const slug = title.toLowerCase().split(' ').join('-');
console.log(slug);
/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const nuumbers = array1.concat(array2);

for (const nuumber of nuumbers) {
  total += nuumber;
}

console.log(total);
/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];

console.table(cards);

const cardToRemove = 'Карточка-3';

const index = cards.indexOf(cardToRemove);
cards.splice(index, 1);
console.table(cards);

// Добавление
const cardToInsert = 'Карточка-6';
const iindex = 3;
cards.splice(iindex, 0, cardToInsert);
console.table(cards);

//Обновление
const cardToUpdate = 'Карточка-4';
const iiindex = cards.indexOf(cardToUpdate);
cards.splice(iiindex, 1, 'Карточка-44');
console.table(cards);
