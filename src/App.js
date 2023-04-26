import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Add from './components/add';
import Buy from './components/buy';
import LoginForm from './components/loginForm';
import logoutForm from './components/logout';
import RegistrationForm from './components/registrationForm';

import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const cliendID = "834090234899-ej2d2256bvvuej6gt7vjkn749b4rqlpa.apps.googleusercontent.com"

function App() {

  useEffect(() => {
    gapi.load('auth2', () => {
      gapi.auth2.getAuthInstance({
        client_id: cliendID
      })
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <LoginForm /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/create' element={ <Add /> } />
          <Route path='/edit' element={ <Buy /> } />
          <Route path='/register' element={ <RegistrationForm /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
