import React, {useState} from 'react';
import { ActionPopup } from "../ActionPopup";
import PropTypes from "prop-types";
import './ActionBtn.scss';



export function ActionBtn({toggleModalEdit, toggleModalDelete}) {
  const [actionPopup, setActionPopup] = useState(false);

  const actionBtn = () => {
    setActionPopup(!actionPopup)
  }
  return (
    <div className='action-btn' onMouseEnter={actionBtn}
    onMouseLeave={actionBtn}>
      {
        actionPopup ?
          <ActionPopup  toggleModalEdit={toggleModalEdit} toggleModalDelete={toggleModalDelete}/> : null
      }
    </div>
  );
}

ActionBtn.propTypes = {
  toggleModalEdit: PropTypes.func,
  toggleModalDelete: PropTypes.func
}