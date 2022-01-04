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
