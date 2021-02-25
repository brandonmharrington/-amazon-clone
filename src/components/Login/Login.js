import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './Login.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/');
      })
      .catch(err => alert(err.message));
  };

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth) {
          history.push('/');
        }
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className="login">
      <Link to={'/'}>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon Fake Clone's Conditions of Use
            and Privacy Notice.
          </p>
        </form>
        <p className="new">New to Amazon?</p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
