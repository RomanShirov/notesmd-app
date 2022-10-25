<template>
  <v-list class="card" lines="two">
    <v-list-item
        @click="updateDisplayInfo(item)"
        class="element"
        v-for="item in userInfo.notes"
        :key="item.title"
        :title="item.title"
        :subtitle="item.content"
    ></v-list-item>
  </v-list>
</template>

<script>

export default {
  name: "NoteList",
  data() {
    return {
      selectedNoteData: {
        title: '',
        content: ''
      },
      userInfo: []
    }
  },
  mounted() {
      this.axios.get("http://127.0.0.1:3000/notes/114793824").then((response) => {
        this.userInfo = response.data
        console.log(this.userInfo.username)
      })
  },
  methods: {
    updateDisplayInfo: function (item) {
      this.selectedNoteData.title = item.title
      this.selectedNoteData.content = item.content;
      this.$store.commit('setCurrentNote', this.selectedNoteData);
    },
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/List'
</style>