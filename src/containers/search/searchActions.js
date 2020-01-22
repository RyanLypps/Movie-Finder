import axios from "axios";

export function updateMovie(movieValueSearched) {
  return {
    type: 'UPDATE_MOVIE_VALUE',
    payload: movieValueSearched
  }
}

export function getMovie(title) {
    return {
        type: 'GET_MOVIE',
        payload: axios.get(`/movies/${title}`)
    };
}


export function getInfo(id) {
  return {
    type: 'GET_INFO',
    payload: axios.get(`/movie/${id}`)
  }
}