import React from 'react'
import { render } from 'enzyme'

import ContentWrapper from './ContentWrapper'

describe('ContentWrapper Component', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <ContentWrapper>
        <p>Test Child</p>
      </ContentWrapper>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
