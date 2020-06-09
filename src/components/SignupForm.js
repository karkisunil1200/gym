import React, {useState} from 'react';

const SignUpForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    role: ''
  });

  const changeHandler = event => {
    setUser({...user, [event.target.name]: event.target.value});
    console.log([event.target.name], event.target.value);
  };
  return (
    <div>
      <h2>Signup Form</h2>
      <div>
        <form>
          <label>name</label>
          <input name='name' onChange={changeHandler} value={user.name} />

          <label>email</label>
          <input name='email' onChange={changeHandler} type='email' value={user.email} />

          <label>username</label>
          <input name='username' onChange={changeHandler} value={user.username} />

          <label>password</label>
          <input name='password' onChange={changeHandler} value={user.password} />

          <label>role</label>
          <select name='role' id='role' value={user.role} onChange={changeHandler}>
            <option value=''>Select Role</option>
            <option value='instructor'>instructor</option>
            <option value='client'>client</option>
          </select>
        </form>
      </div>
      role: {user.role}
    </div>
  );
};

export default SignUpForm;
