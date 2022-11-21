import axios from 'axios';
import router from '@/router';

export function setFolderData(state, data) {
  state.receivedFolderData = data;
}

export function setSelectedObjectState(state, data) {
  state.selectedObjectState = data;
}

export function setNoteId(state, data) {
  state.selectedObjectState.selectedNoteId = data;
}

export function setReadOnlyState(state) {
  state.applicationState.readOnlyMode = !state.applicationState.readOnlyMode;
}

export function setDeletingMode(state) {
  if(state.applicationState.noteSharingMode){
    state.applicationState.noteSharingMode = false
  }
  state.applicationState.isDeletingMode = !state.applicationState.isDeletingMode;

}

export function setNoteSharingMode(state) {
  if(state.applicationState.isDeletingMode){
    state.applicationState.isDeletingMode = false
  }
  state.applicationState.noteSharingMode = !state.applicationState.noteSharingMode;

}

export function setSharedModalVisibility(state) {
  state.applicationState.sharedNoteModalIsVisible = !state.applicationState.sharedNoteModalIsVisible;
}

export function setModalVisibility(state) {
  state.applicationState.createNoteModalIsVisible = !state.applicationState.createNoteModalIsVisible;
}

export function setNoteListVisibility(state) {
  state.applicationState.mobileNoteListSelected = !state.applicationState.mobileNoteListSelected;
}

export function selectFolder(state, data) {
  state.selectedObjectState.selectedFolder = data;
}

export function setFolder(state, data) {
  state.selectedObjectState.folders = data;
}

export function setNotesByFolder(state, data) {
  state.selectedObjectState.selectedFolder = data;
  axios.get(`${state.serverIpAddr}/api/notes/${data}`,
      {headers: {Authorization: `Bearer ${state.userInformation.jwtToken}`}}).
      then((response) => {
        state.receivedFolderData = response.data;
      });
}

export function loadFolderList(state) {
  axios.get(`${state.serverIpAddr}/api/folders`,
      {headers: {Authorization: `Bearer ${state.userInformation.jwtToken}`}}).
      then((response) => {
        state.selectedObjectState.folders = response.data;
        state.selectedObjectState.selectedFolder = state.selectedObjectState.folders[0];
        this.commit('setNotesByFolder',
            state.selectedObjectState.selectedFolder);
      }).finally(() => {
    router.push({path: '/'});
  });
}

export function updateNote(state, payload) {
  const id = payload.id;
  const data = payload.data;
  const idx = state.receivedFolderData.findIndex(note => note.id === id);
  state.receivedFolderData[idx].data = data;
}

export function deleteNote(state, payload) {
  const id = payload;
  const idx = state.receivedFolderData.findIndex(note => note.id === id);

  state.receivedFolderData.splice(idx, 1);
  axios.delete(`${state.serverIpAddr}/api/notes/${id}`,
      {headers: {Authorization: `Bearer ${state.userInformation.jwtToken}`}}).
      then(() => {
        if (state.receivedFolderData.length === 0) {
          state.selectedObjectState.selectedFolder = state.selectedObjectState.folders[0];
          this.commit('setNotesByFolder',
              state.selectedObjectState.selectedFolder);
        }
      });
}

export function synchronizeNote(state) {
  // ToDo: Change single note sync to iterative sync all notes
  if (state.selectedObjectState.selectedNoteId) {
    const id = state.selectedObjectState.selectedNoteId;
    const idx = state.receivedFolderData.findIndex(note => note.id === id);
    const data = state.receivedFolderData[idx].data;

    if (data !== state.applicationState.synchronizeCache) {
      axios.patch(`${state.serverIpAddr}/api/notes/`, {
            'note_id': id,
            'data': data,
          },
          {headers: {Authorization: `Bearer ${state.userInformation.jwtToken}`}}).
          then(() => {
            state.isSynchronized = 'All changes saved';
            state.applicationState.synchronizeCache = data;
            setTimeout(() => {
              state.isSynchronized = null;
            }, 1000);
          });
    }
  }

}

export function uploadNote(state, payload) {
  const title = payload.title;
  const folder = payload.folder;

  axios.put(`${state.serverIpAddr}/api/notes/`, {
        'title': title,
        'folder': folder,
      },
      {headers: {Authorization: `Bearer ${state.userInformation.jwtToken}`}}).
      then((response) => {
        this.commit('setNotesByFolder', folder);
        state.selectedObjectState.selectedNoteId = response.data.id;
        if (state.selectedObjectState.folders.includes(folder) === false) {
          state.selectedObjectState.folders.push(folder);
        }
      });
}

export function authorizeUser(state, payload) {
  const username = payload.username;
  const password = payload.password;
  let mode = payload.mode;

  axios.post(
      `${state.serverIpAddr}/api/${mode}?username=${username}&password=${password}`).
      then((response) => {
        const token = response.data.access_token;
        state.userInformation.jwtToken = token;
        localStorage.setItem('jwt_token', token);
        this.commit('loadFolderList');
      });
}

export function logOut(state) {
  localStorage.removeItem('jwt_token');
  state.userInformation.jwtToken = null;
  window.location.reload();
}
