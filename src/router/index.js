import {createRouter, createWebHashHistory} from 'vue-router';
import Auth from '@/views/Auth';

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/editor',
    name: 'editor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/NoteEditor.vue');
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
