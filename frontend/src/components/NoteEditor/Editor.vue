<template>
  <div class="editor-container">
    <!--Duplicate components, because previewOnly=false not working-->
    <md-editor
        v-if="isReadOnly"
        class="editor readonly"
        ref="editor"
        v-model="currentNoteState"
        theme="dark"
        language="en-US"
        toolbarsExclude="[github, mermaid, katex, prettier]"
        codeTheme="atom"
        :footers="footers"
        previewOnly="true"
    >
      <template #defFooters>
        <span class="update-status">{{ isSynchronized }}</span>
      </template>
    </md-editor>
    <md-editor
        v-else
        class="editor"
        ref="editor"
        v-model="currentNoteState"
        theme="dark"
        language="en-US"
        toolbarsExclude="github, mermaid, katex, prettier"
        codeTheme="atom"
        :footers="footers"
        @on-save="save"
    >
      <template #defFooters>
        <span class="update-status">{{ isSynchronized }}</span>
      </template>
    </md-editor>
  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {mapState} from 'vuex';

export default {
  name: 'Editor',
  components: {
    MdEditor,
  },
  data() {
    return {
      note: {
        id: null,
        data: null,
      },
      footers: ['markdownTotal', 'scrollSwitch', 0],
    };
  },
  methods: {
    save(){
      this.$store.commit('synchronizeNote');
    }
  },
  computed: {
    ...mapState(['receivedFolderData']),

    isSynchronized() {
      return this.$store.state.isSynchronized;
    },

    currentNoteState: {
      get() {
        const result = this.receivedFolderData.find(
            note => note.id === this.$store.state.selectedObjectState.selectedNoteId);
        if (result) {
          this.note.id = result.id;
        }
        return result ? result.data : 'Choose a Note';
      },
      set(value) {
        this.note.data = value;
        this.$store.commit('updateNote', this.note);
      },
    },

    isReadOnly() {
      return this.$store.state.applicationState.readOnlyMode;
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/Editor'
</style>