<template>
  <div class="tip-wrap">
    <img src="/cat.png" alt="animal-cat" class="animal" />
    <p>
      <slot />
    </p>
  </div>
</template>
<script></script>
<style scoped>
.tip-wrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #929090;
  max-width: 50%;
  float: right;
}
.tip-wrap > .animal {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  vertical-align: top;
  align-self: start;
}
</style>
