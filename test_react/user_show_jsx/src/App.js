import './App.css';
import { user } from './Components/Data';
import DataList from './Components/DataList';
import Card from './Components/UI/Card';
function App() {
  return (
    <Card className='App'>
      <DataList data={user} />
    </Card>
  );
}

export default App;
