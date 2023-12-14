
import { useSelector } from 'react-redux';
import './App.css';
import Subchild from './Components/Subchild';

function App() {
const data = useSelector((c)=> c.state.value)
  return (
    <div className="App">
    <h2>Count : {data}</h2>
    <Subchild/>
    </div>
  );
}

export default App;
