import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';

function App() {
  return (
    <div className='App'>
      <LoginForm />
      <SignUpForm />
    </div>
  );
}

export default App;
