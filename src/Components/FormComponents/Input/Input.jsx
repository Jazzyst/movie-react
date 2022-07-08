import React from "react";
import PropTypes from "prop-types";
import './Input.scss';

export function Input({
  id,
  placeholder,
  value,
  onChange,
  name,
  readonly,
  errors,
  isError
}) {
  const onInputChange = (event) => onChange(event);
  return (
    <>
      <input
        type="text"
        className={readonly ? 'input__content input__readonly ' : 'input__content'}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        name={name}
        readOnly={readonly}
        id={id}
      />
      {isError  && errors[name] && (<span className='error-form'>{errors[name]}</span>)}
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string,
  readOnly: PropTypes.string,
  value: PropTypes.any
}