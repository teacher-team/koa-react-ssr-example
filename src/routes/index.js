import load from './load';

const Home = load({
  loader: () => import('../containers/home')
});

const RoomStatus = load({
  loader: () => import('../containers/status')
});

const HotelConfig = load({
  loader: () => import('../containers/config')
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
