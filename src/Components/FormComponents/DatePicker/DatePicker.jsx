import React from "react";
import PropTypes from "prop-types";
import './DatePicker.scss';

export function DatePicker({id, placeholder}) {
  return (
    <input type="date" placeholder={placeholder} id={id}/>
  );
}

DatePicker.propTypes = {
  id: PropTypes.any,
  placeholder: PropTypes.string
};