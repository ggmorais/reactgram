import React from 'react';
import { Route, Switch } from 'react-router-dom';
import E404 from './pages/E404';
import E500 from './pages/E500';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => (
  <Switch>
    <Route path="/" exact><Home /></Route>
    <Route path="/login" exact><Login /></Route>
    <Route path="/register" exact><Register /></Route>
    <Route path="/:profile" exact><Home /></Route>
    <Route path="/500"><E500 /></Route>
    <Route><E404 /></Route>
  </Switch>
);

export default Routes;