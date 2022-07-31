import {render} from '@testing-library/react';
import React from 'react';
import {Button} from "./Button";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('Button', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render Button snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Button />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<Button />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <button
    class="modal-button"
  />
</DocumentFragment>
`);

  });
});

