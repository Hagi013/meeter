import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import Organization from '@/components/Organization';
import Account from '@/components/Account';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
      beforeEnter: (to, from, next) => {
        // next({ path: '/list'});
        next();
      },
    }, {
      path: '/organization',
      name: 'Organization',
      component: Organization,
      beforeEnter: (to, from, next) => {
        // next({ path: '/list'});
        next();
      },
    }, {
      path: '/account',
      name: 'Account',
      component: Account,
      beforeEnter: (to, from, next) => {
        // next({ path: '/list'});
        next();
      },
    },
  ],
});
