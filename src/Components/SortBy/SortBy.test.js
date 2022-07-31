import {render} from '@testing-library/react';
import React from 'react';
import {SortBy} from "./SortBy";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('SortBy', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render SortBy snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SortBy />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<SortBy />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="select-wrap"
  >
    <label
      class="select-wrap__label"
      for=""
    >
      Sort by
    </label>
    <select
      class="select-wrap__select"
      id=""
      name=""
    >
      <option
        value="release_date"
      >
        release date
      </option>
      <option
        value="vote_average"
      >
        rating
      </option>
    </select>
    <div
      class="arrow-down"
    />
  </div>
</DocumentFragment>
`);
  });
});

