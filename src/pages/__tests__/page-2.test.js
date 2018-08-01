import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import SecondPage, { SecondPageBase } from '../page-2';

describe('SecondPage Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <SecondPage />
      </MemoryRouter>
    );
    const base = wrapper.find(SecondPageBase);
    expect(base.render()).toMatchSnapshot();
  });
});
