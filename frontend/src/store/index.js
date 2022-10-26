import { createStore } from 'vuex'

export default createStore({
  state: {
    currentNoteId: '123',
    currentNoteContent: '123',
    notesData: [],

  },
  getters: {
    getNotesList (state) {
      return state.notesData.notes
    },
  },
  mutations: {
    setCurrentNote (state, payload) {
      state.currentNoteId = payload.id
      state.currentNoteContent = payload.content
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
