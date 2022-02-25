import React from 'react';
import styles from './DataList.module.css';
const DataList = (props) => {
  return (
    <ul>
      {props.data.map((item) => {
        return (
          <li key={`${Math.random()}`}>
            <p className={styles.name}>
              <b>{`Owner name : ${item.name}`}</b>
            </p>
            <ul className={styles.ul}>
              {item.pets.map((pet, index) => {
                return (
                  <li key={`${Math.random()}`}>
                    <h2>{index + 1}</h2>
                    <p>{`Pet ${index + 1}:`}</p>
                    <h3>{`Name : ${pet.name}:`}</h3>
                    <h3>{`Type : ${pet.type}:`}</h3>
                    <button>Read about this pet</button>
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
