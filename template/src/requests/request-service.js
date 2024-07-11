export const loadTrending = () => {
  return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=LalfqaRmzFmmEl9pwU3MVBly7y0ZZGT4&limit=25&rating=g`)
    .then(response => response.json());
};

export const loadSingleGif = (id) => {
  return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=LalfqaRmzFmmEl9pwU3MVBly7y0ZZGT4`)
      .then(response => response.json());
};

export const searchGifs = (searchTerm = '') => {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=LalfqaRmzFmmEl9pwU3MVBly7y0ZZGT4&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`)
      .then(response => response.json());
};