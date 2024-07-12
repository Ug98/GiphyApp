import { renderFavoriteStatus } from "../events/helpers.js";
import { FULL_HEART } from "../common/constants.js";

export const toSearchView = (gifs, searchTerm) => `
<div class="search-results">
    <h2>Search results for "${searchTerm}":</h2>
    <div class="grid">
        ${gifs.data.map(gif => `
     <div class="grid-item">
            <img src="${gif.images.downsized_medium.url}">
            <button class="${renderFavoriteStatus(gif.id) === FULL_HEART ? 'remove-from-favorites' : 'add-to-favorites'}" data-gif-id="${gif.id}">${renderFavoriteStatus(gif.id)}</button>
                <p>${gif.title}</p>
        </div>
              `).join('')}
    </div>
</div>
  `;