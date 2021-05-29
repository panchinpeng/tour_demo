<template>
  <div>
    <div :class="{ ['circle-menu']: true, drop }">
      <font-awesome-icon icon="bars" class="menu-icon" @click="toggleMenu" />
      <div v-if="drop" class="menu-items">
        <ul v-if="$store.state.authentication" class="user-function">
          <li v-if="$route.path !== '/'" class="link-style" @click="goIndex">
            回首頁
          </li>
          <li @click="gotoRecommend">
            收藏景點
            <b-badge variant="light" class="favorite-count">
              {{ favoriteCount }}
            </b-badge>
          </li>
          <li @click="goSetting">
            個人設定
          </li>
          <li @click="singout">
            登出
          </li>
        </ul>
        <ul v-else class="user-function">
          <li v-if="$route.path !== '/'" class="link-style" @click="goIndex">
            回首頁
          </li>
          <nuxt-link to="/login" class="link-style" tag="li">
            登入
          </nuxt-link>
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
import { userLogout } from "~/components/firebase/userFunction"
import { readFavoriteCount } from "~/components/firebase/favoriteData"
export default {
  data() {
    return {
      drop: false,
      favoriteCount: 0
    }
  },
  watch: {
    async drop(val) {
      if (
        val &&
        this.$store.state.authentication &&
        this.$store.state.updateFavorite
      ) {
        let favoriteCount = await readFavoriteCount(
          this.$store.state.authentication
        )
        this.favoriteCount = favoriteCount
        this.$store.dispatch("setShouldUpdateFavorite", false)
      }
    }
  },
  methods: {
    userLogoutCallback() {
      this.drop = false
      this.$store.dispatch("setLoginStatus", false)
      this.$store.dispatch("setUsername", "")
      alert("已成功登出")
      // prevent Navigating to current location ("/") is not allowed"
      if (this.$route.path !== "/") {
        this.$router.replace("/")
      }
    },
    toggleMenu() {
      this.drop = !this.drop
    },
    singout() {
      userLogout(this.userLogoutCallback)
    },
    gotoRecommend() {
      ;(this.drop = false), this.$router.push("/recommend")
    },
    goIndex() {
      this.drop = false
      setTimeout(() => {
        this.$router.push("/")
      }, 1000)
    },
    goSetting() {
      this.drop = false
      this.$router.push("/profile")
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
  transition: opacity 1s;
  opacity: 1;
}
.circle-menu.drop > .menu-icon {
  transition: opacity 1s;
  opacity: 0;
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
  /* transition: all 3s; */
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
  /* animation-name: user-fn-animation;
  animation-duration: 2s; */
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
.link-style,
.link-style:hover {
  color: #fff;
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
}
.favorite-count {
  margin-left: 10px;
}
</style>
