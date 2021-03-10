/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const ad = document.querySelectorAll('.promo__adv img'),
          bg = document.querySelector('.promo__bg'),
          gen = bg.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          listItems = document.querySelectorAll('.promo__interactive-item');
        //   deleteItem = document.querySelectorAll('.delete');
    
    
        
    
    
    
    
    // MY VARIANT
    /*
    const sortMov = movieDB.movies.sort();
    let i = 0;
    while (i < 5) {
        listItems.forEach(item => {
            item.textContent = sortMov[i];
            item.insertAdjacentHTML('afterbegin', `${i + 1}.&nbsp;`);
            i++;
        });
    }
    */
    
    // list.innerHTML = '';
    // movieDB.movies.forEach((item, i) => {
    //     list.innerHTML += `
    //         <li class="promo__interactive-item">${i + 1}.&nbsp;${item}
    //         <div class="delete"></div></li>
    //     `;
    // });
    
    const myForm = document.querySelector('form.add'),
          myInput = myForm.querySelector('.adding__input'),
          checkbox = myForm.querySelector('[type="checkbox"]'),
          btn = document.querySelector('button');
        //   console.log(myInput.value);
    
          myForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let newFilm = myInput.value;
            const favorite = checkbox.checked;
            if (newFilm) {
                if (newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`;
                }
                if (favorite) {
                    console.log('Добавляем любимый фильм');
                }

                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);
                createMovieList(movieDB.movies, movieList);
            }
            
            event.target.reset();
          });

          const createMovieList = (films, parent) => {
            parent.innerHTML = '';
            sortArr(films);
            films.forEach((item, i) => {
                parent.innerHTML += `
                    <li class="promo__interactive-item">${i + 1}.&nbsp;${item}
                    <div class="delete"></div></li>
                `;
            });
            document.querySelectorAll('.delete').forEach((item, i) => {
                item.addEventListener('click', () => {
                    item.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    createMovieList(films, parent);
                });
            });
          };
          const deleteAd = (arr) => {
            arr.forEach(item => {
                item.remove();
            });
          };
          const makeChanges = () => {
            gen.textContent = 'драма';
            bg.style.backgroundImage = 'url("img/bg.jpg")';
          };
          const sortArr = (arr) => {
            arr.sort();
          };
          
    createMovieList(movieDB.movies, movieList);
    deleteAd(ad);
    makeChanges();
    // sortArr(movieDB.movies);

});


