import { React, useContext } from 'react';
import {DataToPassContext} from './Context';
import Card from './UI/Card';
const List = () => {
    const place = useContext(DataToPassContext);
  return <Card>
      <h2>
      <b>Name</b>: {place.name} 
      </h2>
      <h2>
      <b>Location</b>: {place.location} 
      </h2>
  </Card>;
};
export default List;
