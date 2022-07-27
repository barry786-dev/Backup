import React from 'react';
import styles from './DataList.module.css';
const DataList = (props) => {
  return (
    <ul className={styles.tilesWrap}>
      {props.data.map((item, index) => {
        return (
          <li key={index}>
            <h2>{`${item.name}`}</h2>
            <p>
              <b>{`Name : ${item.name}`}</b>
            </p>
            <h3>
              {`User Name : ${item.username}`}
            </h3>
            <h3>
              {`Company Name : ${item.company.name}`}
            </h3>
            <h3>
              {`Address : ${item.address.street} ${item.address.suite} ${item.address.zpcode}`}
            </h3>
            <button>Read it</button>
          </li>
        );
      })}
    </ul>
  );
};
export default DataList;

            