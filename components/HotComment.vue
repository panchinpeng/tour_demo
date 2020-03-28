<template>
  <div ref="hotWrap" class="hot-wrap">
    <b-container>
      <b-row>
        <b-col>
          <h5 class="title">
            熱門留言
          </h5>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div>
            <OverlayScrollbarsComponent>
              <div class="comment-wrap">
                <div
                  v-if="comments"
                  ref="lineTimes"
                  class="line-times"
                  :style="{ width: timeLineLength + 'px' }"
                >
                  <div
                    v-for="item in comments"
                    :key="item.id"
                    :style="positionCommentPos(item.id)"
                    :class="[
                      'comment-box',
                      item.id % 2 === 0 ? 'top-comment' : 'bottom-comment'
                    ]"
                    @click="showMsgBox(item.id)"
                  >
                    <div style="height: 100%; width: 100%; overflow: hidden; ">
                      {{ item.msg.substr(0, 40) }}
                      <span v-if="item.msg.length > 40">...</span>
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
    />
  </div>
</template>

<script>
import Popup from "~/components/Popup.vue"
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue"

import { fbGetRealCommentData } from "~/components/firebase/commentData.js"
export default {
  components: {
    Popup,
    OverlayScrollbarsComponent
  },
  data() {
    return {
      comments: [],
      spacePeriod: 0,
      popupName: "msg-model",
      selectTime: "",
      selectContent: "",
      slideLeft: false
    }
  },
  computed: {
    timeLineLength() {
      return this.comments.length * 190
    }
  },
  mounted() {
    this.comments = fbGetRealCommentData()
    window.addEventListener("scroll", this.slideMessage)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.slideMessage)
  },
  methods: {
    showMsgBox(id) {
      const findComment = this.comments.find(item => item.id === id * 1)
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
    slideMessage() {
      let domOffset =
        this.$refs["hotWrap"] && this.$refs["hotWrap"].getBoundingClientRect()
      const viewH = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      )
      if (
        domOffset.top - viewH < (domOffset.height / 3) * -1 &&
        !this.slideLeft
      ) {
        this.slideLeft = true
        window.removeEventListener("scroll", this.slideMessage)
      }
    }
  }
}
</script>

<style>
.line-times {
  height: 5px;
  border-radius: 10px;
  background-color: #aaa;
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
  transition: all 1.5s;
}
.comment-wrap {
  margin: 30px 0;
  height: 400px;
  display: flex;
  align-items: center;
  /* overflow: auto; */
}

.msg-wrap {
  width: 100%;
  height: 100%;
}
</style>
