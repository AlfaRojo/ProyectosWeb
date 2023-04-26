import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginForm.css';
import { GoogleLogin } from 'react-google-login';
import { getUserAsync} from './api/createUser'

const cliendID = "834090234899-ej2d2256bvvuej6gt7vjkn749b4rqlpa.apps.googleusercontent.com"

function LoginForm() {
  localStorage.clear();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const userData = await getUserAsync(username, password);
    if (password === userData) {
      console.log('Login Successful');
      localStorage.setItem('username', username);
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  }

  const onSuccess = (res) => {
    navigate('/home');
  };

  const onFailure = (res) => {
    alert('Login Failed');
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div className="form-group">
            <a href='/register'>Register</a>
        <button type="submit">Login</button>
        <GoogleLogin
            clientId={cliendID}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
