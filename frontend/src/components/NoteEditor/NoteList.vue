<template>
  <v-list class="card" lines="two">
    <div class="note-list-header">
      <v-tabs class="tab-list" v-model="folders" background-color="red-lighten-2" hide-slider>
        <v-tab class="tab rounded-lg" v-for="folder in folders" :key="folder" :value="folder">
          {{ folder }}
        </v-tab>
      </v-tabs>
    </div>
    <v-list-item
        @click="updateDisplayInfo(item)"
        class="element"
        v-for="item in notes"
        :key="item.id"
        :title="item.title"
        :subtitle="item.content"
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
    this.notes = this.$store.getters.getNotes
    this.folders = this.$store.getters.getFolderList
  },
  methods: {
    updateDisplayInfo: function (item) {
      this.selectedNoteId = item.id
      this.$store.commit('setCurrentNoteId', this.selectedNoteId);
    },
    changeReadOnly: function () {
      this.$store.commit('changeReadOnlyStatus');
    },
  },
  computed: {
    lastSyncTime: function () {
      return this.$store.getters.getLastSyncTime.toLocaleString()
    },
    computed: {
      getFolders: function () {
        return this.$store.getters.getFolderList
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/List'
</style>