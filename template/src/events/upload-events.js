import { uploadGif } from '../requests/request-service.js';
import { API_KEY } from '../common/constants.js';

export const uploadFile = async () => {
    const fileInput = document.getElementById('upload-gif');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('api_key', API_KEY);

    uploadGif(formData)
    .then(data => {
      if (data.meta.status === 200) {
        alert('GIF uploaded successfully!');
      } else {
        alert('Error uploading GIF');
      }
    })
    .catch(error => console.error('Error uploading GIF:', error));
};