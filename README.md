<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# Mov(e)ster

### 1. Description

Mov(e)ster is a simple web app for viewing and adding/removing movies from favorites. It's completely implemented with vanilla JavaScript (Native DOM API) and vanilla CSS (no libraries).

<br>

### 2. Project information

- Language and version: **JavaScript ES2020**
- Platform and version: **Node 14.0+**

<br>

### 3. Goals

You are provided with the complete implementation of the app, however the data is located inside the app, and real world web applications access data from a server (this way data is shared between many web applications and many clients).

The **goal** is to **replace the data layer** with the server provided separately from the template by using AJAX and `fetch` to retrieve data from the server. Detailed description on how to do that further below.

- Working with HTML and CSS and styling different page views
- Working with individual and global event handlers
- Applying logic to specific element types within a global event handler
- Working with storing and retrieving data from `data` attributes
- Working with AJAX and specifically the `fetch` API
- Making request to different endpoints and resolving them
- Working with promises
- Retrieving data from **the server**, converting it to a view and changing the currently displayed partial page view
- Following good practices:
  - Functions should be single-responsible - do one thing and do it well
  - Code should be short and readable
  - No magic strings and numbers - use constants instead

<br>

### 4. Setup

You can work in the `template` folder or create your own **solution** folder and keep the `template` intact. To run the app make sure you have `live-server` installed **globally**. You are also provided with a separate `server` application which provides the data for the app.

<br>

To run the web app:

1. Go inside the `template` folder (or your own work directory)
1. At root level (where the `index.html` is) run `live-server`
1. You are good to go

<br>

To run the server app:

1. Go inside the `server` folder
1. Install all the npm packages running `npm install`
1. Run the server with `npm start` - it will run on port `3000`

**Important:** Make sure you have [Postman](https://www.postman.com/downloads/) installed in order to test server endpoints.

<br>

### 5. Web app project structure

- `images` - contains the images for styling the page
- `posters` - contains the poster images for the movies. They are moved in this folder not just for separation of concerns, but also because at some point the poster image will not be local for the project, i.e. inside the app's folder, but instead will be loaded from remote location, i.e. a server
- `styles` - contains the CSS files included in the app
- `src` - where the app's JavaScript code lives, inside you can find
  - `common/constants.js` - `common` holds resources used by other files, such resources are the constants in `constants.js`. Take a look at the file - remember the rule about no magic strings and numbers, and no hardcoded values?
  - `data` - holds the **data layer** of the app - we want to achieve separation of concerns - that is hold the data in one place, the views in another, the event logic in a third place, etc. This separation allows us to replace each **layer** with another with little to no modification of the rest of the code. All of the data layer is already implemented for you. In this folder you can find:
    - `favorites.js` - the module responsible for adding and removing movies from favorites. It is based on the browser feature `localStorage`. Even though the implementation is complete, you can research more about the `localStorage` and how it can be useful for storing an retrieving data
    - `movies-data.js` - holds the raw movies and categories data. **This will be replaced by the server.**
    - `movies.js` - this is the public movies data API which exposes controlled access to the movies and categories data. **This will also be replaced by the server.**
  - `events` - holds the core app logic. Inside the folder you can find:
    - `favorites-events.js` - its role is to react to the heart icon - switch the **favorite** status of a movie, i.e. add it to favorites or remove it. Its logic is very similar to the heart icon of post in [Telerik Academy Forum](https://forum.telerikacademy.com/)
    - `helpers.js` - it has some helpers methods including aliasing for `document.querySelector` and `document.querySelectorAll`
    - `navigation-events.js` is related to navigation events such as clicking on nav links (Home, Categories, etc.), buttons to show more of a category or a movie
    - `search-events.js` is related to the searchbox and the search functionality
  - `requests-service.js` is the **service** file  providing access to the public API of the data layer. **You will need to make changes to the implementation so data is instead retrieved from the server.**
  - `views` is the folder containing the view **templates**

<br>

### 6. Server endpoints

Now that the data is on the server, there is a very specific way of accessing it. Instead of the functions inside the `data/movies.js` file you will need to make **requests** to the server's **endpoints**. Each endpoint has a specific path or name and takes specific parameters (or none). Endpoints consist of the type of the request (`GET` | `POST` | `PUT` | `PATCH` | `DELETE`) and the URI (the identifier of the resource you want to access). I.e. `GET: /categories` means you will make a `GET` request to the `${INSERT_SERVER_URL_HERE}/categories` URI to retrieve a list of all categories. If the server is running `localhost:3000` this means the request will be made to `http://localhost:3000/categories`.

Description of the server endpoints:

Categories:

- `GET: /categories` - returns a list of all categories
- `GET: /categories/:id` - returns one category by its id, i.e. `GET: /categories/2` will return category with id = 2

Movies:

- `GET: /categories/:id/movies` - return all movies in a category with id = `id`, i.e. `GET: /categories/1/movies`
- `GET: /movies` - returns all movies. This endpoint has an optional `search` **query** parameter which can be used to search for movies containing the `search` parameter's value. I.e. `GET: /movies?search=flash` will return all the movies containing `flash` (non-case sensitive) in their name. Omitting the query parameter returns all movies instead
- `GET: /movies/:id` - returns a single movie by its id


<br>

### 7. The `request` service

The template has its `request-service.js` coupled to the data by `data/movies.js`. To completely remove the data layer (`data/movies-data.js` and `data/movies.js`) you will need to make some changes to the service file. Its functions will take the same parameters but will instead make calls to the server and retrieve the data. You will be using `fetch` to do that.

An example of a request function (if we were working some cats API):

```js
const loadCatById = (id = null) => {
  const fetchedData = fetch(`http://localhost:3000/cats/${id}`)
    .then(response => response.json()); // convert the response object to the result return from the server as a JS object

  return fetchedData;
}
```

If you hover over the function name you will see that the return type is `Promise<any>` which means you will need to make changes to all functions that **consume** the request service, i.e.:

```js
// original implementation
const renderSingleCat = (id = nul) => {
  const cat = loadCatById(id);

  // code to update the view
};
```

If you try to run the code above the `cat` value will be a promise, not a cat object, which means you need to use the promise's methods to get access to the **resolved** value, i.e.

```js
// implementation with promises
const renderSingleCat = (id = nul) => {
  loadCatById(id)
    .then(cat => {
      // code to update the view
    });
};
```

You might want to research what `Promise.all` does and how to use it when you need to make multiple request at the same time.

<br>

Once you have reimplemented the `request-service.js` file and all the functions consuming it, the web app should be working as intended. Since posters are now on the server side, you may also remove the `posters` folder.

<br>

Once the web app is decoupled from the local data and posters, the server can be replaced, extended - new movies might be added, old ones updated (posters, typos, more detailed plot text, etc.) and the web app doesn't need to change in order to reflect those updates.
