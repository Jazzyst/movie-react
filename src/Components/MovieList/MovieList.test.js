import {render} from '@testing-library/react';
import React from 'react';
import {MovieList} from "./MovieList";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';
import {movieList} from "../../Services/mock/movieListMock";

describe('MovieList', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render MovieList snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <MovieList moviesList={movieList}/>
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<MovieList />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="movie-list"
  >
    <div
      class="movie-card"
    >
      <div
        class="movie-card__image"
      >
        <img
          alt="Héctor El Father: Conocerás la verdad"
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
            Héctor El Father: Conocerás la verdad
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
    <div
      class="movie-card"
    >
      <div
        class="movie-card__image"
      >
        <img
          alt="Daddy's Home 2"
          src="https://image.tmdb.org/t/p/w500/rF2IoKL0IFmumEXQFUuB8LajTYP.jpg"
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
            Daddy's Home 2
          </div>
          <div
            class="movie-card__release-date"
          >
            2017-11-09
          </div>
        </div>
        <div
          class="movie-card__info-bottom"
        >
          <div
            class="movie-card__genre"
          >
            Comedy
          </div>
        </div>
      </div>
    </div>
    <div
      class="movie-card"
    >
      <div
        class="movie-card__image"
      >
        <img
          alt="Mom and Dad"
          src="https://image.tmdb.org/t/p/w500/fSaeahvo1GU7v4W6CX2y0j7fxMG.jpg"
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
            Mom and Dad
          </div>
          <div
            class="movie-card__release-date"
          >
            2017-09-24
          </div>
        </div>
        <div
          class="movie-card__info-bottom"
        >
          <div
            class="movie-card__genre"
          >
            Thriller
          </div>
          <div
            class="movie-card__genre"
          >
            Horror
          </div>
          <div
            class="movie-card__genre"
          >
            Comedy
          </div>
        </div>
      </div>
    </div>
  </div>
</DocumentFragment>
`);

  });
});

