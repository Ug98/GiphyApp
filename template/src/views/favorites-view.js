import { FULL_HEART } from "../common/constants.js";
import { renderFavoriteStatus } from "../events/helpers.js";
/**
 * Generates the HTML for displaying the favorite GIFs.
 *
 * @param {Object[]} favorites - The array of favorite GIF objects.
 * @param {Object} favorites[].images - The images object of the GIF.
 * @param {Object} favorites[].images.downsized_medium - The downsized medium image of the GIF.
 * @param {string} favorites[].images.downsized_medium.url - The URL of the downsized medium image.
 * @param {string} favorites[].id - The ID of the GIF.
 * @param {string} favorites[].title - The title of the GIF.
 * @returns {string} The HTML string for displaying the favorite GIFs.
 */

export const toFavoritesView = (favorites) => `
      <div class="trending">
        ${favorites.map(gif => `
          <div class="grid-item">
            <div class="gif-container">
              <img src="${gif.images?.downsized_medium.url}" alt="${gif.title}">
              <div class="overlay"></div>
              <div class="buttons">
                <button class="view-trending-btn" data-trending-id="${gif.id}">Gif Info</button>
                <button class="remove-from-favorites" data-gif-id="${gif.id}">${FULL_HEART}</button>
              </div>
            </div>
          </div>
        `).join('\n')}
      </div>
    `;
  

/**
 * Generates the HTML for displaying the random GIFs.
 *
 * @param {Object[]} gifs - The array of random GIF objects.
 * @param {Object} gifs[].images - The images object of the GIF.
 * @param {Object} gifs[].images.downsized_medium - The downsized medium image of the GIF.
 * @param {string} gifs[].images.downsized_medium.url - The URL of the downsized medium image.
 * @param {string} gifs[].id - The ID of the GIF.
 * @param {string} gifs[].title - The title of the GIF.
 * @returns {string} The HTML string for displaying the random GIFs.
 */
export const toRandomGifsView = (gifs) => `
  <div id="random-gifs" align="center">
    ${gifs.map(gif => `
      <div class="grid-item">
        <div class="gif-container">
          <img src="${gif.images.downsized_medium.url}" alt="${gif.title}">
          <div class="overlay"></div>
          <div class="buttons">
            <button class="view-trending-btn" data-trending-id="${gif.id}">Gif Info</button>
            <button class="${renderFavoriteStatus(gif.id) === FULL_HEART ? 'remove-from-favorites' : 'add-to-favorites'}" data-gif-id="${gif.id}">${renderFavoriteStatus(gif.id)}</button>
          </div>
        </div>
        <h2>Could it be your first favorite GIF?</h2>
      </div>
    `).join('\n')}
  </div>
`;
