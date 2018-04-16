import Kar98k from '98k';

import home from './modules/home';
import category from './modules/category';

const app = Kar98k({
  router: 'hash',
});

app.module(home)
  .module(category)
  .start('#app');
