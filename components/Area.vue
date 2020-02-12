<template>
  <div>
    test
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("syncAttractions")
  }
}
</script>
<style scoped></style>
