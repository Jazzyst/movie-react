import React, {useCallback, useEffect, useState} from 'react';
import './MainPage.scss';
import {Header} from "../../Containers/Header";
import {Main} from "../../Containers/Main";
import {Footer} from "../../Containers/Footer";
import {ModalAdd} from "../../Components/Modals/ModalAdd";
import {MovieDetails} from "../../Components/MovieDetails";
import {ErrorBoundary} from "../../Components/ErrorBoundary/ErrorBoundary";
import { useModal } from "../../hooks/useModal/useModal";
import {useDispatch, useSelector} from 'react-redux'
import {fetchMovieBySearchString, fetchMovies, sortMoviesBy} from "../../API/actions/fetchMovies";
import { Formik } from 'formik';
import {ValidateSchema} from "../../Components/Modals/ValidateSchema";
import {useLocation, useParams} from "react-router";

const useQuery = () => new URLSearchParams(useLocation().search);
export function MainPage() {
  const [isMovieDetailsOpen, setMovieDetailsOpen] = useState(false);
  const [isModalAddOpen, handleModalAddOpen, handleModalAddClose] = useModal();
  const [activeLink, setActiveLink] = useState('all');
  const dispatch = useDispatch();
  const moviesList = useSelector(state => state.moviesState.movies);
  const movieDetails = useSelector(state => state.moviesState.activeMovie);
  const query = useQuery();
  const genre = query.get('genre');
  const sortBy = query.get('sortBy');
  const {searchQuery} = useParams();


  useEffect(() => {
    if (genre){
      setActiveLink(genre)
      dispatch(fetchMovies({filter: genre}));
    } else if(searchQuery) {
      dispatch(fetchMovieBySearchString(searchQuery));
    } else if(sortBy) {
      dispatch(sortMoviesBy({sortBy}));
    } else {
      dispatch(fetchMovies());
    }
  },[]);

  const resetMovieDetails = () => {
    setMovieDetailsOpen(null);
  };

  return (
    <>
      {
        isMovieDetailsOpen ?
          <MovieDetails movieDetails={movieDetails} resetMovieDetails={resetMovieDetails}/> :
          <Header handleModalAddOpen={handleModalAddOpen}/>
      }

      <ErrorBoundary>
        {moviesList ? <Main setMovieDetailsOpen={setMovieDetailsOpen} moviesList={moviesList} activeLink={activeLink} setActiveLink={setActiveLink}/> : null}
      </ErrorBoundary>

      <Footer/>

      {
        isModalAddOpen && <Formik validationSchema={ValidateSchema} initialValues={{}} onSubmit={() => {}}>
          {
            (formikProps) => {
              const {dirty} = formikProps;
              return (
                <ModalAdd handleModalAddClose={handleModalAddClose}/>
              )
            }
          }
        </Formik>
      }
    </>
  );
}

