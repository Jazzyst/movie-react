import {reducer, initialState} from "./reducer";
import {movieList, itemToUpdate, newItemAdded} from "../../Services/mock/movieListMock";
import {
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_DETAILS,
  DELETE_MOVIE,
  UPDATE_MOVIE,
  CREATE_MOVIE
} from "./actionTypes";

describe('reducer', () => {
  it(`should handle ${FETCH_MOVIES_PENDING}`, () => {
    expect(reducer(initialState, {
      type: FETCH_MOVIES_PENDING,
      payload: {loading: true}
    })).toEqual({
      loading: true,
      movies: [],
      activeMovie: {},
      newMovie: null,
      updatedMovie: {}
    });
  });

  it(`should handle ${FETCH_MOVIES_SUCCESS}`, () => {
    expect(reducer(initialState, {
      type: FETCH_MOVIES_SUCCESS,
      payload: movieList
    })).toEqual({
      loading: false,
      movies: movieList,
      activeMovie: {},
      newMovie: null,
      updatedMovie: {}
    });
  });

  it(`should handle ${FETCH_MOVIE_DETAILS}`, () => {
    expect(reducer(initialState, {
      type: FETCH_MOVIE_DETAILS,
      payload: movieList[0]
    })).toEqual({
      loading: false,
      movies: [],
      activeMovie: movieList[0],
      newMovie: null,
      updatedMovie: {}
    });
  });

  it(`should handle ${DELETE_MOVIE}`, () => {
    expect(reducer({
      loading: false,
      movies: movieList,
      activeMovie: {},
      newMovie: null,
      updatedMovie: {}
    }, {
      type: DELETE_MOVIE,
      payload: {
        movies: movieList,
        activeMovie: {}
      }
    })).toEqual({
      loading: false,
      movies: movieList,
      activeMovie: {},
      newMovie: null,
      updatedMovie: {}
    });
  });

  it(`should handle ${UPDATE_MOVIE}`, () => {
    expect(reducer(initialState, {
      type: UPDATE_MOVIE,
      payload: itemToUpdate
    })).toEqual({
      loading: false,
      movies: [],
      activeMovie: {},
      newMovie: null,
      updatedMovie: itemToUpdate
    });
  });

  it(`should handle ${CREATE_MOVIE}`, () => {
    expect(reducer({
      loading: false,
      movies: [],
      activeMovie: {},
      newMovie: {},
      updatedMovie: {}
    }, {
      type: CREATE_MOVIE,
      newMovie: newItemAdded
    })).toEqual({
      loading: false,
      movies: [],
      activeMovie: {},
      newMovie: newItemAdded,
      updatedMovie: {}
    });
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
})
