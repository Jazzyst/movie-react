import React from 'react';
import './MovieList.scss';
import { MovieCard } from "../MovieCard";
import { movieList } from "../../Services/mock/movieListMock";

export function MovieList() {

  const movies = movieList.map(el => (
    <MovieCard
      key={el.id}
      movie={el}
    />
  ));
  return (
    <div className='movie-list'>
      {movies}
    </div>
  );
}