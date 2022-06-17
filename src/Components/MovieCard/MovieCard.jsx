import React, {useState} from 'react';
import './MovieCard.scss';
import { ActionBtn } from "./components/ActionBtn";
import PropTypes from 'prop-types';
import {ModalEdit} from "../Modals/ModalEdit";
import {ModalDelete} from "../Modals/ModalDelete";

export function MovieCard({movie, setMovieById}) {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const toggleModalEdit = () => {
    setModalEdit(!modalEdit)
  }

  const toggleModalDelete = () => {
    setModalDelete(!modalDelete)
  }

  const onShowMovieDetails = ()  => {
    setMovieById(true);
  }

  return (
    <>
      <div className='movie-card' onClick={onShowMovieDetails}>
        <div className="movie-card__image">
          <img src={movie.img} alt={movie.title} />
        </div>
        <ActionBtn toggleModalEdit={toggleModalEdit} toggleModalDelete={toggleModalDelete}/>

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

      {modalEdit ?
        <ModalEdit toggleModalEdit={toggleModalEdit}/> : null}
      {modalDelete ?
        <ModalDelete toggleModalDelete={toggleModalDelete}/> : null}
    </>

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

