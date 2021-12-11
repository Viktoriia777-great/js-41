console.log('to NUMBER');

// -----TO NUMBER---
// любое строчное значение к числу

let testString = 'Bla Bla Bla';
console.log(testString);
console.log(typeof testString);

// 1-й способ КОНСТРУКТОР Number()
let toNumber = Number(testString);
console.log(`${testString}, приведение строки к числу через конструктор Number():`, toNumber);
console.log(`тип данных ${testString}, через конструктор Number():`, typeof toNumber);

// 2-й способ УНАРНЫЙ +
toNumber = +testString;
console.log(`${testString}, приведение строки к числу через унарный + :`, toNumber);
console.log(`тип данных ${testString}, через унарный +`, typeof toNumber);

// строчное число к числу
testString = '123';
console.log(testString);
console.log(typeof testString);

toNumber = Number(testString);
console.log(
  `${testString}, приведение строчного числа к числу через конструктор Number():`,
  toNumber,
);
console.log(`тип данных ${testString}, через конструктор Number():`, typeof toNumber);

toNumber = +testString;
console.log(`${testString}, приведение строчного числа к числу через унарный + :`, toNumber);
console.log(`тип данных ${testString}, через унарный +`, typeof toNumber);

// ПУСТАЯ СТРОКА
testString = '';
console.log(testString);
console.log(typeof testString);

toNumber = Number(testString);
console.log(
  `ПУСТАЯ СТРОКА${testString}, приведение строки к числу через конструктор Number():`,
  toNumber,
);
console.log(`тип данных ПУСТОЙ СТРОКИ ${testString}, через конструктор Number():`, typeof toNumber);

toNumber = +testString;
console.log(`ПУСТАЯ СТРОКА ${testString}, приведение строки к числу через унарный + :`, toNumber);
console.log(`тип данных ПУСТОЙ СТРОКИ ${testString}, через унарный +`, typeof toNumber);

// СТРОКА С ПРОБЕЛОМ
testString = '  ';
console.log(testString);
console.log(typeof testString);

toNumber = Number(testString);
console.log(
  `СТРОКА С ПРОБЕЛОМ ${testString}, приведение строки к числу через конструктор Number():`,
  toNumber,
);
console.log(
  `тип данных СТРОКИ С ПРОБЕЛОМ ${testString}, через конструктор Number():`,
  typeof toNumber,
);

toNumber = +testString;
console.log(
  `СТРОКА С ПРОБЕЛОМ ${testString}, приведение строки к числу через унарный + :`,
  toNumber,
);
console.log(`тип данных СТРОКИ С ПРОБЕЛОМ ${testString}, через унарный +`, typeof toNumber);

// BOOLEAN к числу
testString = true;
console.log(testString);
console.log(typeof testString);

toNumber = Number(testString);
console.log(`${testString}, приведение BOOLEAN к числу через конструктор Number():`, toNumber);
console.log(`тип данных ${testString}, через конструктор Number():`, typeof toNumber);

toNumber = +testString;
console.log(`${testString}, приведение BOOLEAN к числу через унарный +:`, toNumber);
console.log(`тип данных ${testString}, через унарный +:`, typeof toNumber);

testString = false;
console.log(testString);
console.log(typeof testString);

toNumber = Number(testString);
console.log(`${testString}, приведение BOOLEAN к числу через конструктор Number():`, toNumber);
console.log(`тип данных ${testString}, через конструктор Number():`, typeof toNumber);

toNumber = +testString;
console.log(`${testString}, приведение BOOLEAN к числу через унарный +:`, toNumber);
console.log(`тип данных ${testString}, через унарный +:`, typeof toNumber);

//  значение NaN - Number

// undefined
testString = undefined;
console.log(testString);
console.log(typeof testString);

toNumber = Number(testString);
console.log(`${testString}, приведение UNDEFINED к числу через конструктор Number():`, toNumber);
console.log(`тип данных ${testString}, через конструктор Number():`, typeof toNumber);

toNumber = +testString;
console.log(`${testString}, приведение UNDEFINED к числу через унарный +:`, toNumber);
console.log(`тип данных ${testString}, через унарный +:`, typeof toNumber);

// infinity тип Number

// ЧИСЛО С БУКВАМИ И СИМВОЛАМИ
testString = '35px';
console.log(testString);
console.log(typeof testString);

toNumber = Number(testString);
console.log(
  `${testString}, приведение строчного числа к числу через конструктор Number():`,
  toNumber,
);
console.log(`тип данных ${testString}, через конструктор Number():`, typeof toNumber);

toNumber = +testString;
console.log(`${testString}, приведение строчного числа к числу через унарный + :`, toNumber);
console.log(`тип данных ${testString}, через унарный +`, typeof toNumber);

//NULL
testString = null;
console.log(testString);
console.log(typeof testString);

toNumber = Number(testString);
console.log(`${testString}, приведение NULL числу через конструктор Number():`, toNumber);
console.log(`тип данных ${testString}, через конструктор Number():`, typeof toNumber);

toNumber = +testString;
console.log(`${testString}, приведение NULL к числу через унарный + :`, toNumber);
console.log(`тип данных ${testString}, через унарный +`, typeof toNumber);
