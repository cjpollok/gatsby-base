import React from 'react';
import { mount } from 'enzyme';

import SecondPage, { SecondPageBase } from '../pages/page-2';

describe('SecondPage Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <SecondPage />
    );
    const base = wrapper.find(SecondPageBase);
    expect(base.render()).toMatchSnapshot();
  });
});
