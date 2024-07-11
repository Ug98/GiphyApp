import { API_KEY } from "../common/constants.js";

export const loadTrending = async () => {
  return await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`)
    .then(response => response.json());
};

export const loadSingleGif = async (id) => {
  return await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`)
      .then(response => response.json());
};

export const searchGifs = async (searchTerm = '') => {
  return await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`)
      .then(response => response.json());
};

export const uploadGif = async (formData) => {
  return await fetch('https://upload.giphy.com/v1/gifs', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .catch(error => console.error('Error uploading GIF:', error));
};