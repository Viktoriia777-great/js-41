console.log('решение задач - МАССИВЫ');

/*
 * Посчитать общую сумму покупок в корзине
 */
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// 2. переменная тотал до цикла
let total = 0;
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
for (const value of cart) {
  console.log(value);
  total += value;
}
console.log('total:', total);
