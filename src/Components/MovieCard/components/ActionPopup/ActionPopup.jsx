import React, {useState} from 'react';
import PropTypes from "prop-types";
import './ActionPopup.scss';

export function ActionPopup({toggleModalEdit, toggleModalDelete}){
  const [hidePopup, setHidePopup] = useState(true);
  const closePopup = () => {
    setHidePopup(!hidePopup);
  }

  return (
    <>
      {
        hidePopup ?
          <div className='action-popup'>
            <button className='popup-close__btn' onClick={closePopup}>&#10006;</button>
            <div className="action-popup__action" onClick={toggleModalEdit}>Edit</div>
            <div className="action-popup__action" onClick={toggleModalDelete}>Delete</div>
          </div> : null
      }
    </>

  );
}

ActionPopup.propTypes = {
  toggleModalEdit: PropTypes.func,
  toggleModalDelete: PropTypes.func
}