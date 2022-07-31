import {render} from '@testing-library/react';
import React from 'react';
import {ActionPopup} from "./ActionPopup";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('ActionPopup', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render ActionPopup snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ActionPopup />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<ActionPopup />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="action-popup"
  >
    <button
      class="popup-close__btn"
    >
      ✖
    </button>
    <div
      class="action-popup__action"
    >
      Edit
    </div>
    <div
      class="action-popup__action"
    >
      Delete
    </div>
  </div>
</DocumentFragment>
`);

  });
});

