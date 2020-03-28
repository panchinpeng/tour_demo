<template>
  <div>
    <div :class="{ ['circle-menu']: true, drop }">
      <font-awesome-icon icon="bars" class="menu-icon" @click="toggleMenu" />
      <div v-if="drop" class="menu-items">
        <ul v-if="$store.state.authentication" class="user-function">
          <li>推薦景點</li>
          <li>收藏景點</li>
          <li>登出</li>
        </ul>
        <ul v-else class="user-function">
          <li>登入</li>
        </ul>
        <div class="close-wrap">
          <font-awesome-icon
            icon="times"
            class="menu-icon2"
            @click="toggleMenu"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dbUserLogined } from "~/components/firebase/commentData"
export default {
  data() {
    return {
      drop: false
    }
  },
  beforeUpdate() {
    if (!this.$store.state.authentication && dbUserLogined()) {
      console.log("eeee1")
      this.$store.dispatch("setLoginStatus", true)
    }
  },
  methods: {
    toggleMenu() {
      this.drop = !this.drop
    }
  }
}
</script>

<style>
.circle-menu {
  width: 200px;
  height: 200px;
  background-color: #0071d5;
  position: fixed;
  right: -100px;
  top: -100px;
  transition: all 1s;
  border-radius: 50%;
  z-index: 99;
}
.circle-menu.drop {
  width: 100%;
  height: 100%;
  border-radius: 0;
  right: 0;
  top: 0;
  z-index: 101;
}
.menu-icon {
  position: absolute;
  bottom: 10px;
  left: 65px;
  font-size: 1.6rem;
  color: #fff;
}
.circle-menu.drop > .menu-icon {
  display: none;
}
.menu-items {
  position: absolute;
  width: 100%;
  height: 250px;
  margin: auto;
}

.user-function {
  width: 250px;
  margin: auto;
  list-style-type: none;
  border-left: 5px solid #fff;
  padding: 10px 0;
  margin-top: 30px;
  transition: all 2s;
}
.user-function::after {
  content: "";
  width: 100%;
  height: 5px;
  background-color: #fff;
  margin-left: -20px;
  display: block;
}
.user-function > li {
  box-sizing: border-box;
  padding: 20px 20px;
  color: #fff;
  animation-name: user-fn-animation;
  animation-duration: 2s;
  cursor: pointer;
}
@keyframes user-fn-animation {
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0);
    display: block;
  }
}

.user-function > li:hover {
  background-color: #1c4f717d;
}

.close-wrap {
  width: 250px;
  text-align: right;
  margin: auto;
}
.menu-icon2 {
  font-size: 1.6rem;
  color: #fff;
  cursor: pointer;
}
</style>
