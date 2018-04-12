import React from 'react';

import RouteWithSubRoutes from '../components/shared/route-with-sub-routes';
import routes from '../routes';

const App = () => (
  <div>
    <div>1231313</div>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);

export default App;
