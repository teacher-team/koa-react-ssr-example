import React from 'react';
import { Link } from 'react-router-dom';

import RouteWithSubRoutes from '../components/shared/route-with-sub-routes';

const Home = ({ routes }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/status">status</Link>
        </li>
        <li>
          <Link to="/config">config</Link>
        </li>
      </ul>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  );
};

export default Home;
