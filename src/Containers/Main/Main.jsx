import React from 'react';
import {SearchResults} from "../../Components/SearchResults";
import './Main.scss';
import { MovieList } from "../../Components/MovieList";
import {ErrorBoundary} from "../../Components/ErrorBoundary/ErrorBoundary";

export function Main({setMovieById, moviesList}) {
  return (
    <main className='main'>
      <SearchResults/>
      <ErrorBoundary>
        <MovieList setMovieById={setMovieById} moviesList={moviesList}/>
      </ErrorBoundary>
    </main>
  );
}