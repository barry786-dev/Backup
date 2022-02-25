import React from 'react';
import styles from './Triangle.module.css';
const Triangle = (props) => {
  return (
    <div className={styles.div} style={{ left: `${props.shift}px` }}></div>
  );
};
export default Triangle;
