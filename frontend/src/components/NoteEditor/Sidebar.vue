<template>
  <div class="sidebar">
    <div class="icon" title="Log Out" @click="$store.commit('logOut');">
      <v-icon class="icon">mdi-exit-to-app</v-icon>
    </div>
    <!--    <div class="icon" title="Settings">-->
    <!--      <cog-icon class="icon"></cog-icon>-->
    <!--    </div>-->
    <div class="icon" title="Toggle Read-only mode" @click="$store.commit('setReadOnlyState');">
      <v-icon class="icon">mdi-book-open</v-icon>
    </div>
    <div class="icon" title="Enable deleting mode" @click="$store.commit('setDeletingMode');">
      <v-icon class="icon">mdi-delete-sweep</v-icon>
    </div>
    <div class="icon" title="Share a note" @click="$store.commit('setNoteSharingMode');">
      <v-icon class="icon">mdi-share</v-icon>
    </div>
    <div v-if="$store.getters['isNoteSelected']" class="icon" title="Save note as .MD file"
         @click="downloadMarkdown();">
      <v-icon class="icon">mdi-download</v-icon>
    </div>
    <div v-if="isMobile" class="mobile-control">
      <div class="icon" title="Create note" @click="$store.commit('setModalVisibility');">
        <v-icon class="icon">mdi-pencil</v-icon>
      </div>
      <div class="icon" title="Show notes list" @click="$store.commit('setNoteListVisibility');">
        <v-icon class="icon">mdi-format-list-bulleted-square</v-icon>
      </div>
    </div>


  </div>
</template>

<script>

import {isMobileDevice} from '@/utils/mobileChecker';
import {saveAs} from 'file-saver';
import {mapState} from 'vuex';

export default {
  name: 'Sidebar',
  data() {
    return {};
  },
  methods: {
    downloadMarkdown() {
      const result = this.receivedFolderData.find(
          note => note.id === this.$store.state.selectedObjectState.selectedNoteId);
      const data = result.data || "";
      const blob = new Blob([data],
          {type: 'text/plain;charset=utf-8'});
      saveAs(blob, `${result.title}.md`);
    },
  },
  computed: {
    ...mapState(['receivedFolderData']),
    isMobile() {
      return isMobileDevice();
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/Sidebar'
</style>