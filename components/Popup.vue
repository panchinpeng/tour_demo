<template>
  <b-modal :id="boxName" size="sm" body-class="m-body">
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
        >
          送出
        </b-button>
      </div>
    </template>
  </b-modal>
</template>
<script>
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
      validator: function(incoming) {
        return !isNaN(Date.parse(incoming))
      }
    },
    content: {
      default: "",
      required: true,
      type: String
    },
    id: {
      default: 0,
      required: true,
      type: Number
    }
  },
  data() {
    return {
      message: ""
    }
  },
  methods: {
    clearMsg() {
      this.message = ""
    }
  }
}
</script>
<style>
.comment-content {
  font-size: 16px;
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
</style>
