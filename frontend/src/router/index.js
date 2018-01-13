import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import Organization from '@/components/admin/Organization';
import Account from '@/components/admin/Account';
import Message from '@/components/admin/Message';

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
      path: '/admin/organization',
      name: 'Organization',
      component: Organization,
      beforeEnter: (to, from, next) => {
        // next({ path: '/list'});
        next();
      },
    }, {
      path: '/admin/account',
      name: 'Account',
      component: Account,
      beforeEnter: (to, from, next) => {
        // next({ path: '/list'});
        next();
      },
    }, {
      path: '/admin/message',
      name: 'Message',
      component: Message,
      beforeEnter: (to, from, next) => {
        // next({ path: '/list'});
        next();
      },
    },
  ],
});
