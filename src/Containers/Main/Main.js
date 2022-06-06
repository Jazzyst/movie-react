import React from 'react';
import {SearchResults} from "../../Components/SearchResults";
import './Main.scss';
import { MovieList } from "../../Components/MovieList";
import { ErrorBoundary } from "../../Components/ErrorBoundary";

export function Main() {
  return (
    <main className='main'>
      <SearchResults/>
      <ErrorBoundary>
        <MovieList/>
      </ErrorBoundary>
    </main>
  );
}