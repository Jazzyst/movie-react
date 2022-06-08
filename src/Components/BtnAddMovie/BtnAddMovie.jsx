import React from 'react';
import './BtnAddMovie.scss';
import PropTypes from "prop-types";

export function BtnAddMovie({toggleModalAdd}) {
  return (
    <button className="btn__add-movie" type="submit" onClick={toggleModalAdd}>+ add movie</button>
  );
}

BtnAddMovie.peropTypes = {
  toggleModalAdd: PropTypes.func
}

