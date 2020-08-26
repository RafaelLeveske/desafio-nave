import React from 'react';
import { Switch } from 'react-router-dom';

import Router from './Router';

import Home from '../pages/Home';
import Login from '../pages/Login';
import NewNaver from '../pages/NewNaver';
import UpdateNaver from '../pages/UpdateNaver';
import Profile from '../pages/Profile';

const Routes = () => {
  return (
    <Switch>
      <Router path="/" exact component={Login} />
      <Router path="/home" component={Home} isPrivate />
      <Router path="/new" component={NewNaver} isPrivate />
      <Router path="/update/:id+" component={UpdateNaver} isPrivate />
      <Router path="/profile/:id+" component={Profile} isPrivate />
    </Switch>
  );
};

export default Routes;
