import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51INnHpEljLhTgnopDapCVMk7vXD8VK5hTiQwsI8Lcmw38MHC9Y6Wrb0xYxuPAO3tszOPm8BdS7DlG1dtdtO5Xgx8009TFBF6Yj'
);

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is: ', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
