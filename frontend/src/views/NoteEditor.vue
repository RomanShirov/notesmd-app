<template>
  <div class="app-container">
    <Sidebar/>
    <NoteList class="note-list"/>
    <Editor class="note-editor"/>
    <CreateNoteModal v-if="isModalVisible"/>
  </div>
</template>

<script>
import Sidebar from '@/components/NoteEditor/Sidebar';
import NoteList from '@/components/NoteEditor/NoteList';
import Editor from '@/components/NoteEditor/Editor';
import CreateNoteModal from '@/components/NoteEditor/CreateNoteModal';

export default {
  name: 'NoteEditor',
  computed: {
    isModalVisible() {
      return this.$store.state.applicationState.createNoteModalIsVisible;
    },
  },

  components: {
    Sidebar,
    NoteList,
    Editor,
    CreateNoteModal,
  },
};
</script>

<style scoped lang="sass">
@media (max-width: 950px)
  .note-list
    display: none

  .note-editor
    width: 90%
</style>
