<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-content">
        <h3 class="cn-title">Note published</h3>
        <div class="cn-btn-group">
          <div class="shared-link-container">
            <span class="shared-link">{{sharedNoteURL.substr(0, 36)}}</span>
            <input type="button" class="shared-link-success-title" @click="openSharedLink" value="Open"/>
          </div>
        </div>
        <input type="button" class="cn-btn" value="Close" @click="$store.commit('setSharedModalVisibility');"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SharedNoteInfoModal',
  data: () => ({}),
  methods: {
    openSharedLink(){
      this.$store.commit('setSharedModalVisibility');
      window.location.replace(this.sharedNoteURL);
    }
  },
  computed: {
    sharedNoteURL() {
      return this.$store.state.selectedObjectState.sharedNoteURL;
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/styles/NoteEditor/SharedNoteInfoModal'
</style>