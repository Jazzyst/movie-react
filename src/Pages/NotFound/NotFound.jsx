import React from 'react';
import './NotFound.scss';
import {Logo} from "../../Components/Logo";
import {Footer} from "../../Containers/Footer";
import {useNavigate} from "react-router";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='not-found__page'>
      <div className='not-found__page-header'>
        <Logo/>
      </div>

      <div className='not-found__page-body'>
        <h1 className='not-found__page-body--title'>Page Not Found</h1>

        <button className="modal-button primary button--not-found" onClick={() => navigate('/')}>
          go back home
        </button>
      </div>
      <Footer/>
    </div>
  )
}
