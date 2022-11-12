<template>
  <div class="data-info"> {{ text }}</div>
</template>

<script>
export default {
  name: 'NoData',
  props: {
    text: {
      type: String,
      default: () => 'No Data',
    },
  },
};
</script>

<style scoped>
.data-info {
  color: #ffffff;
}
</style>