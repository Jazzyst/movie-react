import React from "react";
import {Logo} from "../Logo";
import {Button} from "../FormComponents/Button";
import './MovieDetails.scss';

export function  MovieDetails({movieDetails, resetMovieDetails}) {
  return (
    <div className='movie-details'>
      <div className="movie-details__header">
        <Logo/>
        <Button type='search' className='search-button'/>
      </div>
      <div className="movie-details__content" onClick={resetMovieDetails}>
        <div className="movie-details__content-image">
          <img src={movieDetails.img} alt=""/>
        </div>
        <div className="movie-details__content-info">
          <div className="content__header">
            <div className="content__title">{movieDetails.title}</div>
            <div className="content__rating">{movieDetails.rating}</div>
          </div>
          <div className="content__genre">{movieDetails.genre}</div>
          <div className="content__info">
            <div className="content__releaseDate">{movieDetails.releaseDate}</div>
            <div className="content__rating">{movieDetails.duration}</div>
          </div>
          <div className="content__description">{movieDetails.description}</div>
        </div>
      </div>
    </div>
  )
}
