import Loadable from 'react-loadable';
import Loading from '../components/shared/loading';

export default function load(opts) {
  return Loadable(
    Object.assign(
      {
        loading: Loading,
        delay: 200,
        timeout: 10
      },
      opts
    )
  );
}
