import {createStore} from 'vuex'
import {SaveNoteListState} from '../../wailsjs/go/main/App';

export default createStore({
    state: {
        isLocalStorage: true,
        isReadOnly: false,
        lastSyncTime: '',
        currentNoteId: '',
        notesData: [],
        folders: [],
    },

    getters: {
        isReadOnly(state) {
            return state.isReadOnly
        },

        getNotesState(state) {
            return state.notesData
        },

        getNotes(state) {
            return state.notesData.notes
        },

        getFolderList(state) {
            state.notesData.notes.forEach(note => {
                note.folders.forEach(folder =>{
                    state.folders.push(folder)
                })
            })
            state.folders = state.folders.filter((i, idx) => state.folders.indexOf(i) === idx);
            return state.folders

        },

        getLocalStorageState(state) {
            return state.isLocalStorage
        },

        getLastSyncTime(state) {
            return state.lastSyncTime
        }
    },
    mutations: {
        setCurrentNoteId(state, payload) {
            state.currentNoteId = payload
        },

        setNotesState(state, payload) {
            state.notesData = payload
        },

        changeReadOnlyStatus(state) {
            state.isReadOnly = !state.isReadOnly;
        },

        updateNote(state, payload) {
            const id = payload.id;
            const content = payload.content;
            const idx = state.notesData.notes.findIndex(note => note.id === id);
            state.notesData.notes[idx].content = content;
        },

        syncNotes(state) {
            if (state.isLocalStorage && state.notesData !== null) {
                SaveNoteListState(state.notesData)
                    .then(() => state.lastSyncTime = new Date());
            }
        },

        setLastSyncTime(state, payload) {
            state.lastSyncTime = payload
        },
    },
    actions: {},
    modules: {}
})
