import React from 'react';

import styles from '../styles/components/footer.module.scss';

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.menu}>
      <a
        href="https://github.com/cjpollok/gatsby-base"
        rel="nofollow"
      >
        See on GitHub
      </a>
    </div>
  </footer>
);

export default Footer;
