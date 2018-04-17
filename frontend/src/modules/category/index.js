import Category from './pages/category';
import * as services from './services';

export default {
  namespace : 'category',
  state     : {
  },
  effects: {
    *fetchActivities({ payload }, { call, put }) {
      const { data: activities } = yield call(services.fetchActivities, payload);
      yield put({
        type    : 'category/saveActivities',
        payload : {
          category: payload,
          activities, 
        },
      });
    },
  },
  reducers: {
    saveActivities(state, { payload: { category, activities } }) {
      return {
        ...state,
        [category]: activities,
      };
    },
  },
  routes: {
    '/c/:category': { component: Category },
  },
};
