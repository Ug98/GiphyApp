export const toSearchView = (gifs, searchTerm) => `
<div class="search-results">
    <h2>Search results for "${searchTerm}":</h2>
    <div class="grid">
        ${gifs.data.map(gif => `
     <div class="grid-item">
            <img src="${gif.images.downsized_medium.url}">
                <p>${gif.title}</p>
        </div>
              `).join('')}
    </div>
</div>
  `;

