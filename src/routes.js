import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NewNaver from './pages/NewNaver';
import UpdateNaver from './pages/UpdateNaver';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/new" component={NewNaver} />
      <Route path="/update" component={UpdateNaver} />
    </Switch>
  );
};

export default Routes;
