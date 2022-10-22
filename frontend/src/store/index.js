import { createStore } from 'vuex'

export default createStore({
  state: {
    currentNote: {
      "title": '9998',
      "content": '9990'
    },
  },
  getters: {
  },
  mutations: {
    setCurrentNote (state, payload) {
      state.currentNote.title = payload.title
      state.currentNote.content = payload.content
    }
  },
  actions: {
  },
  modules: {
  }
})
