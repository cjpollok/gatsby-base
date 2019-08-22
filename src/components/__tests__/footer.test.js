import React from 'react'
import { render } from 'enzyme'

import Footer from '../footer'

describe('Footer Component', () => {
  it('renders correctly', () => {
    const wrapper = render(<Footer />)
    expect(wrapper).toMatchSnapshot()
  })
})
