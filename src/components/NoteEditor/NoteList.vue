<template>
  <v-list class="card" lines="two">
    <div class="note-list-header">
      <v-tabs class="tab-list" v-model="notes.folders" background-color="red-lighten-2" height="50" hide-slider>
        <v-tab class="tab rounded-lg" v-for="folder in notes.folders" :key="folder" :value="folder"
               @click="updateSelectedFolder(folder)">
          {{ folder }}
        </v-tab>
      </v-tabs>
    </div>
    <p class="note-list-title">{{ notes.selectedFolder }}</p>
    <v-list-item
        @click="updateDisplayInfo(item)"
        class="element"
        v-for="item in notes.notes"
        :key="item.id"
        :title="item.title"
        :subtitle="item.data"
    ></v-list-item>

  </v-list>
</template>

<script>
export default {
  name: "NoteList",
  data() {
    return {
      selectedNoteId: '',
    }
  },
  beforeMount() {
    this.notes = this.$store.state.receivedFolderData
    this.folders = this.$store.state.selectedObjectState.folders
    this.selectedFolder = this.$store.state.selectedObjectState.selectedFolder
  },

  methods: {
    updateDisplayInfo: function (item) {
      this.selectedNoteId = item.id
      this.$store.commit('setNoteId', this.selectedNoteId);
    },

    updateSelectedFolder: function (item) {
      this.$store.commit('selectFolder', item);
      this.$store.commit('setNotesByFolder', item);
    },
  },
  computed: {
    notes() {
      return {
        notes: this.$store.state.receivedFolderData,
        folders: this.$store.state.selectedObjectState.folders,
        selectedFolder: this.$store.state.selectedObjectState.selectedFolder
      }
    },
    getFolders: function () {
      return this.folders
    },
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/List'
</style>