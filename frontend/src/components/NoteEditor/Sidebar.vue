<template>
  <div class="sidebar">
    <cog-icon class="icon"></cog-icon>
  </div>
</template>

<script>
import CogIcon from 'vue-material-design-icons/Cog.vue';

export default {
  name: "Sidebar",
  components: {
    CogIcon,
  },
  data() {
    return {
    }
  },

}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/Sidebar'
</style>