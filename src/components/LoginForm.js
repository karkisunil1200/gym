import React, {useState} from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login-container'>
      <h2>login form</h2>
      <form>
        <label>username</label>
        <input></input>
        <label>password</label>
        <input></input>
      </form>
    </div>
  );
};

export default LoginForm;
