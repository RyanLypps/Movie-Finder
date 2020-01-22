require('dotenv').config();

const axios = require('axios');
const express = require('express');
const morgan = require('morgan');


const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/movies/:title', (req, res) => {
  movieTitle = req.params.title;
  return axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${movieTitle}`)
    .then(response => res.send(response.data))
    .catch(err => console.log(err))
});

app.get('/movie/:id', (req, res) => {
  moviesID = req.params.id;
  return axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${moviesID}`)
  .then(response => res.send(response.data))
  .catch(err => console.log(err));
});

module.exports = app;