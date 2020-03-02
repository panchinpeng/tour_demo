<template>
  <div class="service-wrap">
    <video
      ref="video"
      src="tour.mp4"
      class="video-background"
      loop
      preload="none"
    />
    <b-container class="front-layout">
      <b-row>
        <b-col>
          <h5 class="title">
            聯絡客服
          </h5>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form>
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                type="email"
                required
                placeholder="Enter email"
              />
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="意見內容:"
              label-for="input-2"
            >
              <b-form-textarea
                id="textarea-default"
                placeholder="輸入內容"
                rows="5"
              />
            </b-form-group>

            <b-button type="submit" variant="primary">
              送出
            </b-button>
            <b-button type="reset" variant="danger">
              重設
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoIsPlay: false
    }
  },
  mounted() {
    let videoDom = this.$refs["video"]
    videoDom.muted = true
    window.addEventListener("scroll", this.listenerScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.listenerScroll)
  },
  methods: {
    listenerScroll() {
      let videoDom = this.$refs["video"]
      let videoOffset = videoDom.getBoundingClientRect()
      let viewH = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      )
      if (videoOffset.top - viewH < 20) {
        videoDom.currentTime = 10
        videoDom.play()
        window.removeEventListener("scroll", this.listenerScroll)
      }
    }
  }
}
</script>

<style>
.video-background {
  min-width: 100%;
  min-height: 100%;
  opacity: 0.5;
}
.front-layout {
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  font-size: 16px;
}
.service-wrap {
  position: relative;
  padding-bottom: 0;
  /* 解決影片下方多一塊空白 */
  font-size: 0;
}
</style>
