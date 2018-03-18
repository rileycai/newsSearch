import {
  Login,
} from '../components/';

module.exports = [{
    path: '/',
    redirect: to => {
        return 'login';
    },
    hidden: true
  }, {
    path: '/login',
    component: Login,
    hidden: true
  }
];
