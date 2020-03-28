<template>
  <div>
    <KeywordSearch />
    <nuxt-child />
  </div>
</template>

<script>
import KeywordSearch from "~/components/KeywordSearch.vue"
import {
  fbSetReadCountAddOne
  // fbSetReadCount
} from "~/components/firebase/commentData"
export default {
  components: {
    KeywordSearch
  },
  async created() {
    let nowCounter = await fbSetReadCountAddOne()
    this.$store.dispatch("setUserCounter", nowCounter)
  }
}
</script>

<style></style>
