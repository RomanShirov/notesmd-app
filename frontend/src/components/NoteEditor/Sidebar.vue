<template>
  <div class="sidebar">
    <div class="icon" title="Log Out">
      <exit-to-app class="icon" @click="$store.commit('logOut');"></exit-to-app>
    </div>
    <!--    <div class="icon" title="Settings">-->
    <!--      <cog-icon class="icon"></cog-icon>-->
    <!--    </div>-->
    <div class="icon" title="Toggle Read-only mode">
      <book-open class="icon" title="Toggle Read-only mode" @click="$store.commit('setReadOnlyState');"></book-open>
    </div>
    <div class="icon" title="Enable deleting mode" @click="$store.commit('setDeletingMode');">
      <delete-sweep class="icon"></delete-sweep>
    </div>
    <div class="icon" title="Share a note" @click="$store.commit('setNoteSharingMode');">
      <share class="icon" title="Share a note"></share>
    </div>
    <div v-if="$store.getters['isNoteSelected']" class="icon" title="Save note as .MD file"
         @click="downloadMarkdown();">
      <download class="icon"></download>
    </div>
    <div v-if="isMobile" class="mobile-control">
      <div class="icon" title="Create note" @click="$store.commit('setModalVisibility');">
        <create class="icon"></create>
      </div>
      <div class="icon" title="Show notes list" @click="$store.commit('setNoteListVisibility');">
        <format-align-left class="icon"></format-align-left>
      </div>
    </div>


  </div>
</template>

<script>
import CogIcon from 'vue-material-design-icons/Cog.vue';
import BookOpen from 'vue-material-design-icons/BookOpen.vue';
import FolderHome from 'vue-material-design-icons/FolderHome.vue';
import DeleteSweep from 'vue-material-design-icons/DeleteSweep.vue';
import ExitToApp from 'vue-material-design-icons/ExitToApp.vue';
import Create from 'vue-material-design-icons/FileDocumentEdit.vue';
import FormatAlignLeft from 'vue-material-design-icons/FormatAlignLeft.vue';
import Share from 'vue-material-design-icons/Share.vue';
import Download from 'vue-material-design-icons/Download.vue';

import {isMobileDevice} from '@/utils/mobileChecker';
import {saveAs} from 'file-saver';
import {mapState} from 'vuex';

export default {
  name: 'Sidebar',
  components: {
    CogIcon,
    BookOpen,
    FolderHome,
    DeleteSweep,
    ExitToApp,
    Create,
    FormatAlignLeft,
    Share,
    Download,

  },
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