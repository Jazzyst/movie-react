import React from "react";
import './ModalDelete.scss';
import { Button } from "../../FormComponents/Button";
import { Modal } from "../Modal";
import {useDispatch} from "react-redux";
import {deleteMovieById} from "../../../API/actions/manageMovies";

export function  ModalDelete({toggleModalDelete, movie, setMovieDetailsOpen}) {
  const dispatch = useDispatch();
  const deleteMovie = () => {
    console.log(movie.id)
    dispatch(deleteMovieById(movie.id));
    toggleModalDelete();
    setMovieDetailsOpen(false);
  }


  return (
    <Modal title='delete movie' onClose={toggleModalDelete}>
      <div className="delete">Are you sure you want to delete this movie?</div>

      <div className="button__modals-actions">
        <Button label="Confirm" className="secondary" onClick={deleteMovie}/>
      </div>
    </Modal>
  );
}