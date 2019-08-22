import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/components/contentWrapper.module.scss'

const ContentWrapper = ({ children }) => (
  <section className={styles.container}>
    <div className={styles.content}>{children}</div>
  </section>
)

ContentWrapper.defaultProps = {
  children: null,
}

ContentWrapper.propTypes = {
  children: PropTypes.node,
}

export default ContentWrapper
