import React from "react";
import PropTypes from "prop-types";
import './Input.scss';

export function Input({id, placeholder}) {
  return (
    <input type="text" className='input__content' placeholder={placeholder} id={id}/>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.any
}