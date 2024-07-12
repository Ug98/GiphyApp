import { uploadGif } from '../requests/request-service.js';
import { API_KEY } from '../common/constants.js';
import { q } from './helpers.js';
import { addUpload, getUploads } from '../data/uploads.js'; // Importing upload data functions

export const uploadFile = async () => {
  const fileInput = q('#upload-gif');
  const formData = new FormData();

  formData.append('file', fileInput.files[0]);
  formData.append('api_key', API_KEY);

  uploadGif(formData)
    .then(data => {
      if (data.meta.status === 200) {
        alert('GIF uploaded successfully!');
        const uploadedGifId = data.data.id;
        addUpload(uploadedGifId); // Save upload to localStorage
        displayUploadedGifs(); // Display all uploaded GIFs
      } else {
        alert('Failed to upload GIF. Status: ' + data.meta.status);
      }
    })
    .catch(error => {
      console.error('Error uploading GIF:', error.message);
      alert('Error uploading GIF:', error.message);
    });
};

const displayUploadedGifs = () => {
  const uploadedDiv = q('#uploaded');
  uploadedDiv.innerHTML = ''; // Clear existing content

  const uploads = getUploads();
  uploads.forEach(gifId => {
    const imgElement = document.createElement('img');
    imgElement.src = `https://media.giphy.com/media/${gifId}/giphy.gif`; // Replace with actual URL if needed
    imgElement.alt = `Uploaded GIF ${gifId}`;
    imgElement.className = 'grid-item';

    uploadedDiv.appendChild(imgElement);
  });
};
