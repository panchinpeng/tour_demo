<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <h6 class="search-title">
            關鍵字&nbsp;&nbsp;&nbsp;<b-badge>
              {{ keyword }}
            </b-badge>
          </h6>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="search-alike-title">
            搜尋相關結果
          </div>

          <nuxt-link
            v-for="(popup, index) in showShortData"
            :key="index"
            :to="'/search/' + popup"
          >
            <b-badge variant="primary" class="mx-1 badge">
              {{ popup }}
            </b-badge>
          </nuxt-link>
          <div
            v-if="toggleShowOrHide && toggleShowOrHide !== 'hide'"
            class="more-btn"
            @click="readMore"
          >
            加載更多&nbsp;&nbsp;&nbsp;
            <font-awesome-icon icon="angle-down" />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ListAttractions
            v-if="findData"
            :key="keyword"
            action="search-keyword"
            :search-data="findData"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ListAttractions from "~/components/about/ListAttractions.vue"
export default {
  middleware: "storeDataVerify",
  components: {
    ListAttractions
  },
  asyncData() {
    return {
      toggleShowOrHide: false
    }
  },
  data() {
    return {
      toggleShowOrHide: false
    }
  },
  computed: {
    keyword() {
      return this.$route.params.keyword
    },
    findData() {
      let keyword = this.keyword
      let data = this.$store.state.attractions.filter(item => {
        // console.log(item.Keyword)
        return (
          (item.Add && item.Add.indexOf(keyword) > -1) ||
          (item.Keyword && item.Keyword.indexOf(keyword) > -1) ||
          (item.Name && item.Name.indexOf(keyword) > -1)
        )
      })
      return data
    },
    keywordPopups() {
      let keyword = this.keyword
      const alreadyData = this.findData
      const popupAry = []
      alreadyData.forEach(item => {
        if (item.Keyword && item.Keyword.indexOf(keyword) > -1) {
          popupAry.push(item.Keyword)
        }
        if (item.Name && item.Name.indexOf(keyword) > -1) {
          popupAry.push(item.Name)
        }
        if (item.Add && item.Add.indexOf(keyword) > -1) {
          popupAry.push(item.Add)
        }
      })

      return popupAry
    },
    showShortData() {
      if (this.keywordPopups.length > 20 && this.toggleShowOrHide !== "hide") {
        this.showOrHidePopup()
        return this.keywordPopups.slice(0, 20)
      }
      return this.keywordPopups
    }
  },
  methods: {
    showOrHidePopup() {
      this.toggleShowOrHide = true
    },
    readMore() {
      this.toggleShowOrHide = "hide"
    }
  }
}
</script>

<style scoped>
.search-title {
  line-height: 2;
  border-bottom: 1px solid #ccc;
}
.search-alike-title {
  line-height: 2;
}
.more-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;
}
.badge {
  color: #fff !important;
}
</style>
