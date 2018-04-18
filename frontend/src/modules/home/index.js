import Home from './pages/home';
import * as services from './services';
import Create from'./pages/create';

export default {
  namespace : 'home',
  state     : {

  },
  effects: {
    *createActivity({ payload }, { call, put }, { history }) {
      yield call(services.createActivity, payload);
      history.push('/');
    },
  },
  routes: {
    '/'       : { component: Home },
    '/create' : { component: Create },
  },
};
