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
      yield put({ type: 'activity/saveActivity', payload: data });
    },
    *joinActivity({ payload }, { call, put }) {
      yield call(services.joinActivity, payload);
      yield put({ type: 'activity/saveActivity', payload: payload.activityId });
    },
    *comment({ payload }, { call, put }) {
      yield call(services.comment, payload);
      yield put({ type: 'activity/saveActivity', payload: payload.activityId });
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
