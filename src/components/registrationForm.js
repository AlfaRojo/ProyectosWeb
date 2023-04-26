import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from './api/createUser';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

async function handleSubmit(event) {
    event.preventDefault();

    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    await createUser(username, password);

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    navigate('/');
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
