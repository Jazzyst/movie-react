import React from "react";
import PropTypes from "prop-types";
import './Modal.scss';
import {Logo} from "../Logo";

export function Modal({title, onClose, children}) {
  return (
    <div className='modal'>
      <div className="modal-header">
        <Logo />
      </div>
      <div className="modal-content">
        <div className="modal-content__header">
          <h1 className='header__title'>{title}</h1>
          <button type='button' className='modal-close__button' onClick={onClose}/>
        </div>
        <div className="child-wrap">
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
}
