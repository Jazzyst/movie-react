import React from "react";
import classNames from 'classnames';
import PropTypes from "prop-types";
import './Button.scss'
import ButtonMUI  from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#f65261'
    }
  }
});

export function Button({type, label, onClick, className, variant = 'contained'}) {
  const btnClassName = classNames('modal-button', className)
  return (
    <ThemeProvider theme={theme}>
      <ButtonMUI
        type={type}
        className={btnClassName}
        onClick={onClick}
        variant={variant}
      >
        {label}
      </ButtonMUI>
    </ThemeProvider>
  );
}

Button.propTypes = {
  type: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
}