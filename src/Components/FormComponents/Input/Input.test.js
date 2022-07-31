import {render} from '@testing-library/react';
import React from 'react';
import {Input} from "./Input";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('Input', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render Input snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Input />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<Input />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <input
    class="input__content"
    type="text"
    value=""
  />
</DocumentFragment>
`);

  });
});

