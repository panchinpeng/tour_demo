<template>
  <div class="heart-wrap">
    <img
      src="/heart.png"
      :class="['heart-icon', !heartStatus ? 'heartBg' : 'unheartBg']"
      @click="favorite(true)"
    />
    <font-awesome-icon
      icon="heart"
      :class="['heart-icon', heartStatus ? 'heartBg' : 'unheartBg']"
      @click="favorite(false)"
    />
  </div>
</template>

<script>
import { setFavorite, removeFavorite } from "~/components/firebase/favoriteData"
export default {
  props: {
    caption: {
      type: String,
      default: "無"
    },
    tourId: {
      type: String,
      default: -1
    },
    isHeart: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      heartTog: null
    }
  },
  computed: {
    heartStatus() {
      return this.heartTog === null ? this.isHeart : this.heartTog
    }
  },
  methods: {
    favorite(act) {
      if (act) {
        // alert("like")
        setFavorite(this.$store.state.authentication, this.tourId, this.caption)
      } else {
        // alert("unlike")
        removeFavorite(this.$store.state.authentication, this.tourId)
      }
      this.$store.dispatch("setShouldUpdateFavorite", true)
      this.heartTog = act
    }
  },
  middleware: ["checkLogin"]
}
</script>

<style>
.heart-wrap {
  position: relative;
  width: 20px;
  height: 30px;
  float: right;
}

.heartBg {
  opacity: 1;
  height: 20px;
  /* transform: rotate(360deg); */
  transition: all 0.5s;
}
.unheartBg {
  opacity: 0;
  height: 0;
  /* transition: all 2s; */
}
.heart-icon {
  position: absolute;
  width: 20px;
  color: red;
  margin-top: 10px;
}
</style>
