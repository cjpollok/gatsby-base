import React from 'react'
import { mount } from 'enzyme'

import HomePage, { HomePageBase } from '../pages/home'

describe('HomePage Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(<HomePage />)
    const base = wrapper.find(HomePageBase)
    expect(base.render()).toMatchSnapshot()
  })
})
