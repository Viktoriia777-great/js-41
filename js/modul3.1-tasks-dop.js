console.log('Задачи с ОБЪЕКТАМИ');
// min, max, total, Math.min, Math.max
const salaries = {
  John: 100,
  Marta: 250,
  peter: 180,
  Ann: 550,
};

const valuess = Object.values(salaries);
console.log(valuess);

let minSalaries = valuess[0];
let maxSalaries = valuess[0];
let totall = 0;

for (const value of valuess) {
  if (value < minSalaries) {
    minSalaries = value;
  }
  if (value > maxSalaries) {
    maxSalaries = value;
  }
  totall += value;
}
console.log('min:', minSalaries);

console.log('max:', maxSalaries);

console.log('total:', totall);

console.log('Math.min:', Math.min(...valuess));
console.log('Math.max:', Math.max(...valuess));
