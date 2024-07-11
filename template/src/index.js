import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, renderTrending } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { uploadFile } from './events/upload-events.js';

document.addEventListener('DOMContentLoaded', () => {
  // add global listener
  document.addEventListener('click', e => {

    // nav events
    if (e.target.classList.contains('nav-link')) {

      loadPage(e.target.getAttribute('data-page'));
    }

    // show trending events
    if (e.target.classList.contains('view-trending-btn')) {
      renderTrending(+e.target.getAttribute('data-trending-id'));
    }

    // // show movie events
    // if (e.target.classList.contains('view-movie-btn')) {
    //   renderMovieDetails(+e.target.getAttribute('data-movie-id'));
    // }

    // toggle favorite event
    if (e.target.classList.contains('trending')) {
      toggleFavoriteStatus(+e.target.getAttribute('data-trending-id'));
    }

  });

  // search events
  q('input#search').addEventListener('input', e => {
    renderSearchItems(e.target.value);
  });

  // upload events
  document.getElementById('upload-button').addEventListener('click', () => {
    uploadFile();
  });

  loadPage(HOME);
});