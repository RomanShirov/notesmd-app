<template>
<!--  <div v-if="isLoading" class="app-container"></div>-->
  <div class="app-container">
    <Sidebar/>
    <NoteList class="note-list"/>
    <Editor class="note-editor"/>
    <CreateNoteModal v-if="isModalVisible"/>
  </div>
</template>

<script>
import Sidebar from '@/components/NoteEditor/Sidebar';
import NoteList from '@/components/NoteEditor/NoteList';
import Editor from '@/components/NoteEditor/Editor';
import CreateNoteModal from '@/components/NoteEditor/CreateNoteModal';

export default {
  name: 'NoteEditor',
  data() {
    return {
      // isLoading: false,
    };
  },
  beforeMount() {
    // this.isLoading = true;
    //
    // const folder = this.foldersState.folders;
    // const token = this.$store.state.userInformation.jwtToken;
    //
    // const connectionHostAddr = this.$store.state.debugHostIp;
    //
    // if (this.$store.state.userInformation.jwtToken){
    //   this.axios.get(`${connectionHostAddr}/api/notes/${folder}`, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
    //     this.$store.commit('setFolderData', response.data);
    //   }).finally(() => {
    //     this.isLoading = false;
    //   });
    // }

  },

  computed: {
    isModalVisible() {
      return this.$store.state.applicationState.createNoteModalIsVisible;
    },
    foldersState() {
      return {
        folders: this.$store.state.selectedObjectState.folders,
      };
    },
  },

  components: {
    Sidebar,
    NoteList,
    Editor,
    CreateNoteModal,
  },
};
</script>

<style scoped lang="sass">
@media (max-width: 950px)
  .note-list
    display: none

  .note-editor
    width: 90%
</style>
