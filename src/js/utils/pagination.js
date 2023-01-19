import Pagination from 'tui-pagination';
import { getTrendingFilms, getMoviesSearch } from '../api/fetchAPI';
import { options } from './paginationConfig';
import { renderGallery } from '../dom/renderMovies';

const pagination = new Pagination('pagination', options);

pagination.on('afterMove', onPaginationClick);

async function onPaginationClick(e) {
  const lastPageNumber = Number(
    document.querySelector('.tui-ico-last').textContent
  );
  const selectedPage = e.page;
  const searchedValue = localStorage.getItem('searchedValue');

  if ((selectedPage > 1) & (selectedPage < lastPageNumber)) {
    hideBtn(selectedPage);
  }
  console.log('searchedValue', searchedValue !== '');

  if (searchedValue !== '') {
    const dataResponse = await getMoviesSearch(searchedValue, selectedPage);
    renderGallery(dataResponse.results);
  } else {
    const dataResponse = await getTrendingFilms(selectedPage);
    renderGallery(dataResponse.results);
  }

  setTimeout(() => {
    scrollToTop();
  }, 400);
}

function hideBtn(selectedPage) {
  const firstPageBtnRef = document.querySelector('.custom-class-first');
  const lastPageBtnRef = document.querySelector('.custom-class-last');
  const lastPageNumber = Number(
    document.querySelector('.tui-ico-last').textContent
  );

  if (selectedPage < 4) {
    firstPageBtnRef.classList.add('btn-hidden');
    return;
  }
  if (lastPageNumber - selectedPage < 3) {
    lastPageBtnRef.classList.add('btn-hidden');
    return;
  }

  lastPageBtnRef.classList.remove('btn-hidden');
  firstPageBtnRef.classList.remove('btn-hidden');
}

function updateLastPaginationPage({ total_pages }) {
  pagination.setTotalItems(total_pages);
  document.querySelector('.tui-ico-last').innerHTML = total_pages;
}

function scrollToTop() {
  window.scrollTo({
    top: 670,
    behavior: 'smooth',
  });
}

export { pagination };
export { updateLastPaginationPage };
