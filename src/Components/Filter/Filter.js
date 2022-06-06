import  React from 'react';
import './Filter.scss';
import PropTypes from 'prop-types';

export function Filter() {
  const filterList = [
    {
      id: 1,
      name: 'all',
      active: true
    },
    {
      id: 2,
      name: 'documentary',
      active: false
    },
    {
      id: 3,
      name: 'comedy',
      active: false
    },
    {
      id: 4,
      name: 'horror',
      active: false
    },
    {
      id: 5,
      name: 'crime',
      active: false
    }
  ];

  const filter = filterList.map(el => <li key={el.id} className={`filters__item ${el.active ? 'active' : ''}`}>{el.name}</li>)
  return(
      <ul className='filters'>{filter}</ul>
  )
}

Filter.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool
}

Filter.defaultProps = {
  id: 1,
  name: 'all',
  active: true

}