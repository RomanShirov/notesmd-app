export default () => ({
  userInformation: {
    email: null,
    jwtToken: null,
  },

  selectedObjectState: {
    selectedFolder: null,
    selectedNoteId: null,
    folders: [] || "None",
  },

  applicationState: {
    readOnlyMode: false,
    createNoteModalIsVisible: false,
    mobileNoteListSelected: true,
    isDeletingMode: false,
    synchronizeCache: null,
  },

  serverIpAddr: process.env.VUE_APP_IP || "http://93.157.251.207",
  receivedFolderData: [],
  isSynchronized: null,
  editedNoteCache: '',

})