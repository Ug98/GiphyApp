/**
 * Stores the uploaded GIFs or an empty array.
 */
let uploads = JSON.parse(localStorage.getItem('uploads')) || [];

/**
 * Checks if the ID of a newly uploaded GIF is stored already, and if not, adds it stringified to a Local Storage under 'uploads'. 
 * 
 * @param {*} gifId The ID of the newly uploaded GIF
 */
export const addUpload = (gifId) => {
  if (!uploads.includes(gifId)) {
    uploads.push(gifId);
    localStorage.setItem('uploads', JSON.stringify(uploads));
  }
};

/**
 * Returns an array of the uploaded images.
 * 
 * @returns the array of images.
 */
export const getUploads = () => [...uploads];