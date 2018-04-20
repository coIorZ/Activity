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
      yield put({ type: 'activity/fetchActivity', payload: payload.activityId });
    },
    *quitActivity({ payload }, { call, put }) {
      yield call(services.quitActivity, payload);
      yield put({ type: 'activity/fetchActivity', payload: payload.activityId });
    },
    *deleteActivity({ payload }, { call }, { history }) {
      yield call(services.deleteActivity, payload);
      history.push('/');
    },
    *likeActivity({ payload }, { call, put }) {
      yield call(services.likeActivity, payload);
      yield put({ type: 'activity/fetchActivity', payload: payload.activityId });
    },
    *dislikeActivity({ payload }, { call, put }) {
      yield call(services.dislikeActivity, payload);
      yield put({ type: 'activity/fetchActivity', payload: payload.activityId });
    },
    *comment({ payload }, { call, put }) {
      yield call(services.comment, payload);
      yield put({ type: 'activity/fetchActivity', payload: payload.activityId });
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
