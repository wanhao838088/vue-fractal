import Vue from 'vue'
import Router from 'vue-router'

import Vicsek from '../components/Vicsek'
import Sierpinski from '../components/Sierpinski'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/vicsek',
      name: 'Vicsek',
      component: Vicsek
    },
    {
      path: '/sierpinski',
      name: 'Sierpinski',
      component: Sierpinski
    },
    {
      path: '/',
      redirect: '/vicsek'
    },
  ]
});


export default router;
