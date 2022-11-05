<template>
  <div v-if="isLoading" class="app-container"></div>
  <div v-else class="app-container">
    <Sidebar/>
    <NoteList class="note-list"/>
    <Editor class="note-editor"/>
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

    const folder = this.$store.state.selectedObjectState.selectedFolder
    const requestUrl = `http://127.0.0.1:8000/api/notes/${folder}`
    const token = this.$store.state.userInformation.jwtToken

    console.log("COMPONENT: ", requestUrl)

    this.axios.get(requestUrl, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      this.$store.commit('setFolderData', response.data);
    }).finally(() => {
      this.isLoading = false
    })

  },
  components: {
    Sidebar,
    NoteList,
    Editor
  },
}
</script>

<style scoped lang="sass">
@media (max-width: 950px)
  .note-list
    display: none

  .note-editor
    width: 90%
</style>
