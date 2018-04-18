import Kar98k from '98k';

import home from './modules/home';
import category from './modules/category';
import auth from './modules/auth';
import user from'./modules/user';

const app = Kar98k({
  router: 'hash',
});

app.module(home)
  .module(category)
  .module(auth)
  .module(user)
  .start('#app');
