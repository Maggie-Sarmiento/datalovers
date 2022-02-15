// import data from './data/gibli/ghibli.js';

import studio from './data/ghibli/ghibli.js';
import Films from './data.js';
import { showMorePopular,  showYearN, showSortAZ } from './order.js';
import People from './people.js';

const filmsDom = document.getElementById("container_cards")
const infoFilms = document.getElementById("container_info")
const peopleFilms = document.getElementById("container_people")
let filmsObj = studio.films;


// Función que recibe una instancia de clase de las peliculas y las pinta
function showFilms(film) {
    let id = film.getId()
    const hijo = document.createElement("div")
    hijo.classList.add("card")
    hijo.innerHTML = `
    <div class="card_img" id="${film.getId()}">
        <img src="${film.getPoster()}" alt="${film.getTitle()}"/>
    </div>
    <div class="card__data">
        <h3 class = "card_title">${film.getTitle()}</h3>
    </div>
    `
    filmsDom.appendChild(hijo)
    document.getElementById(id).addEventListener('click', function(){selectFilm(id)})
}


for (const films of filmsObj){
    const film = new Films({id: films.id, poster: films.poster, title: films.title, release_date: films.release_date, score: films.rt_score})
    showFilms(film)
}


// Funcion que busca la pelicula selecionada
function selectFilm(id) {
    let filmselected = {}
    let peopleFilm = {}
    const keysFilms = Object.keys(filmsObj);
    for (let i = 0; i < keysFilms.length; i++) {
        let positionFilm = keysFilms[i];
        let filmkey = filmsObj[positionFilm];
        if (filmkey.id === id) {
            filmselected = filmkey
            peopleFilm = filmkey.people
        }
    }
    const filmInfo = new Films(
        {
            id: filmselected.id, 
            poster: filmselected.poster, 
            title: filmselected.title,
            description: filmselected.description,
            director: filmselected.director,
            producer: filmselected.producer,
            release_date: filmselected.release_date,
        }
    )
    showInfoFilm(filmInfo)

    for (const personFilm of peopleFilm){
        const peorsonFilmS = new People({name: personFilm.name, img: personFilm.img, gender: personFilm.gender, age: personFilm.age, specie: personFilm.specie})
        showPeople(peorsonFilmS)
    }
}


// Función que recibe una instancia de clase de la información de las peliculas y la pinta.
function showInfoFilm(filmInfo){
    document.getElementById("container_cards").innerHTML = ""
    const hijo = document.createElement("div")
    hijo.classList.add("info-card")
    hijo.innerHTML = ` 
    <div class= "info_container_card">
        <div class="info_card_img"> 
            <img src="${filmInfo.poster}" alt="${filmInfo.title}" />
        </div>
        <div class="info_card__data">
            <h3 class = "info_card_title">${filmInfo.title}</h3>
            <p>${filmInfo.description}</p>
            <h4>${filmInfo.producer}</h4>
            <h5>${filmInfo.release_date}</h5>
        </div>
        <div class = "returnButton">
            <img class="retbut" id="back" src="/img/54623azul.png" alt="Regresa a Inicio" />
        </div>
    </div>
    `
    infoFilms.appendChild(hijo)
    document.getElementById('back').addEventListener('click', function(){location.reload()})
}


// Función que recibe una instancia de clase de la información de las personajes y la pinta.
function showPeople(people) {
    const hijo = document.createElement("div")
    hijo.classList.add("people")
    hijo.innerHTML = `
    <div class="people_img">
        <img src="${people.getImg()}" alt="${people.getName()}"/>
    </div>
    <div class="card__data">
        <h3 class = "card_title">${people.getName()}</h3>
        <h4 class = "card_title">Gender: ${people.getGender()}</h3>
        <h4 class = "card_title">Age: ${people.getAge()}</h3>
        <h4 class = "card_title">${people.getSpecie()}</h3>
    </div>
    `
    peopleFilms.appendChild(hijo)
}

const buttonSort = document.getElementById('button_sort')
const selectSort = document.querySelector('.select_sort')
buttonSort.addEventListener('click', function(){
    selectSort.style.display = 'block'
})


// ---------  Seccion de ordenamiento  -----------
// ordenar por popularidad
document.getElementById('more_popular').addEventListener('click', function(){
    document.getElementById("container_cards").innerHTML = ""
    showMorePopular()
})

// Ordenar por los más recientes
document.getElementById('news').addEventListener('click', function(){
    document.getElementById("container_cards").innerHTML = ""
    showYearN('news')
})
// Ordenar por los más antiguos 
document.getElementById('olds').addEventListener('click', function(){
    document.getElementById("container_cards").innerHTML = ""
    showYearN('olds')
})

// Ordenar alfabeticamente A-Z
document.getElementById('sortaz').addEventListener('click', function(){
    document.getElementById("container_cards").innerHTML = ""
    showSortAZ('sortaz')
})
// Ordenar alfabeticamente Z-A
document.getElementById('sortza').addEventListener('click', function(){
    document.getElementById("container_cards").innerHTML = ""
    showSortAZ('sortza')
})


export {showFilms}
export { filmsObj }