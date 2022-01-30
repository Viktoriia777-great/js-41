console.log('операция spred, дестркктуризация и операция  rest');
/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {},
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());
/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */
/*const a = { x: 1, y: 2, d: 5, t: 35 };
const b = { x: 0, z: 3, a: 33, t: 8, d: 12 };

const t = Object.assign({ name: 'Mango' }, a, b);
console.log(t);

const c = {
  z: 56,
  ...a,
  t: 32,
  d: 14,
  ...b,
  x: 39,
};

console.log(c);*/
/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};
const { rating, tracks, name, trackCount: numberOfTracks, author = 'user' } = playlist;

tracks.push('qwerty');
console.log(tracks);
console.log(numberOfTracks);
console.log(rating);
console.log(author);

/*
 * Глубокая деструктуризация
 */

const profile = {
  names: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  avatar,
  names,
  tag,
  location,
  stats: { followers, views, likes },
} = profile;

console.log(names, tag, location, avatar, followers, views, likes);
