import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Cart from './pages/CartPage';
import Shipping from './components/Shipping/Shipping';
import styles from './App.module.css';

const App = () => (
  <div className={styles.container}>
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/shipping" component={Shipping} />
        <Redirect to="/cart"/>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
