<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-content">
        <h1>Create note</h1>
        <v-text-field
            class="modal-input"
            label="Title"
            v-model="createRequest.title"
            :rules="rules"
            hide-details="auto"
            theme="dark"
            variant="solo"
        ></v-text-field>
        <v-text-field
            class="modal-input"
            label="Folder"
            v-model="createRequest.folder"
            :rules="rules"
            hide-details="auto"
            theme="dark"
            variant="solo"
        ></v-text-field>
        <v-btn class="upload-button" size="large" @click="uploadNote">
          Create
        </v-btn>
        <p class="close-button" @click="close">Close</p>
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