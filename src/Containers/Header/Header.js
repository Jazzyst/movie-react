import React from 'react';
import './Header.scss';
import { Logo } from "../../Components/Logo";
import { BtnAddMovie } from "../../Components/BtnAddMovie";
import { SearchInput } from "../../Components/SearchInput";
import { BtnSearch } from "../../Components/BtnSearch/BtnSearch";

export function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo/>
        <BtnAddMovie/>
      </div>
      <h1 className="header__title">FIND YOUR MOVIE</h1>
      <form className="header__search">
        <SearchInput />
        <BtnSearch />
      </form>

    </header>
  );
}