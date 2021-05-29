<template>
  <b-modal :id="boxName" size="sm" body-class="m-body" @hidden="resetData">
    <template v-slot:modal-title>
      評論
    </template>
    <div class="d-block text-center">
      <p class="comment-content">
        {{ content }}
      </p>
    </div>
    <p class="comment-time">
      <b-badge pill variant="primary">
        {{ times }}
      </b-badge>
    </p>

    <template v-slot:modal-footer>
      <div v-if="replys" class="reply-wrap">
        <div v-for="reply in replys" :key="reply.key" class="reply-item">
          {{ reply.msg }}
          <div class="reply-time">
            {{ reply.d }}
          </div>
          <div class="user-img">
            <font-awesome-icon icon="user-circle" />
          </div>
        </div>
      </div>
      <div class="reply-wrap">
        <b-form-textarea v-model="message" placeholder="輸入訊息..." rows="1" />
        <b-button
          variant="outline-danger"
          class=" mt-1"
          pill
          size="sm"
          @click="clearMsg"
        >
          清空
        </b-button>
        <b-button
          variant="outline-primary"
          class="float-right mt-1"
          pill
          size="sm"
          @click="sendMsg"
        >
          送出
        </b-button>
      </div>
    </template>
  </b-modal>
</template>
<script>
import { fbSetComment, fbGetReply } from "~/components/firebase/commentData.js"
import monent from "moment"
export default {
  props: {
    boxName: {
      default: "",
      required: true,
      type: String
    },
    times: {
      default: "",
      required: true,
      type: String
    },
    content: {
      default: "",
      required: true,
      type: String
    },
    id: {
      default: "",
      required: true,
      type: String
    },
    resetPopupData: {
      required: true,
      type: Function
    }
  },
  data() {
    return {
      message: "",
      replys: []
    }
  },
  updated() {
    if (this.id) {
      if (!this.$store.state.authentication) {
        this.$router.replace("/login")
        return
      }

      this.replys = fbGetReply(this.id)
    }
  },
  methods: {
    clearMsg() {
      this.message = ""
    },
    fillZero(num) {
      if (num < 10) {
        return "0" + num
      }
      return num
    },

    sendMsg() {
      fbSetComment(
        {
          d: monent().format("YYYY-MM-DD HH:mm:ss"),
          msg: this.message,
          id: this.id
        },
        this.$store.state.authentication
      )
      this.message = ""
    },
    resetData() {
      // parent function
      this.resetPopupData()
    }
  }
}
</script>
<style>
.comment-content {
  font-size: 16px;
  text-align: left;
}
.comment-time {
  font-size: 14px;
  float: right;
  margin-bottom: 0;
}
.m-body {
  padding: 10px;
}
.reply-wrap {
  width: 100%;
}
.modal-header {
  padding: 5px;
}

.reply-item {
  position: relative;
  padding-bottom: 30px;
  border-bottom: 1px solid #aaa;
}
.reply-time {
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 11px;
}
.user-img {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
