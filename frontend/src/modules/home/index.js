import Home from './pages/home';
import * as services from './services';
import Create from'./pages/create';

export default {
  namespace : 'home',
  state     : {

  },
  effects: {
    *createActivity({ payload }, { call, put }) {
      const { data } = yield call(services.createActivity, payload);
      console.log(data);
    },
  },
  routes: {
    '/'       : { component: Home },
    '/create' : { component: Create },
  },
};
