import { React, useState } from 'react';
import './App.css';
import Button from './components/Button';
import DataList from './components/DataList';

function App() {
  const [fetchedData, setFetchedData] = useState('');
  const onClickHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setFetchedData(json));
  };
  return (
    <div className='App'>
      <Button onClick={onClickHandler}>Fetch Data</Button>
      {fetchedData ? <DataList data={fetchedData}></DataList> : ''}
    </div>
  );
}

export default App;
