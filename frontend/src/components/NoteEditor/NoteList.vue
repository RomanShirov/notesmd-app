<template>
  <v-list class="card" lines="two">
    <v-list-item
        @click="updateDisplayInfo(item)"
        class="element"
        v-for="item in notes"
        :key="item.id"
        :title="item.title"
        :subtitle="item.content"
    >ID: {{item.id}}</v-list-item>
  </v-list>
</template>

<script>

export default {
  name: "NoteList",
  data() {
    return {
      currentNote: {
        selectedNoteId: '',
        selectedNoteContent: ''
      },
      notes: {}
    }
  },
  mounted() {
      this.axios.get("http://127.0.0.1:3000/notes/114793824").then((response) => {
        this.$store.commit('setNoteData', response.data);
        this.notes = this.$store.getters.getNotesList
      })
  },
  methods: {
    updateDisplayInfo: function (item) {
      this.selectedNoteId = item.id
      this.selectedNoteContent = item.content
      console.log("Current note", this.currentNote)
      this.$store.commit('setCurrentNote', this.currentNote);
    },
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/List'
</style>