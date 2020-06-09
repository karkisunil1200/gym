import React, {useState} from 'react';

const LoginForm = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const onHandleChange = event => {
    setUser({...user, [event.target.name]: event.target.value});
    console.log([event.target.name], event.target.value);
  };

  return (
    <div className='login-container'>
      <h2>login form</h2>
      <form className='login-form'>
        <label>username</label>
        <input name='username' value={user.username} onChange={onHandleChange} />
        <label>password</label>
        <input
          name='password'
          type='password'
          value={user.password}
          onChange={onHandleChange}
        ></input>
      </form>
      <h2>username: {user.username}</h2>
      <h2>password: {user.password}</h2>
    </div>
  );
};

export default LoginForm;
