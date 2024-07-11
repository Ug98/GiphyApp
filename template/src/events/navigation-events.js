import { loadTrending, loadSingleGif } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { toUploadView } from '../views/upload-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toAboutView } from '../views/about-view.js';
import { toHomeView } from '../views/home-view.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';
import { CONTAINER_SELECTOR, HOME, TRENDING, FAVORITES, ABOUT, UPLOAD } from '../common/constants.js';

// public API
export const loadPage = (page = '') => {
    switch (page) {
        case HOME:
            setActiveNav(HOME);
            return renderHome();

        case TRENDING:
            setActiveNav(TRENDING);
            return renderTrending();

        case FAVORITES:
            setActiveNav(FAVORITES);
            return renderFavorites();

        case ABOUT:
            setActiveNav(ABOUT);
            return renderAbout();
        
        case UPLOAD:
            setActiveNav(UPLOAD);
            return renderUpload();

        default:
            return null;
    }
};

export const renderFavorites = () => {
    const favorites = getFavorites();
    Promise.all(favorites.map(id => loadSingleGif(id)))
        .then(favoriteGifs => q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favoriteGifs))
        .catch(error => console.error(error.message));
};

export const renderTrending = () => {
    loadTrending()
        .then(trendingGifs => q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs))
        .catch(error => console.error(error.message));
};

export const renderHome = () => {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

export const renderAbout = () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

export const renderUpload = () => {
    q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};