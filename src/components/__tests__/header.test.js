import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Header from '../header';

describe('Header Component', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <MemoryRouter>
        <Header siteTitle="Site Title" />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
