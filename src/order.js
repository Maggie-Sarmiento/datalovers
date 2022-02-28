import Films from './data.js'
import People from './people.js'


// función que busca en el objeto las peliculas que coincidan con el string dada por el usuario
function searchWord(filmsObj, word){
    //const people = filmsObj["people"]
    console.log(filmsObj);
    const foundword = filmsObj.filter(function(film){
        let myReg = new RegExp(word, "i")
        let people = film.people
        console.log(film);
        let people_match = people.map(person => person.name.match(myReg) != null )
        console.log(people_match);
        if(film.title.match(myReg) != null || 
        film.description.match(myReg) != null || 
        film.director.match(myReg) != null ||
        film.producer.match(myReg) != null ||
        film.release_date.match(myReg) != null){
            return true
        } else if (people_match.includes(true)){
            return true
        } else {
            return false
        } 
    })
    console.log(foundword);
    return foundword
}


// función que rrecorre un array con las peliculas ordenadas del más popular al menos. 
function showMorePopular(filmsObj){
    const sortPopular = filmsObj.sort(function(f1, f2){
        return f2.rt_score - f1.rt_score
    })
    return sortPopular
}

// función que rrecorre un array con las peliculas ordenadas del la pelicula más reciente o la menos.
function showYearN(idElement, filmsObj){
    const sortYear = filmsObj.sort(function(f1, f2){
        if (f1.release_date < f2.release_date){
            return 1
        } else {
            return -1
        }
    })

    if (idElement === 'news'){
        return sortYear
    } else if (idElement === 'olds'){
        let sortYearO = sortYear.reverse()
        return sortYearO
    }
}

// función que rrecorre un array con las peliculas ordenadas alfabeticamente de la A-Z y la Z-A
function showSortAZ(idElement, filmsObj){
    const sortAZ = filmsObj.sort(function(f1, f2){
        if (f1.title > f2.title){
            return 1
        } else {
            return -1
        }
    })

    if (idElement === 'sortaz'){
        return sortAZ
    } else if (idElement === 'sortza'){
        let sortAZReverse = sortAZ.reverse()
        return sortAZReverse
    }
}

let producer_list = ""
let director_list = ""
function filterlist(filmsObj) {
    let producers = filmsObj.map((filmsObj) => filmsObj.producer);
    producer_list = Object.values(producers).reduce((list, prod) => {
        if (!list.includes(prod)) {
            list.push(prod);
        }
        return list;
    }, [])
    let directors = filmsObj.map((filmsObj) => filmsObj.director);

    director_list = Object.values(directors).reduce((list, dir) => {
        if (!list.includes(dir)) {
            list.push(dir);
        }
        return list;
    }, [])

}
  
  
function filterByProductor(filmsObj, dir_choice, prod_choice) {
    // document.getElementById("container_cards").innerHTML = ""
    let filteredList = [];
    for (let filmkey of filmsObj) {
        if ((dir_choice === filmkey.director && prod_choice === filmkey.producer) || (dir_choice === filmkey.director) || (prod_choice === filmkey.producer)) {
            let filmClass = new Films({
                id: filmkey.id,
                poster: filmkey.poster,
                title: filmkey.title,
                description: filmkey.description,
                director: filmkey.director,
                producer: filmkey.producer,
                release_date: filmkey.release_date,
            })
            filteredList.push(filmClass);
        }
    } 
    return filteredList
}

function getRandomInt(min, max) {
/*     console.log(min, max)
    console.log(Math.floor(Math.random() * (max - min))) */
    return (Math.floor(Math.random() * (max - min)) + min);
}

function quizMood(filmsObj, mood) {
    let arrayJung = [];
    let arrayAdult = [];
    let arrayElder = [];
    for (let keyfilm of filmsObj) {
        for (let characters of keyfilm.people) {
            if (characters.age < 29 || characters.age === "Child") {
                let jungCharacters = new People({
                    id: characters.id,
                    name: characters.name,
                    img: characters.img,
                    gender: characters.gender,
                    age: characters.age,
                    specie: characters.specie
                })
                let jungs = Object.entries(jungCharacters);
                arrayJung.push(jungs);

            } else if (characters.age > 29 && characters.age < 55 || characters.age === "Adult" || characters.age === "Unspecified/Adult" || characters.age === "NA") {
                let adultCharacters = new People({
                    id: characters.id,
                    name: characters.name,
                    img: characters.img,
                    gender: characters.gender,
                    age: characters.age,
                    specie: characters.specie
                })
                let adult = Object.entries(adultCharacters);
                arrayAdult.push(adult);

            } else if (characters.age > 56 || characters.age === "Elder") {
                let elderCharacters = new People({
                    id: characters.id,
                    name: characters.name,
                    img: characters.img,
                    gender: characters.gender,
                    age: characters.age,
                    specie: characters.specie
                })
                let elder = Object.entries(elderCharacters);
                arrayElder.push(elder);
            }
        }

    } let elderChar = arrayElder[getRandomInt(0, 15)];
    let jungChar = arrayJung[getRandomInt(0, 30)];
    let adultChar = arrayAdult[getRandomInt(0, 30)];
    console.log(moodSelection(elderChar, adultChar, jungChar, mood))
    return moodSelection(elderChar, adultChar, jungChar, mood)
}
  
  
function moodSelection(elderChar, adultChar, jungChar, mood) {
    if (mood === "jung") {
        return jungChar
    } else if (mood === "adult") {
        return adultChar
    } else if (mood === "elder") {
        return elderChar
    }
}


export {showMorePopular, showYearN, showSortAZ, searchWord, filterlist, filterByProductor, getRandomInt, quizMood, moodSelection, director_list, producer_list}