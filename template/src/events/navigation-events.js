import { loadTrending,  loadRandomGifs } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { toUploadView } from '../views/upload-view.js';
import { toFavoritesView, toRandomGifsView } from '../views/favorites-view.js';
import { toAboutView } from '../views/about-view.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';
import { CONTAINER_SELECTOR, TRENDING, FAVORITES, ABOUT, UPLOAD } from '../common/constants.js';

// public API
export const loadPage = (page = '') => {


    switch (page) {

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

export const renderFavorites = async () => {
    const favoriteGifs = getFavorites();
    if (favoriteGifs.length === 0) {
        const randomGifs = await loadRandomGifs(); 
        q(CONTAINER_SELECTOR).innerHTML = toRandomGifsView(randomGifs);
    } else {
        q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favoriteGifs);
    }
    // q('#favorites-text').style.color = 'rgba(70, 74, 103)';
};

export const renderTrending = async () => {
    loadTrending()
        .then(trendingGifs => q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs))
        .catch(error => console.error(error.message));
    // q('#trending-text').style.color = 'rgba(70, 74, 103)';
};

// export const renderHome = () => {
//     q(CONTAINER_SELECTOR).innerHTML = toHomeView();
//     q('.nav-text').forEach(text => text.style.display = 'none');
//     q('#favorites-text').style.display = 'block';
// };

export const renderAbout = async () => {
    q(CONTAINER_SELECTOR).innerHTML = toAboutView();
    // q('#about-text').style.color = 'rgba(70, 74, 103)';
};

/**
 * Handles rendering the Upload page by inserting the HTML returned
 * by the toUploadView() function, inside the inner HTML of the container.
 */
export const renderUpload = async () => {
    q(CONTAINER_SELECTOR).innerHTML = toUploadView();
    // q('#upload-text').style.color = 'rgba(254, 55, 68)';
 };