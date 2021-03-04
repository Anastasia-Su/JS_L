"use strict";
//Function declaration
// function firstMessage () {
//     console.log('Hello World!');
// }
// firstMessage();

// function firstMessage (text) {
//     console.log(text);
// }
// firstMessage('Hello!');

// let num = 20;
// function firstMessage (text) {
//     console.log(text);
//     num = 10;
// }
// firstMessage('Hello!');
// console.log(num);


// function calc(a, b) {
//     return a + b;
// }
// console.log(calc(1, 8));
// console.log(calc(2, 3));
// console.log(calc(4, 7));

// //Function expression
// const a = function() {
//     console.log('Hello World!');
// };
// a();

// //Arrow function
// const calc = (a, b) => {
//     return a + b;
// };
// console.log(calc(1, 3));

// //Properties and methods

// const str = 'test1';
// console.log(str.length);

// const str = 'test1';
// console.log(str[3]);

// const str = 'test1';
// console.log(str.toUpperCase());

// const str1 = 'some fruit';
// console.log(str1.indexOf('rui'));

// const str1 = 'some fruit';
// console.log(str1.slice(6, 8));

// const str1 = 'some fruit';
// console.log(str1.slice(5, 10));

// const str1 = 'some fruit';
// console.log(str1.substr(5, 5));

// const test = '12.2px';
// console.log(parseInt(test));

// const test = '12.2px';
// console.log(parseFloat(test));

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres
// const obj = {
//     1: 'cat',
//     2: 'dog'
// };
// function showMyDb(privat) {
//     if (privat == 'false') {
//         console.log(showMyDb(privat)); 
//     }
// }
// privat = 'false';
// showMyDb(privat);

// const genres = [];
// for (let i = 1; i < 3; i++) {
//     let num = 1;
//     prompt("Ваш любимый жанр под номером " + num);
//     num++;
// }


// num = 1;
// genres[0] = prompt("Ваш любимый жанр под номером " + num);

// function writeYourGenres() {
// let a = prompt("Ваш любимый жанр под номером $number");
// }
// let a = prompt("Ваш любимый жанр под номером $number");
// let b = number
// console.log(a);

//ARRAYS

// let arr = [1, 15, 3, 44, 5];
// // arr.pop();
// arr.push(7);
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log (arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} is in ${arr}`);
// });

// const str = prompt('', '');
// const prod = str.split(', ');
// prod.sort();
// console.log(prod.join('; '));

//OBJECTS CLONE

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
//  const numbers = {
//     a: 2,
//     b: 1,
//     c: {
//         x: 99,
//         y: 78
//     }
//  };

//  const newNumbers = copy(numbers);
//  newNumbers.a = 10;
//  console.log(newNumbers);
//  console.log(numbers);

//  const add = {
//     d: 17,
//     e: 20
//  };

//  console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'gvl';
// console.log(oldArray);
// console.log(newArray);

//SPREAD
// const video = ['vimeo', 'youtube', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [1, 4, 8];
// log(...num);

// const array = ['a', 'y'];
// const newArray = [...array];
// console.log(newArray);

// const q = {
//     a: 1,
//     b: 2
// };
// const clone = {...q};
// console.log(clone);

//PROTOTYPES
// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armour: 100
// };

// const john = Object.create(soldier);
// const john = {
//     health: 50
// };

// john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);
// console.log(john.armour);

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/