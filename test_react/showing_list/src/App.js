import './App.css';
import { people } from './Components/Data';
import DataList from './Components/DataList';
import Card from './Components/UI/Card';
function App() {
  return (
    <Card className='App'>
      <DataList data={people} />
    </Card>
  );
}

export default App;
