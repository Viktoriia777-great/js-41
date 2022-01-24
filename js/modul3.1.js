console.log('ОБЪЕКТЫ');
/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);

// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */

/*const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

playlist.qwe = 5;

playlist.rating = 10;

console.log(playlist);
console.log(playlist.tracks);
console.log(playlist.name);
console.log(playlist.trackCount);

const propertyName = 'tracks';

console.log(playlist.rating);
console.log(playlist['rating']);

console.log(playlist.propertyName);
console.log(playlist[propertyName]);*/

/*
 * Короткая запись свойств
 */
const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
  username,
  email,
};

console.log(signupData);

/*
 * Вычисляемые свойства
 */

//  <input name="color" value="tomato" >

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

console.log(colorPickerData);

/*
 * Ссылочный тип {} === {}
 */

// console.log({ a: 1 } === { a: 1 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.hello = 100;
// b.hello = 150;

// console.log(a);
// console.log(b);

/*
 * Массивы и функции это объекты
 */

const a = [1, 2, 3];

a.hello = ':)';

console.log(a);

const fn = function () {
  //console.log('hello');
};

fn.hello = ';)';

console.dir(fn.hello);
/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  changeName(newName) {
    console.log('this внутри changeName: ', this);

    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playlist.getTrackCount());

playlist.changeName('Новое имя');

playlist.addTrack('новый трек 1');
console.log(playlist.getTrackCount());

playlist.addTrack('новый трек 2');
console.log(playlist.getTrackCount());

playlist.updateRating(4);

console.log(playlist);
/*
 * Перебор через for...in и Object.keys|values|entries
 */
// Примери с конспекта
/*const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]
console.log(hotel);
console.log(keys);
console.log(values);
console.log(entries);*/
const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
const entries = Object.entries(hotel);

/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */

// Примеры с видео Репеты
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

const keys = Object.keys(feedback);

console.log(keys);

/*for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);

  totalFeedback += feedback[key];
}

console.log('totalFeedback: ', totalFeedback);*/

const values = Object.values(feedback);

console.log(values);

for (const value of values) {
  console.log(value);

  totalFeedback += value;
}

console.log('totalFeedback: ', totalFeedback);
/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];
/*
friends[0].newfriend = 777;
friends[1].newfriend = 111;
friends[2].newfriend = 222;
friends[3].newfriend = 333;

console.table(friends);
for (const friend of friends) {
  console.log(friend);
  friend.newprop = 555;
}*/
console.table(friends);
/*
 * Ищем друга по имени
 */
const findFriendByName = function (allFriends, friendName) {
  for (const friend of friends) {
    console.log(friend.name);
    if (friend.name === friendName) {
      return 'Нашли :)';
    }
  }
  return 'Нет такого имени :(';
};
console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));
/*
 * Получаем имена всех друзей
 */
const getAllName = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    console.log(friend.name);
    names.push(friend.name);
  }
  return names;
};

console.log(getAllName(friends));
/*
 * Получаем имена только друзей которые онлайн
 */
const getOnLineFriends = function (allFriends) {
  const onLineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onLineFriends.push(friend);
    }
  }
  return onLineFriends;
};

console.log(getOnLineFriends(friends));
/*
 * Получаем имена только друзей которые оffлайн
 */
const getOffLineFriends = function (allFriends) {
  const offLineFriends = [];

  for (const friend of allFriends) {
    if (!friend.online) {
      offLineFriends.push(friend);
    }
  }

  return offLineFriends;
};
console.log(getOffLineFriends(friends));
// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй
const getFriendByOnLineStatus = function (allFriends) {
  const friendByStatus = {
    online: [],
    offline: [],
  };
  for (const friend of allFriends) {
    if (friend.online) {
      friendByStatus.online.push(friend);
      continue;
    }
    friendByStatus.offline.push(friend);
  }

  return friendByStatus;
};
console.log(getFriendByOnLineStatus(friends));
