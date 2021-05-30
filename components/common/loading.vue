<template>
  <div v-show="show" class="loading-wrap">
    <img src="~/static/loading.svg" alt="" />
  </div>
</template>
<script>
export default {
  computed: {
    show() {
      return this.$store.state.loading
    }
  },
  watch: {
    show() {
      document.querySelector("body").style.overflow = this.show
        ? "hidden"
        : "auto"
    }
  }
}
</script>
<style scoped>
.loading-wrap {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #747474bf;
}
.loading-wrap > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
}
</style>
