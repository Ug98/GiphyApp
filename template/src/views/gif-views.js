export const toGifSimple = (gif) => `
<div class="gif-item">
  <img src="${gif.images}" alt="${gif.title}">
  <p>${gif.title}</p>
</div>
`;
