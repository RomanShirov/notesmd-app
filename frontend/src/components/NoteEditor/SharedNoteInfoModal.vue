<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-content">
        <h3 class="cn-title">Note published</h3>
        <div class="cn-btn-group">
          <div class="shared-link-container">
            <span class="shared-link-success-title">Copy Link:</span>
            <span class="shared-link">http://notes.glck.org/shared/kitten/zxc13Ju78t76</span>
          </div>
          <input type="button" class="cn-btn" value="Close" @click="$store.commit('setSharedModalVisibility');"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SharedNoteInfoModal',
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
@import '@/styles/NoteEditor/SharedNoteInfoModal'
</style>