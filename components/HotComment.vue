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
                    {{ item.content }}
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
export default {
  components: {
    Popup,
    OverlayScrollbarsComponent
  },
  data() {
    return {
      comments: [
        {
          id: 1,
          d: "2019-01-05 11:11:11",
          content: "this is so cool"
        },
        {
          id: 2,
          d: "2019-01-20 11:11:11",
          content: "this is so cool"
        },
        {
          id: 3,
          d: "2019-01-30 11:11:11",
          content: "this is so cool"
        },
        {
          id: 4,
          d: "2019-01-30 11:11:11",
          content: "this is so cool"
        },
        {
          id: 5,
          d: "2019-01-30 11:11:11",
          content: "this is so cool"
        },
        {
          id: 6,
          d: "2019-01-30 11:11:11",
          content: "this is so cool"
        },
        {
          id: 7,
          d: "2019-01-30 11:11:11",
          content: "我是誰!!!"
        },
        {
          id: 8,
          d: "2019-01-30 11:11:11",
          content: "this is so cool"
        },
        {
          id: 9,
          d: "2019-01-30 11:11:11",
          content: "this is so cool"
        }
      ],
      spacePeriod: 0,
      popupName: "msg-model",
      selectTime: "",
      selectContent: "",
      slideLeft: false
    }
  },
  computed: {
    timeLineLength() {
      return this.comments.length * 160
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      // console.log(
      //   window.scrollY,
      //   this.$refs["hotWrap"].offsetTop - 200,
      //   this.slideLeft
      // )
      if (
        window.scrollY > this.$refs["hotWrap"].offsetTop - 200 &&
        !this.slideLeft
      ) {
        this.slideLeft = true
      }
    })
  },
  methods: {
    showMsgBox(id) {
      const findComment = this.comments.find(item => item.id === id * 1)
      this.selectTime = findComment.d
      this.selectContent = findComment.content
      this.id = id
      this.$bvModal.show(this.popupName)
    },
    positionCommentPos(idx) {
      if (this.slideLeft) {
        return {
          left: (idx - 1) * 160 + "px",
          top: idx % 2 === 0 ? "-146px" : "50px"
        }
      } else {
        return {
          left: "-1000px"
        }
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
  height: 50px;
  width: 1px;
  bottom: -50px;
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
  width: 160px;
  height: 100px;
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
</style>
