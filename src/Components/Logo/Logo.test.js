import {render} from '@testing-library/react';
import React from 'react';
import {Logo} from "./Logo";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('Logo', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render Logo snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Logo />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<Logo />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="logo"
  >
    <strong>
      netflix
    </strong>
     roulette
  </div>
</DocumentFragment>
`);

  });
});

