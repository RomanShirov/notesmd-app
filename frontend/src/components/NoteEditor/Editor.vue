<template>
  <div class="editor-container">
    <md-editor
        class="editor"
        v-model="currentNoteState"
        theme="dark"
        language="en-US"
        toolbarsExclude="[github, mermaid, katex]"
        codeTheme="atom"
    />
  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {mapState} from "vuex";

export default {
  name: "Editor",
  components: {
    MdEditor
  },
  data() {
    return {
      currentNote: {
        id: '',
        content: ''
      }
    }
  },
  computed: {
    ...mapState(["notesData"]),

    currentNoteState: {
      get(){
        const result = this.notesData.notes.find(note => note.id === this.$store.state.currentNoteId)
        if(result){
          this.currentNote.id = result.id
        }
        return result ? result.content : "Choose a Note"
      },
      set(value){
        this.currentNote.content = value
        this.$store.commit('updateNote', this.currentNote);
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/Editor'
</style>