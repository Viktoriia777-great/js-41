console.log(`lesson number 1`);
// МЕТОД CONFIRM()
//const shouldRenew = confirm('Хотите продлить подписку?');
//console.log(shouldRenew);
// результат: 1. если нажать "ok" вернется true
//             2.  если нажать "chansel(щтмена)" вернется false

//МЕТОД  PROMT()
//let guantity = prompt(`Введите количестро товаров`);
//guantity = Number(guantity);
//console.log(guantity);
//console.log(typeof guantity);

//МЕТОД  parseInt()
let elementWidth = '50px';
elementWidth = Number(parseInt(elementWidth));
console.log('elementWidth :', elementWidth);

//МЕТОД  parseFloat()
let elementHeight = '200.75px';
elementHeight = Number(parseFloat(elementHeight));
console.log('elementHeight :', elementHeight);

//МЕТОД toFixed;
let salary = 1300.16475;
salary = Number(salary.toFixed(2));
console.log(salary);
//console.log(Number(salary.toFixed(2)));

//ОБЪЕКТ Math
//возведение в степень
const base = 3;
const power = 2;
const result = Math.pow(base, power);
console.log(result);
console.log(base ** power);

/*Задача: написать скрипт который просит пользователя ввести число и степень,
возводит число в эту степень и выводит результат в консоль
*/
/*
1. попросить ввести число и сохранить в переменную
2. попросить ввести степень и сохранить в переменную
3. возвести введенные данные в степень и вывести в 
*/

//let num = prompt('Введи число'); //#endregion
//num = Number(num);
//console.log(num);

//let extent = prompt('Введи степень');
//extent = Number(extent);
//console.log(extent);

//const resultPrompt = num ** extent;
//const resultPrompt = Math.pow(num, extent);
//console.log(resultPrompt);

//console.log(num ** extent);

//  МЕТОД Math.random() - генерит псевдослучайные числа
//Math.random() * (max - min) + min);
//const max = 50;
//const min = 30;
// Math.round() - округляет
//const resultRandom = Math.round(Math.random() * (max - min) + min);
//console.log(resultRandom);

//interesting example(интересный пример)
const colors = ['tomato', 'teal', 'orange', 'skyblue'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

//document.body.style.backgroundColor = color;

//Длина строки, свойство length
const message = 'В этой строке 26 символов.';
console.log(message.length);

//Конкатенация строк
const firstName = 'Chelsy';
const lastName = 'Emarald';
const room = 716;
const tupe = 'VIP';
const welcomMsg = `Гость ${firstName} ${lastName} поселяется в ${tupe} номер ${room}`;
console.log(welcomMsg);

//нормализация строки методом  toLowerCase() - приведение к нижнему регистру
//toUpperCase - приведение к верхнему регистру
let brand = prompt('Давай бренд');
brand = brand.toLowerCase();
console.log(brand);

// метод includes
