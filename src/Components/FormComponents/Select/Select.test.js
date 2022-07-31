import {render} from '@testing-library/react';
import React from 'react';
import {Select} from "./Select";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

describe('Select', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render Select snapshot', () => {
    store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Select />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment(<Select />)).toMatchInlineSnapshot(`
<DocumentFragment>
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
  </div>
</DocumentFragment>
`);

  });
});

