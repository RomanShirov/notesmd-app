import {createStore} from 'vuex'

export default createStore({
    state: {
        jwtToken: '',
        selectedObjectState: {
            selectedFolder: '',
            selectedNoteId: null
        },

        receivedFolderData: {}



    },

    getters: {

    },
    mutations: {

    },
    actions: {},
    modules: {}
})
