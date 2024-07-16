import { API_KEY } from "../common/constants.js";

/**
 * Loads trending GIFs from the Giphy API.
 * 
 * @returns {Promise<{ data: Array<{ id: string, images: { downsized_medium: { url: string } }, title: string }> }>} A promise that resolves to the GIF data.
 */
export const loadTrending = async () => {
  return await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`)
    .then(response => response.json());
};

/**
 * Loads a single GIF by ID from the Giphy API.
 * 
 * @param {string} id - The ID of the GIF.
 * @returns {Promise<{ id: string, images: { original: { url: string } }, title: string, import_datetime: string, username: string } | null>} A promise that resolves to the GIF data, or null if an error occurs.
 */
export const loadSingleGif = async (id) => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error loading single GIF:', error);
    return null;
  }
};

/**
 * Searches for GIFs by a search term using the Giphy API.
 * 
 * @param {string} [searchTerm=''] - The search term.
 * @returns {Promise<{ data: Array<{ id: string, images: { downsized_medium: { url: string } }, title: string }> }>} A promise that resolves to the search results.
 */
export const searchGifs = async (searchTerm = '') => {
  return await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`)
      .then(response => response.json());
};

export const uploadGif = async (formData) => {
  // try {
  return await fetch('https://upload.giphy.com/v1/gifs', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .catch(error => {
    console.error('Error fetching upload API:', error.message);
    alert('Error fetching upload API:', error.message);
  })
};
export const loadRandomGifs = async (limit = 1) => {
  const randomGifPromises = Array.from({ length: limit }, () =>
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=g`).then(response => response.json())
  );

  const randomGifResponses = await Promise.all(randomGifPromises);
  return randomGifResponses.map(response => response.data);
};