import I from 'immutable';
import { createReducer } from '../../utils/reduxCreator';

const initState = {
  navList: [
    { pId: 0, id: 1, name: '状态', key: 'status' },
    { pId: 0, id: 6, name: '设置', key: 'config' }
  ]
};

const todosReducer = createReducer(I.fromJS(initState), {
  ADD_TODO: state => state
});

export default todosReducer;
