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
