import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Add from './components/add';
import Buy from './components/buy';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/create' element={ <Add /> } />
          <Route path='/edit' element={ <Buy /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
