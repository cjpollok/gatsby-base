import React from 'react';
import { render } from 'enzyme';

import Header from '../header';

describe('Header Component', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Header siteTitle="Site Title" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
