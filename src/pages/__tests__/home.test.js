import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import HomePage, { HomePageBase } from '../home';

describe('HomePage Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const base = wrapper.find(HomePageBase);
    expect(base.render()).toMatchSnapshot();
  });
});
