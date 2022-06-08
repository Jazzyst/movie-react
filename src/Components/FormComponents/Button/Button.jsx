import React from "react";
import classNames from 'classnames';
import PropTypes from "prop-types";
import './Button.scss'

export function Button({type, label, onClick, className}) {
  const btnClassName = classNames('modal-button', className)
  return (
    <button
      type={type}
      className={btnClassName}
      onClick={onClick}
    >{label}</button>
  );
}

Button.propTypes = {
  type: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
}