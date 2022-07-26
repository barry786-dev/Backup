import { React, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Box from './components/Box';

function App() {
  const [shiftState, setShiftState] = useState(0);
  const onClickHandler = () => {
    const windowHeight = window.innerHeight;
    setShiftState(() => {
      if (shiftState >= windowHeight) {
        return -30;
      }
      return shiftState + 30;
    });
  };
  return (
    <div className='App'>
      <Box shift={shiftState} />
      <Button onClick={onClickHandler}>👆 Move Up 👆</Button>
    </div>
  );
}

export default App;
