export const isReadOnly = (state) => {
  return state.applicationState.readOnlyMode;
};

export const isSynchronized = (state) => {
  return state.isSynchronized;
};

export const isNoteSelected = (state) => {
  return state.selectedObjectState.selectedNoteId;
};

export const selectedFolder = (state) => {
  return state.selectedObjectState.selectedFolder;
};

export const notes = (state) => {
  return {
    notes: state.receivedFolderData,
    folders: state.selectedObjectState.folders,
    selectedFolder: state.selectedObjectState.selectedFolder,
    isDeletingMode: state.applicationState.isDeletingMode,
    isNoteSharingMode: state.applicationState.noteSharingMode,
  };
};
export const lengthFolders = (state) => {
  return state.selectedObjectState.folders.length;
};
export const tabList = (state) => {
  return state.selectedObjectState.folders;
};

export const isAuthenticated = (state) => {
  const token = localStorage.getItem('jwt_token');
  if (token) {
    state.userInformation.jwtToken = token;
  }
  return localStorage.getItem('jwt_token') ||
      state.userInformation.jwtToken;
};