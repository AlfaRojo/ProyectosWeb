import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Add from './components/add';
import Buy from './components/buy';
import LoginForm from './components/loginForm';
import RegistrationForm from './components/registrationForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/create' element={ <Add /> } />
          <Route path='/edit' element={ <Buy /> } />
          <Route path='/login' element={ <LoginForm /> } />
          <Route path='/register' element={ <RegistrationForm /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
