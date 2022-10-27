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
import {GetNotes} from '../../wailsjs/go/main/App';

export default {
  name: "NoteEditor",
  data(){
    return {
      isLoading: false,
    }
  },
  beforeMount() {
    this.isLoading = true
    GetNotes()
        .then((response) => {
          this.$store.commit('setNoteData', JSON.parse(response));
          }).finally(() => this.isLoading = false)
    // this.axios.get("http://127.0.0.1:3000/notes/114793824").then((response) => {
    //   this.$store.commit('setNoteData', response.data);
    // }).finally(() => this.isLoading = false)

  },
  components: {
    Sidebar,
    NoteList,
    Editor
  },
}
</script>

<style lang="sass" scoped>
@import '@/styles/Animations/EntranceScaleIn'

.loading-screen
  background-color: #1b1d1f
</style>