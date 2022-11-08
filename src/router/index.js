import {createRouter, createWebHashHistory} from 'vue-router';
import store from "@/store";
import Auth from '@/views/Auth';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/',
    name: 'Editor',
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

router.beforeEach(async (to, from) => {
  if (!store.getters.isAuthenticated && to.name !== 'Auth') {
    return {name: 'Auth'};
  }
  store.commit('loadFolderList')
});


export default router;
