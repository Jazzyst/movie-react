import React from 'react';
import {MainPage} from "./Pages/MainPage";

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.scss';
import {NotFound} from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Navigate replace to="/search" />}/>
        <Route path='/search' element={<MainPage/>}/>
        <Route path='/search/:searchQuery' element={<MainPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;