import React from 'react';
import { Filter } from "../Filter";
import { SortBy } from "../SortBy";
import './SearchResults.scss';
import { ResultCount } from "../ResultCount";

export function SearchResults({activeLink, setActiveLink}) {
  return (
    <div className='search-result'>
      <div className="filters-wrap">
        <Filter activeLink={activeLink} setActiveLink={setActiveLink}/>
        <SortBy />
      </div>
      <ResultCount />
    </div>
  );
}