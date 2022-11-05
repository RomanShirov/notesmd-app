import {createStore} from 'vuex'
import axios from 'axios';

export default createStore({
    state: {
        userInformation: {
            jwtToken: '7|UN0ZlYi55MSYvksjOPZbNHe1C2k9AxF8OKnwWrNV',
        },

        selectedObjectState: {
            selectedFolder: 'C++',
            selectedNoteId: null,
            folders: ["C++", "Go"],
        },

        applicationState: {
            readOnlyMode: false,
        },

        receivedFolderData: [],
        lastSyncTime: 1243



    },

    getters: {

    },
    mutations: {
        setFolderData: function (state, data) {
            state.receivedFolderData = data;
        },

        setNotesByFolder: function (state, data) {
            const requestUrl = `http://127.0.0.1:8000/api/notes/${data}`
            const token = state.userInformation.jwtToken

            state.selectedObjectState.selectedFolder = data;

            console.log("STATE: ", requestUrl);
            axios.get(requestUrl, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
                state.receivedFolderData =  response.data;

            })
        },

        setNoteId: function (state, data) {
            state.selectedObjectState.selectedNoteId = data;
        },
        setReadOnlyState: function (state) {
            state.applicationState.readOnlyMode = !state.applicationState.readOnlyMode;
        },

        selectFolder: function (state, data) {
            state.selectedObjectState.selectedFolder = data;
        },

        updateNote(state, payload) {
            const id = payload.id;
            const data = payload.data;
            const idx = state.receivedFolderData.findIndex(note => note.id === id);
            state.receivedFolderData[idx].data = data;
        },
    },
    actions: {},
    modules: {}
})
