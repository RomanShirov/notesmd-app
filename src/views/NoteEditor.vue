<template>
  <div v-if="isLoading" class="app-container"></div>
  <div v-else class="app-container">
    <Sidebar/>
    <NoteList/>
    <Editor/>
  </div>
</template>

<script>
import Sidebar from "@/components/NoteEditor/Sidebar";
import NoteList from "@/components/NoteEditor/NoteList";
import Editor from "@/components/NoteEditor/Editor";

export default {
  name: "NoteEditor",
  data(){
    return {
      isLoading: false,
    }
  },
  beforeMount() {
    this.isLoading = true

    this.axios.get("http://127.0.0.1:3000/notes/114793824").then((response) => {
      this.$store.commit('setNoteData', response.data);
    }).finally(() => this.isLoading = false)

  },
  components: {
    Sidebar,
    NoteList,
    Editor
  },
}
</script>
