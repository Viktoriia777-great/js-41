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

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}
