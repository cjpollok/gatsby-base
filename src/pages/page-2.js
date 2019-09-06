import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import ContentWrapper from '../components/ContentWrapper'

export const SecondPageBase = () => <Link to="/">Go back to the homepage</Link>

const SecondPage = () => (
  <Layout>
    <ContentWrapper>
      <SecondPageBase />
    </ContentWrapper>
  </Layout>
)

export default SecondPage
