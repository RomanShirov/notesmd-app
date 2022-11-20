import {createRouter, createWebHistory} from 'vue-router';
import store from '@/store';
import Auth from '@/views/Auth';
import NoteEditor from '@/views/NoteEditor';
import PublishedPage from '@/views/PublishedPage';

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
  {
    path: '/page/:user/:id',
    name: 'Page',
    component: PublishedPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (!store.getters.isAuthenticated && to.name !== 'Auth' && to.name !==
      'Page') {
    return {name: 'Auth'};
  }

  if (store.state.userInformation.jwtToken && to.name !== 'Page') {
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
