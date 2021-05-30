<template>
  <div class="avatar-wrap">
    <img v-if="url" :src="url" />
    <font-awesome-icon v-else icon="user-circle" />
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: ""
    }
  }
}
</script>
<style scoped>
.avatar-wrap {
  position: absolute;
  bottom: 0;
  right: 0;
}
img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
