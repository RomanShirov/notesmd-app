<template>
  <div v-if="!isMobile" class="app-container">
    <Sidebar class="sidebar"/>
    <NoteList class="note-list readmode"/>
    <Editor class="note-editor"/>
    <CreateNoteModal v-if="isModalVisible"/>
    <SharedNoteInfoModal v-if="isSharingModalVisible"/>
  </div>
  <div v-else class="mob-app-container">
    <Sidebar class="mob-sidebar"/>
    <NoteList v-if="!isNoteListSelected" class="mob-note-list"/>
    <Editor v-else class="mob-note-editor"/>
    <CreateNoteModal v-if="isModalVisible"/>
    <SharedNoteInfoModal v-if="isSharingModalVisible"/>
  </div>
</template>

<script>
import Sidebar from '@/components/NoteEditor/Sidebar';
import NoteList from '@/components/NoteEditor/NoteList';
import Editor from '@/components/NoteEditor/Editor';
import CreateNoteModal from '@/components/NoteEditor/CreateNoteModal';
import SharedNoteInfoModal from '@/components/NoteEditor/SharedNoteInfoModal';

import {isMobileDevice} from '@/utils/mobileChecker';

export default {
  name: 'NoteEditor',
  computed: {
    isSharingModalVisible() {
      return this.$store.state.applicationState.sharedNoteModalIsVisible;
    },
    isModalVisible() {
      return this.$store.state.applicationState.createNoteModalIsVisible;
    },
    isMobile(){
      return isMobileDevice();
    },
    isNoteListSelected(){
      return this.$store.state.applicationState.mobileNoteListSelected;
    },
    getWindowHeight(){
      return window.innerHeight;
    }
  },

  components: {
    Sidebar,
    NoteList,
    Editor,
    CreateNoteModal,
    SharedNoteInfoModal,
  },
};
</script>

<style scoped lang="sass">
@import '@/styles/NoteEditor/MobileLayout.sass'

html
  overflow: hidden

.mob-app-container
  max-height: v-bind("getWindowHeight + 'px'")

@media (max-width: 950px)
  .readmode
    display: none

  .note-editor
    width: 90%


</style>
