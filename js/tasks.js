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
let balance = 1000;
const payment = 2000;

console.log(
  `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`,
);

if (balance >= payment) {
  console.log('Все хорошо, снимаем деньги... Спасибо за покупку!');
  balance -= payment;
  console.log(`На счету осталось ${balance} кредитов`);
} else {
  console.log('На счету недостаточно средств для проведения операции!');
}
// console.log(
//   balance >= payment
//     ? `На счету осталось ${balance - payment} кредитов`
//     : 'На счету недостаточно средств для проведения операции!',
// );
console.log(`Операция завершена`);

/*
 * Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнёрская программа).
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

const totalSpent = 20;
let payments = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  discount = 0.02;
  console.log('Бронзовый партнер, скидка 2%');
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  discount = 0.05;
  console.log('Серебрянный партнер, скидка 5%');
} else if (totalSpent >= 5000) {
  discount = 0.1;
  console.log('Золотой партнер, скидка 10%');
} else {
  console.log('У вас еще нет партнерской скидки');
}
console.log(
  `Оформляем заказ на сумму ${payments - payments * discount} со скидкой ${discount * 100}%`,
);
/* 
//  'Бронзовый партнер, скидка 2%'
// Серебрянный партнер, скидка 5%''
// 'Золотой партнер, скидка 10%'
// 'У вас еще нет партнерской скидки'

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */
// переменная stsrs
// конструкция  switch
const stars = 50;
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
  console.log('Такого кол-ва звезд нет');
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
    console.log('Такого кол-ва звезд нет');
}
console.log(price);

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */
// star, prices
// через if
// через switch
const star = 4;
let prices;

if (star === 1 || star === 2) {
  prices = 20;
} else if (star === 3 || star === 4) {
  prices = 30;
} else if (star === 5) {
  prices = 120;
} else {
  console.log('Такого кол-ва звезд нет');
}

switch (star) {
  case 1:
  case 2:
    prices = 20;
    break;

  case 3:
  case 4:
    prices = 30;
    break;

  case 5:
    prices = 120;
    break;
  default:
    console.log('Такого кол-ва звезд нет');
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
// option, message,
// if
// switch

const option = 7;
let message;
if (option === 1) {
  message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
} else if (option === 2) {
  message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
} else if (option === 3) {
  message = 'Посылка будет отправлена сегодня';
} else {
  message = 'Вам перезвонит менеджер';
}
console.log(message);

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
    message = 'Вам перезвонит менеджер';
}

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */
//employees,totalSalary, salary
//перебор через  i
//сгенерить случайную з\п
//
const employees = 4;
const minSalary = 500;
const maxSalary = 5000;
let totalSalary = 0;

for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(Math.random() * maxSalary - minSalary) + minSalary;
  console.log(`ЗП работника ${i} - ${salary}`);

  totalSalary += salary;
}
console.log('totalSalary:', totalSalary);
/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

//  1 вары
const min = 1;
const max = 5;
let total = 0;
// перебор в фор числа от мин до мах
// найти четные
// вычмслить тотал и сделать лог

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log('Чётное:', i);
  total += i;
}

console.log('Total:', total);
/*
Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

Сравни эти значения и по результатам выведи:

Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.
*/
const totall = 100;
const ordered = 180;
let messager;

if (ordered > totall) {
  messager = 'На складе недостаточно твоаров!';
} else {
  messager = 'Заказ оформлен, с вами свяжется менеджер';
}
console.log(messager);
/*Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

Если нажали Cancel, записать в message строку 'Отменено пользователем!'
В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
После всех проверок вывести в alert значение переменной message.*/
/*const ADMIN_PASSWORD = 'jqueryismyjam';
let mesage;

if (prompt('введите пароль') === ADMIN_PASSWORD) {
  mesage = 'Добро пожаловать!';
} else if (prompt('введите пароль') === null) {
  mesage = 'Отменено пользователем!';
} else {
  mesage = 'Доступ запрещен, неверный пароль!';
}
console.log(alert(mesage));*/
/*Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, 
в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', 
при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.*/
/*
let input = +prompt('ВВеди число');
input = Number(input);

let totalInput = 0;

if (input) {
  totalInput += input;
  input = +prompt('ВВеди число');
}
alert('Общая сумма чисел равна [' + totalInput + ']');*/
/*let totalll = 0;
let input = +prompt('Введи число');

if (input !== Number(input)) {
  alert('Было введено не число, попробуйте еще раз');
  input = +prompt('Введи число');
}

while (input) {
  totalll += input;
  input = +prompt('Введи число');
}

alert(`Общая сумма чисел равна ${totalll}`);*/

/*На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, 
которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

Напиши скрипт который:

Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
Проверяет сможет ли пользователь оплатить заказ:
если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.*/
/*let input = prompt();
const credits = 1000;
const pricePerDroid = 10;
let quantity = input;

let mesage;
let totalPrice = pricePerDroid * quantity;

if (prompt() === null) {
  mesage = 'Отменено пользователем!';
} else if (credits < pricePerDroid * quantity) {
  mesage = 'Недостаточно средств на счету!';
} else {
  mesage = `Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов`;
}
//console.log(mesage);
alert(mesage);*/

/*Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. 
Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов*/
/*let input = prompt().toLowerCase();
let country = input;

let priceCountry;
let messageCountry;

switch (country) {
  case `china`:
    priceCountry = 100;
    messageCountry = `Доставка в ${country} будет стоить ${priceCountry} кредитов`;
    break;

  case `chile`:
    priceCountry = 250;
    messageCountry = `Доставка в ${country} будет стоить ${priceCountry} кредитов`;
    break;

  case `australia`:
    priceCountry = 170;
    messageCountry = `Доставка в ${country} будет стоить ${priceCountry} кредитов`;
    break;

  case `indiay`:
    priceCountry = 80;
    messageCountry = `Доставка в ${country} будет стоить ${priceCountry} кредитов`;
    break;

  case `jamaica`:
    priceCountry = 120;
    messageCountry = `Доставка в ${country} будет стоить ${priceCountry} кредитов`;
    break;

  default:
    console.log('В вашей стране доставка не доступна');
}
console.log(alert(messageCountry));*/
/*Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль
 сообщение в формате [номер элемента] - [значение элемента].

Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 
'1 - Mango', а для индекса 2 выведет '3 - Ajax'.*/
let messagers;
const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    const num = Number(i) + 1;
    messagers = `${num}-${array[i]}`;
    console.log(messagers);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

/*Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) 
принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.*/

const calculateEngravingPrice = function (message, pricePerWord) {
  const string = message.split(' ');
  const prices = string.length * pricePerWord;
  return prices;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
/*Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
 (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.*/

const findLongestWord = function (string) {
  let arrString = string.split(' ');
  let wordLength = 0;
  let longestWord;
  console.log(string);
  for (let i = 0; i < arrString.length; i += 1) {
    wordLength = arrString[1].length;
    if (arrString[i].length > wordLength) {
      longestWord = arrString[i];
      return longestWord;
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

// const findLongestWord = function (str) {
//   let arrStr = str.split(' ');
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];

//       return longestWord;
//     }
//   }
// };
/*Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...',
после чего возвращает укороченную версию.*/
const formatString = function (string, length) {
  const substring = string.slice(0, length);

  if (string.length > length) {
    return substring + '...';
  }
  return substring;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.', 40));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 40));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.', 40));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.', 40));
// вернется форматированная строка

/*
const formatString = function (string) {
  const substring = string.slice(0, 40);

  if (string.length > length) {
    return substring + '...';
  }
  return substring;
};


  Вызовы функции для проверки работоспособности твоей реализации:
 
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка*/
/*Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale.
 Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. 
 Слова в строке могут быть в произвольном регистре.*/

const checkForSpam = function (message) {
  const normalizedmessage = message.toLowerCase();
  const blacklistedWord1 = 'spam';
  const blacklistedWord2 = 'sale';

  if (normalizedmessage.includes(blacklistedWord1)) {
    return true;
  }
  if (normalizedmessage.includes(blacklistedWord2)) {
    return true;
  }
  return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
/*let totalll = 0;
let input = +prompt('Введи число');

if (input !== Number(input)) {
  alert('Было введено не число, попробуйте еще раз');
  input = +prompt('Введи число');
}

while (input) {
  totalll += input;
  input = +prompt('Введи число');
}

alert(`Общая сумма чисел равна ${totalll}`);*/
/*Напиши скрипт со следующим функционалом:

При загрузке страницы пользователю предлагается в prompt ввести число. 
Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
 пока пользователь не нажмет Cancel в prompt.
После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, 
необходимо посчитать сумму всех элементов массива и записать ее в переменную total. 
Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно.
 Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
  при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.*/

/*let input = prompt('Введи число');
input = Number(input);
const numbers = [];
numbers.push(input);
let tottal = 0;

/*if (input) {
  input = +prompt('Введи число');
}
for (let number of numbers) {
  tottal += number;
  input = prompt('ВВеди число');
}

if (input !== Number(input)) {
  alert('Было введено не число, попробуйте еще раз');
  input = +prompt('ВВеди число');
}

console.log(`Общая сумма равна: ${tottal}`);*/

/*function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt('Введите число', 0);

    // Прекращаем ввод?
    if (value === '' || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());*/

/*let totalll = 0;
let input = +prompt('Введи число');

if (input !== Number(input)) {
  alert('Было введено не число, попробуйте еще раз');
  input = +prompt('Введи число');
}

while (input) {
  totalll += input;
  input = +prompt('Введи число');
}

alert(`Общая сумма чисел равна ${totalll}`);*/

let numbers = [];

while (true) {
  let input = prompt('Введите число', 0);

  // Прекращаем ввод?
  if (input === '' || input === null || !isFinite(input)) break;

  numbers.push(+input);
}

let sum = 0;
for (let number of numbers) {
  sum += number;
}
console.log(`Общая сумма равна: ${sum}`);
