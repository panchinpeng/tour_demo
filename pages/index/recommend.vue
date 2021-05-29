<template>
  <div>
    <div class="header-bar">
      <h3>我的收藏</h3>
      <p v-if="prepareToMap.size === 0">
        點選下方收藏景點，即可加入googleMap中唷
      </p>
      <div v-else>
        <b-button pill variant="success" @click="remove">
          移除收藏
        </b-button>
        <b-button v-b-modal="'adjectView'" pill variant="success">
          加入map
        </b-button>
      </div>
    </div>
    <div class="camera">
      <div class="space">
        <div class="book">
          <div
            v-for="(item, i) in favoriteContent"
            :key="`item${i}`"
            :class="['content', prepareToMap.has(i) ? 'active' : '']"
            @click="addToMap(i)"
          >
            {{ item.caption }}
          </div>

          <!-- 左邊編訂 -->
          <div
            v-for="(item, i) in favoriteContent"
            :key="`circle${i}`"
            W
            class="left-circle"
          />
        </div>
      </div>
    </div>

    <!-- <GM /> -->
    <AdjectOrder
      v-if="prepareToMap.size > 0"
      :key="updateKey"
      :prepare-to-map="Array.from(prepareToMap)"
      :favorite-content="favoriteContent"
    />
  </div>
</template>

<script>
import {
  readFavoriteReal,
  removeFavorite
} from "~/components/firebase/favoriteData"
import AdjectOrder from "~/components/map/AdjectOrder"
// import GM from "~/components/map/GM"
export default {
  middleware: ["storeDataVerify"],
  components: {
    AdjectOrder
  },
  data() {
    return {
      favoriteContent: {},
      prepareToMap: new Set(),
      updateKey: 0
    }
  },

  async mounted() {
    this.favoriteContent = await readFavoriteReal(
      this.$store.state.authentication
    )
  },
  methods: {
    remove() {
      let alertString = "確定取消 "
      const prepareAry = Array.from(this.prepareToMap)
      const prepareDelete = prepareAry.map(
        item => this.favoriteContent[item].caption
      )
      alertString += prepareDelete.join(" ") + " 訂閱?"
      if (confirm(alertString)) {
        prepareAry.forEach(item => {
          // delete firebase
          removeFavorite(this.$store.state.authentication, item)
          // delete component data
          this.prepareToMap.delete(item)
          delete this.favoriteContent[item]
          // 更新收藏數字
          this.$store.dispatch("setShouldUpdateFavorite", true)
        })
        this.$forceUpdate()
      }
    },
    addToMap(id) {
      this.prepareToMap.has(id)
        ? this.prepareToMap.delete(id)
        : this.prepareToMap.add(id)
      this.$forceUpdate()
      this.updateKey++
    }
  }
}
</script>

<style scoped>
.active {
  border-radius: 10px;
  box-shadow: 4px 1px 7px #c5bbbb;
  background: #fff;
  transform: translateX(15px);
}
@media (max-width: 600px) {
  .book {
    margin-left: 14px !important;
  }
}
.book {
  width: 100%;
  max-width: 600px;
  margin: auto;
  background-color: #dddddd;
  position: relative;
  background-image: repeating-linear-gradient(
    0deg,
    #ada4a4a3 0px,
    #ada4a4a3 2px,
    transparent 2px,
    transparent 50px
  );
  position: relative;
}
.book::before {
  content: "";
  display: block;
  width: 50px;
  height: 100%;
  position: absolute;
  background-color: #dddddd;
}
.content {
  float: left;
  /* background-color: #fff; */
  height: 50px;
  width: 100%;
  line-height: 50px;
  font-size: 16px;
  padding-left: 50px;
  transition: all 0.5s;
}
.left-circle {
  width: 50px;
  height: 50px;
  border: 3px solid black;
  transform: rotateX(46deg);
  margin-left: -23px;
  border-radius: 50%;
}
.space {
  transform-style: preserve-3d;
}
.camera {
  perspective: 1000000000px;
  perspective-origin: center center;
  overflow: hidden;
  padding-top: 70px;
}
.header-bar {
  color: #fff;
  width: 100%;
  margin: auto;
  padding-top: 10px;
  text-align: center;
  position: fixed;
  top: 0;
  height: 136px;
  left: 0;
  right: 0;
  z-index: 14;
  background-color: #0071d5;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
