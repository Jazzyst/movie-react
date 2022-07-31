import {render} from '@testing-library/react';
import React from 'react';
import {Filter} from "./Filter";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('Filter', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render Filter snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Filter />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<Filter />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <ul
    class="filters"
  >
    <li
      class="filters__item active"
    >
      all
    </li>
    <li
      class="filters__item "
    >
      documentary
    </li>
    <li
      class="filters__item "
    >
      comedy
    </li>
    <li
      class="filters__item "
    >
      horror
    </li>
    <li
      class="filters__item "
    >
      crime
    </li>
  </ul>
</DocumentFragment>
`);

  });
});

