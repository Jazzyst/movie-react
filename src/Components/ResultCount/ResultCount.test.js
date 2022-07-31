import {render} from '@testing-library/react';
import React from 'react';
import {ResultCount} from "./ResultCount";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('ResultCount', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render ResultCount snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ResultCount />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<ResultCount />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="result-count"
  >
    39 movies found
  </div>
</DocumentFragment>
`);
  });
});

