import React from "react";
import styles from './PageTitle.module.scss';

const PageTitle = (props) => {
  return <div className={styles.header}>
    {props.children}
  </div>
};

export default PageTitle;