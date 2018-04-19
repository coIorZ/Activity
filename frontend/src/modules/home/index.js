import Home from './pages/home';
import * as services from './services';
import Create from'./pages/create';

export default {
  namespace : 'home',
  state     : {
    activities: null,
  },
  effects: {
    *fetchHome(action, { call, put }) {
      const { data } = yield call(services.fetchHome);
      yield put({
        type: 'home/saveHome',
        payload: data,
      });
    },
    *createActivity({ payload }, { call, put }, { history }) {
      yield call(services.createActivity, payload);
      history.push('/');
    },
  },
  reducers: {
    saveHome(state, { payload }) {
      return {
        ...state,
        activities: payload,
      };
    },
  },
  routes: {
    '/'       : { component: Home },
    '/create' : { component: Create },
  },
};
