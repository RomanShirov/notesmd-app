import { createStore } from 'vuex'

export default createStore({
  state: {
    currentNote: {
      "title": '9998',
      "content": ''
    },
  },
  getters: {
  },
  mutations: {
    setCurrentNote (state, payload) {
      state.currentNote.title = payload.title
      state.currentNote.content = payload.content
    },
    setNoteData (state, payload) {
      state.currentNote.content = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
