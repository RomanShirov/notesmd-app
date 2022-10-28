<template>
  <v-list class="card" lines="two">
    <div class="note-list-header">
      <input type="button" class="note-list-header-button" @click="changeReadOnly" value="Reading mode"/>
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
    }
  },
  beforeMount() {
    this.notes = this.$store.getters.getNotes
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
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/List'
</style>