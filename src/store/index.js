import {createStore} from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    userInformation: {
      jwtToken: '7|UN0ZlYi55MSYvksjOPZbNHe1C2k9AxF8OKnwWrNV',
    },

    selectedObjectState: {
      selectedFolder: 'C++',
      selectedNoteId: null,
      folders: ['C++', 'Go'],
    },

    applicationState: {
      readOnlyMode: false,
      createNoteModalIsVisible: false,
    },

    receivedFolderData: [],
    isSynchronized: null,
    editedNoteCache: '',

  },

  getters: {},
  mutations: {
    setFolderData(state, data) {
      state.receivedFolderData = data;
    },

    setNotesByFolder(state, data) {
      const requestUrl = `http://127.0.0.1:8000/api/notes/${data}`;
      const token = state.userInformation.jwtToken;

      state.selectedObjectState.selectedFolder = data;

      axios.get(requestUrl, {headers: {Authorization: `Bearer ${token}`}}).
          then((response) => {
            state.receivedFolderData = response.data;

          });
    },

    setNoteId(state, data) {
      state.selectedObjectState.selectedNoteId = data;
    },
    setReadOnlyState(state) {
      state.applicationState.readOnlyMode = !state.applicationState.readOnlyMode;
    },

    setModalVisibility(state) {
      state.applicationState.createNoteModalIsVisible = !state.applicationState.createNoteModalIsVisible;
    },

    selectFolder(state, data) {
      state.selectedObjectState.selectedFolder = data;
    },

    updateNote(state, payload) {
      const id = payload.id;
      const data = payload.data;
      const idx = state.receivedFolderData.findIndex(note => note.id === id);
      state.receivedFolderData[idx].data = data;
      state.editedNoteCache = data;
    },

    synchronizeNote(state) {
      if (state.selectedObjectState.selectedNoteId) {
        const id = state.selectedObjectState.selectedNoteId;
        const data = state.editedNoteCache;
        const token = state.userInformation.jwtToken;

        axios.patch('http://127.0.0.1:8000/api/notes/', {
          'note_id': id,
          'data': data,
        }, {headers: {Authorization: `Bearer ${token}`}}).then(() => {
          state.isSynchronized = 'All changes saved';
          setTimeout(() => {
            state.isSynchronized = null;
          }, 1000);
        });
      }
    },

    uploadNote(state, payload) {
      const title = payload.title;
      const folder = payload.folder;
      const token = state.userInformation.jwtToken;

      axios.put('http://127.0.0.1:8000/api/notes/', {
        'title': title,
        'folder': folder,

      }, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
        state.selectedObjectState.selectedFolder = folder;
        state.selectedObjectState.selectedNoteId = response.data.id;
      });
    },
  },
  actions: {},
  modules: {},
});
