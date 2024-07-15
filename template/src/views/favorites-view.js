import { FULL_HEART, EMPTY_HEART } from "../common/constants.js";
import { renderFavoriteStatus } from "../events/helpers.js";

export const toFavoritesView = (favorites) => {
  if (favorites.length === 0) {
    return' <h1>No favorites yet</h1>';
  } else {
    return `
      <h1></h1>
      <div class="trending">
        ${favorites.map(gif => `
          <div class="grid-item">
            <div class="gif-container">
              <img src="${gif.images?.downsized_medium.url}" alt="${gif.title}">
              <div class="overlay"></div>
              <div class="buttons">
                <button class="view-trending-btn" data-trending-id="${gif.id}">View info</button>
                <button class="remove-from-favorites" data-gif-id="${gif.id}">${FULL_HEART}</button>
              </div>
            </div>
          </div>
        `).join('\n')}
      </div>
    `;
  }
};

export const toRandomGifsView = (gifs) => `
  <h1>Random gifs:</h1>
  <div id="random-gifs">
    ${gifs.map(gif => `
      <div class="grid-item">
        <div class="gif-container">
          <img src="${gif.images.downsized_medium.url}" alt="${gif.title}">
          <div class="overlay"></div>
          <div class="buttons">
            <button class="view-trending-btn" data-trending-id="${gif.id}">View info</button>
            <button class="${renderFavoriteStatus(gif.id) === FULL_HEART ? 'remove-from-favorites' : 'add-to-favorites'}" data-gif-id="${gif.id}">${renderFavoriteStatus(gif.id)}</button>
          </div>
        </div>
      </div>
    `).join('\n')}
  </div>
`;
