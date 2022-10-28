<template>
  <div class="sidebar">
    <book-open class="icon" @click="changeReadOnly"></book-open>
    <cog-icon class="icon"></cog-icon>

  </div>
</template>

<script>
import CogIcon from 'vue-material-design-icons/Cog.vue';
import BookOpen from 'vue-material-design-icons/BookOpen.vue'

export default {
  name: "Sidebar",
  components: {
    CogIcon,
    BookOpen,
  },
  data() {
    return {
    }
  },
  methods: {
    changeReadOnly: function () {
      this.$store.commit('changeReadOnlyStatus');
    },
  },
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/Sidebar'
</style>