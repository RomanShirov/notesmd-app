<template>
  <div class="container">
    <div class="sidebar">

    </div>
    <v-list class="card container" lines="two">
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
      <p class="title">{{ currentData.content }}</p>
    </div>
  </div>


</template>

<script>
export default {
  name: "NotesOverview",
  data() {
    return {
      colors: ["#ffcc80", "#ffab91", "#cf94da", "#81deea", "#f48fb1", "#7fcbc3"],
      currentData: {
        title: '123',
        content: '123'
      },
      items: [
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 2",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 3",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 4",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 5",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
        {
          title: "Title 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        },
      ]
    }
  },
  methods: {
    updateDisplayInfo: function (item) {
      this.currentData.title = item.title
      this.currentData.content = item.content
    },
    getRandomColor: function () {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/NoteList'

.editor
  width: 68%
  height: 98vh
  background-color: #1b1d1f
  border-radius: 15px

.title
  text-align: center
  color: azure

.sidebar
  min-width: 60px
  max-width: 60px
  height: 98vh
  background-color: #1b1d1f
  border-radius: 15px
</style>
