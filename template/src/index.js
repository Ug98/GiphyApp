import { TRENDING } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, renderTrending } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { uploadFile } from './events/upload-events.js';
import { renderFavoriteStatus } from './events/helpers.js';
import { loadSingleGif } from './requests/request-service.js';
import { toGifDetailedView } from './views/gif-views.js';

document.addEventListener('DOMContentLoaded', async () => {
  // add global listener
  document.addEventListener('click', async e => {
    // nav events
    if (e.target.classList.contains('nav-link')) {
      loadPage(e.target.getAttribute('data-page'));
    }

    // show GIF details
    if (e.target.classList.contains('view-trending-btn')) {
      const gifId = e.target.getAttribute('data-trending-id');
      const gif = await loadSingleGif(gifId);

      // Create an overlay
      const overlay = document.createElement('div');
      overlay.id = 'gif-overlay';
      overlay.innerHTML = toGifDetailedView(gif);
      document.body.appendChild(overlay);

      // Add event listener to the close button
      document.getElementById('close-gif-info').addEventListener('click', () => {
        overlay.remove();
      });
    }

    // toggle favorite event
    if (e.target.classList.contains('add-to-favorites') || e.target.classList.contains('remove-from-favorites')) {
      const gifId = e.target.getAttribute('data-gif-id');
      if (gifId) {
        await toggleFavoriteStatus(gifId);
      } else {
        console.error('GIF ID is undefined:', e.target);
      }
    }

    // upload events
    if (e.target.id === 'upload-button') {
      uploadFile();
    }
  });

  // search events
  q('input#search').addEventListener('input', e => {
    renderSearchItems(e.target.value);
  });

  loadPage(TRENDING);
});
