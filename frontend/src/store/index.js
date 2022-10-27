import { createStore } from 'vuex'

export default createStore({
  state: {
    currentNoteId: '',
    notesData: [],

  },
  getters: {
    getNotesList (state) {
      return state.notesData.notes
    },
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
      state.notesData.notes[idx].content = content

    }
  },
  actions: {
  },
  modules: {
  }
})
