export default () => ({
	userInformation: {
		email: null,
		jwtToken: null,
	},

	selectedObjectState: {
		selectedFolder: [],
		selectedNoteId: null,
		folders: [],
	},

	applicationState: {
		readOnlyMode: false,
		createNoteModalIsVisible: false,
		mobileNoteListSelected: true,
		isDeletingMode: false,
		synchronizeCache: null,
	},

	receivedFolderData: [],
	isSynchronized: null,
	editedNoteCache: '',

})