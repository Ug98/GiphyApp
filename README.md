<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# GiphyApp

### 1. Description

GiphyApp is a simple web app for viewing trending GIFs, favoriting them and keeping the favorites to a gallery, provides additional information about each GIF, allows the user to upload GIFs to their GIPHY.COM account and keep track of their uploads, and search the GIPHY database for GIFs. It's completely implemented with vanilla JavaScript (Native DOM API) and vanilla CSS (no libraries). 

<br>

### 2. Project information

- Language and version: **JavaScript ES2020**
- Platform and version: **Node 15.80**

<br>

### 3. Setup

The 'template' folder holds all files of the project. To run the app after installing Node Modules use the "npm start" command in the terminal.

<br>

### 4. Web app project structure

- `styles` - contains the CSS files included in the app
- `src` - where the app's JavaScript code lives, inside you can find
  - `common/constants.js` - `common` holds resources used by other files, such resources are the constants in `constants.js`.
  - `data` - holds the **data layer** of the app. In this folder you can find:
    - `favorites.js` - the module responsible for adding and removing movies from favorites.
    - `uploads.js` - the module responsible for adding to and retrieving back the uploaded GIFs' gallery.
    - `images` - A folder containing all images used in the project's design.
  - `events` - holds the core app logic. Inside the folder you can find:
    - `favorites-events.js` - its role is to react to the heart icon - switch the **favorite** status of a movie, i.e. add it to favorites or remove it.
    - `helpers.js` - it has some helpers methods including aliasing for `document.querySelector`, `document.querySelectorAll`, and more.
    - `navigation-events.js` is related to navigation events such as clicking on nav links (Trending, Favorites, etc.), buttons to show more of a part of the app.
    - `search-events.js` is related to the searchbox and the search functionality
    - `upload-events.js` is related to the upload function and displaying the uploaded GIFs'gallery.
  - `requests-service.js` is the **service** file  providing access to the GIPHY API
  - `views` is the folder containing the view **templates**

<br>