<template>
  <div class="contain">
    <nuxt />
  </div>
</template>
<style>
.search-wrap {
  background-color: #0071d5;
}
.search-result {
  background-color: #f0f1f2;
  padding: 15px 0;
}
.area-search {
  padding: 15px 0;
  background: linear-gradient(45deg, #2fdbd9e0, #8eca304d);
}
.hot-wrap {
  padding: 15px 0;
}
.service-wrap {
  padding: 15px 0;
  overflow-x: hidden;
}

.footer-wrap {
  margin-top: -100px;
  height: 100px;
  background-color: #000;
  color: #fff;
}
.title {
  color: var(--purple);
  transform: skewX(-20deg);
  border-bottom: 1px solid #00000026;
  padding-bottom: 10px;
  position: relative;
}
.title::after {
  content: "";
  position: absolute;
  display: block;
  width: 120px;
  height: 5px;
  bottom: -5px;
  left: 0;
  background-color: #2b5b04;
}
.page-enter-active,
.page-leave-active {
  transition: all 1s;
  opacity: 1;
}
.page-enter,
.page-leave {
  opacity: 0;
}
p {
  margin: 0 !important;
}
/* scrollbar 區域背景 */
body::-webkit-scrollbar {
  background-color: #80898639;
  width: 10px;
}
/* 上下兩邊 */
/* body::-webkit-scrollbar-button {
  background-color: blue;
} */
/** 中間空白區域包含滑動塊 */
body::-webkit-scrollbar-track {
  border-radius: 30px;
  background-color: rgba(10, 10, 10, 0.4);
}
/** 中間空白區域不含滑動塊 */
/* body::-webkit-scrollbar-track-piece {
  background-color: lightcoral;
  width: 5px;
} */
/** 滾動條中跟著滑動的東西 */
body::-webkit-scrollbar-thumb {
  background-color: #fff;
  transition: all 5s;
}
body:hover::-webkit-scrollbar-thumb {
  background-color: rgba(86, 83, 83, 0.183);
  transition: all 5s;
}

/** 水平垂直scrollbar相交的區域 */
/* body::-webkit-scrollbar-corner {
  background-color: black;
} */
</style>
