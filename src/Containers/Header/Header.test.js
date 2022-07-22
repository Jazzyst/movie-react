import {render, screen, fireEvent} from '@testing-library/react';
import React from 'react';
import {Header} from "./Header";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('Search', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should find Search Input', () => {
    store = mockStore(initialState);
    const { container, getByRole, getByDisplayValue } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.change(getByRole('textbox'),{
      target: {value: 'testValue'}
    });
    expect(getByDisplayValue('testValue')).toBeInTheDocument();

  });
});

