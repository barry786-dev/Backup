import React from 'react';
import styles from './Box.module.css';
const Box = (props) => {
  return (
    <div className={styles.div} style={{ bottom: `${props.shift}px` }}></div>
  );
};
export default Box;
