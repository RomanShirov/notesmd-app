<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-content">
        <h1 class="cn-title">Create note</h1>
        <input type="text" class="input" v-model="createRequest.title" placeholder="Title"/>
        <input type="text" class="input" @keyup.enter="uploadNote" v-model="createRequest.folder" placeholder="Folder"/>
        <div class="cn-btn-group">
          <input type="button" class="cn-btn" value="Create" @click="uploadNote"/>
          <input type="button" class="cn-btn" value="Close" @click="$store.commit('setModalVisibility');"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateNoteModal',
  data: () => ({
    createRequest: {
      title: '',
      folder: '',
    },
  }),
  methods: {
    uploadNote() {
      this.$store.commit('uploadNote', this.createRequest);
      this.$store.commit('setModalVisibility');
    },
  },
  computed: {
    folders() {
      return this.$store.state.selectedObjectState.folders;
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/CreateNoteModal'
</style>