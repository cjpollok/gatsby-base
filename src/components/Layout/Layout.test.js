import React from 'react'
import { shallow } from 'enzyme'

import Layout from './Layout'

describe('Layout Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Layout>
        <p>Test Child</p>
      </Layout>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
