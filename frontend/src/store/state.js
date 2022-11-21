export default () => ({
  userInformation: {
    email: null,
    jwtToken: null,
  },

  selectedObjectState: {
    selectedFolder: null,
    selectedNoteId: null,
    folders: [] || "None",
    sharedNoteURL: null
  },

  applicationState: {
    readOnlyMode: false,
    createNoteModalIsVisible: false,
    sharedNoteModalIsVisible: false,
    mobileNoteListSelected: true,
    isDeletingMode: false,
    noteSharingMode: false,
    synchronizeCache: null,
  },

  serverIpAddr: process.env.VUE_APP_IP || "http://93.157.251.207",
  receivedFolderData: [],
  isSynchronized: null,
  editedNoteCache: '',

})