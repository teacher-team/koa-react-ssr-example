import Loadable from 'react-loadable';
import Loading from '../components/shared/loading';

const Home = Loadable({
  loader: () => import('../containers/home'),
  loading: Loading
});

const RoomStatus = Loadable({
  loader: () => import('../containers/room-status'),
  loading: Loading
});

const HotelConfig = Loadable({
  loader: () => import('../containers/hotel-config'),
  loading: Loading
});

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/status',
        component: RoomStatus
      },
      {
        path: '/config',
        component: HotelConfig
      }
    ]
  }
];

export default routes;
