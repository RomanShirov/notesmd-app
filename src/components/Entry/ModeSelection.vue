<template>
  <div class="mode-selector">
    <h1>How to save your notes?</h1>
    <div class="ms-btn-group">
      <input type="button" class="ms-btn" @click="this.$router.push('/editor')" value="Use local storage">
      <input type="button" class="ms-btn" value="Login or create account">
    </div>
  </div>
</template>

<script>
export default {
  name: "ModeSelection"
}
</script>

<style lang="sass" scoped>
@import '@/styles/Entry/ModeSelection'
</style>