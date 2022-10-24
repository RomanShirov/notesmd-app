<template>
  <div class="editor-container">
    <md-editor
        class="editor"
        v-model="currentNoteState"
        theme="dark"
        language="en-US"
        toolbarsExclude="[github, mermaid, katex]"
        codeTheme="atom"
        :placeholder="note"
    />
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
      note: '',

    }
  },
  computed: {
    currentNoteState:  function () {
      return this.$store.state.currentNote.content
    }
  }

}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/Editor'
</style>