<template>
  <div class="app-container">
    <div class="sidebar">

    </div>
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
    <div class="editor">
      <h1 class="title">{{ currentData.title }} </h1>
      <p class="title" v-html="currentData.content"/>
    </div>
  </div>


</template>

<script>
import { marked } from 'marked';

export default {
  name: "NoteEditor",
  data() {
    return {
      colors: ["#ffcc80", "#ffab91", "#cf94da", "#81deea", "#f48fb1", "#7fcbc3"],
      currentData: {
        title: '123',
        content: '123'
      },
      items: [
        {
          title: "1. Тест заметки",
          content: "# Lorem ipsum dolor sit amet \n ## Consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
      ]
    }
  },
  methods: {
    updateDisplayInfo: function (item) {
      this.currentData.title = item.title
      this.currentData.content = marked.parse(item.content);
    },
    getRandomColor: function () {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
    setActualData: function () {

    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/List'
@import '@/styles/NoteEditor/Editor'
@import '@/styles/NoteEditor/Sidebar'
</style>