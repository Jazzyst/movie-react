import React, {useCallback, useEffect, useState} from 'react';
import './MainPage.scss';
import {Header} from "../../Containers/Header";
import {Main} from "../../Containers/Main";
import {Footer} from "../../Containers/Footer";
import {ModalAdd} from "../../Components/Modals/ModalAdd";
import {MovieDetails} from "../../Components/MovieDetails";
// import {movieList} from "../../Services/mock/movieListMock";
import {MoviesListView} from "./MoviesListView";
import {ErrorBoundary} from "../../Components/ErrorBoundary/ErrorBoundary";
import { useModal } from "../../hooks/useModal/useModal";
import {useDispatch, useSelector} from 'react-redux'
import {fetchMovies} from "../../API/actions/fetchMovies";

export function MainPage() {
  const [isMovieDetailsOpen, setMovieDetailsOpen] = useState(false);
  const [isModalAddOpen, handleModalAddOpen, handleModalAddClose] = useModal();
  const dispatch = useDispatch();
  const moviesList = useSelector(state => state.moviesState.movies);
  const movieDetails = useSelector(state => state.moviesState.activeMovie);

  useEffect(() => {
    dispatch(fetchMovies());
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
        {moviesList ? <Main setMovieDetailsOpen={setMovieDetailsOpen} moviesList={moviesList}/> : null}
      </ErrorBoundary>

      <Footer/>
      {
        isModalAddOpen ? <ModalAdd handleModalAddClose={handleModalAddClose}/> : null
      }
    </>
  );
}

