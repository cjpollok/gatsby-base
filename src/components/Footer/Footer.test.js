import React from 'react'
import { render } from 'enzyme'

import Footer from './Footer'

describe('Footer Component', () => {
  it('renders correctly', () => {
    const wrapper = render(<Footer />)
    expect(wrapper).toMatchSnapshot()
  })
})
