import React, {useEffect, useState} from 'react';
import './MovieCard.scss';
import { ActionBtn } from "./components/ActionBtn";
import PropTypes from 'prop-types';
import {ModalEdit} from "../Modals/ModalEdit";
import {ModalDelete} from "../Modals/ModalDelete";
import {useDispatch} from "react-redux";
import {fetchMovieByID, fetchMovies} from "../../API/actions/fetchMovies";
import {Formik} from "formik";
import {ValidateSchema} from "../Modals/ValidateSchema";
import {useNavigate, useParams} from "react-router";

export function MovieCard({movie, setMovieDetailsOpen}) {
  const dispatch = useDispatch();
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();


  const toggleModalEdit = () => {
    setModalEdit(!modalEdit)
  }

  const toggleModalDelete = () => {
    setModalDelete(!modalDelete)
  }

  const onShowMovieDetails = ()  => {
    setMovieDetailsOpen(true);
    dispatch(fetchMovieByID(movie.id))
    setQuery(movie.id);
  }

  useEffect(()=> {
    const  params = new URLSearchParams();
    if (query) {
      params.append('movie', movie.id)
    } else {
      params.delete('movie');
    }
    navigate({search: params.toString()})
  },[query])



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

      {
        modalEdit && <Formik validationSchema={ValidateSchema} initialValues={{}} onSubmit={() => {}}>
          {
            (formikProps) => {
              console.log(formikProps)
              const {dirty} = formikProps;
              return (
                <ModalEdit toggleModalEdit={toggleModalEdit} id={movie.id} setMovieDetailsOpen={setMovieDetailsOpen}/>
              )
            }
          }
        </Formik>
      }

      {modalDelete ?
        <ModalDelete movie={movie} toggleModalDelete={toggleModalDelete} setMovieDetailsOpen={setMovieDetailsOpen}/> : null}
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

