export const toFavoritesView = (gifs) => `
  <h1>Favorite gifs:</h1>
<div id="trending">
${gifs.map(gif => `<div class="grid-item"><img src="${gif.images}"></div>`).join(`\n`)}
</div>
`;