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
</style>
