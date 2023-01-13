import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper.scss';

const topMovieEll = document.querySelector('.swiper-wrapper');
const API_KEY = 'e57746b2e4fe98cb5cc839cb405a15f1';
const BASE_URL = 'https://api.themoviedb.org/3';

renderTopFilms();
async function renderTopFilms() {
  const data = await getTopFilms();
  renderGallery(data.results);
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 2000,
    },
  });
}
async function getTopFilms() {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error('getTopFilms error' + error);
  }
}
function renderGallery(data) {
  const markup = data
    .map(({ original_title, poster_path, id, release_date }) => {
      return `<div  class="topMovieGallery_slide swiper-slide">
<div class="topMovie_container">
                <img class="topMovie_img"  src= "https://image.tmdb.org/t/p/original${poster_path}" alt="${original_title}" loading="lazy">
        </div>
                <div class="topMovie_description">
                  <p class="topMovie_title">${original_title}</p>
                  <div class="topMovie_meta">
                    <p class="topMovie_genres">${release_date}</p>                    
                  </div>
                </div>
    </div>`;
    })
    .join('');
  topMovieEll.insertAdjacentHTML('beforeend', markup);
}
