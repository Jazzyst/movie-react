import React from "react";
import PropTypes from "prop-types";
import Selects from 'react-select';
import './Select.scss';

export function Select({
   id,
   value,
   name,
   onChange,
   errors,
   isError

}){
  const options = [
    {value: 'adventure', label: 'Adventure'},
    {value: 'science fiction', label: 'Science Fiction'},
    {value: 'action', label: 'Action'},
    {value: 'fantasy', label: 'Fantasy'},
    {value: 'romance', label: 'Romance'},
    {value: 'drama', label: 'Drama'},
    {value: 'mystery', label: 'Mystery'},
    {value: 'thriller', label: 'Thriller'},
  ];


 const customStyles = {
   option: (provided) => ({
     ...provided, padding: 10, backgroundColor: '#424242',  color: 'white', cursor: 'pointer'
   }),
   control: (provided) => ({ ...provided, backgroundColor: '#424242', width: '100%'})
 };

 const setSelectValue = (event) => {
   const valueGenres = event ? event.map(item => item.value) : [];
   onChange('genres', valueGenres)
 };
  return (
    <>
      <Selects
        className="input__select"
        id={id}
        isMulti={true}
        options={options}
        defaultValue={value}
        styles={customStyles}
        name={name}
        onChange={setSelectValue}
      >
      </Selects>
      {isError && errors['genres'] && (<span className='error-form'>{errors['genres']}</span>)}
    </>

  )
}

Select.propTypes = {
  id: PropTypes.any,
  placeholder: PropTypes.string
}
