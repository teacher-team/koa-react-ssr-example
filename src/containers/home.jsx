import React from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RouteWithSubRoutes from '../components/shared/route-with-sub-routes';

import style from './home.less';

const Home = props => {
  const { routes, app } = props;
  const renderMenu = () =>
    app.get('navList').map(nav => (
      <Menu.Item key={nav.get('id')}>
        <Link to={`/${nav.get('key')}`}>
          <div style={{ width: 120, textAlign: 'center' }}>
            {nav.get('name')}
          </div>
        </Link>
      </Menu.Item>
    ));
  return (
    <section className={style.main}>
      <div className={style.aside}>
        <header className={style.header}>
          <div className={style.log}>123123123</div>
        </header>
      </div>
      <div className={style.window}>
        <header className={style.header}>
          <div className={style.log}>
            <Menu mode="horizontal">{renderMenu()}</Menu>
          </div>
        </header>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    </section>
  );
};

export default connect(state => state)(Home);
