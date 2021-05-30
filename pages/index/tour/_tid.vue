<template>
  <b-container>
    <b-row>
      <b-col>
        <p class="site-header">
          {{ attraction.Name }}
        </p>
        <p>
          <font-awesome-icon icon="map-marked-alt" class="icon-style" />
          {{ attraction.Add }}
        </p>
        <p>
          <font-awesome-icon icon="phone-alt" class="icon-style" />
          {{ attraction.Tel }}
        </p>
        <p>
          <font-awesome-icon icon="info-circle" class="icon-style" />
          {{ attraction.Ticketinfo }}
        </p>
        <p>{{ attraction.Toldescribe }}</p>
        <div class="reply-title">
          所有回覆:
        </div>
        <ul v-if="commentData && commentData.length > 0" class="comment-ul">
          <li v-for="item in commentData" :key="item.key">
            <div class="comment-content">
              {{ item.msg }}
            </div>
            <avatar
              :style="{ position: 'relative', textAlign: 'right' }"
              :url="item.avatar"
            />
          </li>
        </ul>
        <div v-else class="no-reply-wrap">
          目前尚未有新回覆...
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getTourComment } from "~/components/firebase/commentData"
import avatar from "~/components/common/avatar"
export default {
  middleware: ["storeDataVerify"],
  name: "TourDisplay",
  components: {
    avatar
  },
  data() {
    return {
      attraction: null,
      commentData: null
    }
  },
  async created() {
    const fetchData = this.$store.state.attractions.find(
      item => item.Id === this.$route.params.tid
    )
    if (fetchData) {
      this.attraction = fetchData
      const fetchComment = await getTourComment(this.$route.params.tid, 20)
      let tmpAry = []
      for (let key in fetchComment) {
        tmpAry.push({ ...fetchComment[key], uid: key })
      }
      tmpAry.reverse()
      this.commentData = tmpAry
    }
  }
}
</script>

<style>
.tour-image {
  max-width: 520px;
}
.icon-style {
  color: #03a9f4;
  font-size: 21px;
  margin-right: 5px;
}
.site-header {
  border-bottom: 1px solid black;
  line-height: 3;
}
.comment-ul {
  list-style-type: none;
  padding: 0;
}
.comment-ul > li {
  padding-top: 10px;

  border-bottom: 1px solid #00000014;
}

.comment-content {
  padding-right: 30px;
}

.icon-user {
  text-align: right;
}
.reply-title {
  background-color: beige;
}
.no-reply {
  text-align: center;
}
.no-reply-wrap {
  width: 100%;
  height: 200px;
  background-image: url("~static/sleep.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-color: rgba(237, 236, 236, 0.32941);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  opacity: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
}
</style>
