console.log('to NUMBER');

// -----TO NUMBER---
// любое строчное значение к числу

let testString = 'Bla Bla Bla';
console.log(testString);
console.log(typeof testString);

// КОНСТРУКТОР Number()
let toNumber = Number(testString);
console.log(`${testString}, приведение строки к числу через конструктор Number():`, toNumber);
console.log(`тип данных ${testString}, через конструктор Number():`, typeof toNumber);
