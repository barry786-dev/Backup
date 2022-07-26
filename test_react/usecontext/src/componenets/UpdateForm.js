import React, { useContext } from 'react';
import { DataToPassContext } from './Context';
import Card from './UI/Card';

const UpdateForm = () => {
  const place = useContext(DataToPassContext);

  return (
    <Card>
      <div>
        <label>New Name: </label>
        <input
          onChange={(event) => place.setName(event.target.value)}
        />
      </div>

      <div>
        <label>New Location: </label>
        <input
          onChange={(event) => place.setLocation(event.target.value)}
        />
      </div>
    </Card>
  );
};

export default UpdateForm;
