import './App.css';
import { authors } from './Components/Data';
import DataList from './Components/DataList';
import Card from './Components/UI/Card';
function App() {
  return (
    <Card className='App'>
      <DataList data={authors} />
    </Card>
  );
}

export default App;
