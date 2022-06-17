import  React from 'react';
import './Filter.scss';
import PropTypes from 'prop-types';
import {filterList} from "../../Services/mock/filterListMock";

export function Filter() {

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