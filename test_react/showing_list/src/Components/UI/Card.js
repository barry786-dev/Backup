import React from 'react';
import styles from './Card.module.css';
const Card = (props) => {
  const cardClasses = styles.card + ' ' + props.className;
  console.log(cardClasses);
  return <div className={cardClasses}>{props.children}</div>;
};
export default Card;
