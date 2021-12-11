console.log('toString');

// ===TO STRING===(приведение к строке)

// Число к строке
let value = 22;
console.log(value);
console.log(typeof value);

// 1-й способ
let toString = String(value);
console.log(`${value}, приведение числа к строке через конструктор String():`, toString);
console.log(
  `тип данных ${value}, приведение числа к строке через конструктор String():`,
  typeof toString,
);
// 2-й способ КОНКАТЕНАЦИЯ
toString = value + '';
console.log(`${value}, приведение числа к строке через КОКАТЕНАЦИЮ СТРОК:`, toString);
console.log(
  `тип данных ${value}, приведение числа к строке через КОКАТЕНАЦИЮ СТРОК:`,
  typeof toString,
);
//ЗНАЧЕНИЕ БЕСКОНЕЧНОСТИ к строке
value = Infinity;
console.log(value);
console.log(typeof value);

toString = String(value);
console.log(`${value}, числа к строке через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + '';
console.log(`${value}, приведение к строке через КОНКАТЕНАЦИЮ СТРОК:`, toString);
console.log(`тип данных ${value}, КОНКАТЕНАЦИЮ СТРОК:`, typeof toString);

// не число  NaN к строке
value = NaN;
console.log(value);
console.log(typeof value);

toString = String(value);
console.log(`${value}, NaN  к строке через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + '';
console.log(`${value}, приведение к строке через КОНКАТЕНАЦИЮ СТРОК:`, toString);
console.log(`тип данных ${value} через КОНКАТЕНАЦИЮ СТРОК:`, typeof toString);

// Boolean to STRING
value = true;
console.log(value);
console.log(typeof value);

toString = String(value);
console.log(`${value}, Nan  к строке через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + '';
console.log(`${value}, приведение к строке через КОНКАТЕНАЦИЮ СТРОК:`, toString);
console.log(`тип данных ${value} через КОНКАТЕНАЦИЮ СТРОК:`, typeof toString);

// undefined к строке
value = undefined;
console.log(value);
console.log(typeof value);

toString = String(value);
console.log(`${value}, undefined к строке через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + '';
console.log(`${value}, приведение к строке через КОНКАТЕНАЦИЮ СТРОК:`, toString);
console.log(`тип данных ${value} через КОНКАТЕНАЦИЮ СТРОК:`, typeof toString);
