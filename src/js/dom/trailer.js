import * as basicLightbox from 'basiclightbox';
import { getMovieTrailer } from '../api/fetchAPI';
import { refs } from './refs';

function addListenerAddBtnTrailer() {
  const trailer = document.querySelector('#trailer');
  trailer.addEventListener('click', onClickBtnTrailer);
}

async function onClickBtnTrailer(e) {
  let movieID = Number(refs.modalMovieContent.getAttribute('data-id'));

  const data = await getMovieTrailer(movieID);
  const { results } = data;

  let key = '';
  results.forEach(data => {
    if (data.type === 'Trailer') {
      key = data.key;
    }
  });

  const instance = basicLightbox.create(`
  <div class="close-btn-trailer"><button data-modal-close class="button-modal-movie--close"></button></div>
  <iframe  width="660" height="415" src='https://www.youtube.com/embed/${key}' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `);
  instance.show();

  const closeBtnTrailer = document.querySelector('.close-btn-trailer');
  closeBtnTrailer.addEventListener('click', () => {
    instance.close();
  });

  window.addEventListener('keydown', closeTrailerByEsc);
  function closeTrailerByEsc(e) {
    if (e.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeTrailerByEsc);
    }
  }
}

export { addListenerAddBtnTrailer };
