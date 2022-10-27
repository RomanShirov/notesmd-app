import { createStore } from 'vuex'
import {SaveNoteListState} from '../../wailsjs/go/main/App';

export default createStore({
  state: {
    isLocalStorage: true,
    lastSyncTime: '',
    currentNoteId: '',
    notesData: [],


  },
  getters: {
    getNotesState (state) {
      return state.notesData
    },

    getNotesList (state) {
      return state.notesData.notes
    },

    getLocalStorageState (state) {
      return state.isLocalStorage
    }
  },
  mutations: {
    setCurrentNoteId (state, payload) {
      state.currentNoteId = payload
    },

    setNoteData (state, payload) {
      state.notesData = payload
    },

    updateNote (state, payload) {
      const id = payload.id;
      const content = payload.content;
      const idx = state.notesData.notes.findIndex(note => note.id === id);
      state.notesData.notes[idx].content = content;
    },

    syncState (state){
      console.log(state.isLocalStorage)
      if (state.isLocalStorage && state.notesData !== null){
        SaveNoteListState(state.notesData)
            .then(() => state.lastSyncTime = new Date());
      }
    },

    setLastSyncTime (state, payload) {
      state.lastSyncTime = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
