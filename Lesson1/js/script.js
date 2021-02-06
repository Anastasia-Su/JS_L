"use strict";
// const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);

// let arr = ['orange', 'apple', 1, {}];
// console.log(arr[1]);

// alert('vu,v.gvb');
// let conf = confirm('Are you here?');
// console.log(conf);

// const ans = prompt("How old are you?");
// console.log(ans + 5);

// const answers = [];
// answers[0] = prompt('What is your first name?');
// answers[1] = prompt('What is your last name?');
// answers[2] = prompt('How old are you?');
// console.log(typeof(answers));




// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const oneOfLastViewed = prompt('Один из последних просмотренных фильмов?', ''),
//       yourRate = prompt('На сколько оцените его?'),
//       oneOfLastViewed2 = prompt('Один из последних просмотренных фильмов?', ''),
//       yourRate2 = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[oneOfLastViewed] = yourRate;
// personalMovieDB.movies[oneOfLastViewed2] = yourRate2;
// console.log(personalMovieDB);


// if (num < 49) {
//     console.log('False');
// } else if (num > 100) {
//     console.log('False!');
// } else {
//     console.log('True!');
// }

// (num === 50) ? console.log('You are correct!') : console.log('You are wrong!');
// 

// NEXT LESSON

// let num = 55;
// while (num < 60) {
//     console.log(num);
//     num++;
// }

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);