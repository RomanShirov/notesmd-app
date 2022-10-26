<template>
  <v-list class="card" lines="two">
    <v-list-item
        @click="updateDisplayInfo(item)"
        class="element"
        v-for="item in notes"
        :key="item.id"
        :title="item.title"
        :subtitle="item.content"
    >ID: {{ item.id }}
    </v-list-item>
  </v-list>
</template>

<script>

export default {
  name: "NoteList",
  data() {
    return {
      selectedNoteId: '',
      notes: {},
    }
  },
  beforeMount() {
    this.notes = this.$store.getters.getNotesList
  },
  methods: {

    updateDisplayInfo: function (item) {
      this.selectedNoteId = item.id
      this.$store.commit('setCurrentNoteId', this.selectedNoteId);
    },
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/List'
</style>