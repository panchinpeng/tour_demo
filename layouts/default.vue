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
</style>
