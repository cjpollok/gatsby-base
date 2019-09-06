import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './header.module.scss'

const Header = ({ siteTitle }) => (
  <header className={styles.container}>
    <div className={styles.menu}>
      <h1 className={styles.homeLink}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
