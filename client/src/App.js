import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Shipping from './components/Shipping/Shipping';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/cart" component={Cart} />
      <Route path="/shipping" component={Shipping} />
      <Redirect to="/cart"/>
    </Switch>
  </BrowserRouter>
);

export default App;
