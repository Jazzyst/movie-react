import {render} from '@testing-library/react';
import React from 'react';
import {BtnSearch} from "./BtnSearch";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('BtnSearch', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render BtnSearch snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <BtnSearch />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<BtnSearch />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <button
    class="btn__search"
  >
    search
  </button>
</DocumentFragment>
`)

  });
});

