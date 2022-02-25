import { React, useState } from 'react';
import Card from './UI/Card';
import styles from './Dataform.module.css';

const Dataform = () => {
  const [nameState, setNameState] = useState('');
  const [ageState, setAgeState] = useState('');

  const userNameChangeHandler = (event) => {
    setNameState((prev) => {
      return event.target.value;
    });
  };
  const ageChangeHandler = (event) => {
    setAgeState((prev) => {
      return event.target.value;
    });
  };

  return (
    <Card cardCssClassName={styles.input}>
      <form>
        <p>
          <b>{`Display Name: `}</b>
          {nameState}
        </p>
        <p>
          <b>{`Dispaly Age: `}</b>
          {ageState}
        </p>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          // value={entereduserName}
          onChange={userNameChangeHandler}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          // value={enteredAge}
          onChange={ageChangeHandler}
        />
      </form>
    </Card>
  );
};
export default Dataform;
