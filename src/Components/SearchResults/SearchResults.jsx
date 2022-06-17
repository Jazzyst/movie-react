import React from 'react';
import { Filter } from "../Filter";
import { SortBy } from "../SortBy";
import './SearchResults.scss';
import { ResultCount } from "../ResultCount";

export function SearchResults() {
  return (
    <div className='search-result'>
      <div className="filters-wrap">
        <Filter />
        <SortBy />
      </div>
      <ResultCount />
    </div>
  );
}