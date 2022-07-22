import {render} from '@testing-library/react';
import React from 'react';
import {Main} from "./Main";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('Main', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render Main snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<Main />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <main
    class="main"
  >
    <div
      class="search-result"
    >
      <div
        class="filters-wrap"
      >
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
      </div>
      <div
        class="result-count"
      >
        39 movies found
      </div>
    </div>
    <h1
      style="color: lightsalmon; text-align: center;"
    >
      Something went wrong...
    </h1>
  </main>
</DocumentFragment>
`);
  });
});

