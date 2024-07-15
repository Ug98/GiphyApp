import { uploadGif } from '../requests/request-service.js';
import { API_KEY } from '../common/constants.js';
import { q } from './helpers.js';
import { addUpload, getUploads } from '../data/uploads.js'; 

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
        addUpload(uploadedGifId); 
        displayUploadedGifs(); 
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
  uploadedDiv.innerHTML = ''; 

  const uploads = getUploads();
  uploads.forEach(gifId => {
    const imgElement = document.createElement('img');
    imgElement.src = `https://media.giphy.com/media/${gifId}/giphy.gif`; 
    imgElement.alt = `Uploaded GIF ${gifId}`;
    imgElement.className = 'grid-item';

    uploadedDiv.appendChild(imgElement);
  });
};
