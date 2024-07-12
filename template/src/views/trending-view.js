import { renderFavoriteStatus } from "../events/helpers.js";
import { FULL_HEART } from "../common/constants.js";

export const toTrendingView = (gifs) => `
  <h1>Trending</h1>
  <div class="trending">
    ${gifs.data.map(gif => `
      <div class="grid-item">
        <img src="${gif.images.downsized_medium.url}" alt="${gif.title}">
        <p>${gif.title}</p>
        <button class="view-trending-btn" data-trending-id="${gif.id}">View info</button>
        <button class="${renderFavoriteStatus(gif.id) === FULL_HEART ? 'remove-from-favorites' : 'add-to-favorites'}" data-gif-id="${gif.id}">${renderFavoriteStatus(gif.id)}</button>
      </div>
    `).join('\n')}
  </div>
`;