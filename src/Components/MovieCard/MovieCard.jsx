import React, {useState} from 'react';
import './MovieCard.scss';
import { ActionBtn } from "./components/ActionBtn";
import PropTypes from 'prop-types';
import {ModalEdit} from "../Modals/ModalEdit";
import {ModalDelete} from "../Modals/ModalDelete";
import {useDispatch} from "react-redux";
import {fetchMovieByID} from "../../API/actions/fetchMovies";

export function MovieCard({movie, setMovieDetailsOpen}) {
  const dispatch = useDispatch();
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const toggleModalEdit = () => {
    setModalEdit(!modalEdit)
  }

  const toggleModalDelete = () => {
    setModalDelete(!modalDelete)
  }

  const onShowMovieDetails = ()  => {
    setMovieDetailsOpen(true);
    dispatch(fetchMovieByID(movie.id))
  }

  return (
    <>
      <div className='movie-card' >
        <div className="movie-card__image" onClick={onShowMovieDetails}>
          <img src={movie.poster_path} alt={movie.title} />
        </div>
        <ActionBtn toggleModalEdit={toggleModalEdit} toggleModalDelete={toggleModalDelete}/>

        <div className='movie-card__info'>
          <div className="movie-card__info-top">
            <div className="movie-card__title">
              {movie.title}
            </div>
            <div className="movie-card__release-date">
              {movie.release_date}
            </div>
          </div>
          <div className="movie-card__info-bottom">
            {movie.genres.map(genre => <div className="movie-card__genre" key={genre}>{genre}</div>)}
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
  release_date: PropTypes.number,
  genres: PropTypes.array
};

MovieCard.defaultProps = {
  title: '',
  release_date: null,
  genres: []
};

