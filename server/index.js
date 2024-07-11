import express from 'express';
import cors from 'cors';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { movies, categories } from './data/movies.js';

const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());

app.use('/posters', express.static(join(__dirname, 'posters')));

app.get('', (req, res) => {
  res
    .status(200)
    .json({
      app: 'Movies Corner Server',
      version: '1.0.0',
    });
});

app.get('/categories', (req, res) => {
  res
    .status(200)
    .json(categories.map(c => ({
      ...c,
      moviesCount: movies.filter(m => m.genre === c.name).length,
    })));
});

app.get('/categories/:id/movies', (req, res) => {
  const category = categories.find(c => c.id === +req.params['id']);
  res
    .status(200)
    .json(movies.filter(m => m.genre === category?.name) || []);
});

app.get('/categories/:id', (req, res) => {
  const category = categories.find(c => c.id === +req.params['id']);

  if (category) {
    return res
      .status(200)
      .json(category);
  }

  return res
    .status(404)
    .json({
      message: `Category with id ${req.params['id']} was not found!`,
    });
});

app.get('/movies', (req, res) => {
  if (req.query['search']) {
    return res
      .status(200)
      .json(movies.filter(m => m.title.toLowerCase().includes(req.query['search'].toLowerCase())));
  }

  return res
    .status(200)
    .json(movies);
});

app.get('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === +req.params['id']);
  if (!movie) {
    return res
      .status(404)
      .json({
        message: `Movie with id ${req.params['id']} was not found!`,
      });
  }

  res
    .status(200)
    .json(movie);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
