<template>
  <div class="list-container">
    <div class="note-list-header">
      <v-tabs class="tab-list" v-model="notes.folders" show-arrows background-color="red-lighten-2" height="50"
              hide-slider>
        <v-tab class="tab rounded-lg" v-for="folder in notes.folders" :key="folder" :value="folder"
               @click="updateSelectedFolder(folder)">
          {{ folder }}
        </v-tab>
      </v-tabs>
    </div>
    <span class="note-list-title">{{ notes.selectedFolder }}</span>
    <v-list class="card" lines="two">
      <v-list-item
          @click="updateDisplayInfo(item)"
          class="element"
          v-for="item in notes.notes"
          :key="item.id"
          :title="item.title"
          :subtitle="item.data"
      >
        <span class="delete-button" v-if="notes.isDeletingMode" @click="deleteNote(item)">Delete</span>
      </v-list-item>

    </v-list>
    <v-btn
        class="create-note-btn"
        variant="outlined"
        size="large"
        v-model="notes.selectedFolder"
        icon
        color="white"
        @click="createNote"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'NoteList',
  data() {
    return {
      buttonOffset: 500,
      selectedNoteId: '',
    };
  },

  beforeMount() {
    this.notes = this.$store.state.receivedFolderData;
    this.folders = this.$store.state.selectedObjectState.folders;
    this.selectedFolder = this.$store.state.selectedObjectState.selectedFolder;
  },

  methods: {
    updateDisplayInfo(item) {
      this.selectedNoteId = item.id;
      this.$store.commit('setNoteId', this.selectedNoteId);
      this.$store.commit('setNoteListVisibility');
    },

    updateSelectedFolder(item) {
      this.$store.commit('selectFolder', item);
      this.$store.commit('setNotesByFolder', item);
    },

    createNote() {
      this.$store.commit('setModalVisibility');
    },

    deleteNote(item) {
      this.$store.commit('deleteNote', item.id);
    },
    getButtonOffset() {
      return window.innerHeight - 100;
    },
  },
  computed: {
    notes() {
      return {
        notes: this.$store.state.receivedFolderData,
        folders: this.$store.state.selectedObjectState.folders,
        selectedFolder: this.$store.state.selectedObjectState.selectedFolder,
        isDeletingMode: this.$store.state.applicationState.isDeletingMode,
      };
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/List'
</style>