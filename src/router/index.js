import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

import Basedata from '@/views/Basedata';
import Modeldata from '@/views/Modeldata';
import Intro from '@/views/Intro';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/intro'
  },
  {
    path: '/intro',
    name: 'intro',
    component: Intro
  },
  {
    path: '/Basedata',
    name: 'Basedata',
    component: Basedata
  },
  {
    path: '/Modeldata',
    name: 'Modeldata',
    component: Modeldata
  },

];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  store.commit('mapbox/RESET_ALL');
  next();
});

export default router;
