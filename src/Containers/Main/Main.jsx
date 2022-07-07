import React from 'react';
import {SearchResults} from "../../Components/SearchResults";
import './Main.scss';
import { MovieList } from "../../Components/MovieList";
import {ErrorBoundary} from "../../Components/ErrorBoundary/ErrorBoundary";

export function Main({setMovieDetailsOpen, moviesList}) {
  return (
    <main className='main'>
      <SearchResults/>
      <ErrorBoundary>
        <MovieList
          setMovieDetailsOpen={setMovieDetailsOpen}
          moviesList={moviesList}/>
      </ErrorBoundary>
    </main>
  );
}