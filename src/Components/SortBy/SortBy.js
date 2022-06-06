import React from 'react';
import PropTypes from 'prop-types';
import './SortBy.scss';

export function SortBy() {
  const optionList = [
    {
      id: 1,
      value: 'release date',
      name: 'release date',
    },
    {
      id: 2,
      value: 'value1',
      name: 'value1',
    },
    {
      id: 3,
      value: 'value2',
      name: 'value2',
    },
  ];
  const options = optionList.map(el => <option key={el.id} value={el.value}>{el.name}</option>)
  return(
    <div className='select-wrap'>
      <label htmlFor="" className='select-wrap__label'>Sort by</label>
      <select name="" id="" className='select-wrap__select'>{options}</select>
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

