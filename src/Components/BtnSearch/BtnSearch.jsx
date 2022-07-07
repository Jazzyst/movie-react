import React from 'react';
import './BtnSearch.scss';

export function BtnSearch({getMovies, type}) {
  return (
    <button
      className="btn__search"
      type={type}
      onClick={getMovies}
    >search</button>
  );
}