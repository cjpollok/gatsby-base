import React from 'react';

import ContentWrapper from '../components/contentWrapper';

export const NotFoundPageBase = () => (
  <p>You just hit a route that doesn&#39;t exist.</p>
);

const NotFoundPage = () => (
  <ContentWrapper>
    <NotFoundPageBase />
  </ContentWrapper>
);

export default NotFoundPage;
