let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const addFavorite = (gifId) => {
  if (!favorites.includes(gifId)) {
    favorites.push(gifId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
};

export const removeFavorite = (gifId) => {
  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('favorites')) || []; // Ensure it's an array
};
