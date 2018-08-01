import React from 'react';
import { mount } from 'enzyme';

import NotFoundPage, { NotFoundPageBase } from '../404';

describe('404 Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(<NotFoundPage />);
    const base = wrapper.find(NotFoundPageBase);
    expect(base.render()).toMatchSnapshot();
  });
});
