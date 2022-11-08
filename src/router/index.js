import {createRouter, createWebHashHistory} from 'vue-router';
import store from '@/store';
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
    component: function() {
      return import(/* webpackChunkName: "editor" */ '../views/NoteEditor.vue');
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (!store.getters.isAuthenticated && to.name !== 'Auth') {
    return {name: 'Auth'};
  }
  store.commit('loadFolderList');
});

router.beforeEach(async (to, from) => {
  if (store.getters.isAuthenticated && to.name === 'Auth') {
    return {name: 'Editor'};
  }
});

export default router;
