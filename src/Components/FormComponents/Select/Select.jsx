import React from "react";
import PropTypes from "prop-types";
import {filterList} from "../../../Services/mock/filterListMock";
import './Select.scss';

export function Select({id, placeholder}){
  const options = filterList.map(el => <option value="" key={el.id}>{el.name}</option>)
  return (
    <select className='input__select' id={id} placeholder={placeholder}>
      {options}
    </select>
  )
}

Select.propTypes = {
  id: PropTypes.any,
  placeholder: PropTypes.string
}
