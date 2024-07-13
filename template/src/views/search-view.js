import { renderFavoriteStatus } from "../events/helpers.js";
import { FULL_HEART } from "../common/constants.js";

export const toSearchView = (gifs, searchTerm) => `
    <h2>Search results for "${searchTerm}":</h2>
    <div class="trending">
        ${gifs.data.map(gif => `
     <div class="grid-item gif-container">
            <img src="${gif.images.downsized_medium.url}">
            <button class="view-trending-btn" data-trending-id="${gif.id}">View info</button>
            <button class="${renderFavoriteStatus(gif.id) === FULL_HEART ? 'remove-from-favorites' : 'add-to-favorites'}" data-gif-id="${gif.id}">${renderFavoriteStatus(gif.id)}</button>
                <p>${gif.title}</p>
        </div>
              `).join('')}
    </div>
  `;