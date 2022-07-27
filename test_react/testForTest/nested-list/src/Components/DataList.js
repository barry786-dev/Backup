import React from 'react';
import styles from './DataList.module.css';
const DataList = (props) => {
  return (
    <ul className={styles.ul}>
      {props.data.map((item) => {
        return (
          <li key={item.id}>
            <p>
              <b>{item.name}</b>
            </p>
            <ul className={styles.ul}>
              {item.books.map((book, index) => {
                return (
                  <li key={`${Math.random()}`}>
                      <h2>{index + 1}</h2>
                    <p>{`Book${index + 1}:`}</p>
                    <h3>{book}</h3>
                    <button>Read it</button>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
export default DataList;
