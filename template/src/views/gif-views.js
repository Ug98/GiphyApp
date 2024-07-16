/**
 * Generates HTML for the detailed view of a single GIF.
 * 
 * @param {{ id: string, images: { original: { url: string } }, title: string, import_datetime: string, username: string }} gif - The GIF data.
 * @returns {string} The HTML string for the GIF detailed view.
 */

export const toGifDetailedView = (gif) => `
  <div id="gif-details" class="gif-details">
    <h2>${gif.title}</h2>
    <img src='${gif.images.original.url}' alt='${gif.title}'>
    <p>Upload date: ${gif.import_datetime}</p>
    <p>Uploaded by: ${gif.username || 'N/A'}</p>
    <button id="close-gif-info">Close</button>
  </div>
`;
