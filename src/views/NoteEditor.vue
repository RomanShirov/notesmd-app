<template>
  <div v-if="isLoading" class="app-container"></div>
  <div v-else class="app-container">
    <Sidebar/>
    <NoteList class="note-list"/>
    <Editor class="note-editor"/>
    <CreateNoteModal v-if="isModalVisible"/>
  </div>
</template>

<script>
import Sidebar from "@/components/NoteEditor/Sidebar";
import NoteList from "@/components/NoteEditor/NoteList";
import Editor from "@/components/NoteEditor/Editor";
import CreateNoteModal from "@/components/NoteEditor/CreateNoteModal";

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
  computed: {
    isModalVisible(){
      return this.$store.state.applicationState.createNoteModalIsVisible
    }
  },

  components: {
    Sidebar,
    NoteList,
    Editor,
    CreateNoteModal
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
