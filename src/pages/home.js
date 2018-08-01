import React from 'react';
import Link from 'gatsby-link';

import ContentWrapper from '../components/contentWrapper';

export const HomePageBase = () => (
  <Link to="/page-2/">Go to page 2</Link>
);

const HomePage = () => (
  <ContentWrapper>
    <HomePageBase />
  </ContentWrapper>
);

export default HomePage;
