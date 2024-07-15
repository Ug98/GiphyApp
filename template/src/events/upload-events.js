import { uploadGif } from '../requests/request-service.js';
import { API_KEY } from '../common/constants.js';
import { q } from './helpers.js';
import { addUpload, getUploads } from '../data/uploads.js'; 

// Функция за качване на GIF
export const uploadFile = async () => {
  const fileInput = q('#upload-gif');
  const formData = new FormData();

  formData.append('file', fileInput.files[0]);
  formData.append('api_key', API_KEY);

  try {
    const data = await uploadGif(formData);
    if (data.meta.status === 200) {
      alert('GIF uploaded successfully!');
      const uploadedGifId = data.data.id;
      addUpload(uploadedGifId); // Добавяме новия GIF ID към съхранение на качени GIF-ове
      displayUploadedGifs(); // Актуализираме изгледа с качените GIF-ове
    } else {
      alert('Failed to upload GIF. Status: ' + data.meta.status);
    }
  } catch (error) {
    console.error('Error uploading GIF:', error.message);
    alert('Error uploading GIF:', error.message);
  }
};

// Функция за показване на качените GIF-ове
const displayUploadedGifs = () => {
  const uploadedDiv = q('#uploaded');
  uploadedDiv.innerHTML = ''; // Изчистваме текущото съдържание на #uploaded

  const uploads = getUploads();
  if (uploads.length > 0) {
    uploadedDiv.innerHTML += '<p>Uploaded</p>'; // Добавяме заглавие "Uploaded"
    uploads.forEach(gifId => {
      const imgElement = document.createElement('img');
      imgElement.src = `https://media.giphy.com/media/${gifId}/giphy.gif`;
      imgElement.alt = `Uploaded GIF ${gifId}`;
      imgElement.className = 'grid-item';

      uploadedDiv.appendChild(imgElement);
    });
  } else {
    uploadedDiv.innerHTML += '<p>No GIFs uploaded yet</p>'; // Алтернативно съобщение, ако няма качени GIF-ове
  }
};