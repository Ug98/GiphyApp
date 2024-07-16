let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
/**
 * Adds a GIF to the favorites list and saves it to local storage.
 *
 * @param {Object} gif - The GIF object to add to favorites.
 * @param {string} gif.id - The ID of the GIF.
 * @param {Object} gif.images - The images object of the GIF.
 * @param {Object} gif.images.downsized_medium - The downsized medium image of the GIF.
 * @param {string} gif.images.downsized_medium.url - The URL of the downsized medium image.
 */
export const addFavorite = (gif) => {
  if (favorites.find(fav => fav.id === gif.id)) {
    // GIF has already been added to favorites
    return;
  }

  favorites.push(gif);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
/**
 * Removes a GIF from the favorites list and updates local storage.
 *
 * @param {string} gifId - The ID of the GIF to remove from favorites.
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter(fav => fav.id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
/**
 * Retrieves the list of favorite GIFs from local storage.
 *
 * @returns {Object[]} The list of favorite GIFs.
 */
export const getFavorites = () => [...favorites];