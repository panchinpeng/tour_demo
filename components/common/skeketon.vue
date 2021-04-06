<template>
  <div class="masker d-flex justify-content-center align-items-center px-2">
    <b-progress class="w-100" :max="maxLoadingTime" height="1.5rem">
      <b-progress-bar :value="loadingTime" :label="`${loadingTime}%`" />
    </b-progress>
  </div>
</template>
<script>
export default {
  props: {
    loadingTime: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      maxLoadingTime: 100
    }
  }
}
</script>
<style>
.masker {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #7b7b7b6e;
}
</style>
