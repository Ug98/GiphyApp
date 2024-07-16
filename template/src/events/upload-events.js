import { uploadGif } from '../requests/request-service.js';
import { API_KEY } from '../common/constants.js';
import { q } from './helpers.js';
import { addUpload, getUploads } from '../data/uploads.js'; 

/**
 * Creates a FormData object from the selected file for upload.
 * Uploads it to the API Key owner's account and handles the result accordingly.
 * If successful adds the image to the gallery of uploaded GIFs and shows it.
 */
export const uploadFile = async () => {
  const fileInput = q('#upload-gif');
  const formData = new FormData();
  const loadingElement = q('#loading');

  formData.append('file', fileInput.files[0]);
  formData.append('api_key', API_KEY);

  loadingElement.style.display = 'block';
  
  try {
    const data = await uploadGif(formData);
    if (data.meta.status === 200) {
      alert('GIF uploaded successfully!');
      const uploadedGifId = data.data.id;
      addUpload(uploadedGifId);
      displayUploadedGifs();
    } else {
      alert('Failed to upload GIF. Status: ' + data.meta.status);
    }
  } catch (error) {
    console.error('Error uploading GIF:', error.message);
    alert('Error uploading GIF:', error.message);
  } finally {
    loadingElement.style.display = 'none';
  }
};

/**
 * Shows the gallery of uploaded GIFs or a message when it's empty. 
 */
const displayUploadedGifs = () => {
  const uploadedDiv = q('#uploaded');
  uploadedDiv.innerHTML = '';

  const uploads = getUploads();
  if (uploads.length > 0) {
    uploadedDiv.innerHTML += '<p>Uploaded</p>';
    uploads.forEach(gifId => {
      const imgElement = document.createElement('img');
      imgElement.src = `https://media.giphy.com/media/${gifId}/giphy.gif`;
      imgElement.alt = `Uploaded GIF ${gifId}`;
      imgElement.className = 'grid-item';

      uploadedDiv.appendChild(imgElement);
    });
  } else {
    uploadedDiv.innerHTML += '<p>No GIFs uploaded yet</p>';
  }
};