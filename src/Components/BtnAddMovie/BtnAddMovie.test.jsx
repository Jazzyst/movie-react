import React from 'react';
import {render} from '@testing-library/react';
import {BtnAddMovie} from "./BtnAddMovie";

describe('BtnAddMovie', () => {
  test('renders BtnAddMovie snapshot', () => {
    const {asFragment} = render(<BtnAddMovie/>);
    expect(asFragment(<BtnAddMovie />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <button
    class="btn__add-movie"
    type="submit"
  >
    + add movie
  </button>
</DocumentFragment>
`);
  })
})