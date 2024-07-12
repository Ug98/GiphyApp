import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { loadSingleGif } from '../requests/request-service.js';
export const toggleFavoriteStatus = async (gifId) => {
  if (!gifId) {
    console.error('Invalid GIF ID:', gifId);
    return;
  }

  let favorites = getFavorites();

  if (favorites.find(fav => fav.id === gifId)) {
    removeFavorite(gifId);
  } else {
    const gif = await loadSingleGif(gifId);
    if (gif && gif.images && gif.images.downsized_medium && gif.images.downsized_medium.url) {
      addFavorite(gif);
    } else {
      console.error('Invalid GIF object:', gif);
    }
  }

};