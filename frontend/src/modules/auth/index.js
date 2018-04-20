import * as services from './services';
import Login from './pages/login';
import Register from './pages/register';

export default {
  namespace : 'auth',
  state     : {
    user:null,
  },
  effects: {
    *register({ payload }, { call, put }, { history }) {
      const { data } = yield call(services.register, payload);
      yield put({ type: 'auth/saveUser', payload: data });
      history.push('/');
    },
    *login({ payload }, { call, put }) {
      const { data } = yield call(services.login, payload);
      yield put({ type: 'auth/saveUser', payload: data });
    },
  },
  *catch(err, { type }) {
    const { status } = err.response;
    switch(type) {
      case 'auth/register':
        return alert('fail to register');
      case 'auth/login':
        if(status == 400) return alert('wrong username or password');
        return alert('fail to login');
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
