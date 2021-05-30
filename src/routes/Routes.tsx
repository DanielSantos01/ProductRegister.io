import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './components/Route';
import { AuthRoutes, AppRoutes } from './RoutesGroups';
import { useAuth } from '../hooks/Auth';

const Routes: React.FC = () => {
  const { hasUserData } = useAuth();
  return (
    <Switch>
      <Route path="/auth" component={AuthRoutes} />
      <Route path="/app" component={AppRoutes} />
      <Redirect to={hasUserData ? '/app' : '/auth'} />
    </Switch>
  );
};

export default Routes;
