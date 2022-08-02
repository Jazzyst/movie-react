import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { store } from "./store";

const app = (
  <App
    BrowserRouter={BrowserRouter}
    store={store}
  />
);

hydrate(app, document.getElementById('root'));


