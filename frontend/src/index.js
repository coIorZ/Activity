import Kar98k from '98k';
import loading from '98k-loading';

import home from './modules/home';
import category from './modules/category';
import auth from './modules/auth';
import user from'./modules/user';

const app = Kar98k({
  router: 'hash',
});

app.use(loading())
  .module(home, category, auth)
  .start('#app');
