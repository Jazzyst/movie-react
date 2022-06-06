import React from 'react';
import './MovieCard.scss';
import { ActionBtn } from "./components/ActionBtn";
import PropTypes from 'prop-types';

export function MovieCard({movie}) {
  return (
    <div className='movie-card'>
      <div className="movie-card__image">
        <img src={movie.img} alt="" />
      </div>
      <ActionBtn/>

      <div className='movie-card__info'>
        <div className="movie-card__info-top">
          <div className="movie-card__title">
            {movie.title}
          </div>
          <div className="movie-card__release-date">
            {movie.releaseDate}
          </div>
        </div>
        <div className="movie-card__info-bottom">
          <div className="movie-card__genre">
            {movie.genre}
          </div>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.number,
  genre: PropTypes.string
};

MovieCard.defaultProps = {
  title: '',
  releaseDate: null,
  genre: ''
};

