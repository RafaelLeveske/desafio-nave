import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NewNaver from './pages/NewNaver';
import UpdateNaver from './pages/UpdateNaver';

import { AuthProvider } from './hooks/AuthContext';

const Routes = () => {
  return (
    <Switch>
      <AuthProvider>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/new" component={NewNaver} />
        <Route path="/update" component={UpdateNaver} />
      </AuthProvider>
    </Switch>
  );
};

export default Routes;
