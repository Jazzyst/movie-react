import React from "react";
import PropTypes from "prop-types";
import './DatePicker.scss';

export function DatePicker({
  id,
  placeholder,
  value,
  onChange,
  name,
  errors,
  isError
}) {
  const onDateChange = (event) => onChange('release_date', event.target.value);
  return (
    <>
      <input
        type="date"
        placeholder={placeholder}
        value={value}
        onChange={onDateChange}
        name={name}
        id={id}
      />
      {isError  && errors[name] && (<span className='error-form'>{errors[name]}</span>)}
    </>
  );
}

DatePicker.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string
};