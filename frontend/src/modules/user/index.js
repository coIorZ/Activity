import Self from './pages/self';
// import * as services from './services';

export default {
    namespace: 'user',
    routes: {
        '/self': { component: Self },
    }
}