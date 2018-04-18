import Activity from './pages/activity';
import * as services from './services';

export default {
  namespace : 'activity',
  state     : {
    activity: null,
  },
  effects: {
    *fetchActivity({ payload }, { call, put }) {
      const { data } = yield call(services.fetchActivity, payload);
      yield put({
        type    : 'activity/saveActivity',
        payload : data,
      });
    },
    *joinActivity({ payload }, { call }, { history }) {
      yield call(services.joinActivity, payload);
      history.push(`/a/${payload.activityId}`);  
    },
    *comment({ payload }, { call }, { history }) {
      yield call(services.comment, payload);
      history.push(`/a/${payload.activityId}`);  
    },
  },
  reducers: {
    saveActivity(state, { payload: activity }) {
      return { ...state, activity };
    },
  },
  routes: {
    '/a/:activityId': { component: Activity },
  },
};
