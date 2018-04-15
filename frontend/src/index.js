import Kar98k from '98k';

import home from './modules/home';

const app = Kar98k({
  router   : 'hash',
  basename : '/Activity/',
});

app.module(home)
  .start('#app');
