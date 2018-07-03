import React from 'react';
import Link from 'gatsby-link';

import ContentWrapper from '../components/contentWrapper';

const IndexPage = () => (
  <ContentWrapper>
    <Link to="/page-2/">Go to page 2</Link>
  </ContentWrapper>
);

export default IndexPage;
