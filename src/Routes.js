import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Breed from './pages/Breed';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/:breed" component={Breed} />
  </Switch>
);

export default Routes;
