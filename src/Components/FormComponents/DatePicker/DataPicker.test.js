import {render} from '@testing-library/react';
import React from 'react';
import {DatePicker} from "./DatePicker";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('DatePicker', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render DatePicker snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DatePicker />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<DatePicker />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <input
    type="date"
    value=""
  />
</DocumentFragment>
`);

  });
});

