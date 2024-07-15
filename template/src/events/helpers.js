import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';

export const q = (selector) => document.querySelector(selector);

export const qs = (selector) => document.querySelectorAll(selector);

export const setActiveNav = (page) => {
  const navs = qs('a.nav-link');

  Array
    .from(navs)
    .forEach(element => element
      .getAttribute('data-page') === page
      ? element.classList.add('active')
      : element.classList.remove('active')
      );
};

export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();
  return favorites.find(fav => fav.id === gifId)
    ? FULL_HEART
    : EMPTY_HEART;
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};