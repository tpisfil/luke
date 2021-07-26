import './App.css';
import {Router} from '@reach/router'
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <Router>
        <People path="/people"/>
        <Planets path="/planets"/>
      </Router>
    </div>
  );
}

export default App;      
