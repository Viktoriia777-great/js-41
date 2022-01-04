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
//let brand = prompt('Давай бренд');
//brand = brand.toLowerCase();
//console.log(brand);

/* метод slice копирует часть слова и возвращает,
в скобках указан индекс, с какого делается копия */
let brand = 'SamSUnG';
console.log(brand[4]);
console.log(brand.slice(1).toLowerCase());

brand = brand[0] + brand.slice(1).toLowerCase();

console.log(brand);
/*
 * Поиск в строке с методом includes()
 */
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivesmatter';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));

const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));

/*
 * Напиши скрипт который проверяет вхождение числа
 * в отрезок обозначенный x1 и x2.
 *
 * - До x1
 * - После x2
 * - От x1 до x2
 * - До x1 или после x2
 */
const x1 = 10;
const x2 = 30;
const number = 25;

console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);

const res1 = number > x1 && number < x2;
// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// false

// 5 > 10 && 5 < 30
// false && true
// false

// 15 > 10 && 15 < 30
// true && true
// true
console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, res1);

const res2 = number < x1 || number > x2;

// 150 < 10 || 150 > 30
// false || true
// true

// 25 < 10 || 25 > 30
// false || false
// false
console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}? `, res2);

/*
 * Напиши скрипт который проверяет возможность открыть чат с пользователем.
 * Для этого пользователь должен быть:
 * - другом
 * - онлайн
 * - без режима не беспокоить
 */

const isOnline = true;
const isFriend = true;
const isDnd = true;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Можно открыть чат? ', canOpenChat);

/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

const sub = 'free';

// если пользователь pro или пользователь vip тогда есть доступ

const canAccessContent = sub === 'pro' || sub === 'vip';
// true || false => true
// false || true => true
// false || false => false

console.log('Есть доступ к контенту? ', canAccessContent);
