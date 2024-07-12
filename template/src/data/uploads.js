let uploads = JSON.parse(localStorage.getItem('uploads')) || [];

export const addUpload = (gifId) => {
  if (!uploads.includes(gifId)) {
    uploads.push(gifId);
    localStorage.setItem('uploads', JSON.stringify(uploads));
  }
};

export const getUploads = () => [...uploads];