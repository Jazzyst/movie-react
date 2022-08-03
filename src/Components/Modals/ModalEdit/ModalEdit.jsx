import React, {useState} from "react";
import { Input, DatePicker, Select } from "../../FormComponents";
import { Button } from "../../FormComponents/Button";
import { Modal } from "../Modal";
import {useFormikContext} from "formik";
import {useDispatch} from "react-redux";
import {updateMovieByID} from "../../../API/actions/manageMovies";
import Stack from "@mui/material/Stack";

export function ModalEdit({toggleModalEdit, id, setMovieDetailsOpen}) {
  const {
    values,
    handleChange,
    validateForm,
    setFieldValue,
    resetForm,
    errors
  } = useFormikContext();
  const [isFieldsInvalid, setIsFieldsInvalid] = useState(false);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => handleChange(event);

  const onChangeNumberHandler = (event, field) => {
    setFieldValue(field, Number(event.target.value));
  };

  const setUpdateMovie = (movie, event) => {
    movie = {...movie, id: id}
    event.preventDefault();
    validateForm().then(error => {
      if (Object.keys(error).length !==0) {
        setIsFieldsInvalid(true);
      } else {
        dispatch(updateMovieByID(movie));
        toggleModalEdit();
        resetForm();
        setMovieDetailsOpen(false);
      }
    })
  }

  const genres = values.genres ? values.genres.map(genre => {
    return {
      value: genre,
      label: genre
    }
  }) : [];

  return (
    <Modal title='edit movie' onClose={toggleModalEdit}>
      <form action="" className='modal-form' onSubmit={event => setUpdateMovie(values, event)}>
        <div className="inputs-section">
          <div className="inputs-section__left">
            <Input
              label='Title'
              placeholder='Title'
              name='title'
              value={values.title}
              onChange={onChangeHandler}
              errors={errors}
              isError= {isFieldsInvalid}
            />
            <Input
              label='Movie URL'
              placeholder='Movie URL here'
              name='poster_path'
              value={values.poster_path}
              onChange={onChangeHandler}
              errors={errors}
              isError= {isFieldsInvalid}
            />
            <Select
              label='Genre'
              placeholder='Select Genre'
              name='genres'
              value={genres}
              onChange={setFieldValue}
              errors={errors}
              isError= {isFieldsInvalid}
            />
          </div>
          <div className="inputs-section__right">
            <DatePicker
              label='Release date'
              placeholder='Select Date'
              name='release_date'
              value={values.release_date}
              onChange={setFieldValue}
              errors={errors}
              isError= {isFieldsInvalid}
            />
            <Input
              label='Rating'
              placeholder='Rating here'
              name='vote_average'
              value={values.vote_average}
              onChange={() => onChangeNumberHandler(event, 'vote_average')}
              errors={errors}
              isError= {isFieldsInvalid}
            />
            <Input
              label='Runtime'
              placeholder='Runtime here'
              name='runtime'
              value={values.runtime}
              onChange={() => onChangeNumberHandler(event,'runtime')}
              errors={errors}
              isError= {isFieldsInvalid}
            />
          </div>
        </div>
        <Input
          label='Overview'
          placeholder='Overview Text goes here'
          name='overview'
          value={values.overview}
          onChange={onChangeHandler}
          errors={errors}
          isError= {isFieldsInvalid}
        />

        <div className='button__modals-actions'>
          <Stack spacing={2} direction="row">
            <Button label='Reset' className='primary' type='reset'  onClick={toggleModalEdit} variant="outlined"/>
            <Button label='Save' className='secondary' variant="contained"/>
          </Stack>
        </div>
      </form>
    </Modal>

  )
}