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
          class="my-4 flex-column flex-md-row "
        >
          <template v-slot:aside>
            <img src="https://picsum.photos/150" width="100%" />
          </template>

          <h3 class="media-header">
            {{ loopData.Name }}
            <b-badge variant="success" class="badge-sm">
              {{ loopData.Region }}
            </b-badge>
            <b-badge variant="info" class="badge-sm">
              {{ loopData.Town }}
            </b-badge>
          </h3>
          <p>{{ loopData.Toldescribe }}</p>

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
export default {
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
      actionData: this.$props.action
    }
  },
  watch: {
    page: {
      handler(newValue) {
        console.log("v")
        if (newValue > 2) {
          this.showScrollTopBtn = true
        }
        this.fetchData(this.actionData)
      }
    }
  },
  mounted() {
    this.fetchData(this.actionData)
    window.addEventListener("scroll", this.addScrollEvent)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.addScrollEvent)
  },

  methods: {
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
          console.log("loading..", pagesAry)
          this.loadFinishData = this.loadFinishData.concat(pagesAry)
          break
      }

      this.loading = false
    }
  }
}
</script>

<style>
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
@media (max-width: 768px) {
  .media > div {
    width: 100%;
  }
}
</style>
