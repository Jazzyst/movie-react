import {render} from '@testing-library/react';
import React from 'react';
import {MovieCard} from "./MovieCard";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';
import {newItemAdded} from "../../Services/mock/movieListMock";

describe('MovieCard', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render MovieCard snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <MovieCard movie={newItemAdded}/>
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<MovieCard />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="movie-card"
  >
    <div
      class="movie-card__image"
    >
      <img
        alt="HomeAlone"
        src="https://image.tmdb.org/t/p/w500/jwJoURyfm4XxtnYRtIOS2pYR9Np.jpg"
      />
    </div>
    <div
      class="action-btn"
    />
    <div
      class="movie-card__info"
    >
      <div
        class="movie-card__info-top"
      >
        <div
          class="movie-card__title"
        >
          HomeAlone
        </div>
        <div
          class="movie-card__release-date"
        >
          2018-03-22
        </div>
      </div>
      <div
        class="movie-card__info-bottom"
      >
        <div
          class="movie-card__genre"
        >
          Drama
        </div>
      </div>
    </div>
  </div>
</DocumentFragment>
`);

  });
});

