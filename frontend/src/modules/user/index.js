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
  },
  reducers: {
    saveUser(state, { payload: user }) {
      return { ...state, user };
    },
  },
  routes: {
    "/u/:userId" : { component: User },
    "/update"    : { component: Update },
    "/change"    : { component: Change },
  },
};
