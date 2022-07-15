import {get, baseUrl} from "../api";
import {createMovie, deleteMovie, updateMovie} from "../../store/movies/actions";
import {fetchMovieByID, fetchMovies} from "./fetchMovies";

export const createNewMovie = (newMovie) => (dispatch) => {
  fetch( `${baseUrl}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMovie)
  })
    .then(res => res.json())
    .then(() => {
      dispatch(createMovie(newMovie));
      dispatch(fetchMovies());
    })
}

 export const updateMovieByID = (updatedMovie) => (dispatch) => {
  fetch(`${baseUrl}/movies`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedMovie)
  })
    .then(res => res.json())
    .then((data) => {
      dispatch(updateMovie(data));
      dispatch(fetchMovies());
      dispatch(fetchMovieByID(data.id));
    })
 }

 export const deleteMovieById = (id) => (dispatch) => {
  fetch(`${baseUrl}/movies/${id}`, {
    method: 'DELETE'
  })
    .then(() => {
      dispatch(deleteMovie(id));
      dispatch(fetchMovies());
    })
 }
