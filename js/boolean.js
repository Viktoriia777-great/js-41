console.log('boolean');
// приведение к boolean строки

let value = 'Bla Bla Bla';
console.log(value);
console.log(typeof value);

let toBoolean = Boolean(value);
console.log(`${value}, приведение строки к BOOLEAN, через конструктор Boolean():`, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean);

toBoolean = !!value;
console.log(`${value}, приведение строки к BOOLEAN, через !!:`, toBoolean);
console.log(`тип данных ${value}, через !!:`, typeof toBoolean);

// строчное число
value = '123';
console.log(value);
console.log(typeof value);

toBoolean = Boolean(value);
console.log(`${value}, приведение строки к BOOLEAN, через конструктор Boolean():`, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean():`, typeof toBoolean);

toBoolean = !!value;
console.log(`${value}, приведение строки к BOOLEAN, через !!:`, toBoolean);
console.log(`тип данных ${value}, через !!:`, typeof toBoolean);

// пустая строка
value = '';
console.log(value);
console.log(typeof value);

toBoolean = Boolean(value);
console.log(
  `ПУСТАЯ СТРОКА ${value}, приведение строки к BOOLEAN, через конструктор Boolean():`,
  toBoolean,
);
console.log(`тип данных ПУСТАЯ СТРОКА ${value}, через конструктор Boolean():`, typeof toBoolean);

toBoolean = !!value;
console.log(`ПУСТАЯ СТРОКА ${value}, приведение строки к BOOLEAN, через !!:`, toBoolean);
console.log(`тип данных ПУСТАЯ СТРОКА ${value}, через !!:`, typeof toBoolean);

// строка с пробелом
value = ' ';
console.log(value);
console.log(typeof value);

toBoolean = Boolean(value);
console.log(
  `СТРОКА С ПРОБЕЛОМ ${value}, приведение строки к BOOLEAN, через конструктор Boolean():`,
  toBoolean,
);
console.log(
  `тип данных СТРОКА С ПРОБЕЛОМ ${value}, через конструктор Boolean():`,
  typeof toBoolean,
);

toBoolean = !!value;
console.log(`СТРОКА С ПРОБЕЛОМ ${value}, приведение строки к BOOLEAN, через !!:`, toBoolean);
console.log(`тип данных СТРОКА С ПРОБЕЛОМ ${value}, через !!:`, typeof toBoolean);

// К false  приводятся:
//6 ложных (falsy) значений, приводящихся к false в логическом преобразовании:
//0, NaN, null, undefined, пустая строка и false.
//Абсолютно все остальное приводится к true.
