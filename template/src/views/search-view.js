import { EMPTY_HEART } from "../common/constants.js";
export const toSearchView = (gifs, searchTerm) => `
<div class="search-results">
    <h2>Search results for "${searchTerm}":</h2>
    <div class="grid">
        ${gifs.data.map(gif => `
     <div class="grid-item">
            <img src="${gif.images.downsized_medium.url}">
            <button class="add-to-favorites" data-gif-id="${gif.id}">${EMPTY_HEART}</button>
                <p>${gif.title}</p>
        </div>
              `).join('')}
    </div>
</div>
  `;

