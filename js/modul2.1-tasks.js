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
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

for (const number of numbers) {
  if (number % 2 === 0) {
    total += number;
  }
}
console.log('Total:', total);
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
const loginToFind = 'aj4xth3m4n';
let massage;

// 1 перебрать массив
// сравнить логины
// переменная massage
// вывести сообщения в консоль

// for
// for (let i = 0; i < logins.length; i += 1) {
//   console.log(logins[i]);
//   if (loginToFind === logins[i]) {
//     massage = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
//   massage = `Пользователь ${loginToFind} не найден.`;
// }
// console.log(massage);

// for of

for (const login of logins) {
  if (loginToFind === login) {
    massage = `Пользователь ${loginToFind} найден.`;
    break;
  }
  massage = massage = `Пользователь ${loginToFind} не найден.`;
}
console.log(massage);
