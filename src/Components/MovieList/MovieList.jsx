import React from 'react';
import './MovieList.scss';
import PropTypes from "prop-types";
import { MovieCard } from "../MovieCard";

export function MovieList({setMovieById, moviesList}) {
  const movies = moviesList.map(el => (
    <MovieCard
      key={el.id}
      movie={el}
      setMovieById={() => setMovieById(el.id)}
    />
  ));
  return (
    <div className='movie-list'>
      {movies}
    </div>
  );
}

MovieList.propTypes = {
  moviesList: PropTypes.array,
  setMovieDetails: PropTypes.func
}