const totalMinutes = 567;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
