import { uploadGif } from '../requests/request-service.js';

export const uploadFile = async () => {
    const fileInput = document.getElementById('upload-gif');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('api_key', apiKey);
    formData.append('username', 'your_giphy_username');

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