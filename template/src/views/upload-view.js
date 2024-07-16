import { getUploads } from "../data/uploads.js";

/**
 * Generates the HTML for the upload view with an input for files and an
 * upload button, as well as a grid-gallery of all uploaded GIFs so far.
 * 
 * @returns {string} The HTML string for the upload view.
 */
export const toUploadView = () => `
<div id="uploads">
  <div id="upload">
    <input type="file" id="upload-gif" accept="image/gif">
    <button id="upload-button">Upload GIF</button>
  </div>
  <div id="uploaded">
    ${getUploads().length > 0 ? '<p>Uploaded</p>' : '<p>No GIFs uploaded yet</p>'}
    ${getUploads().map(gifId => `<div class="grid-item"><img src="https://media.giphy.com/media/${gifId}/giphy.gif"></div>`).join(`\n`)}
  </div>
</div>
`;