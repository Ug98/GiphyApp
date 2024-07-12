import { API_KEY } from "../common/constants.js";

export const loadTrending = async () => {
  return await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`)
    .then(response => response.json());
};

export const loadSingleGif = async (id) => {
  try {
    console.log('Fetching single gif with ID:', id); // Log the ID being fetched
    const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const gifData = await response.json();
    console.log('Fetched gif data:', gifData); // Log the fetched GIF data
    return gifData;
  } catch (error) {
    console.error('Error fetching single gif:', error.message);
    throw error;
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