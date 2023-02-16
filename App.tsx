import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Handle successful login here
        })
        .catch((error) => {
          // Handle login error here
        });
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Handle successful signup here
        })
        .catch((error) => {
          // Handle signup error here
        });
    }
  };

  const toggleIsLogin = () => setIsLogin(!isLogin);

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      <button onClick={toggleIsLogin}>
        {isLogin ? 'Switch to Signup' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default LoginSignup;

