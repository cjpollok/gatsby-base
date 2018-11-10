import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import ContentWrapper from '../components/contentWrapper';

export const SecondPageBase = () => (
  <Link to="/">Go back to the homepage</Link>
);

const SecondPage = () => (
  <Layout>
    <ContentWrapper>
      <SecondPageBase />
    </ContentWrapper>
  </Layout>
);

export default SecondPage;
