let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const addFavorite = (gif) => {
  if (favorites.find(fav => fav.id === gif.id)) {
    // GIF has already been added to favorites
    return;
  }

  favorites.push(gif);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const removeFavorite = (gifId) => {
  favorites = favorites.filter(fav => fav.id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => [...favorites];