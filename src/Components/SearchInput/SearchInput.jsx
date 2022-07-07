import React from 'react';
import './SearchInput.scss';

export function SearchInput({searchString, setSearchString}) {
  return (
    <input
      placeholder="What do you want to watch?"
      className="input__search"
      value={searchString}
      onChange={event => setSearchString(event.target.value)}
    />
  );
}