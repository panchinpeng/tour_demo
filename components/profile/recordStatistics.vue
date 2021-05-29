<template>
  <div class="statistics-wrap">
    <div class="circle-wrap">
      留言數:
      {{ commitCount }}
    </div>
    <div class="circle-wrap">
      回覆數:
      {{ replyCount }}
    </div>
    <div class="circle-wrap">
      收藏數:
      {{ favoriteCount }}
    </div>
    <div class="circle-wrap">
      登入數:
      {{ loginCount }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    commitCount: {
      type: Number,
      default: 0
    },
    replyCount: {
      type: Number,
      default: 0
    },
    favoriteCount: {
      type: Number,
      default: 0
    },
    loginCount: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style scoped>
.statistics-wrap {
  background: #000;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}
.circle-wrap {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #fff;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
