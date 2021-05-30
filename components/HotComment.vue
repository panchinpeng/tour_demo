<template>
  <div ref="hotWrap" class="hot-wrap">
    <b-container>
      <b-row>
        <b-col>
          <h5 class="title">
            熱門景點留言
          </h5>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div v-if="popularTour">
            <div>{{ popularTour.Name }}</div>
            <ul v-if="popularTour">
              <li>地點: {{ popularTour.Region }}</li>
              <li>位置: {{ popularTour.Add }}</li>
              <li>營業時間:{{ popularTour.Opentime }}</li>
            </ul>
            <OverlayScrollbarsComponent>
              <div class="comment-wrap">
                <div
                  v-if="comments.length > 0"
                  ref="lineTimes"
                  class="line-times"
                  :style="{ width: timeLineLength + 'px' }"
                >
                  <div
                    v-for="(item, index) in comments"
                    :key="item.id"
                    :style="positionCommentPos(index + 1)"
                    :class="[
                      'comment-box',
                      index % 2 === 1 ? 'top-comment' : 'bottom-comment'
                    ]"
                    @click="showMsgBox(item.id)"
                  >
                    <div class="comment-wrap-para">
                      {{ item.msg.substr(0, 45) }}
                      <span v-if="item.msg.length > 45">...</span>
                      <div class="time-wrap">
                        {{ item.d }}
                      </div>
                      <avatar :url="item.avatar" />
                    </div>
                  </div>
                </div>
              </div>
            </OverlayScrollbarsComponent>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <Popup
      :id="id"
      :box-name="popupName"
      :times="selectTime || ' '"
      :content="selectContent || ' '"
      :reset-popup-data="resetPopupData"
    />
  </div>
</template>

<script>
import Popup from "~/components/Popup.vue"
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue"
import avatar from "~/components/common/avatar"

import { fbGetRealCommentData } from "~/components/firebase/commentData.js"
export default {
  components: {
    Popup,
    OverlayScrollbarsComponent,
    avatar
  },
  data() {
    return {
      comments: [],
      spacePeriod: 0,
      popupName: "msg-model",
      selectTime: "",
      selectContent: "",
      slideLeft: false,
      id: "0",
      popularTour: null
    }
  },
  computed: {
    timeLineLength() {
      return this.comments.length * 190
    }
  },
  mounted() {
    this.comments = []
    // this.comments = fbGetRealCommentData()
    window.addEventListener("scroll", this.slideMessage)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.slideMessage)
  },
  updated() {
    if (!this.slideLeft && this.comments.length > 0) {
      this.slideLeft = true
    }
  },
  methods: {
    showMsgBox(id) {
      const findComment = this.comments.find(item => item.id === id)
      this.selectTime = findComment.d
      this.selectContent = findComment.msg
      this.id = id
      this.$bvModal.show(this.popupName)
    },
    positionCommentPos(idx) {
      if (this.slideLeft) {
        return {
          left: (idx - 1) * 190 + "px",
          top: idx % 2 === 0 ? "-146px" : "50px"
        }
      } else {
        return {
          left: "-1000px"
        }
      }
    },
    async slideMessage() {
      let domOffset =
        this.$refs["hotWrap"] && this.$refs["hotWrap"].getBoundingClientRect()
      const viewH = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      )
      if (
        domOffset.top - viewH < (domOffset.height / 3) * -1 &&
        !this.slideLeft &&
        this.comments.length === 0
      ) {
        try {
          let fethData = await fbGetRealCommentData()
          console.log(fethData, "fethData")
          this.comments = fethData[1]
          // 搜尋景點名稱
          let popularTourInfo = this.$store.state.attractions.find(item => {
            return item.Id === fethData[0]
          })
          this.popularTour = popularTourInfo
        } catch (e) {
          console.log("取不到熱門留言資料")
        } finally {
          window.removeEventListener("scroll", this.slideMessage)
        }
      }
    },
    resetPopupData() {
      // 避免登入登出後同時點選同一門留言，導致popup沒偵測到updated，而發生錯誤
      this.id = "0"
      this.selectTime = ""
      this.selectContent = ""
    }
  }
}
</script>

<style>
.line-times {
  height: 3px;
  background-color: #000;
  position: relative;
  flex-shrink: 0;
}
.top-comment::after {
  content: "";
  position: absolute;
  left: 50%;
  height: 38px;
  width: 1px;
  bottom: -38px;
  background: #aaa;
}

.bottom-comment::after {
  content: "";
  position: absolute;
  left: 50%;
  height: 50px;
  width: 1px;
  top: -50px;
  background: #aaa;
}

.top-comment,
.bottom-comment {
  transition: all 0.5s;
}
.top-comment:hover,
.bottom-comment:hover {
  box-shadow: 1px 1px 3px #2d2c6c;
  transform: rotateY(20deg);
}

.comment-box {
  border: 1px solid #ccc;
  position: absolute;
  padding: 5px;
  width: 190px;
  height: 111px;
  border-radius: 10px;
  transition: all 3s;
}
.comment-wrap {
  margin: 30px 0;
  height: 280px;
  display: flex;
  align-items: center;
  /* overflow: auto; */
  font-size: 14px;
}

.msg-wrap {
  width: 100%;
  height: 100%;
}

.time-wrap {
  position: absolute;
  bottom: 0;
  font-size: 12px;
  background-color: aquamarine;
  padding: 0 2px;
  border-radius: 4px;
}
.comment-wrap-para {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
}
</style>
