import * as actionTypes from './actionTypes';

export const fetchMoviesPending = () => {
  return {
    type: actionTypes.FETCH_MOVIES_PENDING
  }
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    payload: movies
  }
};

export const fetchMovieDetails = (movie) => {
  return {
    type: actionTypes.FETCH_MOVIE_DETAILS,
    payload: movie
  }
};

export const deleteMovie = (id) => {
  return {
    type: actionTypes.DELETE_MOVIE,
    payload: id
  }
};

export const updateMovie = (updateMovie) => {
  return {
    type: actionTypes.UPDATE_MOVIE,
    updateMovie
  }
};

export const createMovie = (newMovie) => {
  return {
    type: actionTypes.CREATE_MOVIE,
    newMovie
  }
}