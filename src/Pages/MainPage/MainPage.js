import React from 'react';
import './MainPage.scss';
import {Header} from "../../Containers/Header";
import {Main} from "../../Containers/Main";
import {Footer} from "../../Containers/Footer";

export function MainPage() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

