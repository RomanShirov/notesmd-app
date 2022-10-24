<template>
  <div class="editor-container">
    <md-editor
        class="editor"
        v-model="note"
        theme="dark"
        language="en-US"
        toolbarsExclude="[github]"
        codeTheme="atom"
    />
<!--    <h1 class="title">{{note.title}}</h1>-->
<!--    <p class="title" v-html="note.content"/>-->
<!--    <p class="title">{{note}}</p>-->
  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

export default {
  name: "Editor",
  components: {
    MdEditor
  },
  data() {
    return {
      note: "123"
    }
  },
  computed: {
    getNoteFromState: function (){
      this.note = this.$store.state.currentNote.content
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/Editor'
</style>