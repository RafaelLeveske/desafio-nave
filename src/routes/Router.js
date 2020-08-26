import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

const Router = ({ isPrivate = false, component: Component, ...rest }) => {
  const { id } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!id ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Router;
