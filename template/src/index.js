import { TRENDING } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { debounce, q } from './events/helpers.js';
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

    /**
 * Handles the click event on a trending button, loads the single GIF data,
 * creates an overlay with the GIF details, and appends it to the document body.
 * Adds an event listener to the close button to remove the overlay.
 * 
 * @param {Event} e - The event object.
 * @returns {Promise<void>} A promise that resolves when the overlay is created and the event listener is added.
 */
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

    /**
 * Event listener for toggling the favorite status of a GIF.
 * Listens for clicks on buttons with the class 'add-to-favorites' or 'remove-from-favorites'.
 *
 */
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


  /**
 * Handles the input event for the search input field.
 * Debounces the input event and calls the renderSearchItems function with the trimmed search term if it's not empty.
 * 
 * @param {Event} e - The input event object.
 */
  q('input#search').addEventListener('input', debounce(e => {
    const searchTerm = e.target.value.trim();
    if (searchTerm !== '') {
      renderSearchItems(searchTerm);
    }
  }, 1500));

  loadPage(TRENDING);
});
