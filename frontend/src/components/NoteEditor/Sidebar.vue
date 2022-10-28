<template>
  <div class="sidebar">
    <cog-icon class="icon" alt="Settings"></cog-icon>
  </div>
</template>

<script>
import CogIcon from 'vue-material-design-icons/Cog.vue';
import Folder from 'vue-material-design-icons/Folder.vue';

export default {
  name: "Sidebar",
  components: {
    CogIcon,
    Folder,
  },
  data() {
    return {
      folders: [],
    }
  },
  computed: {
    getFolders: function () {
      this.folders = this.$store.getters.getFolderList
      return this.$store.getters.getFolderList
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/Sidebar'
</style>