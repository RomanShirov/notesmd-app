<template>
  <div class="editor-container">
    <md-editor
        v-if="isReadOnly"
        class="editor"
        ref="editor"
        v-model="currentNoteState"
        theme="dark"
        language="en-US"
        toolbarsExclude="[github, mermaid, katex]"
        codeTheme="atom"
        :footers="footers"
        previewOnly="true"
    >
      <template #defFooters>
        <span class="update-time">Last update: {{ lastSyncTime }}</span>
      </template>
    </md-editor>
    <md-editor
        v-else
        class="editor"
        ref="editor"
        v-model="currentNoteState"
        theme="dark"
        language="en-US"
        toolbarsExclude="[github, mermaid, katex]"
        codeTheme="atom"
        :footers="footers"
    >
      <template #defFooters>
        <span class="update-time">Last update: {{ lastSyncTime }}</span>
      </template>
    </md-editor>
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
        id: null,
        content: null
      },
      footers: ['markdownTotal', 'scrollSwitch', 0],
    }
  },
  computed: {
    ...mapState(["notesData"]),

    currentNoteState: {
      get() {
        const result = this.notesData.notes.find(note => note.id === this.$store.state.currentNoteId)
        if (result) {
          this.currentNote.id = result.id
        }
        return result ? result.content : "Choose a Note"
      },
      set(value) {
        this.currentNote.content = value
        this.$store.commit('updateNote', this.currentNote);
      }
    },

    lastSyncTime: function () {
      return this.$store.getters.getLastSyncTime.toLocaleString()
    },

    isReadOnly: function () {
      return this.$store.getters.isReadOnly
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/Editor'
</style>