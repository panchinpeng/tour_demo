<template>
  <div class="statistics-wrap">
    <div class="circle-wrap">
      留言數
    </div>
    <div class="circle-wrap">
      回復數
    </div>
    <div class="circle-wrap">
      收藏數
    </div>
    <div class="circle-wrap">
      登入數
    </div>
  </div>
</template>
<script></script>
<style scoped>
.statistics-wrap {
  background: #000;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
