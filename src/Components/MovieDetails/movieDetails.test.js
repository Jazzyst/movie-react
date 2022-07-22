import {render} from '@testing-library/react';
import React from 'react';
import {MovieDetails} from "./MovieDetails";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';
import {newItemAdded} from "../../Services/mock/movieListMock";

describe('MovieDetails', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render MovieDetails snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <MovieDetails movieDetails={newItemAdded}/>
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<MovieDetails />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="movie-details"
  >
    <div
      class="movie-details__header"
    >
      <div
        class="logo"
      >
        <strong>
          netflix
        </strong>
         roulette
      </div>
      <button
        class="modal-button search-button"
        type="search"
      />
    </div>
    <div
      class="movie-details__content"
    >
      <div
        class="movie-details__content-image"
      >
        <img
          alt=""
          src="https://image.tmdb.org/t/p/w500/jwJoURyfm4XxtnYRtIOS2pYR9Np.jpg"
        />
      </div>
      <div
        class="movie-details__content-info"
      >
        <div
          class="content__header"
        >
          <div
            class="content__title"
          >
            HomeAlone
          </div>
          <div
            class="content__rating"
          >
            8.8
          </div>
        </div>
        <div
          class="content__genre"
        >
          Drama
        </div>
        <div
          class="content__info"
        >
          <div
            class="content__releaseDate"
          >
            2018-03-22
          </div>
          <div
            class="content__rating"
          >
            90 min
          </div>
        </div>
        <div
          class="content__description"
        />
      </div>
    </div>
  </div>
</DocumentFragment>
`);

  });
});

