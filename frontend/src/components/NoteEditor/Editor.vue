<template>
  <div class="editor-container">
    <!--Duplicate components, because previewOnly=false not working-->
    <NoData
        class="nodata"
        v-if="!$store.state.selectedObjectState?.selectedNoteId"
        :text="'Select or create note'"
    />
    <!--V-if - change-->
    <md-editor
        v-else-if="$store.getters['isReadOnly']"
        class="editor readonly"
        ref="editor"
        v-model="currentNoteState"
        theme="dark"
        language="en-US"
        codeTheme="atom"
        previewOnly="true"
    >
      <template #defFooters>
        <span class="update-status">{{ $store.getters['isSynchronized'] }}</span>
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
        @on-save="$store.commit('synchronizeNote')"
    >
      <template #defFooters>
        <span class="update-status">{{ $store.getters['isSynchronized'] }}</span>
      </template>
    </md-editor>
  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {mapState} from 'vuex';
import NoData from '@/components/Blocks/NoData';

export default {
  name: 'Editor',
  components: {
    NoData,
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
  // ToDo: (???) Add image uploading
  computed: {
    ...mapState(['receivedFolderData']),
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
  },
};
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/Editor'
</style>