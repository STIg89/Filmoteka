import Swiper, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/autoplay/autoplay.scss';

import { getTopFilms } from '../api/fetchAPI';
import { refs } from './refs';

const { topMovieEll } = refs;

renderTopFilms();

async function renderTopFilms() {
  const data = await getTopFilms();
  renderGallery(data.results);
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    speed: 10000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      },
    },
  });
}

function renderGallery(data) {
  let markup = '';
  for (let i = 0; i <= 15; i += 5) {
    markup += '<div  class="topMovieGallery_slide swiper-slide">';
    for (let j = 0 + i; j <= i + 4; j += 1) {
      markup += `<div class="movie__item topMovie_container" data-id="${data[j].id}">
      <img class="topMovie_img"  src= "https://image.tmdb.org/t/p/w500/${data[j].poster_path}"
      alt="${data[j].original_title}" loading="lazy"></div>`;
    }
    markup += '</div>';
  }

  topMovieEll.insertAdjacentHTML('beforeend', markup);
}
