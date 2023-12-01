import React, { useState, useEffect } from 'react';
import clemsonPaw from './assets/clemson-paw.png';
import Date from './components/Date'


const LoginForm = () => {
  const [showPaw, setShowPaw] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPaw(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = () => {
    // Add sign up logic here using 'username' and 'password'
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleLogin = () => {
    // Add login logic here using 'username' and 'password'
    console.log('Username:', username);
    console.log('Password:', password);
  };

  //Display the image of the paw and ask for username to login
  //TODO: Create an option to login as a member or executive member
  return (
    <div className="login-container">
      {showPaw && <img src={clemsonPaw} alt="Clemson Paw" className="clemson-paw" />} 
      <h2>Login to Clemson Club Tennis</h2>
      {!showPaw && (
        <>
          <form className='button-container'>
            <label>
              Username:
              <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <button type="button" onClick={handleSignUp} id="signup">
              Sign Up
            </button>
            <button type="button" onClick={handleLogin} id="login">
              Log In
            </button>
          </form>
        </>
      )}
      <Date />
    </div>
  );
}

export default LoginForm;