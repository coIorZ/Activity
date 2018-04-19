import User from "./pages/user";
import Update from "./pages/update";
import Change from "./pages/change";
import * as services from './services';

export default {
  namespace : "user",
  state     : { 
    user: null,
  },
  effects: {
    *fetchUser({ payload }, { call, put }) {
      const { data } = yield call(services.fetchUser, payload);
      yield put({ type: 'user/saveUser', payload: data });
    },
    *changePassword({ payload }, { call }, { history }) {
      yield call(services.changePassword, payload);
      history.push(`/u/${payload.id}`);
    },
    *updateParticle({ payload }, { call }, { history }) {
      yield call(services.updateParticle, payload);
      history.push(`/u/${payload.id}`);
    },
    *logout(action, { put }, { history }) {
      yield put({ type: 'auth/saveUser', payload: null });
      history.push('/');
    },
  },
  *catch(err, { type }) {
    const { status } = err.response;
    switch(type) {
      case 'user/changePassword':
        if(status == 400) return alert('wrong password');
    }
  },
  reducers: {
    saveUser(state, { payload: user }) {
      return { ...state, user };
    },
  },
  routes: {
    "/u/:userId"      : { component: User },
    "/updateParticle" : { component: Update },
    "/changePassword" : { component: Change },
  },
};
