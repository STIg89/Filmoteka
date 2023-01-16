import { renderGallery } from '../dom/renderMovies';

const API_KEY = 'api_key=e57746b2e4fe98cb5cc839cb405a15f1';
const BASE_URL = 'https://api.themoviedb.org/3';
const GENRE_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;

const tagsEl = document.querySelector("#tags-genre");
const moviesOnInputList = document.querySelector('.movie__gallery'); 
const filterOpenBtn = document.querySelector('.filter'); 

filterOpenBtn.addEventListener('click', onFilterOpen);

const genres = [
    {"id":28,"name":"Action"},
    {"id":12,"name":"Adventure"},
    {"id":16,"name":"Animation"},
    {"id":35,"name":"Comedy"},
    {"id":80,"name":"Crime"},
    {"id":99,"name":"Documentary"},
    {"id":18,"name":"Drama"},
    {"id":10751,"name":"Family"},
    {"id":14,"name":"Fantasy"},
    {"id":36,"name":"History"},
    {"id":27,"name":"Horror"},
    {"id":10402,"name":"Music"},
    {"id":9648,"name":"Mystery"},
    {"id":10749,"name":"Romance"},
    {"id":878,"name":"Science Fiction"},
    {"id":10770,"name":"TV Movie"},
    {"id":53,"name":"Thriller"},
    {"id":10752,"name":"War"},
    {"id":37,"name":"Western"}
    ]

function onFilterOpen(e) { 
    filterOpenBtn.classList.toggle('visually-hidden');
    tagsEl.classList.toggle('visually-hidden');
    setGenre(); 
}


let selectedGenre = [];
function setGenre() { 
    tagsEl.innerHTML = "";
    genres.forEach(genre => { 
        const t = document.createElement("div"); 
        t.classList.add('tag'); 
        t.id = genre.id; 
        t.innerText = genre.name; 
        t.addEventListener("click", () => { 
            if(selectedGenre.length === 0) { 
                selectedGenre.push(genre.id)
            } else if (selectedGenre.includes(genre.id)) { 
                selectedGenre.forEach((id, idx) => {
                    if(id === genre.id) {
                        selectedGenre.splice(idx, 1)
                    }
                })
            } else { 
                selectedGenre.push(genre.id)
            }
            console.log(selectedGenre);
            moviesOnInputList.innerHTML = '';
            getMoviesByGenre(GENRE_URL + '&with_genres=' + encodeURI(selectedGenre.
                join(',')))
        })
        tagsEl.append(t); 
    })
}

getMoviesByGenre(GENRE_URL); 

function getMoviesByGenre(url) { 
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        renderGallery(data.results);
    }) 
}