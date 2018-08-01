import React from 'react';
import Link from 'gatsby-link';

import ContentWrapper from '../components/contentWrapper';

export const SecondPageBase = () => (
  <Link to="/">Go back to the homepage</Link>
);

const SecondPage = () => (
  <ContentWrapper>
    <SecondPageBase />
  </ContentWrapper>
);

export default SecondPage;
