import React from 'react';
import './Header.scss';
import { Logo } from "../../Components/Logo";
import { BtnAddMovie } from "../../Components/BtnAddMovie";
import { SearchInput } from "../../Components/SearchInput";
import { BtnSearch } from "../../Components/BtnSearch";
import PropTypes from "prop-types";

export function Header({toggleModalAdd}) {

  return (
    <header className="header">
      <div className="header__logo">
        <Logo/>
        <BtnAddMovie toggleModalAdd={toggleModalAdd}/>
      </div>
      <h1 className="header__title">FIND YOUR MOVIE</h1>
      <form className="header__search">
        <SearchInput />
        <BtnSearch />
      </form>

    </header>
  );
}

Header.propTypes = {
  toggleModalAdd: PropTypes.func
}
