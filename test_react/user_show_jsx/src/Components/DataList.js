import React from 'react';
import styles from './DataList.module.css';
const DataList = (props) => {
  const myUser = props.data;
  return (
    <ul className={styles.ul}>
          <li key={myUser.id}>
          <img src={myUser.avatar} />
          <h2>{myUser.name}</h2>
          <h3>{`Location : ${myUser.location}`}</h3>
          <h3>{`Eats : ${myUser.foodType}`}</h3>
          <h3>{`Age : ${myUser.age}`}</h3>
          <h3>{`Likes : ${myUser.likes}`}</h3>
          <button>{`Twitter : @${myUser.twitterUsername}`}</button>
          </li>
    </ul>
  );
};
export default DataList;
