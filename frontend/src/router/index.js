import {createRouter, createWebHistory} from 'vue-router';
import store from '@/store';
import Auth from '@/views/Auth';
import NoteEditor from '@/views/NoteEditor';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/',
    name: 'Editor',
    component: NoteEditor,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (!store.getters.isAuthenticated && to.name !== 'Auth') {
    return {name: 'Auth'};
  }

  if (store.state.userInformation.jwtToken) {
    store.commit('loadFolderList');
  }
});

router.beforeEach(async (to, from) => {
  if (store.getters.isAuthenticated && to.name === 'Auth') {
    store.commit('loadFolderList');
    return {name: 'Editor'};
  }
});

export default router;
