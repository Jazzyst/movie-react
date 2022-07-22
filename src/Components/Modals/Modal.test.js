import {render} from '@testing-library/react';
import React from 'react';
import {Modal} from "./Modal";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('Modal', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render Modal snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Modal />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<Modal />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="modal"
  >
    <div
      class="modal-header"
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
      class="modal-content"
    >
      <div
        class="modal-content__header"
      >
        <h1
          class="header__title"
        />
        <button
          class="modal-close__button"
          type="button"
        />
      </div>
      <div
        class="child-wrap"
      />
    </div>
  </div>
</DocumentFragment>
`);

  });
});

