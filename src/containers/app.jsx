import React from 'react';
import { Switch } from 'react-router-dom';

import RouteWithSubRoutes from '../components/shared/route-with-sub-routes';
import routes from '../routes';

import style from './app.less';

const App = () => (
  <Switch>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </Switch>
);

export default App;
