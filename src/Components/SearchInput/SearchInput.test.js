import {render} from '@testing-library/react';
import React from 'react';
import {SearchInput} from "./SearchInput";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('SearchInput', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render SearchInput snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchInput />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<SearchInput />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <input
    class="input__search"
    placeholder="What do you want to watch?"
    value=""
  />
</DocumentFragment>
`);
  });
});

