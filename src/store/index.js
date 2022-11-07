import {createStore} from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    userInformation: {
      jwtToken: '7|UN0ZlYi55MSYvksjOPZbNHe1C2k9AxF8OKnwWrNV',
    },

    selectedObjectState: {
      selectedFolder: '',
      selectedNoteId: null,
      folders: [],
    },

    applicationState: {
      readOnlyMode: false,
      createNoteModalIsVisible: false,
      isDeletingMode: false,
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
      const token = state.userInformation.jwtToken;

      state.selectedObjectState.selectedFolder = data;

      axios.get(`http://127.0.0.1:8000/api/notes/${data}`, {headers: {Authorization: `Bearer ${token}`}}).
          then((response) => {
            state.receivedFolderData = response.data;

          });
    },

    loadFolderList(state) {
      const token = state.userInformation.jwtToken;
      axios.get(`http://127.0.0.1:8000/api/folders`, {headers: {Authorization: `Bearer ${token}`}}).
          then((response) => {
            state.selectedObjectState.folders = response.data;
            state.selectedObjectState.selectedFolder = state.selectedObjectState.folders[0];
          })
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

    deleteNote(state, payload) {
      const id = payload;
      const token = state.userInformation.jwtToken;

      const idx = state.receivedFolderData.findIndex(note => note.id === id);
      state.receivedFolderData.splice(idx, 1);
      axios.delete(`http://127.0.0.1:8000/api/notes/${id}`,
          {headers: {Authorization: `Bearer ${token}`}}).then(() => {
      });
    },

    synchronizeNote(state) {
      if (state.selectedObjectState.selectedNoteId) {
        const id = state.selectedObjectState.selectedNoteId;
        const data = state.editedNoteCache;
        const token = state.userInformation.jwtToken;

        console.log("PATCH")
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
        this.commit('setNotesByFolder', folder);
        state.selectedObjectState.selectedNoteId = response.data.id;
        if(state.selectedObjectState.folders.includes(folder) === false) {
          state.selectedObjectState.folders.push(folder)
        }
      });
    },
  },
  actions: {},
  modules: {},
});
