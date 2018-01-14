import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/Layout';

import Index from '@/pages/Index';

Vue.use(Router);

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
