<template>
  <div class="app-container">
    <ModeSelection/>
  </div>
</template>

<script>
import ModeSelection from "@/components/Entry/ModeSelection";

export default {
  name: "Entry",
  components: {
    ModeSelection,
  },
  beforeMount() {
    if(this.$store.state.isLocalStorage){
      this.$router.push('/editor')
    }
  }
}
</script>
