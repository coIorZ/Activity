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
      const { data } = yield call(services.register, payload);
      yield put({ type: 'auth/saveUser', payload: data });
      history.push('/');
    },
    *login({ payload }, { call, put }, { history }) {
      const { data } = yield call(services.login, payload);
      yield put({ type: 'auth/saveUser', payload: data });
      history.push('/');
    },
  },
  *catch(err, { type }) {
    if(type == 'auth/register') {
      alert('fail to register');
    } else if(type == 'auth/login') {
      alert('fail to login');
    }
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
