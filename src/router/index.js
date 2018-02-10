import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/Layout';

Vue.use(Router);

import Index from '@/pages/Index';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '/', name: 'Index', component: Index }
      ]
    },
  ],
});
