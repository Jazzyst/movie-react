import React  from "react";
import PropTypes from "prop-types";

export const withLabel = (Component) => (props) => (
  <div className='input'>
    <label htmlFor={props.title} id={props.id} className='input__header'>{props.label}</label>
    <Component {...props}/>
  </div>
);

withLabel.propTypes = {
  id: PropTypes.any,
  label: PropTypes.string
}