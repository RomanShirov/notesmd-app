import {createStore} from 'vuex';
import axios from 'axios';
import router from '@/router';

// ToDo: REFACTOR THIS SHIT

export default createStore({
  state: {
    userInformation: {
      email: null,
      jwtToken: null,
    },

    selectedObjectState: {
      selectedFolder: '',
      selectedNoteId: null,
      folders: [],
    },

    applicationState: {
      readOnlyMode: false,
      createNoteModalIsVisible: false,
      mobileNoteListSelected: true,
      isDeletingMode: false,
      synchronizeCache: null,
    },

    debugHostIp: 'http://93.157.251.207:8000',
    receivedFolderData: [],
    isSynchronized: null,
    editedNoteCache: '',

  },

  getters: {
    isAuthenticated(state) {
      const token = localStorage.getItem('jwt_token');
      if (token) {
        state.userInformation.jwtToken = token;
      }
      return localStorage.getItem('jwt_token') ||
          state.userInformation.jwtToken;
    },
  },

  mutations: {
    setFolderData(state, data) {
      state.receivedFolderData = data;
    },

    setNoteId(state, data) {
      state.selectedObjectState.selectedNoteId = data;
    },
    setReadOnlyState(state) {
      state.applicationState.readOnlyMode = !state.applicationState.readOnlyMode;
    },

    setDeletingMode(state) {
      state.applicationState.isDeletingMode = !state.applicationState.isDeletingMode;
    },

    setModalVisibility(state) {
      state.applicationState.createNoteModalIsVisible = !state.applicationState.createNoteModalIsVisible;
    },

    setNoteListVisibility(state) {
      state.applicationState.mobileNoteListSelected = !state.applicationState.mobileNoteListSelected;
    },

    selectFolder(state, data) {
      state.selectedObjectState.selectedFolder = data;
    },

    setNotesByFolder(state, data) {
      state.selectedObjectState.selectedFolder = data;
      axios.get(`${state.debugHostIp}/api/notes/${data}`,
          {headers: {Authorization: `Bearer ${state.userInformation.jwtToken}`}}).
          then((response) => {
            state.receivedFolderData = response.data;
          });
    },

    loadFolderList(state) {
      axios.get(`${state.debugHostIp}/api/folders`,
          {headers: {Authorization: `Bearer ${state.userInformation.jwtToken}`}}).
          then((response) => {
            state.selectedObjectState.folders = response.data;
            state.selectedObjectState.selectedFolder = state.selectedObjectState.folders[0];
            this.commit('setNotesByFolder',
                state.selectedObjectState.selectedFolder);
          }).finally(() => {
        router.push({path: '/'});
      });
    },

    updateNote(state, payload) {
      const id = payload.id;
      const data = payload.data;
      const idx = state.receivedFolderData.findIndex(note => note.id === id);
      if (payload.data !== '') {
        state.receivedFolderData[idx].data = data;
      }
    },

    deleteNote(state, payload) {
      const id = payload;
      const idx = state.receivedFolderData.findIndex(note => note.id === id);

      state.receivedFolderData.splice(idx, 1);
      axios.delete(`${state.debugHostIp}/api/notes/${id}`,
          {headers: {Authorization: `Bearer ${state.userInformation.jwtToken}`}}).
          then(() => {
          });
    },

    synchronizeNote(state) {
      // ToDo: Change single note sync to iterative sync all notes
      if (state.selectedObjectState.selectedNoteId) {
        const id = state.selectedObjectState.selectedNoteId;
        const idx = state.receivedFolderData.findIndex(note => note.id === id);
        const data = state.receivedFolderData[idx].data;

        if (data !== state.applicationState.synchronizeCache) {
          axios.patch(`${state.debugHostIp}/api/notes/`, {
                'note_id': id,
                'data': data,
              },
              {headers: {Authorization: `Bearer ${state.userInformation.jwtToken}`}}).
              then(() => {
                state.isSynchronized = 'All changes saved';
                state.applicationState.synchronizeCache = data;
                setTimeout(() => {
                  state.isSynchronized = null;
                }, 1000);
              });
        }
      }

    },

    uploadNote(state, payload) {
      const title = payload.title;
      const folder = payload.folder;

      axios.put(`${state.debugHostIp}/api/notes/`, {
            'title': title,
            'folder': folder,
          },
          {headers: {Authorization: `Bearer ${state.userInformation.jwtToken}`}}).
          then((response) => {
            this.commit('setNotesByFolder', folder);
            state.selectedObjectState.selectedNoteId = response.data.id;
            if (state.selectedObjectState.folders.includes(folder) === false) {
              state.selectedObjectState.folders.push(folder);
            }
          });
    },

    authorizeUser(state, payload) {
      const email = payload.email;
      const password = payload.password;
      let mode = payload.mode;

      axios.post(
          `${state.debugHostIp}/api/${mode}?email=${email}&password=${password}`).
          then((response) => {
            const token = response.data.access_token;
            state.userInformation.jwtToken = token;
            localStorage.setItem('jwt_token', token);
            this.commit('loadFolderList');
          });
    },

    logOut(state) {
      localStorage.removeItem('jwt_token');
      state.userInformation.jwtToken = null;
      window.location.reload();
    },
  },
  actions: {},
  modules: {},
});
