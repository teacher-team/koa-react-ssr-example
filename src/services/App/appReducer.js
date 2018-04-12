import I from 'immutable';
import { createReducer } from '../../utils/reduxCreator';

const initState = {
  navList: [
    { pId: 0, id: 1, name: '房态' },
    { pId: 0, id: 2, name: '订单' },
    { pId: 0, id: 3, name: '客户' },
    { pId: 0, id: 4, name: '报表' },
    { pId: 0, id: 5, name: '日志' },
    { pId: 0, id: 6, name: '设置' }
  ]
};

const todosReducer = createReducer(I.fromJS(initState), {
  ADD_TODO: state => state
});

export default todosReducer;
