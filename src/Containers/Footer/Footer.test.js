import {render} from '@testing-library/react';
import React from 'react';
import {Footer} from "./Footer";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('Footer', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render Footer snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<Footer />)).toMatchInlineSnapshot(`
<DocumentFragment>
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
</DocumentFragment>
`);
  });
});

