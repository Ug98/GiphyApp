import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q, renderFavoriteStatus } from './helpers.js';


export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
  } else {
    addFavorite(gifId);
  }

  q(`span[data-favorite-id="${gifId}"]`).innerHTML = renderFavoriteStatus(gifId);
};