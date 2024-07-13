export const toGifDetailedView = (gif) => `
  <div id="gif-details" class="gif-details">
    <h1>${gif.title}</h1>
    <img src='${gif.images.original.url}' alt='${gif.title}'>
    <p>Uploaded by: ${gif.username || 'N/A'}</p>
    <button id="close-gif-info">Close</button>
  </div>
`;
