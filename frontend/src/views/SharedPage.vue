<template>
  <h1>Test</h1>
  <h3>{{ user }} {{ noteSharedId }}</h3>
</template>

<script>
export default {
  name: 'SharedPage',
  data(){
    return{
      user: this.$route.params.user,
      noteSharedId: this.$route.params.noteSharedId
    }
  },
};
</script>

<style scoped>

</style>