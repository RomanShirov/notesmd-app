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
import {  mapState } from "vuex";

export default {
  name: "Editor",
  components: {
    MdEditor
  },
  data() {
    return {
      currentNote: {
        id: 'ээ',
        content: 'ээ'
      }
    }
  },
  computed: {
    ...mapState(["notesData"]),
    currentNoteState: {
      get(){
        const noteList = this.notesData.notes
        const note = noteList.find(note => note.id === this.$store.state.currentNoteId);
        console.log(note)
        this.currentNote.id = this.$store.state.currentNoteId
        console.log("ID: ", this.currentNote.id, note.content)
        this.currentNote.content = note.content
        return this.currentNote.content
      },
      // set(value){
      //   this.$store.commit('updateNote', value, this.currentNote.id);
      // }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/Editor'
</style>