console.log('Массивы');
// Пустой массив
const arr = [];

// Массив clients с тремя элементами
const clients = ['Mango', 'Poly', 'Ajax'];

console.log(clients); // ["Mango", "Poly", "Ajax"]

// Указывая в скобках индекс элемента мы получаем его значение
console.log(clients[0]); //Mango
console.log(clients[1]); // Poly
console.log(clients[2]); //Ajax

//Значение элемента можно заменить
clients[0] = 'Kiwi';
console.log(clients[0]); //Kiwi

//Или добавить
clients[3] = 'Alex';
console.log(clients); //["Kiwi", "Poly", "Ajax", "Alex"]

//Длина массива

const clientss = ['Mango', 'Poly', 'Alex'];

//length вернет текущую длину массива
console.log(clientss.length); //3

clientss.length = 5;
console.log(clientss.length); //5
console.log(clientss); //["Mango", "Poly", "Ajax", empty × 2]

clientss.length = 2;
console.log(clientss); // ["Mango", "Poly"]

//Итерация по массиву
//Переберем массив клиентов и выведем их имена.
for (let i = 0; i < clients.length; i += 1) {
  console.log('Logging clients: ', clients[i]);
  //Logging clients:  Mango
  // Logging clients:  Poly
  //Logging clients:  Ajax
  //Logging clients:  Alex
}

//С помощью цикла массив можно заполнить данными
const numbers = [];

for (let i = 0; i < 3; i += 1) {
  numbers.push(`label-${i}`);
}

console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']

//Цикл for...of
// Итерация по массиву
const clientsss = ['Mango', 'Ajax', 'Poly'];

for (const client of clientsss) {
  console.log(client);
}

// Итерация по строке
const string = 'javascript';

for (const character of string) {
  console.log(character);
}

//Инструкции break и continue
//Будем искать имя клиента в массиве имен, если нашли - прервем цикл,
//так как нет смысла искать дальше, имена у нас уникальные.
const clientssss = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Poly';
let message;

for (const client of clientssss) {
  /*
   * На каждой итерации мы будем проверять совпадает ли элемент массива с
   * именем клиента. Если совпадает то мы записываем в message сообщение
   * об успехе и делаем break чтобы не искать дальше
   */

  if (client === clientNameToFind) {
    message = 'Клиент с таким именем есть в базе данных!';
    break;
  }

  // Если они не совпадают то запишем в resultMsg сообщение об отсутствии имени
  message = 'Клиента с таким именем нету в базе данных!';
}

console.log(message); // Клиент с таким именем есть в базе данных!

/* Можно изначально задать message значение неудачи поиска, а в цикле перезаписать его на успех, если нашли имя. 
Но break все равно пригодится, так как если у нас массив из 10000 клиентов,
 а нужный нам стоит на позиции 2, то нет абсолютно никакого смысла 
 перебирать оставшиеся 9998 элементов. */
const clientNameToFindd = 'Poly';
let messagee = 'Клиента с таким именем нету в базе данных!';

for (const client of clientssss) {
  if (client === clientNameToFindd) {
    messagee = 'Клиент с таким именем есть в базе данных!';
    break;
  }

  // Если не совпадает, то на этой итерации ничего не делаем
}

console.log(messagee); // Клиент с таким именем есть в базе данных!

//Используем цикл для вывода только чисел больше определенного значения.
/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
const numberss = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numberss.length; i += 1) {
  if (numberss[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numberss[i]}`); // 18, 29, 34
}
//Многомерные массивы
//Массивы могут содержать другие массивы как элементы. Это можно использовать для создания матриц.
const matrixx = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrixx[0][0]); // 1
console.log(matrixx[1][2]); // 6
console.log(matrixx[2][2]); // 9

//Для того, чтобы перебрать такой массив, используются вложенные циклы.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
  console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

  for (let j = 0; j < matrix[i].length; j += 1) {
    console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
    total += matrix[i][j];
  }
}

console.log(total); // 45

//Методы split() и join()
/*split(s) — позволяет превратить строку в массив, разбив ее по разделителю s. 
Это не метод массива, но рассматриваем мы его сейчас, так как раньше мы о массивах не знали.

join(s) — делает в точности противоположное split.
 Он берет массив и склеивает его в строку, используя s как разделитель. */
// split
const messageee = 'Welcome to Bahamas!';

// Разбивает строку по разделителю, в данном случае это пробел
console.log(messageee.split(' '));
// ["Welcome", "to", "Bahamas!"]

// Вызов split с пустой строкой разобьёт по буквам
console.log(messageee.split('')); // [много букв :)]

// join
const cliients = ['Mango', 'Poly', 'Ajax'];

// Сошьет все элементы массива в строку,
// между каждой парой элементов будет указанный разделитель
console.log(cliients.join(' ')); // "Mango Poly Ajax"
console.log(cliients.join(',')); // "Mango,Poly,Ajax"
console.log(cliients.join('-')); // "Mango-Poly-Ajax"
