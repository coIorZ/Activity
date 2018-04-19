import Category from './pages/category';
import * as services from './services';

export default {
  namespace : 'category',
  state     : {
    activities: null,
  },
  effects: {
    *fetchActivities({ payload }, { call, put }) {
      const { data } = yield call(services.fetchActivities, payload);
      yield put({ type: 'category/saveActivities', payload: data });
    },
  },
  reducers: {
    saveActivities(state, { payload: activities }) {
      return { ...state, activities };
    },
  },
  routes: {
    '/c/:category': { component: Category },
  },
};
