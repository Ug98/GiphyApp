import { renderFavoriteStatus } from "../events/helpers.js";
import { FULL_HEART } from "../common/constants.js";


/**
 * Generates HTML for the search view with GIFs.
 * 
 * @param {{ data: Array<{ id: string, images: { downsized_medium: { url: string } }, title: string }> }} gifs - The GIF data.
 * @param {string} searchTerm - The search term.
 * @returns {string} The HTML string for the search view.
 */
export const toSearchView = (gifs, searchTerm) => `
  <h2>Search results for "${searchTerm}":</h2>
  <div class="trending">
    ${gifs.data.map(gif => `
      <div class="grid-item">
        <div class="gif-container">
          <img src="${gif.images.downsized_medium.url}" alt="${gif.title}">
          <div class="overlay"></div>
          <div class="buttons">
            <button class="view-trending-btn" data-trending-id="${gif.id}">Gif Info</button>
            <button class="${renderFavoriteStatus(gif.id) === FULL_HEART ? 'remove-from-favorites' : 'add-to-favorites'}" data-gif-id="${gif.id}">${renderFavoriteStatus(gif.id)}</button>
          </div>
        </div>
      </div>
    `).join('\n')}
  </div>
`;