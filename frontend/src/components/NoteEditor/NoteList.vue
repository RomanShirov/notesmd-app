<template>
  <v-list class="card" lines="two">
    <v-list-item
        @click="updateDisplayInfo(item)"
        class="element"
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :subtitle="item.content"
    ></v-list-item>
  </v-list>
</template>

<script>
import {marked} from "marked";

export default {
  name: "NoteList",
  data() {
    return {
      selectedNoteData: {
        title: '',
        content: ''
      },
      items: [
        {
          title: "1. Тест заметки",
          content: "# Lorem ipsum dolor sit amet \n ## Consectetur adipisicing elit. \n ``Commodi, ratione debitis quis`` \n est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "2. Title",
          content: "Lorem ipsum dolor sit amet Consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "3. Title",
          content: "Lorem ipsum dolor sit amet Consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "4. Title",
          content: "Lorem ipsum dolor sit amet Consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "5. Title",
          content: "Lorem ipsum dolor sit amet Consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "6. Title",
          content: "Lorem ipsum dolor sit amet Consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "7. Title",
          content: "Lorem ipsum dolor sit amet Consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
      ]
    }
  },
  methods: {
    updateDisplayInfo: function (item) {
      this.selectedNoteData.title = item.title
      this.selectedNoteData.content = marked.parse(item.content);
      this.$store.commit('setCurrentNote', this.selectedNoteData);
    },
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/List'
</style>