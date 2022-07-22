import {render} from '@testing-library/react';
import React from 'react';
import {ActionBtn} from "./ActionBtn";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('ActionBtn', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render ActionBtn snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ActionBtn />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<ActionBtn />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="action-btn"
  />
</DocumentFragment>
`);

  });
});

