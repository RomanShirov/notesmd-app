<template>
  <div class="editor">
    <h1 class="title">{{note.title}}</h1>
    <p class="title" v-html="note.content"/>
    <p class="title">{{note}}</p>
  </div>
</template>

<script>
export default {
  name: "Editor",
  data() {
    return {
      note: this.$store.state.currentNote
    }
  },
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/Editor'
</style>