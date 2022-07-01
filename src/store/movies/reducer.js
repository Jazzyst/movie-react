import * as actionTypes from './actionTypes';

const initialState = {
  loading: false,
  movies: [],
  activeMovie: {},
  newMovie: null
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_PENDING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload
      }
    case actionTypes.FETCH_MOVIE_DETAILS:
      return {
        ...state,
        activeMovie: action.payload
      };
    case actionTypes.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload),
        activeMovie: {}
      };
    case actionTypes.UPDATE_MOVIE:
      return {
        ...state,
      };
    case actionTypes.CREATE_MOVIE:
      return {
        ...state,
        newMovie: action.newMovie
      };
    default:
      return state;
  }
}