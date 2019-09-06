import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import ContentWrapper from '../components/ContentWrapper'

export const HomePageBase = () => <Link to="/page-2/">Go to page 2</Link>

const HomePage = () => (
  <Layout>
    <ContentWrapper>
      <HomePageBase />
    </ContentWrapper>
  </Layout>
)

export default HomePage
