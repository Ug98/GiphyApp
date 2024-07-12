import { EMPTY_HEART } from "../common/constants.js";

export const toTrendingView = (gifs) => `
  <h1>Trending</h1>
  <div class="trending">
    ${gifs.data.map(gif => `
      <div class="grid-item">
        <img src="${gif.images.downsized_medium.url}" alt="${gif.title}">
        <button class="view-trending-btn" data-trending-id="${gif.id}">View info</button>
        <button class="add-to-favorites" data-gif-id="${gif.id}">${EMPTY_HEART}</button>
      </div>
    `).join('\n')}
  </div>
`;
