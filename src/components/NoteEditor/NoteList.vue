<template>
  <v-list class="card" lines="two">
    <div class="note-list-header">
      <v-tabs class="tab-list" v-model="folders" background-color="red-lighten-2" height="50" hide-slider>
        <v-tab class="tab rounded-lg" v-for="(folder, idx) in folders" :key="folder" :value="folder" @click="updateSelectedFolder(folder)">
          {{ folder }}
        </v-tab>
      </v-tabs>
    </div>
    <p class="note-list-title">{{selectedFolder}}</p>
    <v-list-item
        @click="updateDisplayInfo(item)"
        class="element"
        v-for="item in notes"
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
      selectedFolder: '',
      selectedNoteId: '',
      notes: {},
      folders: [],
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
      this.selectedFolder = item
      this.$store.commit('selectFolder', item);
      this.$store.commit('setNotesByFolder', item);
      this.notes = this.$store.state.receivedFolderData
    },
  },
  computed: {
    // lastSyncTime: function () {
    //   return this.$store.getters.getLastSyncTime.toLocaleString()
    // },
    computed: {
      getFolders: function () {
        return this.folders
      },
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/List'
</style>