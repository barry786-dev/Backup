import { useState} from 'react';
import { DataToPassContext } from './componenets/Context';
import Card from './componenets/UI/Card';
import List from './componenets/List';
import UpdateForm from './componenets/UpdateForm';
import './App.css';

function App() {
  const [name, setName] = useState("Egypt");
  const [location, setLocation] = useState("Africa");
  return (
    <DataToPassContext.Provider value={{
      name,
      location,
      setName,
      setLocation
    }}>
      <Card className='App'>
        <UpdateForm />
        <List />
      </Card>
    </DataToPassContext.Provider>
  );
}

export default App;
