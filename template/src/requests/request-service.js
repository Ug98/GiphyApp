import { API_KEY } from "../common/constants.js";

export const loadTrending = async () => {
  return await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`)
    .then(response => response.json());
};

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