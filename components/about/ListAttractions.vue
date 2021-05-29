<template>
  <div>
    <div v-if="loading" class="loading-effect">
      <b-spinner type="grow" label="Loading..." />
    </div>
    <div v-else>
      <ul class="list-unstyled">
        <b-media
          v-for="(loopData, index) in loadFinishData"
          :key="index"
          tag="li"
          :class="['my-4', 'flex-column', 'flex-md-row']"
          :data-title="loopData.Name"
          @click="goToTour(loopData.Id)"
        >
          <template v-slot:aside>
            <img src="https://picsum.photos/150" width="100%" />
          </template>

          <h3 class="media-header">
            <span class="title-wrap">
              {{ loopData.Name }}
            </span>

            <b-badge variant="success" class="badge-sm">
              {{ loopData.Region }}
            </b-badge>
            <b-badge variant="info" class="badge-sm">
              {{ loopData.Town }}
            </b-badge>

            <Heart
              v-if="$store.state.authentication"
              :caption="loopData.Name"
              :tour-id="loopData.Id"
              :is-heart="favoriteData[loopData.Id] ? true : false"
            />
          </h3>
          <p>{{ loopData.Toldescribe }}</p>
          <p class="do-reply" @click.stop="showCommitReply(loopData.Id)">
            留個言八&nbsp;..
          </p>
          <div
            v-if="activeListItem === loopData.Id && $store.state.authentication"
          >
            <ShowTourCommit :tid="activeListItem" />
          </div>
          <!-- b-[Optional: add media children here for nesting] -->
        </b-media>
      </ul>
      <div id="bottomWrap" ref="bottomWrap" />
    </div>
    <a v-if="showScrollTopBtn" class="go-top" href="#">
      <font-awesome-icon icon="angle-double-up" />
    </a>
  </div>
</template>

<script>
import Heart from "~/components/about/Heart"
import { readFavorite } from "~/components/firebase/favoriteData"
import ShowTourCommit from "~/components/about/showTourCommit"
export default {
  components: {
    Heart,
    ShowTourCommit
  },
  props: {
    action: {
      type: String,
      default: ""
    },
    searchData: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      loading: true,
      page: 1,
      loadFinishData: [],
      tempSortResult: [],
      showScrollTopBtn: false,
      actionData: this.$props.action,
      favoriteData: [],
      activeListItem: null
    }
  },
  watch: {
    page: {
      handler(newValue) {
        if (newValue > 2) {
          this.showScrollTopBtn = true
        }
        this.fetchData(this.actionData)
      }
    }
  },
  async mounted() {
    this.fetchData(this.actionData)
    window.addEventListener("scroll", this.addScrollEvent)
    if (this.$store.state.authentication) {
      // 有登入同步收藏
      this.favoriteData = await readFavorite(this.$store.state.authentication)
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.addScrollEvent)
  },

  methods: {
    showCommitReply(idx) {
      if (this.activeListItem === idx) {
        this.activeListItem = null
        alert("本功能限於登入者使用")
      } else {
        this.activeListItem = idx
      }
    },
    addScrollEvent() {
      let bottomWrap = this.$refs["bottomWrap"]
      let nowTops = bottomWrap && bottomWrap.getBoundingClientRect().top
      if (nowTops < window.innerHeight + 30) {
        this.page = this.page + 1
      }
    },
    fetchData(action) {
      switch (action) {
        case "hot":
          this.loadFinishData = this.loadFinishData.concat(
            this.$store.state.attractions.slice(
              (this.page - 1) * 10,
              (this.page - 1) * 10 + 9
            )
          )
          break
        case "area":
          // eslint-disable-next-line no-case-declarations

          if (this.tempSortResult.length === 0) {
            let tmpAry = []
            this.$store.state.attractions.forEach((item, index) => {
              tmpAry[index] = item.Zipcode
            })
            // eslint-disable-next-line no-case-declarations
            let tmpAry2 = tmpAry.slice(0).sort((a, b) => b * 1 - a * 1)

            // eslint-disable-next-line no-case-declarations
            let tmpAry3 = []

            tmpAry2.forEach(item => {
              tmpAry3.push(tmpAry.indexOf(item))
              tmpAry[tmpAry.indexOf(item)] = null
            })

            this.tempSortResult = tmpAry3
          }

          // eslint-disable-next-line no-case-declarations
          let findIndexAry = this.tempSortResult.slice(
            (this.page - 1) * 10,
            this.page * 10
          )
          // eslint-disable-next-line no-case-declarations
          let tmpAry4 = []
          findIndexAry.forEach(item => {
            tmpAry4.push(this.$store.state.attractions[item])
          })

          this.loadFinishData = this.loadFinishData.concat(tmpAry4)

          break
        case "search-keyword":
          // eslint-disable-next-line no-case-declarations
          let pagesAry = this.$props.searchData.slice(
            (this.page - 1) * 10,
            this.page * 10
          )
          this.loadFinishData = this.loadFinishData.concat(pagesAry)
          break
      }

      this.loading = false
    },
    goToTour(tid) {
      this.$router.push(`/tour/${tid}`)
    }
  }
}
</script>

<style>
.badge {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
}
.loading-effect {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
.go-top {
  position: fixed;
  bottom: 0;
  right: 50px;
  width: 80px;
  height: 80px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.badge-sm {
  font-size: 16px;
}
.media-header {
  padding-bottom: 5px;
  border-bottom: 1px solid mediumvioletred;
}
.media-header::after {
  content: "";
  display: table;
  clear: both;
}
.hover-link {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: #e0dced;
  color: #000;
  font-size: 40px;
}
.hover-link:hover,
.hover-link:focus {
  text-decoration: none;
}
.active-item {
  position: relative;
  border-radius: 10px;
}
.do-reply {
  color: #aaaaff;
}

@media (max-width: 768px) {
  .media > div {
    width: 100%;
  }
}

.active-item::after {
  content: "";
  background-color: rgba(100, 100, 100, 0.8);
  border-radius: 10px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: block;
  position: absolute;
}

/* .title-wrap {
  width: 200px;
} */
</style>
