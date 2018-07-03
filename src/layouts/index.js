import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/main.scss';
import styles from '../styles/layouts/index.module.scss';
import favicon from '../images/favicon.ico';

const Layout = ({ children, data }) => (
  <div className={styles.container}>
    <Helmet
      defaultTitle={data.site.siteMetadata.title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <html lang="en" />
      <link rel="icon" type="image/x-icon" href={favicon} />
      <meta
        name="description"
        content="A base Gatsby setup for use in other projects"
      />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
    <Footer />
  </div>
);

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
          title
      }
    }
  }
`;
