import React, {useEffect, useState} from 'react';
import './MainPage.scss';
import {Header} from "../../Containers/Header";
import {Main} from "../../Containers/Main";
import {Footer} from "../../Containers/Footer";
import {ModalAdd} from "../../Components/Modals/ModalAdd";
import {MovieDetails} from "../../Components/MovieDetails";
import {movieList} from "../../Services/mock/movieListMock";
import {MoviesListView} from "./MoviesListView";
import {ErrorBoundary} from "../../Components/ErrorBoundary/ErrorBoundary";

export function MainPage() {
  const [modalAdd, setModalAdd] = useState(false);
  const [movieDetails, setMovieDetails] = useState(false);
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    setMoviesList(new MoviesListView(movieList))
  },[]);

  const toggleModalAdd = () => {
    setModalAdd(!modalAdd);
  };

  const resetMovieDetails = () => {
    setMovieDetails(null);
  };

  const setMovieById = (id) => {
    setMovieDetails(moviesList.getMovieId(id));
  };

  return (
    <>
      <Header toggleModalAdd={toggleModalAdd}/>
      <ErrorBoundary>
        {moviesList ? <Main setMovieById={setMovieById} moviesList={moviesList.list}/> : null}
      </ErrorBoundary>

      <Footer/>
      {
        modalAdd ? <ModalAdd toggleModalAdd={toggleModalAdd}/> : null
      }
      {
        movieDetails ? <MovieDetails movieDetails={movieDetails} resetMovieDetails={resetMovieDetails}/> : null
      }
    </>
  );
}
