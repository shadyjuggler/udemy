/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)



2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const hujna = document.querySelector(".promo__adv"),
      genre = document.querySelector(".promo__genre"),
      bg = document.querySelector(".promo__bg"),
      list = document.querySelector(".promo__interactive-list"),
      addMenu = document.querySelector(".add"),
      btn = addMenu.querySelector("#btn"),
      input = addMenu.querySelector(".adding__input"),
      checkBox = addMenu.querySelector("[type='checkbox']");

//  1

hujna.remove();

//2 

genre.textContent = "Драма";

//3

console.log(bg);
bg.style.cssText = "background: url('../img/bg.jpg') center no-repeat; background-position: top;";

// 4

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// najs traj koroche

// for (let i = 0; i < movieDB.movies.length; i++) {

//     let li = document.createElement("li"),
//         deleteBtn = document.createElement("div");

//     li.classList.add("promo__interactive-item");
//     deleteBtn.classList.add("delete");

//     li.innerHTML = movieDB.movies[i];

//     li.append(deleteBtn);

//     list.append(li);
// } 


// vtoraja chastj

const sortArr = (arr) => {
    arr.sort();
}


btn.addEventListener("click", (e) => {
    e.preventDefault();

    let movie = input.value.toUpperCase();

    if (movie) { // proverka na pustuju

        if (movie.length >= 21) 
        movie = movie.slice(0, 21) + "..."; 

        if (checkBox.checked) 
            console.log("Adding favourite movie.");

        movieDB.movies.push(movie);
        input.value = ""; // Ochistitj pole
        sortArr(movieDB.movies);

        addMoviesOnPage();
    }

});

function addMoviesOnPage () {
    list.innerHTML = "";
    movieDB.movies.forEach((e, i) => {
        list.innerHTML += `<li class="promo__interactive-item">${i + 1} ${e}
            <div class="delete"></div>
        </li>`;
    }); // realno lucshe


    const deleteBtns = list.querySelectorAll(".delete");
    removingMovieFromList(deleteBtns);
}

function removingMovieFromList (btns) {

    btns.forEach((item, i) => {
        item.addEventListener("click", (e) => {
            e.target.parentElement.remove();
            movieDB.movies.splice(i, 1);
            addMoviesOnPage (); 
        })
    })
}

sortArr(movieDB.movies);
addMoviesOnPage();
