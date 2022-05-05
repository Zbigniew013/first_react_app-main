import React from "react";
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <span className={styles.icon + ' fa fa-tasks'}></span>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/favorite">Favorite</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;