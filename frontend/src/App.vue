<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
  mounted() {
    setInterval(() => {
      this.$store.commit('syncState');
    }, 3000);
  }
}
</script>

<style lang="sass">
@import '@/styles/Global'
@import '@/styles/Container'
</style>