import React, {useState} from 'react';
import './Filter.scss';
import PropTypes from 'prop-types';
import {filterList} from "../../Services/mock/filterListMock";
import {useDispatch} from "react-redux";
import {fetchMovies} from "../../API/actions/fetchMovies";


export function Filter() {
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState(1);
  const getMoviesByGenre = (genre, id) => {
    dispatch(fetchMovies({filter: genre}))
    setActiveLink(id);
  }
  const filter = filterList.map(el =>
    <li
      onClick={() => getMoviesByGenre(el.name, el.id)}
      key={el.id}

      className={`filters__item ${activeLink === el.id ? 'active' : ''}`} >{el.name}</li>
  )

  return (
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