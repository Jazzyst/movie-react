import React from "react";
import './ModalDelete.scss';
import { Button } from "../../FormComponents/Button";
import { Modal } from "../Modal";

export function  ModalDelete({toggleModalDelete}) {
  return (
    <Modal title='delete movie' onClose={toggleModalDelete}>
      <div className="delete">Are you sure you want to delete this movie?</div>

      <div className="button__modals-actions">
        <Button label="Confirm" className="secondary" />
      </div>
    </Modal>
  );
}