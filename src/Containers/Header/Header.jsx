import React, {useState, useEffect, useRef} from 'react';
import './Header.scss';
import { Logo } from "../../Components/Logo";
import { BtnAddMovie } from "../../Components/BtnAddMovie";
import { SearchInput } from "../../Components/SearchInput";
import { BtnSearch } from "../../Components/BtnSearch";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {fetchMovieBySearchString} from "../../API/actions/fetchMovies";
import {useNavigate} from "react-router";



export function Header({handleModalAddOpen}) {
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getMovies = () => {
    dispatch(fetchMovieBySearchString(searchString));
    setSearchString('');
    navigate(`/search/${searchString}`)
  }

  return (
    <header className="header">
      <div className="header__logo">
        <Logo/>
        <BtnAddMovie handleModalAddOpen={handleModalAddOpen}/>
      </div>
      <h1 className="header__title">FIND YOUR MOVIE</h1>
      <form className="header__search">
        <SearchInput searchString={searchString} setSearchString={setSearchString}/>
        <BtnSearch type='button' getMovies={getMovies}/>
      </form>

    </header>
  );
}

Header.propTypes = {
  toggleModalAdd: PropTypes.func
}
