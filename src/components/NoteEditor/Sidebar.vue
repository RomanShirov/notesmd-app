<template>
  <div class="sidebar">
    <div class="icon" title="Settings">
      <cog-icon class="icon"></cog-icon>
    </div>
    <div class="icon" title="Toggle Read-only mode">
      <book-open class="icon" title="Toggle Read-only mode" @click="changeReadOnly"></book-open>
    </div>
    <div class="icon" title="Back to all notes" @click="this.$router.push('/overview')">
      <folder-home class="icon"></folder-home>
    </div>
    <div class="icon" title="Enable deleting mode" @click="setDeletingMode">
      <delete-sweep class="icon"></delete-sweep>
    </div>

  </div>
</template>

<script>
import CogIcon from 'vue-material-design-icons/Cog.vue';
import BookOpen from 'vue-material-design-icons/BookOpen.vue';
import FolderHome from 'vue-material-design-icons/FolderHome.vue';
import DeleteSweep from 'vue-material-design-icons/DeleteSweep.vue';

export default {
  name: 'Sidebar',
  components: {
    CogIcon,
    BookOpen,
    FolderHome,
    DeleteSweep,
  },
  data() {
    return {};
  },
  methods: {
    changeReadOnly() {
      this.$store.commit('setReadOnlyState');
    },
    setDeletingMode() {
      this.$store.commit('setDeletingMode');
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/Sidebar'
</style>