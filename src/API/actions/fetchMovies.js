import {fetchMovieDetails, fetchMoviesPending, fetchMoviesSuccess} from "../../store/movies/actions";
import {get, baseUrl} from "../api";



export const fetchMovies = (filterParams) => {
  const filter = filterParams?.filter ? `?filter=${filterParams?.filter}` : '';
  const url = filterParams?.filter === 'all' ? '/movies' : `/movies${filter}`

  return async dispatch => {
    dispatch(fetchMoviesPending());
    const res = await get(url);

    if (res.error) {
      throw(res.error);
    }
    return dispatch(fetchMoviesSuccess(res.data))
  }
}

export const sortMoviesBy = (filterParams) => {
  const sortBy = filterParams?.sortBy ? `?sortBy=${filterParams?.sortBy}&sortOrder=desc"` : '';
  const url = `/movies${sortBy}`

  return async dispatch => {
    dispatch(fetchMoviesPending());
    const res = await get(url);

    if (res.error) {
      throw(res.error);
    }
    return dispatch(fetchMoviesSuccess(res.data))
  }
}

export const fetchMovieByID = (id) => async (dispatch) => await fetch(`${baseUrl}/movies/${id}`, {
    method: 'GET'
  })
    .then(res =>res.json())
    .then(data => dispatch(fetchMovieDetails(data)));

export const fetchMovieBySearchString = (searchString) => async (dispatch) => await fetch(`${baseUrl}/movies?search=${searchString}&searchBy=title`, {
  method: 'GET'
})
  .then(res =>res.json())
  .then(data => dispatch(fetchMoviesSuccess(data.data)));


