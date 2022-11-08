<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-content">
        <h1>Create note</h1>
        <input type="text" class="input" v-model="createRequest.title" placeholder="Title"/>
        <input type="text" class="input" v-model="createRequest.folder" placeholder="Folder"/>
        <div class="cn-btn-group">
          <input type="button" class="cn-btn" value="Create" @click="uploadNote"/>
          <input type="button" class="cn-btn" value="Close" @click="close"/>
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
    rules: [
      value => !!value || 'Title required',
      value => (value && value.length <= 32) || 'Max 32 characters',
    ],
  }),
  methods: {
    close() {
      this.$store.commit('setModalVisibility');
    },
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