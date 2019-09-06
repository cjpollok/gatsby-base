import React from 'react'

import Layout from '../components/Layout'
import ContentWrapper from '../components/ContentWrapper'

export const NotFoundPageBase = () => (
  <p>You just hit a route that doesn&#39;t exist.</p>
)

const NotFoundPage = () => (
  <Layout>
    <ContentWrapper>
      <NotFoundPageBase />
    </ContentWrapper>
  </Layout>
)

export default NotFoundPage
