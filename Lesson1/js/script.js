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


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');




// // (personalMovieDB.count < 10) ? console.log("Просмотрено довольно мало фильмов") : (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? console.log("Вы классический зритель") : (personalMovieDB.count >= 30) ? console.log("Вы киноман") : console.log("Произошла ошибка");

// switch (true) {
//     case personalMovieDB.count < 10: console.log("Просмотрено довольно мало фильмов");
//     break;
//     case personalMovieDB.count >= 10 && personalMovieDB.count < 30: console.log("Вы классический зритель");
//     break;
//     case personalMovieDB.count >= 30: console.log("Вы киноман");
//     break;
//     default: console.log("Произошла ошибка");
// }
// console.log('You watched: ' + personalMovieDB.count);
// let numberOfFilms;
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function writeYourGenres() {
//     let nn = 0;
//     for (let i = 1; i < 4; i++) {
//         let x = prompt("Ваш любимый жанр под номером " + i, '');
//         personalMovieDB.genres[nn] = x;
//         nn++;
//     }
//     console.log(personalMovieDB);
// }
// writeYourGenres();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('Is private!');
//     }
// }
// showMyDB();


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// rememberMyFilms();

// function detectLevel() {
//     if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
// }
// detectLevel();        
    
//REFACTORING



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    start: function() {
        personalMovieDB.start = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.start == '' || personalMovieDB.start == null || isNaN(personalMovieDB.start)) {
            personalMovieDB.start = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectLevel: function() {
        if (personalMovieDB.count < 10) {
                console.log("Просмотрено довольно мало фильмов");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log("Вы классический зритель");
            } else if (personalMovieDB.count >= 30) {
                console.log("Вы киноман");
            } else {
                console.log("Произошла ошибка");
            }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        // let nn = 0;
        for (let i = 1; i < 2; i++) {
            // let genre = prompt("Ваш любимый жанр под номером " + i, '');
            // if (genre == '' || genre == null) {
            //     console.log('Wrong data!');
            //     i--;
            // } else {
            //     personalMovieDB.genres[nn] = genre;
            //     nn++;
            // }
            let genres = prompt(`Введите свои любимые жанры через запятую`).toLowerCase();
            if (genres == '' || genres == null) {
                    console.log('Wrong data!');
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
                }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre ${i + 1} is ${item}`);  
      });
        console.log(personalMovieDB);
    },
    toggleVisibleDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    privat: false      
};





