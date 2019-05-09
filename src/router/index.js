import Vue from 'vue'
import Router from 'vue-router'

import Vicsek from '../components/Vicsek'
import Sierpinski from '../components/Sierpinski'
import Tree from '../components/Tree'

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
      path: '/tree',
      name: 'Tree',
      component: Tree
    },
    {
      path: '/',
      redirect: '/vicsek'
    },
  ]
});


export default router;
