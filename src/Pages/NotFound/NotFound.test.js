import {render} from '@testing-library/react';
import React from 'react';
import {NotFound} from "./NotFound";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('NotFound', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render NotFound snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<NotFound />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="not-found__page"
  >
    <div
      class="not-found__page-header"
    >
      <div
        class="logo"
      >
        <strong>
          netflix
        </strong>
         roulette
      </div>
    </div>
    <div
      class="not-found__page-body"
    >
      <h1
        class="not-found__page-body--title"
      >
        Page Not Found
      </h1>
      <button
        class="modal-button primary button--not-found"
      >
        go back home
      </button>
    </div>
    <footer>
      <div
        class="logo"
      >
        <strong>
          netflix
        </strong>
         roulette
      </div>
    </footer>
  </div>
</DocumentFragment>
`);
  });
});

