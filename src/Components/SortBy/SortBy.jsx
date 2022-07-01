import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './SortBy.scss';
import {useDispatch} from "react-redux";
import {sortMoviesBy} from "../../API/actions/fetchMovies";

export function SortBy() {
  const dispatch = useDispatch();
  const [activeOptionValue, setActiveOptionValue] = useState('release_date');
  const optionList = [
    {
      id: 1,
      value: 'release_date',
      name: 'release date',
    },
    {
      id: 2,
      value: 'vote_average',
      name: 'rating',
    }
  ];

  const onHandleChange = (e) => {
    setActiveOptionValue(e.target.value);
    dispatch(sortMoviesBy({sortBy: activeOptionValue}));
  }

  const options = optionList.map(el => <option key={el.id} value={el.value}>{el.name}</option>)
  return(
    <div className='select-wrap'>
      <label htmlFor="" className='select-wrap__label'>Sort by</label>
      <select name="" id="" className='select-wrap__select' onChange={onHandleChange}>{options}</select>
      <div className="arrow-down" />
    </div>
  );
}

SortBy.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  name: PropTypes.string
};

SortBy.defaultProps = {
  id: 1,
  value: 'release date',
  name: 'release date'
};

