import { getUploads } from "../data/uploads.js";

export const toUploadView = () => `
<div id="uploads">
  <div id="upload">
    <p>Upload</p>
    <input type="file" id="upload-gif" accept="image/*">
    <button id="upload-button">Upload GIF</button>
  </div>
  <div id="uploaded">
    ${getUploads().length > 0 ? '<p>Uploaded</p>' : '<p>No GIFs uploaded yet</p>'}
    ${getUploads().map(gifId => `<div class="grid-item"><img src="https://media.giphy.com/media/${gifId}/giphy.gif"></div>`).join(`\n`)}
  </div>
</div>
`;