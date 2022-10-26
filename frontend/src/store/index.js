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
    }
  },
  actions: {
  },
  modules: {
  }
})
