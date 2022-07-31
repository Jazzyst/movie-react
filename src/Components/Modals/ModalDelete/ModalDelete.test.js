import {render} from '@testing-library/react';
import React from 'react';
import {ModalDelete} from "./ModalDelete";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('ModalDelete', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render ModalDelete snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalDelete />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<ModalDelete />)).toMatchInlineSnapshot(`
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
        >
          delete movie
        </h1>
        <button
          class="modal-close__button"
          type="button"
        />
      </div>
      <div
        class="child-wrap"
      >
        <div
          class="delete"
        >
          Are you sure you want to delete this movie?
        </div>
        <div
          class="button__modals-actions"
        >
          <button
            class="modal-button secondary"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</DocumentFragment>
`);

  });
});

