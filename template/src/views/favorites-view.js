import { FULL_HEART,EMPTY_HEART } from "../common/constants.js";
import { renderFavoriteStatus } from "../events/helpers.js";

export const toFavoritesView = (favorites) => {
 

  if (favorites.length === 0) {
    return '<h1>No favorites yet</h1>'
  } else {
    return `
    <h1>Favorite gifs:</h1>
    <div class="trending">
      ${favorites.map(gif => {
      return `
          <div class="grid-item gif-container" data-key="${gif.id}">
            <img src="${gif.images?.downsized_medium.url}" alt="GIF">
            <p>${gif.title}</p>
            <button class="view-trending-btn" data-trending-id="${gif.id}">View info</button>
            <button class="remove-from-favorites" data-gif-id="${gif.id}">${FULL_HEART}</button>
          </div>`;
    }).join('\n')}
    </div>
  `;

  }
};

export const toRandomGifsView = (gifs) => `
  <h1>No favorites yet</h1>
  <div id="random-gifs">
    ${gifs.map(gif => `
      <div class="grid-item">
        <img src="${gif.images.downsized_medium.url}" alt="${gif.title}">
        <p>${gif.title}</p>
        <button class="view-trending-btn" data-trending-id="${gif.id}">View info</button>
        <button class="${renderFavoriteStatus(gif.id) === FULL_HEART ? 'remove-from-favorites' : 'add-to-favorites'}" data-gif-id="${gif.id}">${renderFavoriteStatus(gif.id)}</button>
      </div>
    `).join('\n')}
  </div>
`;