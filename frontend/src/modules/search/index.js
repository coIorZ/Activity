import Search from './pages/search';
import * as services from './services';

export default {
    namespace : 'search',
    state     : {
      activities: null,
    },
    effects: {
      *searchActivities({ payload }, { call, put }) {
        const { data } = yield call(services.searchActivities, payload);
        yield put({ type: 'search/saveActivities', payload: data });
      },
    },
    reducers: {
      saveActivities(state, { payload: activities }) {
        return { ...state, activities };
      },
    },
    routes: {
      '/search/:term': { component: Search },
    },  
  };