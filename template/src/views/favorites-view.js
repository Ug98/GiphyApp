import { FULL_HEART } from "../common/constants.js";
export const toFavoritesView = (favorites) => {
 

  if (favorites.length === 0) {
    return '<h1>No favorites yet</h1>'
  } else {
    return `
    <h1>Favorite gifs:</h1>
    <div id="favorites">
      ${favorites.map(gif => {
      return `
          <div class="grid-item" data-key="${gif.id}">
            <img src="${gif.images?.downsized_medium.url}" alt="GIF">
            <p>${gif.title}</p>
            <button class="remove-from-favorites" data-gif-id="${gif.id}">${FULL_HEART}</button>
          </div>`;
    }).join('\n')}
    </div>
  `;

  }
};