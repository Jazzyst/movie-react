import {render} from '@testing-library/react';
import React from 'react';
import {ModalEdit} from "./ModalEdit";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';
import {Formik, useFormikContext} from "formik";
import {ValidateSchema} from "../ValidateSchema";

describe('ModalEdit', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;


  it('should render ModalEdit snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Formik validationSchema={ValidateSchema} initialValues={{}} onSubmit={() => {}}>
            {
              (formikProps) => {
                const {dirty} = formikProps;
                return (
                  <ModalEdit/>
                )
              }
            }
          </Formik>
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<ModalEdit />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="modal"
  >
    <div
      class="modal-header"
    >
      <div
        class="logo"
      >
        <strong>
          netflix
        </strong>
         roulette
      </div>
    </div>
    <div
      class="modal-content"
    >
      <div
        class="modal-content__header"
      >
        <h1
          class="header__title"
        >
          edit movie
        </h1>
        <button
          class="modal-close__button"
          type="button"
        />
      </div>
      <div
        class="child-wrap"
      >
        <form
          action=""
          class="modal-form"
        >
          <div
            class="inputs-section"
          >
            <div
              class="inputs-section__left"
            >
              <div
                class="input"
              >
                <label
                  class="input__header"
                >
                  Title
                </label>
                <input
                  class="input__content"
                  name="title"
                  placeholder="Title"
                  type="text"
                  value=""
                />
              </div>
              <div
                class="input"
              >
                <label
                  class="input__header"
                >
                  Movie URL
                </label>
                <input
                  class="input__content"
                  name="poster_path"
                  placeholder="Movie URL here"
                  type="text"
                  value=""
                />
              </div>
              <div
                class="input"
              >
                <label
                  class="input__header"
                >
                  Genre
                </label>
                <div
                  class="input__select css-b62m3t-container"
                >
                  <span
                    class="css-1f43avz-a11yText-A11yText"
                    id="react-select-2-live-region"
                  />
                  <span
                    aria-atomic="false"
                    aria-live="polite"
                    aria-relevant="additions text"
                    class="css-1f43avz-a11yText-A11yText"
                  />
                  <div
                    class=" css-1dn4aoq-control"
                  >
                    <div
                      class=" css-319lph-ValueContainer"
                    >
                      <div
                        class=" css-14el2xx-placeholder"
                        id="react-select-2-placeholder"
                      >
                        Select...
                      </div>
                      <div
                        class=" css-6j8wv5-Input"
                        data-value=""
                      >
                        <input
                          aria-autocomplete="list"
                          aria-describedby="react-select-2-placeholder"
                          aria-expanded="false"
                          aria-haspopup="true"
                          autocapitalize="none"
                          autocomplete="off"
                          autocorrect="off"
                          class=""
                          id="react-select-2-input"
                          role="combobox"
                          spellcheck="false"
                          style="opacity: 1; width: 100%; grid-area: 1 / 2; min-width: 2px; border: 0px; margin: 0px; outline: 0; padding: 0px;"
                          tabindex="0"
                          type="text"
                          value=""
                        />
                      </div>
                    </div>
                    <div
                      class=" css-1hb7zxy-IndicatorsContainer"
                    >
                      <span
                        class=" css-1okebmr-indicatorSeparator"
                      />
                      <div
                        aria-hidden="true"
                        class=" css-tlfecz-indicatorContainer"
                      >
                        <svg
                          aria-hidden="true"
                          class="css-tj5bde-Svg"
                          focusable="false"
                          height="20"
                          viewBox="0 0 20 20"
                          width="20"
                        >
                          <path
                            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      name="genres"
                      type="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="inputs-section__right"
            >
              <div
                class="input"
              >
                <label
                  class="input__header"
                >
                  Release date
                </label>
                <input
                  name="release_date"
                  placeholder="Select Date"
                  type="date"
                  value=""
                />
              </div>
              <div
                class="input"
              >
                <label
                  class="input__header"
                >
                  Rating
                </label>
                <input
                  class="input__content"
                  name="vote_average"
                  placeholder="Rating here"
                  type="text"
                  value=""
                />
              </div>
              <div
                class="input"
              >
                <label
                  class="input__header"
                >
                  Runtime
                </label>
                <input
                  class="input__content"
                  name="runtime"
                  placeholder="Runtime here"
                  type="text"
                  value=""
                />
              </div>
            </div>
          </div>
          <div
            class="input"
          >
            <label
              class="input__header"
            >
              Overview
            </label>
            <input
              class="input__content"
              name="overview"
              placeholder="Overview Text goes here"
              type="text"
              value=""
            />
          </div>
          <div
            class="button__modals-actions"
          >
            <button
              class="modal-button primary"
              type="reset"
            >
              Reset
            </button>
            <button
              class="modal-button secondary"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</DocumentFragment>
`);

  });
});

