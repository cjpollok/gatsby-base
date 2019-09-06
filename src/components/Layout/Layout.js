import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Header from '../Header'
import Footer from '../Footer'

import '../../styles/main.scss'
import styles from './layout.module.scss'
import favicon from '../../images/favicon.ico'

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Helmet defaultTitle="Gatsby Base" titleTemplate="%s | Gatsby Base">
      <html lang="en" />
      <link rel="icon" type="image/x-icon" href={favicon} />
      <meta
        name="description"
        content="A base Gatsby setup for use in other projects"
      />
    </Helmet>
    <Header siteTitle="Gatsby Base" />
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
