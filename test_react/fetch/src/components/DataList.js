import React from 'react';
import styles from './DataList.module.css';
const DataList = (props) => {
  return (
    <ul className={styles.tilesWrap}>
      {props.data.map((book, index) => {
        return (
          <li key={index}>
            <h2>{`${book.name}`}</h2>
            <p>
              <b>{`Book : ${book.name}`}</b>
            </p>
            <h3>{`Author : ${book.authors}`}</h3>
            <h3>{`Publisher : ${book.publisher}`}</h3>
            <h3>{`ISBN : ${book.isbn}`}</h3>
            <button>Read it</button>
          </li>
        );
      })}
    </ul>
  );
};
export default DataList;
