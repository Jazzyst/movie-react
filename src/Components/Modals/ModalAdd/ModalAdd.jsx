import React, {useState} from "react";
import { Input, DatePicker, Select } from "../../FormComponents";
import { Button } from "../../FormComponents/Button";
import { Modal } from "../Modal";
import {useFormikContext} from "formik";
import {useDispatch} from "react-redux";
import {createNewMovie} from "../../../API/actions/manageMovies";
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#f65261',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export function ModalAdd({handleModalAddClose}) {
  const {
    values,
    handleChange,
    resetForm,
    validateForm,
    errors,
    setFieldValue
  } = useFormikContext();

  const [isFieldsInvalid, setIsFieldsInvalid] = useState(false);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({});

  const onChangeHandler = (event) => {
    const inputData = event.target.value;
    // const inputDataForEdit = event.target.name === 'runtime' ? Number(inputData) : inputData;
    handleChange(event);
    setNewItem({
      ...newItem,
      [event.target.name]: inputData
    })
  };

  const onChangeNumberHandler = (event, field) => {
    setFieldValue(field, Number(event.target.value));
  };

  const onCreateMovie = (movie, event) => {

    event.preventDefault();
    console.log('onCreateMovie')
    validateForm().then(error => {
      if (Object.keys(error).length !== 0) {
        setIsFieldsInvalid(true);
      } else {
        dispatch(createNewMovie(movie));
        handleModalAddClose();
        resetForm();
      }
    })
  }

  return (
    <Modal title='add movie' onClose={handleModalAddClose}>
      <form action="" className='modal-form' onSubmit={event => onCreateMovie(values, event)}>
        <div className="inputs-section">
          <div className="inputs-section__left">
            <Input
              label='Title'
              placeholder='Title'
              name='title'
              onChange={onChangeHandler}
              errors={errors}
              isError= {isFieldsInvalid}
            />
            <Input
              label='Movie URL'
              placeholder='Movie URL here'
              name='poster_path'
              onChange={onChangeHandler}
              errors={errors}
              isError= {isFieldsInvalid}
            />
            <Select
              label='Genre'
              placeholder='Select Genre'
              name='genres'
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
              onChange={setFieldValue}
              errors={errors}
              isError= {isFieldsInvalid}
            />
            <Input
              label='Rating'
              placeholder='Rating here'
              name='vote_average'
              onChange={() => onChangeNumberHandler(event, 'vote_average')}
              errors={errors}
              isError= {isFieldsInvalid}
            />
            <Input
              label='Runtime'
              placeholder='Runtime here'
              name='runtime'
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
          onChange={onChangeHandler}
          errors={errors}
          isError= {isFieldsInvalid}
        />

        <div className='button__modals-actions'>
          <Stack spacing={2} direction="row">
              <Button label='Reset' className='primary' type='reset' type='reset' onClick={handleModalAddClose} variant="outlined"/>
              <Button label='Save' className='secondary' variant="contained"/>
          </Stack>
        </div>
      </form>
    </Modal>
  )
}