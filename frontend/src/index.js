import Kar98k from '98k';

import home from './modules/home';
import category from './modules/category';
import auth from './modules/auth';

const app = Kar98k({
  router: 'hash',
});

app.module(home)
  .module(category)
  .module(auth)
  .start('#app');
