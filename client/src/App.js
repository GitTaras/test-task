import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Cart from './pages/CartPage';
import Shipping from './pages/ShippingPage';
import styles from './App.module.css';
import store from './boot/config';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
  <div className={styles.container}>
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/shipping" component={Shipping} />
        <Redirect to="/cart"/>
      </Switch>
    </BrowserRouter>
  </div>
  </Provider>
);

export default App;
