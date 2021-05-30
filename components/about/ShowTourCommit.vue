<template>
  <b-container class="commit-wrap" @click.stop>
    <b-row>
      <b-col>
        <b-form-textarea
          v-model="commit"
          placeholder="輸入一些想法吧..."
          rows="3"
          max-rows="6"
        />
        <b-button
          variant="primary"
          class="float-right"
          :disabled="commit === ''"
          @click="sendMsg"
        >
          送出
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { fbSetRealCommentData } from "~/components/firebase/commentData"
export default {
  props: {
    tid: {
      default: "0",
      type: String
    }
  },
  data() {
    return {
      commit: ""
    }
  },
  methods: {
    async sendMsg() {
      this.$store.dispatch("setLoading", true)
      await fbSetRealCommentData(
        this.commit,
        this.tid,
        this.$store.state.authentication
      )
      this.commit = ""
      this.$store.dispatch("setLoading", false)
    }
  }
}
</script>

<style>
.commit-wrap {
  padding-top: 20px;
  border-top: 1px solid #8a7474;
}
</style>
