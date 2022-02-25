import { React, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Triangle from './components/Triangle';

function App() {
  const [shiftState, setShiftState] = useState(0);
  const onClickHandler = () => {
    const windowWidth = window.innerWidth;
    setShiftState((prevShiftState) => {
      if (prevShiftState === windowWidth) {
        return -30;
      }
      return prevShiftState + 30;
    });
  };
  return (
    <div className='App'>
      <Triangle shift={shiftState} />
      <Button onClick={onClickHandler}>shift it right</Button>
    </div>
  );
}

export default App;
