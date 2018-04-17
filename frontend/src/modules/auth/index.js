import * as services from './services';
import Login from './pages/login';
import Register from './pages/register';

export default {
  namespace : 'auth',
  state     : {
    user: null,
  },
  effects: {
    *register({ payload }, { call, put }, { history }) {
      yield call(services.register, payload);
      yield put({ type: 'auth/saveUser', payload });
      history.push('/');
    },
  },
  reducers: {
    saveUser(state, { payload: user }) {
      return { ...state, user };
    },
  },
  routes: {
    '/login'    : { component: Login },
    '/register' : { component: Register },
  },
};
