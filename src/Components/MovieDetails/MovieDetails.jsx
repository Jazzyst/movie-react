import React from "react";
import {Logo} from "../Logo";
import {Button} from "../FormComponents/Button";
import './MovieDetails.scss';
import PropTypes from "prop-types";
import {useNavigate} from "react-router";


export function  MovieDetails({movieDetails}) {
  const navigate = useNavigate()
  return (
    <div className='movie-details'>
      <div className="movie-details__header">
        <Logo/>
        <Button type='search' className='search-button' onClick={() => navigate('/')}/>
      </div>
      <div className="movie-details__content" >
        <div className="movie-details__content-image">
          <img src={movieDetails.poster_path} alt=""/>
        </div>
        <div className="movie-details__content-info">
          <div className="content__header">
            <div className="content__title">{movieDetails.title}</div>
            <div className="content__rating">{movieDetails.vote_average}</div>
          </div>
          <div className="content__genre">
            {movieDetails.genres}
          </div>
          <div className="content__info">
            <div className="content__releaseDate">{movieDetails.release_date}</div>
            <div className="content__rating">{movieDetails.runtime} min</div>
          </div>
          <div className="content__description">{movieDetails.overview}</div>
        </div>
      </div>
    </div>
  )
}

MovieDetails.propTypes = {
  title: PropTypes.string,
  vote_average: PropTypes.number,
  runtime: PropTypes.number,
  release_date: PropTypes.number,
  genres: PropTypes.array
};

MovieDetails.defaultProps = {
  title: '',
  vote_average: 0,
  runtime: 0,
  release_date: null,
  genres: []
};
