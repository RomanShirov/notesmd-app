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
        isSynchronized: null,
        editedNoteCache: ''


    },

    getters: {},
    mutations: {
        setFolderData: function (state, data) {
            state.receivedFolderData = data;
        },

        setNotesByFolder: function (state, data) {
            const requestUrl = `http://127.0.0.1:8000/api/notes/${data}`
            const token = state.userInformation.jwtToken

            state.selectedObjectState.selectedFolder = data;

            axios.get(requestUrl, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
                state.receivedFolderData = response.data;

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
            state.editedNoteCache = data;
        },

        synchronizeNote(state) {
            if (state.selectedObjectState.selectedNoteId) {
                const id = state.selectedObjectState.selectedNoteId;
                const data = state.editedNoteCache;
                const token = state.userInformation.jwtToken

                axios.patch("http://127.0.0.1:8000/api/notes/", {
                    "note_id": id,
                    "data": data
                }, {headers: {Authorization: `Bearer ${token}`}})
                    .then(() => {
                        state.isSynchronized = "All changes saved";
                        setTimeout(() => {
                            state.isSynchronized = null
                        }, 1000);
                    });
            }
        },
    },
    actions: {},
    modules: {}
})
